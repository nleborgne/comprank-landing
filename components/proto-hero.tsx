"use client";

// PROTOTYPE — ticket #19 (carte #14). Variantes de hero comparées via /ideas :
// sous-titres, ligne de nouveautés, et preuves de la colonne droite. Rien ici
// n'est destiné à la prod tel quel ; la copy est un placeholder (ticket #22).

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { motion, LayoutGroup } from "framer-motion";
import { ClipboardList, Radio, Smartphone, Tv } from "lucide-react";
import { PhoneShell } from "@/components/phone-shell";
import { PhoneJudgeOfflineScreen } from "@/components/phone-screens";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------ sous-titres */

export const HERO_SUBTITLES = {
  current:
    "Gérez inscriptions, planning, scoring mobile et classements en direct depuis un seul outil, conçu pour les organisateurs en France.",
  judge:
    "Vos juges scorent sur leur téléphone, même quand le réseau lâche, et le classement suit à chaque score validé. Inscriptions, planning et résultats dans le même outil.",
  dayJ:
    "Inscriptions, planning, juges équipés et TV live sur le floor : tout ce qu'il faut pour que le jour J tienne, du premier Départ au classement final.",
} as const;

/* ------------------------------------------------- ligne de « nouveautés » */

// Les ancres #offre n'existent pas sur cette base : placeholders, la section
// « Offre à part » arrive avec l'implémentation (#23).
const NEWS = [
  { label: "App juge hors ligne", href: "#scoring", icon: Smartphone },
  { label: "Scorecard digitale", href: "#scoring", icon: ClipboardList },
  { label: "Régie live + TV live", href: "#offre", icon: Tv },
  { label: "Chrono RFID HYROX", href: "#offre", icon: Radio },
];

export function HeroNewsChips() {
  return (
    <div className="mt-5 flex flex-wrap items-center gap-2">
      <span className="mr-1 font-mono text-xs uppercase tracking-wide text-primary-400">
        Nouveau
      </span>
      {NEWS.map(({ label, href, icon: Icon }) => (
        <Link
          key={label}
          href={href}
          className="inline-flex items-center gap-1.5 rounded-full border border-dark-400/60 bg-dark-700/60 px-3 py-1 text-xs text-gray-300 hover:border-primary-500/50 hover:text-white"
        >
          <Icon className="size-3.5 text-primary-400" aria-hidden="true" />
          {label}
        </Link>
      ))}
    </div>
  );
}

/* ------------------------------------------------------- TV live animée */

const TV_LANES = [
  { n: 1, name: "Camille D.", reps: 47 },
  { n: 2, name: "Antoine L.", reps: 44 },
  { n: 3, name: "Sarah M.", reps: 51 },
  { n: 4, name: "Louis P.", reps: 39 },
  { n: 5, name: "Nora B.", reps: 46 },
  { n: 6, name: "Théo R.", reps: 42 },
];

function useTvLive() {
  const [lanes, setLanes] = useState(TV_LANES);
  const [seconds, setSeconds] = useState(7 * 60 + 42);

  useEffect(() => {
    const t = setInterval(() => {
      setSeconds((s) => s + 1);
      setLanes((prev) =>
        prev.map((l) =>
          Math.random() < 0.4 ? { ...l, reps: l.reps + 1 } : l,
        ),
      );
    }, 1000);
    return () => clearInterval(t);
  }, []);

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");
  const ranked = [...lanes].sort((a, b) => b.reps - a.reps);

  return { ranked, clock: `${mm}:${ss}`, progress: seconds };
}

/** Écran TV live : Classement de vague, reps en cours, chrono partagé. */
export function TvLiveMock({ className }: { className?: string }) {
  const { ranked, clock, progress } = useTvLive();

  return (
    <div
      className={cn(
        "rounded-xl border-4 border-dark-500 bg-black p-1 shadow-2xl shadow-primary-500/10",
        className,
      )}
    >
      <div className="flex aspect-video w-full flex-col rounded-lg bg-dark-900 p-4 md:p-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-mono text-[0.625rem] uppercase tracking-widest text-primary-400">
              Vague 12 · WOD 2 · RX
            </p>
            <p className="text-sm font-semibold text-white">AMRAP 12&apos;</p>
          </div>
          <p className="font-mono text-3xl font-bold tabular-nums text-white md:text-4xl">
            {clock}
          </p>
        </div>
        {/* Time cap de la Partie en cours */}
        <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-dark-700">
          <div
            className="h-full rounded-full bg-primary-500"
            style={{ width: `${Math.min(100, (progress / (12 * 60)) * 100)}%` }}
          />
        </div>

        <LayoutGroup>
          <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2">
            {ranked.map((l, i) => (
              <motion.div
                key={l.n}
                layout
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
                className="flex items-center justify-between rounded bg-dark-800/70 px-2.5 py-1.5 md:py-2"
              >
                <span className="flex items-center gap-2 text-xs text-gray-300 md:text-sm">
                  <span className="w-3 font-mono text-[0.625rem] text-primary-400">
                    {i + 1}
                  </span>
                  <span className="font-mono text-[0.625rem] text-gray-500">
                    C{l.n}
                  </span>
                  {l.name}
                </span>
                <motion.span
                  key={l.reps}
                  initial={{ scale: 1.25, color: "#4ade80" }}
                  animate={{ scale: 1, color: "#ffad4a" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="font-mono text-base font-bold tabular-nums md:text-lg"
                >
                  {l.reps}
                </motion.span>
              </motion.div>
            ))}
          </div>
        </LayoutGroup>

        <p className="mt-auto flex items-center gap-1.5 pt-3 text-[0.625rem] text-gray-500">
          <span className="size-1.5 animate-pulse rounded-full bg-green-400" />
          TV live · Vague en cours · reps comptés en direct
        </p>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------- compositions */

/** Téléphone juge hors ligne posé devant, décalé en bas à gauche. */
function JudgePhoneOverlay() {
  return (
    <div className="absolute -bottom-8 -left-2 z-10 hidden w-[280px] origin-bottom-left scale-[0.66] sm:block">
      <PhoneShell>
        <PhoneJudgeOfflineScreen />
      </PhoneShell>
    </div>
  );
}

/** Preuve « duo » : la carte de classement, et le juge qui l'alimente. */
export function HeroProofDuo({ card }: { card: ReactNode }) {
  return (
    <div className="relative sm:pb-10 sm:pl-36">
      {card}
      <JudgePhoneOverlay />
    </div>
  );
}

/** Preuve « TV live seule ». */
export function HeroProofTv() {
  return <TvLiveMock />;
}

/** Preuve « TV live + téléphone juge » : du compteur du juge à l'écran du floor. */
export function HeroProofTvPhone() {
  return (
    <div className="relative sm:pb-14 sm:pl-36">
      <TvLiveMock />
      <JudgePhoneOverlay />
    </div>
  );
}
