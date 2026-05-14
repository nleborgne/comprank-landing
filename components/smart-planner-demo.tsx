"use client";

import { useMemo, useState } from "react";
import {
  ArrowDown,
  ArrowUp,
  Clock,
  Loader2,
  Play,
  RefreshCcw,
  Trash2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Workout {
  name: string;
  duration: number;
}

interface Division {
  name: string;
  spots: number;
}

interface PlannerHeat {
  id: string;
  workout: string;
  division: string;
  heat: number;
  heats: number;
  spots: number;
  start: string;
  end: string;
  duration: number;
}

const workouts: Workout[] = [
  { name: "Workout 1", duration: 12 },
  { name: "Workout 2", duration: 10 },
];

const divisions: Division[] = [
  { name: "Elite H", spots: 18 },
  { name: "Elite F", spots: 14 },
];

function toMinutes(time: string) {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

function toTime(minutes: number) {
  const dayMinutes = ((minutes % 1440) + 1440) % 1440;
  return `${String(Math.floor(dayMinutes / 60)).padStart(2, "0")}:${String(dayMinutes % 60).padStart(2, "0")}`;
}

function recalculatePlan(plan: PlannerHeat[], startTime: string, gap: number) {
  let cursor = toMinutes(startTime);

  return plan.map((heat) => {
    const start = toTime(cursor);
    const end = toTime(cursor + heat.duration);
    cursor += heat.duration + gap;
    return { ...heat, start, end };
  });
}

function generatePlan(startTime: string, gap: number, capacity: number): PlannerHeat[] {
  const draft = workouts.flatMap((workout) =>
    divisions.flatMap((division) => {
      const heatCount = Math.ceil(division.spots / capacity);

      return Array.from({ length: heatCount }, (_, index) => ({
        id: `${workout.name}-${division.name}-${index}`,
        workout: workout.name,
        division: division.name,
        heat: index + 1,
        heats: heatCount,
        spots: division.spots,
        start: startTime,
        end: startTime,
        duration: workout.duration || 10,
      }));
    }),
  );

  return recalculatePlan(draft, startTime, gap);
}

export function SmartPlannerDemo({ compact = false }: { compact?: boolean }) {
  const [state, setState] = useState<"idle" | "generating" | "done">("idle");
  const [startTime, setStartTime] = useState("08:30");
  const [gap, setGap] = useState(4);
  const [capacity, setCapacity] = useState(8);
  const [plan, setPlan] = useState<PlannerHeat[]>([]);

  const summary = useMemo(() => {
    if (plan.length === 0) {
      return null;
    }

    return {
      first: plan[0].start,
      last: plan[plan.length - 1].end,
      heats: plan.length,
    };
  }, [plan]);

  const handleGenerate = () => {
    setState("generating");
    setTimeout(() => {
      setPlan(generatePlan(startTime, gap, capacity));
      setState("done");
    }, 900);
  };

  const handleReset = () => {
    setState("idle");
    setPlan([]);
  };

  const handleGapChange = (nextGap: number) => {
    setGap(nextGap);
    setPlan((currentPlan) => {
      if (currentPlan.length === 0) {
        return currentPlan;
      }

      return recalculatePlan(currentPlan, currentPlan[0].start, nextGap);
    });
  };

  const handleStartChange = (index: number, start: string) => {
    setPlan((currentPlan) => [
      ...currentPlan.slice(0, index),
      ...recalculatePlan(currentPlan.slice(index), start, gap),
    ]);
  };

  const moveHeat = (index: number, direction: -1 | 1) => {
    setPlan((currentPlan) => {
      const nextIndex = index + direction;
      if (nextIndex < 0 || nextIndex >= currentPlan.length) {
        return currentPlan;
      }

      const nextPlan = [...currentPlan];
      [nextPlan[index], nextPlan[nextIndex]] = [nextPlan[nextIndex], nextPlan[index]];
      return recalculatePlan(nextPlan, nextPlan[0].start, gap);
    });
  };

  const deleteHeat = (id: string) => {
    setPlan((currentPlan) => {
      const nextPlan = currentPlan.filter((heat) => heat.id !== id);
      if (nextPlan.length === 0) {
        setState("idle");
        return [];
      }

      return recalculatePlan(nextPlan, nextPlan[0].start, gap);
    });
  };

  return (
    <div className={compact ? "space-y-4" : "space-y-5"}>
      <div className="rounded-md bg-dark-800/70 p-3 ring-1 ring-dark-500/80 sm:p-4">
        <div className="grid items-end gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <label className="space-y-1.5">
            <span className="block text-base/6 font-medium text-gray-300 sm:text-sm/6">Heure de début</span>
            <span className="relative block">
              <Clock className="absolute left-3 top-1/2 size-5 -translate-y-1/2 stroke-gray-500 sm:size-4" />
              <input
                type="time"
                name="planner-start-time"
                value={startTime}
                onChange={(event) => setStartTime(event.target.value)}
                className="planner-input pl-10"
                disabled={state !== "idle"}
              />
            </span>
          </label>

          <label className="space-y-1.5">
            <span className="block text-base/6 font-medium text-gray-300 sm:text-sm/6">Capacité</span>
            <select
              name="planner-capacity"
              value={capacity}
              onChange={(event) => setCapacity(Number(event.target.value))}
              className="planner-input"
              disabled={state !== "idle"}
            >
              {[6, 8, 10, 12].map((value) => (
                <option key={value} value={value}>
                  {value} lignes
                </option>
              ))}
            </select>
          </label>

          <label className="space-y-1.5">
            <span className="block text-base/6 font-medium text-gray-300 sm:text-sm/6">Pause</span>
            <select
              name="planner-gap"
              value={gap}
              onChange={(event) => handleGapChange(Number(event.target.value))}
              className="planner-input"
            >
              {[2, 4, 6, 8].map((value) => (
                <option key={value} value={value}>
                  {value} min
                </option>
              ))}
            </select>
          </label>

          {state === "idle" ? (
            <button
              type="button"
              onClick={handleGenerate}
              className="btn-primary flex h-10 items-center justify-center gap-2 px-4 py-0 text-sm"
            >
              <Play className="size-4" />
              Générer
            </button>
          ) : state === "generating" ? (
            <button
              type="button"
              disabled
              className="btn-primary flex h-10 items-center justify-center gap-2 px-4 py-0 text-sm opacity-70"
            >
              <Loader2 className="size-4 animate-spin" />
              Génération
            </button>
          ) : (
            <button
              type="button"
              onClick={handleReset}
              className="btn-secondary flex h-10 items-center justify-center gap-2 px-4 py-0 text-sm"
            >
              <RefreshCcw className="size-4" />
              Régénérer
            </button>
          )}
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-md bg-dark-800/60 p-3 ring-1 ring-dark-500/70">
          <div className="mb-2 flex items-center justify-between gap-3">
            <p className="text-base/6 font-medium text-gray-300 sm:text-sm/6">Ordre des workouts</p>
            <span className="text-sm/6 text-gray-500 sm:text-xs/5">manuel</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {workouts.map((workout, index) => (
              <Badge key={workout.name} variant="outline" className="border-primary-500/20 bg-primary-500/10 text-primary-300">
                {index + 1}. {workout.name} · {workout.duration} min
              </Badge>
            ))}
          </div>
        </div>

        <div className="rounded-md bg-dark-800/60 p-3 ring-1 ring-dark-500/70">
          <div className="mb-2 flex items-center justify-between gap-3">
            <p className="text-base/6 font-medium text-gray-300 sm:text-sm/6">Ordre des divisions</p>
            <span className="text-sm/6 text-gray-500 sm:text-xs/5">manuel</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {divisions.map((division, index) => (
              <Badge key={division.name} variant="outline" className="border-blue-500/20 bg-blue-500/10 text-blue-300">
                {index + 1}. {division.name} · {division.spots} places
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {state === "generating" && (
        <div className="flex items-center justify-center py-10">
          <div className="flex flex-col items-center gap-3">
            <div className="relative">
              <div className="size-14 animate-spin rounded-full border-2 border-primary-500/20 border-t-primary-500" />
              <Clock className="absolute inset-0 m-auto size-5 stroke-primary-400" />
            </div>
            <p className="text-base/7 text-gray-400 sm:text-sm/6">Création du planning</p>
          </div>
        </div>
      )}

      {state === "done" && summary && (
        <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-500">
          <div className="overflow-hidden rounded-md bg-dark-700/50 ring-1 ring-dark-500">
            <div className="grid grid-cols-[5.5rem_1fr_4.5rem] border-b border-dark-500 bg-dark-600/60 px-3 py-2 text-sm/6 font-medium text-gray-400 sm:grid-cols-[6rem_1fr_6rem_6rem] sm:text-xs/5">
              <span>Début</span>
              <span>Série</span>
              <span className="hidden sm:block">Fin</span>
              <span className="text-right">Modifier</span>
            </div>

            <ScrollArea className="h-[22rem]">
              {plan.map((heat, index) => (
                <div
                  key={heat.id}
                  className="grid grid-cols-[5.5rem_1fr_4.5rem] items-center gap-2 border-b border-dark-500/60 px-3 py-3 last:border-0 hover:bg-dark-600/30 sm:grid-cols-[6rem_1fr_6rem_6rem]"
                >
                  <input
                    type="time"
                    name={`heat-start-${heat.id}`}
                    value={heat.start}
                    onChange={(event) => handleStartChange(index, event.target.value)}
                    className="h-9 w-full rounded-md bg-dark-800 px-2 font-mono text-base text-primary-300 ring-1 ring-dark-500 outline-none focus:ring-primary-500 sm:text-sm"
                    aria-label={`Heure de début pour ${heat.workout} ${heat.division}, série ${heat.heat}`}
                  />
                  <div className="min-w-0">
                    <p className="truncate text-base/6 font-medium text-white sm:text-sm/6">
                      {heat.workout} · {heat.division}
                    </p>
                    <p className="text-sm/6 text-gray-500 sm:text-xs/5">
                      Série {heat.heat}/{heat.heats} · {heat.spots} places · {heat.duration} min
                    </p>
                  </div>
                  <span className="hidden font-mono text-sm/6 text-gray-400 sm:block">{heat.end}</span>
                  <div className="flex justify-end gap-1">
                    <button
                      type="button"
                      onClick={() => moveHeat(index, -1)}
                      disabled={index === 0}
                      className="relative rounded-md p-1.5 text-gray-400 transition hover:bg-dark-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
                      aria-label="Monter la série"
                    >
                      <span className="pointer-fine:hidden absolute left-1/2 top-1/2 size-[max(100%,3rem)] -translate-x-1/2 -translate-y-1/2" aria-hidden="true" />
                      <ArrowUp className="size-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => moveHeat(index, 1)}
                      disabled={index === plan.length - 1}
                      className="relative rounded-md p-1.5 text-gray-400 transition hover:bg-dark-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
                      aria-label="Descendre la série"
                    >
                      <span className="pointer-fine:hidden absolute left-1/2 top-1/2 size-[max(100%,3rem)] -translate-x-1/2 -translate-y-1/2" aria-hidden="true" />
                      <ArrowDown className="size-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => deleteHeat(heat.id)}
                      className="relative rounded-md p-1.5 text-gray-400 transition hover:bg-dark-500 hover:text-red-300"
                      aria-label="Supprimer la série"
                    >
                      <span className="pointer-fine:hidden absolute left-1/2 top-1/2 size-[max(100%,3rem)] -translate-x-1/2 -translate-y-1/2" aria-hidden="true" />
                      <Trash2 className="size-4" />
                    </button>
                  </div>
                </div>
              ))}
            </ScrollArea>
          </div>
        </div>
      )}
    </div>
  );
}
