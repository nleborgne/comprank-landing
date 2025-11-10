import "./globals.css";
import { Hero } from "@/components/hero";
import Link from "next/link";
import {
  Medal,
  Users,
  Calendar,
  LineChart,
  ListChecks,
  MessageSquare,
  Hourglass,
  Trophy,
} from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";


function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="section-title">
      {eyebrow ? (
        <div className="mb-3 inline-flex items-center rounded-full border border-dark-500 bg-dark-600/60 px-3 py-1 text-xs uppercase tracking-wider text-gray-300">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="mb-4">
        {title}
      </h2>
      {subtitle ? (
        <p className="mx-auto max-w-2xl text-lg text-gray-400">{subtitle}</p>
      ) : null}
    </div>
  );
}

function TrustBar() {
  return (
    <section className="section border-y border-dark-500 bg-dark-800/60">
      <div className="container-custom">
        <p className="mb-6 text-center text-sm uppercase tracking-wider text-gray-400">
          Adopté par des organisateurs de compétitions partout en France
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <span className="glass px-3 py-1 text-sm">CrossFit</span>
          <span className="glass px-3 py-1 text-sm">Functional Fitness</span>
          <span className="glass px-3 py-1 text-sm">Haltérophilie</span>
          <span className="glass px-3 py-1 text-sm">Hyrox</span>
          <span className="glass px-3 py-1 text-sm">Powerlifting</span>
        </div>
      </div>
    </section>
  );
}

