"use client";

import { useState } from "react";
import {
  Check,
  ClipboardList,
  LineChart,
  RotateCcw,
  Timer,
  Wifi,
  X,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function JudgeScoringMockup() {
  const [reps, setReps] = useState(47);
  const [noReps, setNoReps] = useState(3);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setReps(0);
      setNoReps(0);
    }, 2000);
  };

  return (
    <div className="relative mx-auto w-[280px]">
      <div className="relative bg-dark-600 rounded-[2.5rem] p-3 border-2 border-dark-400 shadow-2xl shadow-primary-500/10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-dark-600 rounded-b-2xl z-10" />
        <div className="bg-dark-800 rounded-[2rem] overflow-hidden pt-8">
          <div className="bg-dark-700 px-4 py-3 border-b border-dark-600/80">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[0.6875rem] font-medium text-gray-400">
                  CompRank Judge
                </p>
                <p className="font-mono text-sm font-semibold tabular-nums text-white">
                  08:17
                </p>
              </div>
              <Badge className="gap-1 border-green-500/20 bg-green-500/10 px-2 py-0.5 text-[0.625rem] text-green-400">
                <Wifi className="size-3" />
                Sync
              </Badge>
            </div>
          </div>

          <div className="px-4 py-4 border-b border-dark-600/60">
            <div className="mb-3 flex items-start justify-between gap-3">
              <div>
                <p className="font-mono text-[0.625rem] uppercase tracking-wide text-primary-400">
                  Couloir 4
                </p>
                <p className="mt-1 text-sm font-semibold text-white">
                  Camille Dupont
                </p>
                <p className="text-[0.6875rem] text-gray-400">
                  WOD 2 · AMRAP 12&apos;
                </p>
              </div>
              <div className="rounded-lg bg-dark-600/80 px-2.5 py-2 text-right ring-1 ring-white/5">
                <p className="font-mono text-sm font-semibold tabular-nums text-white">
                  3/8
                </p>
                <p className="text-[0.625rem] text-gray-500">Heat</p>
              </div>
            </div>

            <div className="grid grid-cols-3 divide-x divide-dark-500/70 rounded-xl bg-dark-900/70 ring-1 ring-white/5">
              <div className="px-3 py-2 text-center">
                <p className="font-mono text-sm font-semibold tabular-nums text-white">
                  47
                </p>
                <p className="text-[0.625rem] text-gray-500">Objectif</p>
              </div>
              <div className="px-3 py-2 text-center">
                <p className="font-mono text-sm font-semibold tabular-nums text-white">
                  {noReps}
                </p>
                <p className="text-[0.625rem] text-gray-500">No reps</p>
              </div>
              <div className="px-3 py-2 text-center">
                <p className="font-mono text-sm font-semibold tabular-nums text-green-400">
                  En direct
                </p>
                <p className="text-[0.625rem] text-gray-500">Statut</p>
              </div>
            </div>
          </div>

          <div className="px-4 py-5 text-center">
            <p className="font-mono text-[0.625rem] uppercase tracking-wide text-gray-500">
              Reps validées
            </p>
            <div className="mt-1 font-mono text-6xl font-semibold tabular-nums tracking-tight text-primary-400">
              {String(reps).padStart(2, "0")}
            </div>

            <div className="mt-5 grid grid-cols-[1fr_1.3fr] gap-3">
              <button
                type="button"
                onClick={() => setNoReps((r) => r + 1)}
                className="relative flex h-14 items-center justify-center gap-1.5 rounded-2xl bg-red-500/10 text-sm font-semibold text-red-300 ring-1 ring-red-500/25 transition-all hover:bg-red-500/15 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400"
              >
                <span className="absolute top-1/2 left-1/2 size-[max(100%,3rem)] -translate-x-1/2 -translate-y-1/2 pointer-fine:hidden" aria-hidden="true" />
                <X className="size-4" />
                No rep
              </button>
              <button
                type="button"
                onClick={() => setReps((r) => r + 1)}
                className="relative flex h-14 items-center justify-center gap-2 rounded-2xl bg-primary-500 text-base font-semibold text-dark-900 shadow-lg shadow-primary-500/25 transition-all hover:bg-primary-400 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400"
              >
                <span className="absolute top-1/2 left-1/2 size-[max(100%,3rem)] -translate-x-1/2 -translate-y-1/2 pointer-fine:hidden" aria-hidden="true" />
                <Check className="size-5" />
                Rep OK
              </button>
            </div>

            <button
              type="button"
              onClick={() => setReps((r) => Math.max(0, r - 1))}
              className="relative mt-3 flex h-10 w-full items-center justify-center gap-2 rounded-xl bg-dark-600/80 text-xs font-medium text-gray-300 ring-1 ring-white/5 transition-all hover:bg-dark-500 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400"
            >
              <span className="absolute top-1/2 left-1/2 size-[max(100%,3rem)] -translate-x-1/2 -translate-y-1/2 pointer-fine:hidden" aria-hidden="true" />
              <RotateCcw className="size-3.5" />
              Annuler la dernière rep
            </button>
          </div>

          <div className="px-4 pb-5">
            <button
              type="button"
              onClick={handleSubmit}
              disabled={submitted}
              className={`relative flex h-11 w-full items-center justify-center rounded-xl text-sm font-semibold transition-all active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400 ${submitted
                  ? "bg-green-600 text-white"
                  : "bg-green-500 text-white hover:bg-green-400"
                }`}
            >
              <span className="absolute top-1/2 left-1/2 size-[max(100%,3rem)] -translate-x-1/2 -translate-y-1/2 pointer-fine:hidden" aria-hidden="true" />
              {submitted ? "Score validé" : "Valider le score final"}
            </button>
          </div>

          <div className="px-4 py-3 bg-dark-700/50 border-t border-dark-600/50">
            <div className="flex justify-around">
              <div className="text-center">
                <Timer className="mx-auto mb-1 size-4 text-primary-400" />
                <p className="text-[0.625rem] text-primary-400">Temps</p>
              </div>
              <div className="text-center">
                <ClipboardList className="mx-auto mb-1 size-4 text-gray-500" />
                <p className="text-[0.625rem] text-gray-500">Score</p>
              </div>
              <div className="text-center">
                <LineChart className="mx-auto mb-1 size-4 text-gray-500" />
                <p className="text-[0.625rem] text-gray-500">Résultats</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
