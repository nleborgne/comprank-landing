"use client";

// PROTOTYPE — ticket #18 (carte #14). Sections basse fidélité servant à
// comparer des structures de page dans le picker /ideas. Copy = placeholders.
// À supprimer (ou à promouvoir section par section) une fois la structure
// retenue ; rien ici n'est destiné à la prod tel quel.

import { useState, type ReactNode } from "react";
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

/* ------------------------------------ variante A : section offre 2 volets */

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

/* ---------------------------------------- variante B : chapitre « Jour J » */

export function ProtoDayJChapter() {
  return (
    <>
      <section className="section bg-dark-900 pb-0">
        <div className="container-custom">
          <SectionHeading
            eyebrow={
              <Badge className="border-primary-500/20 bg-primary-500/10 text-primary-400">
                Chapitre · Le jour J
              </Badge>
            }
            title="Trois façons de tenir le jour J"
            lead="[placeholder] L'app juge pour toutes vos compétitions. La Régie live et le chronométrage par puces quand vous voulez que CompRank vienne avec le matériel."
          />
        </div>
      </section>

      <ProtoJudgeAppSection tone="darker" />

      <section id="regie" className="section bg-dark-800">
        <div className="container-custom">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                align="left"
                eyebrow={<OfferTag />}
                title={
                  <>
                    Régie live +{" "}
                    <span className="bg-gradient-to-r from-amber-300 to-orange-500 bg-clip-text text-transparent">
                      TV live
                    </span>
                  </>
                }
                lead="[placeholder] Un Kit Régie installé sur place, une personne CompRank aux commandes : chrono partagé, Départ, TV live des reps en direct. FUNCTIONAL, sur demande."
              />
              <LeadCta label="Demander la Régie" />
            </div>
            <TvLiveMock />
          </div>
        </div>
      </section>

      <section id="chrono" className="section bg-dark-900">
        <div className="container-custom">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <ChronoMock className="order-2 lg:order-1" />
            <div className="order-1 lg:order-2">
              <SectionHeading
                align="left"
                eyebrow={<OfferTag />}
                title={
                  <>
                    Chronométrage HYROX{" "}
                    <span className="bg-gradient-to-r from-amber-300 to-orange-500 bg-clip-text text-transparent">
                      par puces RFID
                    </span>
                  </>
                }
                lead="[placeholder] Puce à la cheville, temps capté à chaque station, classement au temps total sans saisie. HYROX, sur demande."
              />
              <LeadCta label="Demander le chrono" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/** « Comment ça marche » en 7 étapes : la Régie / le chrono deviennent une étape. */
export function ProtoHowItWorks7() {
  const steps = [
    { n: 1, title: "Créez l'événement", desc: "Workouts, divisions, capacité.", icon: <Calendar className="size-5" /> },
    { n: 2, title: "Ouvrez les inscriptions", desc: "Places et liste d'attente.", icon: <Users className="size-5" /> },
    { n: 3, title: "Planifiez", desc: "Planning, Vagues et Couloirs.", icon: <Clock className="size-5" /> },
    { n: 4, title: "Attribuez les juges", desc: "Un juge par Couloir, sur l'app.", icon: <Shield className="size-5" /> },
    { n: 5, title: "Option : on vient", desc: "Régie live ou chrono RFID, sur demande.", icon: <Wrench className="size-5" />, offer: true },
    { n: 6, title: "Scorez en live", desc: "Scorecard ou Régie, au choix.", icon: <Zap className="size-5" /> },
    { n: 7, title: "Publiez & analysez", desc: "Classement et feedback.", icon: <BarChart3 className="size-5" /> },
  ];
  return (
    <section className="section bg-dark-900">
      <div className="container-custom">
        <SectionHeading
          title={
            <>
              Comment{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                ça marche
              </span>
            </>
          }
        />
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-7 lg:gap-3">
          {steps.map((s) => (
            <div key={s.n} className="text-center">
              <div
                className={cn(
                  "mx-auto mb-3 flex size-10 items-center justify-center rounded-full border-2 bg-dark-700",
                  s.offer ? "border-amber-400/60" : "border-dark-500",
                )}
              >
                <span className={cn("text-sm font-bold", s.offer ? "text-amber-300" : "text-primary-400")}>
                  {s.n}
                </span>
              </div>
              <h3 className="mb-1 text-sm font-semibold text-white">{s.title}</h3>
              <p className="text-xs leading-relaxed text-gray-500">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- variante C : grille 7 + comparatif */

export function ProtoFeaturesGrid7() {
  const features = [
    { icon: <Users className="size-6" />, title: "Inscriptions", description: "Portail d'inscription, équipes, divisions, codes d'invitation.", color: "from-purple-500 to-pink-500" },
    { icon: <Calendar className="size-6" />, title: "Planification", description: "Vagues, Couloirs, capacité et planning synchronisé.", color: "from-green-500 to-emerald-500" },
    { icon: <Smartphone className="size-6" />, title: "App juge", description: "[nouveau] Comptage sur téléphone, hors ligne compris.", color: "from-orange-500 to-red-500", isNew: true },
    { icon: <ListChecks className="size-6" />, title: "Scorecard digitale", description: "[nouveau] Le score part dès que le juge valide.", color: "from-orange-500 to-amber-500", isNew: true },
    { icon: <BarChart3 className="size-6" />, title: "Classements", description: "Barèmes flexibles, points automatiques, lien public.", color: "from-blue-500 to-cyan-500" },
    { icon: <Hourglass className="size-6" />, title: "Liste d'attente", description: "Remplacement automatique en cas de désistement.", color: "from-amber-500 to-yellow-500" },
    { icon: <MessageSquare className="size-6" />, title: "Feedback athlètes", description: "Avis post-événement pour la prochaine édition.", color: "from-teal-500 to-cyan-500" },
  ];
  return (
    <section id="features" className="section bg-dark-800">
      <div className="container-custom">
        <SectionHeading title="Tout pour vos compétitions" lead="Gratuit pour l'organisateur." />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <Card key={f.title} className="relative border-dark-600 bg-dark-700/50 p-5 text-center">
              {f.isNew && (
                <Badge className="absolute right-3 top-3 border-primary-500/20 bg-primary-500/10 text-primary-400">
                  Nouveau
                </Badge>
              )}
              <div className={cn("mx-auto mb-3 w-fit rounded-xl bg-gradient-to-br p-2.5", f.color)}>
                <div className="text-white">{f.icon}</div>
              </div>
              <h3 className="mb-1 text-sm font-semibold text-white">{f.title}</h3>
              <p className="text-xs leading-relaxed text-gray-400">{f.description}</p>
            </Card>
          ))}
          <Card className="flex flex-col items-center justify-center border-dashed border-amber-400/30 bg-transparent p-5 text-center">
            <Wrench className="mb-2 size-6 text-amber-300" />
            <p className="text-sm font-semibold text-white">Et le jour J ?</p>
            <a href="#offre" className="mt-1 text-xs text-amber-300 underline-offset-2 hover:underline">
              Voir l&apos;offre à part ↓
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
}

export function ProtoCompareBlock() {
  const base = [
    "Inscriptions, divisions, liste d'attente",
    "Planning, Vagues, Couloirs",
    "App juge + Scorecard digitale, hors ligne compris",
    "Classements en direct, lien public, écran géant",
    "Feedback athlètes",
  ];
  const offer = [
    { t: "Régie live + TV live (FUNCTIONAL)", d: "Chrono partagé, Départ, reps en direct sur réseau local." },
    { t: "Chronométrage par puces RFID (HYROX)", d: "Temps capté à chaque station, classement au temps total." },
    { t: "Kit Régie apporté et repris", d: "Laptop, routeur, téléphones juges, liaison TV, batterie." },
    { t: "Une personne CompRank sur place", d: "Installe, opère, gère les imprévus." },
  ];
  return (
    <section id="offre" className="section bg-dark-800">
      <div className="container-custom">
        <SectionHeading
          title="Deux façons de travailler avec CompRank"
          lead="[placeholder] Le logiciel, gratuit, pour toutes vos compétitions. Et, quand vous le souhaitez, on vient le jour J avec le matériel."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="border-dark-600 bg-dark-900/60 p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">Le socle</p>
            <h3 className="mt-2 text-2xl font-bold text-white">Le logiciel</h3>
            <p className="mt-1 text-3xl font-bold text-primary-400">Gratuit</p>
            <p className="text-xs text-gray-500">pour l&apos;organisateur</p>
            <ul className="mt-6 space-y-2.5">
              {base.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-gray-300">
                  <Check className="mt-0.5 size-4 shrink-0 text-green-400" />
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <LeadDialog>
                <Button size="lg" variant="outline">
                  Démarrer gratuitement
                  <ArrowRight data-icon="inline-end" aria-hidden="true" />
                </Button>
              </LeadDialog>
            </div>
          </Card>
          <Card className="relative border-amber-400/30 bg-gradient-to-b from-[#1f1a12] to-dark-900 p-8">
            <OfferTag className="absolute -top-3 left-6" />
            <p className="text-xs font-semibold uppercase tracking-widest text-amber-300/80">L&apos;offre à part</p>
            <h3 className="mt-2 text-2xl font-bold text-white">Le jour J avec CompRank</h3>
            <p className="mt-1 text-3xl font-bold text-amber-300">Sur demande</p>
            <p className="text-xs text-gray-500">matériel et personne sur place</p>
            <ul className="mt-6 space-y-3">
              {offer.map((o) => (
                <li key={o.t} className="flex items-start gap-2 text-sm">
                  <Wrench className="mt-0.5 size-4 shrink-0 text-amber-300" />
                  <span>
                    <span className="font-medium text-white">{o.t}</span>
                    <span className="block text-xs text-gray-400">{o.d}</span>
                  </span>
                </li>
              ))}
            </ul>
            <TvLiveMock className="mt-6" />
            <div className="mt-8">
              <LeadCta />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------- variante D : offre par format */

export function ProtoOfferByFormat() {
  const [format, setFormat] = useState<"crossfit" | "hyrox">("crossfit");
  return (
    <section id="offre" className="section border-y border-amber-400/15 bg-[#151310]">
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
          lead="[placeholder] Selon votre format, CompRank installe et opère sur place ce que le logiciel seul ne peut pas faire."
        />
        <div
          role="tablist"
          aria-label="Format de compétition"
          className="mx-auto mb-10 flex w-fit rounded-full border border-dark-500 bg-dark-800 p-1"
        >
          {(
            [
              { k: "crossfit", label: "CrossFit / FUNCTIONAL" },
              { k: "hyrox", label: "HYROX" },
            ] as const
          ).map((t) => (
            <button
              key={t.k}
              type="button"
              role="tab"
              aria-selected={format === t.k}
              onClick={() => setFormat(t.k)}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-medium transition-colors",
                format === t.k
                  ? "bg-amber-400 text-dark-900"
                  : "text-gray-400 hover:text-white",
              )}
            >
              {t.label}
            </button>
          ))}
        </div>
        {format === "crossfit" ? (
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h3 className="flex items-center gap-2 text-2xl font-bold text-white">
                <Tv className="size-6 text-amber-300" />
                Régie live + TV live
              </h3>
              <p className="mt-3 text-gray-400">
                [placeholder] Kit Régie installé sur place, chrono partagé,
                Départ depuis le plateau, reps en direct sur l&apos;écran, sans
                dépendre de l&apos;internet de la salle. Une personne CompRank aux
                commandes.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-gray-300">
                {["Kit Régie apporté, installé, repris", "Un téléphone par juge, app préinstallée", "TV live : reps comptées, pas des scores figés"].map((b) => (
                  <li key={b} className="flex items-center gap-2"><Check className="size-4 text-green-400" />{b}</li>
                ))}
              </ul>
              <div className="mt-8"><LeadCta label="Demander la Régie" /></div>
            </div>
            <TvLiveMock />
          </div>
        ) : (
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h3 className="flex items-center gap-2 text-2xl font-bold text-white">
                <Timer className="size-6 text-amber-300" />
                Chronométrage par puces RFID
              </h3>
              <p className="mt-3 text-gray-400">
                [placeholder] Puce à la cheville, temps capté à chaque station,
                classement au temps total sans saisie manuelle. Lecteurs et
                opérateur CompRank sur place.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-gray-300">
                {["Puce UHF sur sangle cheville", "Points de détection sur le parcours", "Temps par station et total, en direct"].map((b) => (
                  <li key={b} className="flex items-center gap-2"><Check className="size-4 text-green-400" />{b}</li>
                ))}
              </ul>
              <div className="mt-8"><LeadCta label="Demander le chrono" /></div>
            </div>
            <ChronoMock />
          </div>
        )}
        <p className="mt-10 flex items-center justify-center gap-2 text-center text-xs text-gray-500">
          <MapPin className="size-3.5" /> Sur demande · le logiciel reste gratuit pour l&apos;organisateur
        </p>
      </div>
    </section>
  );
}
