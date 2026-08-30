"use client";

// PROTOTYPE — ticket #18 (carte #14). Structure A retenue le 2026-08-30 :
// sections basse fidélité, copy = placeholders. Source primaire pour le ticket
// d'implémentation (#23) ; rien ici n'est destiné à la prod tel quel.

import type { ReactNode } from "react";
import {
  ArrowRight,
  Check,
  CloudOff,
  ListChecks,
  MapPin,
  Radio,
  Smartphone,
  Timer,
  Tv,
  Users,
  Calendar,
  MessageSquare,
  Hourglass,
  Zap,
  Shield,
  Clock,
  BarChart3,
  Wrench,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { LeadDialog } from "@/components/lead-dialog";
import { PhoneShell } from "@/components/phone-shell";
import { PhoneJudgeOfflineScreen } from "@/components/phone-screens";
import { StoreBadges } from "@/components/store-badges";
import { cn } from "@/lib/utils";

/* ---------------------------------------------------------------- briques */

function OfferTag({ className }: { className?: string }) {
  return (
    <Badge
      className={cn(
        "border-amber-400/30 bg-amber-400/10 text-amber-300",
        className,
      )}
    >
      <Wrench className="mr-1.5 size-3.5" />
      Offre à part · matériel + une personne CompRank sur place
    </Badge>
  );
}

function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "center",
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  lead?: ReactNode;
  align?: "center" | "left";
}) {
  return (
    <div className={cn("mb-12", align === "center" && "text-center")}>
      {eyebrow && <div className="mb-4">{eyebrow}</div>}
      <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {lead && (
        <p
          className={cn(
            "mt-4 max-w-2xl text-lg text-gray-400",
            align === "center" && "mx-auto",
          )}
        >
          {lead}
        </p>
      )}
    </div>
  );
}