function FeaturesKey() {
  const features = [
    {
      icon: <LineChart size={22} />,
      title: "Classement en direct",
      description:
        "Scores mis à jour en temps réel, visibles sur écran, mobile et web.",
    },
    {
      icon: <Users size={22} />,
      title: "Inscriptions",
      description:
        "Portail d'inscription simple avec gestion des équipes et divisions.",
    },
    {
      icon: <Calendar size={22} />,
      title: "Planification",
      description:
        "Créez des heats, assignez des plateaux et synchronisez votre planning.",
    },
    {
      icon: <ListChecks size={22} />,
      title: "Gestion du scoring",
      description:
        "Barèmes flexibles, validation des juges et calcul automatique des points.",
    },
    {
      icon: <MessageSquare size={22} />,
      title: "Feedback athlètes",
      description:
        "Recueillez les avis après l'événement pour améliorer vos prochaines éditions.",
    },
    {
      icon: <Hourglass size={22} />,
      title: "Liste d'attente par division",
      description:
        "Activez la file d'attente et remplacez automatiquement en cas de désistement.",
    },
    {
      icon: <Medal size={22} />,
      title: "Médailles de leaderboard",
      description:
        "Mettez en valeur les podiums et récompenses directement dans le classement.",
    },
  ];

  return (
    <section id="features" className="section">
      <div className="container-custom">
        <SectionTitle
          eyebrow="Fonctionnalités"
          title="Tout pour organiser des compétitions professionnelles"
          subtitle="Des outils pensés pour les organisateurs, les juges et les athlètes."
        />
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div key={i} className="card border-2 border-black/60 p-6 transition-all hover:border-primary-600/60">
              <div className="mb-4 inline-flex rounded-lg bg-primary-500/10 p-2 text-primary-500">
                {f.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold">{f.title}</h3>
              <p className="text-gray-400">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LiveLeaderboardSection() {
  const rows = [
    { rank: 1, name: "Camille D.", points: 398 },
    { rank: 2, name: "Antoine L.", points: 392 },
    { rank: 3, name: "Sarah M.", points: 384 },
    { rank: 4, name: "Louis P.", points: 372 },
    { rank: 5, name: "Nora B.", points: 361 },
  ];
  return (
    <section id="leaderboard" className="section bg-dark-800">
      <div className="container-custom">
        <SectionTitle
          eyebrow="Temps réel"
          title="Classement en direct"
          subtitle="Diffusion instantanée des résultats et podiums. Partagez l&#39;URL du leaderboard ou affichez-le sur écran géant."
        />
        <div className="mx-auto max-w-4xl overflow-hidden rounded-xl border border-dark-500 bg-dark-600">
          <div className="grid grid-cols-12 border-b border-dark-500 bg-dark-500/50 p-3 text-xs uppercase tracking-wider text-gray-300">
            <div className="col-span-2">Rang</div>
            <div className="col-span-6">Athlète</div>
            <div className="col-span-2 text-right">Points</div>
            <div className="col-span-2 text-center">Médailles</div>
          </div>
          <div>
            {rows.map((r) => (
              <div
                key={r.rank}
                className="grid grid-cols-12 items-center border-b border-dark-500/60 p-3 last:border-b-0"
              >
                <div className="col-span-2 font-semibold">
                  <div className="inline-flex items-center gap-2">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded bg-dark-500 text-sm">
                      {r.rank}
                    </span>
                    {r.rank <= 3 ? (
                      <Medal
                        size={16}
                        className={
                          r.rank === 1
                            ? "text-yellow-400"
                            : r.rank === 2
                              ? "text-gray-300"
                              : "text-amber-700"
                        }
                      />
                    ) : null}
                  </div>
                </div>
                <div className="col-span-6">{r.name}</div>
                <div className="col-span-2 text-right font-mono">{r.points}</div>
                <div className="col-span-2 text-center">
                  {r.rank <= 3 ? (
                    <span className="inline-flex items-center gap-1 text-xs text-gray-300">
                      <Trophy size={14} className="text-primary-500" /> Podium
                    </span>
                  ) : (
                    <span className="text-xs text-gray-500">—</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Link href="https://app.comprank.fr" className="btn-primary">
            Voir un leaderboard en action
          </Link>
          <span className="text-sm text-gray-400">Actualisation en continu</span>
        </div>
      </div>
    </section>
  );
}

function PlanningSection() {
  const slots = [
    { time: "08:30", heat: "Heat 1", lane: "Plateau A" },
    { time: "09:00", heat: "Heat 2", lane: "Plateau A" },
    { time: "09:30", heat: "Heat 3", lane: "Plateau B" },
    { time: "10:00", heat: "Heat 4", lane: "Plateau B" },
  ];
  return (
    <section id="planning" className="section">
      <div className="container-custom">
        <SectionTitle
          eyebrow="Organisation"
          title="Planification simple et puissante"
          subtitle="Gérez vos heats, plateaux et timings sans friction."
        />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="card border border-dark-500 p-6">
            <div className="mb-4 flex items-center gap-2 text-sm text-gray-400">
              <Calendar size={16} /> Planning de la journée
            </div>
            <div className="space-y-3">
              {slots.map((s, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-lg border border-dark-500 bg-dark-700 p-3"
                >
                  <div className="flex items-center gap-3">
                    <span className="rounded bg-dark-500 px-2 py-1 text-xs font-medium">
                      {s.time}
                    </span>
                    <span className="font-medium">{s.heat}</span>
                  </div>
                  <span className="text-sm text-gray-400">{s.lane}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary-500" />
                Multi-plateaux, multi-événements, gestion des pauses et transitions
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary-500" />
                Synchronisation automatique avec le scoring et le leaderboard
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary-500" />
                Export et partage du planning pour vos équipes
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function RegistrationsWaitlistSection() {
  return (
    <section id="inscriptions" className="section bg-dark-800">
      <div className="container-custom">
        <SectionTitle
          eyebrow="Inscriptions"
          title="Inscription fluide et liste d&#39;attente par division"
          subtitle="Maximisez le remplissage tout en gardant le contrôle sur vos divisions."
        />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="card border border-dark-500 p-6">
            <h3 className="mb-3 text-xl font-semibold">Portail d&#39;inscription</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Formulaires clairs, options équipe/duo/individuel</li>
              <li>Paiements externes ou codes d&#39;invitation</li>
              <li>Emails de confirmation automatiques</li>
            </ul>
            <div className="mt-6">
              <Link href="https://app.comprank.fr" className="btn-primary">
                Créer un événement
              </Link>
            </div>
          </div>
          <div className="card border border-dark-500 p-6">
            <h3 className="mb-3 text-xl font-semibold">Liste d&#39;attente par division</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Activation en un clic par division</li>
              <li>Remplacement automatique en cas de désistement</li>
              <li>Notifications email aux athlètes en attente</li>
            </ul>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-primary-500/40 bg-primary-500/10 px-3 py-1 text-xs text-primary-400">
              <Hourglass size={14} /> Auto-promotion depuis la liste d&#39;attente
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ScoringManagerSection() {
  const workouts = [
    { name: "WOD 1", type: "For time", progress: 82 },
    { name: "WOD 2", type: "AMRAP 12′", progress: 64 },
    { name: "WOD 3", type: "Max load", progress: 45 },
  ];
  return (
    <section id="scoring" className="section">
      <div className="container-custom">
        <SectionTitle
          eyebrow="Scoring"
          title="Gestion du scoring"
          subtitle="Un back-office rapide pour saisir, valider et publier les scores."
        />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="card border border-dark-500 p-6">
            <div className="space-y-4">
              {workouts.map((w, i) => (
                <div key={i}>
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span className="font-medium">{w.name}</span>
                    <span className="text-gray-400">{w.type}</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-bar-fill"
                      style={{ width: `${w.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary-500" />
                Validation par les juges et logs d&#39;audit
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary-500" />
                Barèmes personnalisés par épreuve (points, temps, charge)
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary-500" />
                Publication instantanée sur le leaderboard
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function AthleteFeedbackSection() {
  return (
    <section id="feedback" className="section bg-dark-800">
      <div className="container-custom">
        <SectionTitle
          eyebrow="Satisfaction"
          title="Feedback des athlètes"
          subtitle="Collectez des retours qualifiés pour optimiser l&#39;expérience athlète."
        />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="card border border-dark-500 p-6">
            <div className="mb-4 text-sm text-gray-400">Exemples d&#39;avis</div>
            <div className="space-y-4">
              <div className="glass p-4">
                <div className="mb-1 text-sm text-gray-300">Très bonne orga, horaires tenus.</div>
                <div className="text-xs text-gray-500">Camille • 5/5</div>
              </div>
              <div className="glass p-4">
                <div className="mb-1 text-sm text-gray-300">Judging clair, WODs variés et fun.</div>
                <div className="text-xs text-gray-500">Antoine • 4.5/5</div>
              </div>
              <div className="glass p-4">
                <div className="mb-1 text-sm text-gray-300">Communication top, accès facile.</div>
                <div className="text-xs text-gray-500">Sarah • 5/5</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary-500" />
                Formulaires post-événement personnalisables
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary-500" />
                Analyse des notes par épreuve et par journée
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary-500" />
                Partage automatique d&#39;un récapitulatif aux participants
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    { n: 1, title: "Créez l'événement", desc: "Paramétrez divisions, WODs et plateaux." },
    { n: 2, title: "Ouvrez les inscriptions", desc: "Gérez les places et la liste d'attente." },
    { n: 3, title: "Planifiez", desc: "Construisez le planning et les heats." },
    { n: 4, title: "Attribuez les juges", desc: "Suivi des postes et validation." },
    { n: 5, title: "Scorez en live", desc: "Saisie rapide et publication instantanée." },
    { n: 6, title: "Publiez & analysez", desc: "Partagez le classement et le feedback." },
  ];
  return (
    <section className="section">
      <div className="container-custom">
        <SectionTitle
          eyebrow="Par où commencer ?"
          title="Comment ça marche"
        />
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {steps.map((s) => (
            <div key={s.n} className="card border border-dark-500 p-4">
              <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary-500/10 text-sm font-semibold text-primary-400">
                {s.n}
              </div>
              <div className="font-medium">{s.title}</div>
              <div className="mt-1 text-sm text-gray-400">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BottomCTASection() {
  return (
    <section className="section">
      <div className="container-custom">
        <div className="card border border-primary-500/30 bg-gradient-to-br from-dark-700 via-dark-700 to-dark-600 p-8 text-center">
          <h3 className="mb-3 text-2xl md:text-3xl">Prêt à organiser votre prochaine compétition ?</h3>
          <p className="mx-auto mb-6 max-w-2xl text-gray-300">
            Lancez votre événement en quelques minutes et offrez une expérience premium à vos athlètes et spectateurs.
          </p>
          <Link href="https://app.comprank.fr" className="btn-primary">
            Démarrer sur CompRank
          </Link>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section id="faq" className="section bg-dark-800">
      <div className="container-custom">
        <SectionTitle eyebrow="FAQ" title="Questions fréquentes" />
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible>
            <AccordionItem value="q1">
              <AccordionTrigger>Le classement s&#39;actualise-t-il automatiquement ?</AccordionTrigger>
              <AccordionContent>
                Oui. Dès qu&#39;un score est validé par un juge, le leaderboard est mis à jour en temps réel.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q2">
              <AccordionTrigger>Puis-je rendre un leaderboard public ou privé ?</AccordionTrigger>
              <AccordionContent>
                Vous pouvez partager un lien public, intégrer l&#39;affichage sur écran géant, ou restreindre l&#39;accès aux officiels.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q3">
              <AccordionTrigger>Comment fonctionnent les listes d&#39;attente ?</AccordionTrigger>
              <AccordionContent>
                Activez-les par division. En cas de désistement, le premier de la liste reçoit une invitation et peut confirmer sa place.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q4">
              <AccordionTrigger>Puis-je importer des athlètes existants ?</AccordionTrigger>
              <AccordionContent>
                Oui, via import CSV ou envoi d&#39;invitations avec codes dédiés.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q5">
              <AccordionTrigger>Proposez-vous une assistance le jour J ?</AccordionTrigger>
              <AccordionContent>
                Nous proposons une assistance prioritaire par chat et email, ainsi que des guides de bonnes pratiques.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <>
      <Hero />
      <TrustBar />
      <FeaturesKey />
      <LiveLeaderboardSection />
      <PlanningSection />
      <RegistrationsWaitlistSection />
      <ScoringManagerSection />
      <AthleteFeedbackSection />
      <HowItWorksSection />
      <BottomCTASection />
      <FAQSection />
    </>
  );
}