/** Maquette TV live : une Vague en cours, reps comptées en direct. */
function TvLiveMock({ className }: { className?: string }) {
  const lanes = [
    { n: 1, name: "Camille D.", reps: 47 },
    { n: 2, name: "Antoine L.", reps: 44 },
    { n: 3, name: "Sarah M.", reps: 51 },
    { n: 4, name: "Louis P.", reps: 39 },
    { n: 5, name: "Nora B.", reps: 46 },
    { n: 6, name: "Théo R.", reps: 42 },
  ];
  return (
    <div
      className={cn(
        "rounded-xl border-4 border-dark-500 bg-black p-1 shadow-2xl shadow-primary-500/10",
        className,
      )}
    >
      <div className="aspect-video w-full rounded-lg bg-dark-900 p-4 md:p-5">
        <div className="flex items-center justify-between border-b border-dark-600 pb-2">
          <div>
            <p className="font-mono text-[0.625rem] uppercase tracking-widest text-primary-400">
              Vague 12 · WOD 2 · RX
            </p>
            <p className="text-sm font-semibold text-white">AMRAP 12&apos;</p>
          </div>
          <p className="font-mono text-3xl font-bold tabular-nums text-white md:text-4xl">
            07:42
          </p>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-x-6 gap-y-1.5">
          {lanes.map((l) => (
            <div
              key={l.n}
              className="flex items-center justify-between rounded bg-dark-800/70 px-2 py-1"
            >
              <span className="flex items-center gap-2 text-xs text-gray-300">
                <span className="font-mono text-[0.625rem] text-gray-500">
                  C{l.n}
                </span>
                {l.name}
              </span>
              <span className="font-mono text-base font-bold tabular-nums text-primary-400">
                {l.reps}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-3 flex items-center gap-1.5 text-[0.625rem] text-gray-500">
          <span className="size-1.5 animate-pulse rounded-full bg-green-400" />
          Régie live · réseau local, sans internet
        </p>
      </div>
    </div>
  );
}

/** Maquette chrono HYROX : temps par station capté par puce RFID. */
function ChronoMock({ className }: { className?: string }) {
  const stations = [
    { name: "Run 1", t: "04:12" },
    { name: "SkiErg", t: "04:48" },
    { name: "Run 2", t: "04:20" },
    { name: "Sled Push", t: "03:05" },
    { name: "Run 3", t: "04:31" },
    { name: "Sled Pull", t: "04:02" },
  ];
  return (
    <Card
      className={cn("border-dark-600 bg-dark-800/60 p-5", className)}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-white">Nora B.</p>
          <p className="text-xs text-gray-500">Dossard 214 · Puce détectée</p>
        </div>
        <Badge className="border-green-500/20 bg-green-500/10 text-green-400">
          <Radio className="mr-1 size-3" />
          RFID
        </Badge>
      </div>
      <ol className="mt-4 space-y-1.5">
        {stations.map((s, i) => (
          <li
            key={s.name}
            className="flex items-center justify-between rounded bg-dark-900/60 px-3 py-1.5 text-xs"
          >
            <span className="flex items-center gap-2 text-gray-300">
              <span className="font-mono text-gray-500">{i + 1}</span>
              {s.name}
            </span>
            <span className="font-mono tabular-nums text-primary-400">
              {s.t}
            </span>
          </li>
        ))}
        <li className="flex items-center justify-between px-3 pt-2 text-xs">
          <span className="text-gray-500">… 8 stations · temps total</span>
          <span className="font-mono text-base font-bold tabular-nums text-white">
            1:12:36
          </span>
        </li>
      </ol>
    </Card>
  );
}

function LeadCta({ label = "Parler de votre jour J" }: { label?: string }) {
  return (
    <LeadDialog>
      <Button size="lg">
        {label}
        <ArrowRight data-icon="inline-end" aria-hidden="true" />
      </Button>
    </LeadDialog>
  );
}

/* ------------------------------------------------ récit (a) : app juge */

/**
 * Remplace `JudgeScoringSection` : l'app juge + la Scorecard, avec la claim
 * hors-ligne et l'unique emplacement de badges de la page.
 */
export function ProtoJudgeAppSection({
  id = "scoring",
  tone = "dark",
}: {
  id?: string;
  tone?: "dark" | "darker";
}) {
  return (
    <section
      id={id}
      className={cn("section", tone === "dark" ? "bg-dark-800" : "bg-dark-900")}
    >
      <div className="container-custom">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow={
                <Badge className="border-primary-500/20 bg-primary-500/10 text-primary-400">
                  <Smartphone className="mr-1.5 size-3.5" />
                  App juge · Scorecard digitale
                </Badge>
              }
              title={
                <>
                  Vos juges scorent sur l&apos;app,{" "}
                  <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                    même quand le réseau lâche
                  </span>
                </>
              }
              lead="[placeholder] Compteur de reps, no-reps, validation en un tap. La Scorecard part dès que le juge valide — et attend le réseau s'il le faut."
            />
            <ul className="mb-8 space-y-3 text-gray-300">
              {[
                { icon: <Zap className="size-4" />, t: "Compteur rapide +/− et no-reps" },
                { icon: <ListChecks className="size-4" />, t: "Scorecard transmise à la validation, par Couloir" },
                { icon: <CloudOff className="size-4" />, t: "Hors ligne : les scores font la queue, rien ne se perd" },
                { icon: <Check className="size-4" />, t: "Aucune installation obligatoire : la version web reste là" },
              ].map((b) => (
                <li key={b.t} className="flex items-start gap-3">
                  <span className="mt-0.5 text-orange-400">{b.icon}</span>
                  <span className="text-sm">{b.t}</span>
                </li>
              ))}
            </ul>
            <StoreBadges />
          </div>
          <PhoneShell>
            <PhoneJudgeOfflineScreen />
          </PhoneShell>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ récits (b)+(c) : offre à part, deux volets */

export function ProtoOfferTwoPanels() {
  return (
    <section
      id="offre"
      className="section border-y border-amber-400/15 bg-gradient-to-b from-dark-900 via-[#1a1712] to-dark-900"
    >
      <div className="container-custom">
        <SectionHeading
          eyebrow={<OfferTag />}
          title={
            <>
              Le jour J,{" "}
              <span className="bg-gradient-to-r from-amber-300 to-orange-500 bg-clip-text text-transparent">
                on vient avec le matériel
              </span>
            </>
          }
          lead="[placeholder] Deux prestations, en plus du logiciel : la Régie live pour vos compétitions FUNCTIONAL, le chronométrage par puces pour vos courses HYROX."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="border-amber-400/20 bg-dark-800/70 p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="flex items-center gap-2 text-xl font-semibold text-white">
                <Tv className="size-5 text-amber-300" />
                Régie live + TV live
              </h3>
              <Badge variant="outline">FUNCTIONAL</Badge>
            </div>
            <p className="mb-5 text-sm text-gray-400">
              [placeholder] Chrono partagé, Départ donné depuis le plateau, reps
              affichées sur l&apos;écran au fur et à mesure — sur un réseau local
              qui ne dépend pas de l&apos;internet de la salle.
            </p>
            <TvLiveMock />
          </Card>
          <Card className="border-amber-400/20 bg-dark-800/70 p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="flex items-center gap-2 text-xl font-semibold text-white">
                <Timer className="size-5 text-amber-300" />
                Chronométrage par puces RFID
              </h3>
              <Badge variant="outline">HYROX</Badge>
            </div>
            <p className="mb-5 text-sm text-gray-400">
              [placeholder] Une puce à la cheville, le temps capté à chaque
              station, le classement au temps total sans saisie manuelle.
            </p>
            <ChronoMock />
          </Card>
        </div>
        <div className="mt-10 flex flex-col items-center gap-3 text-center">
          <p className="text-sm text-gray-500">
            Sur demande · le logiciel reste gratuit pour l&apos;organisateur
          </p>
          <LeadCta />
        </div>
      </div>
    </section>
  );
}
