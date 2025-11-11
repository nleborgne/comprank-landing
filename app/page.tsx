import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import {
  Medal,
  Users,
  Calendar,
  LineChart,
  ListChecks,
  MessageSquare,
  Hourglass,
  Trophy,
  ArrowRight,
  Star,
  CheckCircle,
  Zap,
  Shield,
  Clock,
  BarChart3,
  Sparkles,
} from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

// Modern Hero Section
function ModernHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark-900 via-dark-800 to-dark-700">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,173,74,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,173,74,0.02)_50%,transparent_75%)]" />
      </div>

      {/* Hero Content */}
      <div className="container-custom relative z-10 py-20 text-center">
        <div className="mx-auto max-w-5xl">
          {/* Badge */}
          <div className="mb-8 motion-preset-blur-up">
            <Badge className="bg-primary-500/10 text-primary-400 border-primary-500/20 px-4 py-2 text-sm font-medium">
              <Sparkles className="w-4 h-4 mr-2" />
              La plateforme ultime pour les compétitions sportives
            </Badge>
          </div>

          {/* Main Headline */}
          <h1 className="mb-8 text-5xl md:text-7xl lg:text-8xl font-bold leading-none motion-preset-blur-up motion-delay-200">
            Propulsez votre{" "}
            <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              Compétition
            </span>
            <br />
            Au Niveau Supérieur
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mb-12 max-w-3xl text-xl md:text-2xl text-gray-300 leading-relaxed motion-preset-blur-up motion-delay-300">
            Simplifiez la gestion de vos événements, suivez les performances des
            athlètes en temps réel et créez des compétitions inoubliables.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 motion-preset-blur-up motion-delay-500">
            <Link href="https://app.comprank.fr" className="group btn-primary text-lg px-8 py-4">
              Démarrer gratuitement
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="#features" className="btn-secondary text-lg px-8 py-4">
              Voir les fonctionnalités
            </Link>
          </div>

          {/* Social Proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 motion-preset-blur-up motion-delay-700">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((id) => (
                  <Image
                    width={48}
                    height={48}
                    key={id}
                    src={`/box/box-${id}.webp`}
                    alt="box"
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-dark-600 shadow-lg"
                  />
                ))}
              </div>
              <div className="text-left">
                <div className="flex items-center mb-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-primary-500 fill-primary-500" />
                  ))}
                </div>
                <p className="text-sm text-gray-400">
                  Approuvé par des boxs CrossFit
                </p>
              </div>
            </div>

            <div className="hidden sm:block h-12 w-px bg-gray-600" />

            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-white mb-1">1200+</div>
              <div className="text-sm text-gray-400">Athlètes inscrits</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-primary-500/10 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-accent-500/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
    </section>
  );
}

// Trust Bar with Modern Design
function TrustBar() {
  return (
    <section className="py-12 bg-dark-800/50 border-y border-dark-600">
      <div className="container-custom">
        <div className="text-center">
          <p className="mb-8 text-sm uppercase tracking-wider text-gray-400 font-medium">
            Adopté par des organisateurs de compétitions partout en France
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-2xl mx-auto">
            {['CrossFit', 'Functional Fitness', 'Haltérophilie', 'Hyrox', 'Powerlifting'].map((sport, index) => (
              <div key={sport} className="group">
                <Badge
                  variant="outline"
                  className="w-full justify-center py-2 bg-dark-700/50 border-dark-500 text-gray-300 hover:border-primary-500/50 hover:bg-primary-500/5 transition-all duration-300"
                >
                  {sport}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


// Modern Features Section
function ModernFeatures() {
  const features = [
    {
      icon: <LineChart className="w-8 h-8" />,
      title: "Classement en direct",
      description: "Scores mis à jour en temps réel, visibles sur écran, mobile et web.",
      color: "from-blue-500 to-cyan-500",
      badge: "Temps réel"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Inscriptions",
      description: "Portail d'inscription simple avec gestion des équipes et divisions.",
      color: "from-purple-500 to-pink-500",
      badge: "Simple"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Planification",
      description: "Créez des heats, assignez des plateaux et synchronisez votre planning.",
      color: "from-green-500 to-emerald-500",
      badge: "Organisé"
    },
    {
      icon: <ListChecks className="w-8 h-8" />,
      title: "Gestion du scoring",
      description: "Barèmes flexibles, validation des juges et calcul automatique des points.",
      color: "from-orange-500 to-red-500",
      badge: "Flexible"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Feedback athlètes",
      description: "Recueillez les avis après l'événement pour améliorer vos prochaines éditions.",
      color: "from-teal-500 to-cyan-500",
      badge: "Insights"
    },
    {
      icon: <Hourglass className="w-8 h-8" />,
      title: "Liste d'attente par division",
      description: "Activez la file d'attente et remplacez automatiquement en cas de désistement.",
      color: "from-amber-500 to-yellow-500",
      badge: "Auto"
    },
  ];

  return (
    <section id="features" className="section bg-gradient-to-b from-dark-800 to-dark-900">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary-500/10 text-primary-400 border-primary-500/20">
            Fonctionnalités
          </Badge>
          <h2 className="mb-6 text-4xl md:text-5xl font-bold">
            Tout pour organiser des compétitions{" "}
            <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              professionnelles
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-300">
            Des outils pensés pour les organisateurs, les juges et les athlètes.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group bg-dark-800/50 border-dark-600 hover:border-primary-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl backdrop-blur-sm"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="relative p-3 rounded-xl bg-primary-500/10 border border-primary-500/20">
                    <div className="text-primary-400">
                      {feature.icon}
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs border-gray-600 text-gray-400">
                    {feature.badge}
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-primary-400 transition-colors">
                  {feature.title}
                </h3>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 text-sm text-gray-400 mb-4">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span>Configuration en moins de 10 minutes</span>
            <CheckCircle className="w-4 h-4 text-green-500 ml-4" />
            <span>Support client dédié</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// Modern Live Leaderboard Section
function LiveLeaderboardShowcase() {
  const rows = [
    { rank: 1, name: "Camille D.", points: 398, change: "+2" },
    { rank: 2, name: "Antoine L.", points: 392, change: "-1" },
    { rank: 3, name: "Sarah M.", points: 384, change: "+1" },
    { rank: 4, name: "Louis P.", points: 372, change: "0" },
    { rank: 5, name: "Nora B.", points: 361, change: "-2" },
  ];

  const getMedalColor = (rank: number) => {
    if (rank === 1) return "text-yellow-400";
    if (rank === 2) return "text-gray-300";
    if (rank === 3) return "text-amber-600";
    return "";
  };

  return (
    <section id="leaderboard" className="section bg-dark-900">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-500/10 text-green-400 border-green-500/20">
            <Zap className="w-4 h-4 mr-2" />
            Temps réel
          </Badge>
          <h2 className="mb-6 text-4xl md:text-5xl font-bold">
            Classement en{" "}
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              direct
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-300">
            Diffusion instantanée des résultats et podiums. Partagez l&apos;URL du leaderboard
            ou affichez-le sur écran géant.
          </p>
        </div>

        {/* Leaderboard Demo */}
        <div className="mx-auto max-w-5xl">
          <Card className="bg-dark-800/50 border-dark-600 backdrop-blur-sm overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-dark-700 to-dark-600 border-b border-dark-500">
              <div className="grid grid-cols-12 p-4 text-sm font-medium text-gray-300">
                <div className="col-span-2">Rang</div>
                <div className="col-span-5">Athlète</div>
                <div className="col-span-2 text-right">Points</div>
                <div className="col-span-2 text-center">Évolution</div>
                <div className="col-span-1 text-center">Prix</div>
              </div>
            </div>

            {/* Leaderboard Rows */}
            <div className="divide-y divide-dark-600">
              {rows.map((athlete, index) => (
                <div
                  key={athlete.rank}
                  className={`grid grid-cols-12 items-center p-4 hover:bg-dark-700/50 transition-colors ${athlete.rank <= 3 ? 'bg-gradient-to-r from-primary-500/5 to-transparent' : ''
                    }`}
                >
                  <div className="col-span-2">
                    <div className="flex items-center gap-3">
                      <div className={`flex items-center justify-center w-8 h-8 rounded-full font-bold ${athlete.rank === 1 ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                        athlete.rank === 2 ? 'bg-gray-500/20 text-gray-300 border border-gray-500/30' :
                          athlete.rank === 3 ? 'bg-amber-600/20 text-amber-400 border border-amber-600/30' :
                            'bg-dark-600 text-gray-400'
                        }`}>
                        {athlete.rank}
                      </div>
                      {athlete.rank <= 3 && (
                        <Medal className={`w-5 h-5 ${getMedalColor(athlete.rank)}`} />
                      )}
                    </div>
                  </div>
                  <div className="col-span-5">
                    <div className="font-medium text-white">{athlete.name}</div>
                  </div>
                  <div className="col-span-2 text-right">
                    <div className="font-mono font-bold text-lg text-primary-400">
                      {athlete.points}
                    </div>
                  </div>
                  <div className="col-span-2 text-center">
                    <Badge
                      variant="outline"
                      className={`text-xs ${athlete.change.startsWith('+') ? 'border-green-500/30 text-green-400 bg-green-500/10' :
                        athlete.change.startsWith('-') ? 'border-red-500/30 text-red-400 bg-red-500/10' :
                          'border-gray-500/30 text-gray-400 bg-gray-500/10'
                        }`}
                    >
                      {athlete.change !== '0' ? athlete.change : '−'}
                    </Badge>
                  </div>
                  <div className="col-span-1 text-center">
                    {athlete.rank <= 3 && (
                      <Trophy className="w-4 h-4 text-primary-500 mx-auto" />
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Live Indicator */}
            <div className="bg-dark-700 border-t border-dark-600 p-4">
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm text-gray-300">Actualisation en continu</span>
              </div>
            </div>
          </Card>

          {/* CTA */}
          <div className="text-center mt-8">
            <Link
              href="https://app.comprank.fr"
              className="group btn-primary inline-flex items-center px-8 py-4 text-lg"
            >
              Voir un leaderboard en action
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// Modern Planning Section
function ModernPlanningSection() {
  const slots = [
    { time: "08:30", heat: "Heat 1", lane: "Plateau A", status: "completed" },
    { time: "09:00", heat: "Heat 2", lane: "Plateau A", status: "active" },
    { time: "09:30", heat: "Heat 3", lane: "Plateau B", status: "upcoming" },
    { time: "10:00", heat: "Heat 4", lane: "Plateau B", status: "upcoming" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'active': return 'bg-primary-500/20 text-primary-400 border-primary-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <section id="planning" className="section bg-dark-800">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-500/10 text-blue-400 border-blue-500/20">
            <Calendar className="w-4 h-4 mr-2" />
            Organisation
          </Badge>
          <h2 className="mb-6 text-4xl md:text-5xl font-bold">
            Planification{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              simple et puissante
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-300">
            Gérez vos heats, plateaux et timings sans friction.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Schedule Demo */}
          <div>
            <Card className="bg-dark-700/50 border-dark-600">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>Planning de la journée</span>
                  <Badge variant="outline" className="ml-auto text-xs">
                    <Clock className="w-3 h-3 mr-1" />
                    En live
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {slots.map((slot, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-4 rounded-lg bg-dark-600 border border-dark-500 hover:border-primary-500/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Badge className={`text-xs font-medium border ${getStatusColor(slot.status)}`}>
                        {slot.time}
                      </Badge>
                      <span className="font-medium text-white">{slot.heat}</span>
                    </div>
                    <span className="text-sm text-gray-400">{slot.lane}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Features List */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Fonctionnalités avancées</h3>
              <ul className="space-y-4">
                {[
                  "Multi-plateaux, multi-événements, gestion des pauses et transitions",
                  "Synchronisation automatique avec le scoring et le leaderboard",
                  "Export et partage du planning pour vos équipes"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 bg-gradient-to-r from-primary-500/10 to-blue-500/10 rounded-xl border border-primary-500/20">
              <BarChart3 className="w-8 h-8 text-primary-400 mb-3" />
              <h4 className="text-lg font-semibold text-white mb-2">Optimisation automatique</h4>
              <p className="text-gray-300 text-sm">
                Notre IA analyse votre événement et propose des créneaux optimisés pour maximiser l&apos;efficacité.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Modern Registration Section
function ModernRegistrationsSection() {
  return (
    <section id="inscriptions" className="section bg-dark-900">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-500/10 text-purple-400 border-purple-500/20">
            <Users className="w-4 h-4 mr-2" />
            Inscriptions
          </Badge>
          <h2 className="mb-6 text-4xl md:text-5xl font-bold">
            Inscription fluide et{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              {"liste d'attente"}
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-300">
            Maximisez le remplissage tout en gardant le contrôle sur vos divisions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-dark-800/50 border-dark-600 p-8">
            <div className="mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 w-fit mb-4">
                <Users className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Portail d&apos;inscription</h3>
            </div>

            <ul className="space-y-4 mb-6">
              {[
                "Formulaires clairs, options équipe/duo/individuel",
                "Paiements externes ou codes d'invitation",
                "Emails de confirmation automatiques"
              ].map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>

            <Link href="https://app.comprank.fr" className="btn-primary">
              Créer un événement
            </Link>
          </Card>

          <Card className="bg-dark-800/50 border-dark-600 p-8">
            <div className="mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-r from-amber-500/10 to-yellow-500/10 w-fit mb-4">
                <Hourglass className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Liste d&apos;attente par division</h3>
            </div>

            <ul className="space-y-4 mb-6">
              {[
                "Activation en un clic par division",
                "Remplacement automatique en cas de désistement",
                "Notifications email aux athlètes en attente"
              ].map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>

            <Badge className="bg-amber-500/10 text-amber-400 border-amber-500/20 px-3 py-2">
              <Hourglass className="w-4 h-4 mr-2" />
              Auto-promotion depuis la liste d&apos;attente
            </Badge>
          </Card>
        </div>
      </div>
    </section>
  );
}

// Modern Scoring Section
function ModernScoringSection() {
  const workouts = [
    { name: "WOD 1", type: "For time", progress: 82 },
    { name: "WOD 2", type: "AMRAP 12′", progress: 64 },
    { name: "WOD 3", type: "Max load", progress: 45 },
  ];

  return (
    <section id="scoring" className="section bg-dark-800">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-500/10 text-orange-400 border-orange-500/20">
            <ListChecks className="w-4 h-4 mr-2" />
            Scoring
          </Badge>
          <h2 className="mb-6 text-4xl md:text-5xl font-bold">
            Gestion du{" "}
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              scoring
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-300">
            Un back-office rapide pour saisir, valider et publier les scores.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Progress Demo */}
          <Card className="bg-dark-700/50 border-dark-600 p-6">
            <CardHeader className="pb-4">
              <h3 className="text-xl font-semibold text-white">Progression des WODs</h3>
            </CardHeader>
            <CardContent className="space-y-6">
              {workouts.map((workout, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-white">{workout.name}</span>
                    <span className="text-sm text-gray-400">{workout.type}</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-bar-fill"
                      style={{ width: `${workout.progress}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>{workout.progress}% complété</span>
                    <span>{workout.progress === 100 ? 'Terminé' : 'En cours'}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Features */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Fonctionnalités de scoring</h3>
              <ul className="space-y-4">
                {[
                  "Validation par les juges et logs d'audit",
                  "Barèmes personnalisés par épreuve (points, temps, charge)",
                  "Publication instantanée sur le leaderboard"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-xl border border-orange-500/20">
              <Shield className="w-8 h-8 text-orange-400 mb-3" />
              <h4 className="text-lg font-semibold text-white mb-2">Validation sécurisée</h4>
              <p className="text-gray-300 text-sm">
                Chaque score est validé par un juge officiel avant publication, garantissant l&apos;intégrité des résultats.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Modern Feedback Section
function ModernFeedbackSection() {
  const feedbackItems = [
    { text: "Très bonne orga, horaires tenus.", author: "Camille", rating: 5 },
    { text: "Judging clair, WODs variés et fun.", author: "Antoine", rating: 4.5 },
    { text: "Communication top, accès facile.", author: "Sarah", rating: 5 },
  ];

  return (
    <section id="feedback" className="section bg-dark-900">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-teal-500/10 text-teal-400 border-teal-500/20">
            <MessageSquare className="w-4 h-4 mr-2" />
            Satisfaction
          </Badge>
          <h2 className="mb-6 text-4xl md:text-5xl font-bold">
            Feedback des{" "}
            <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
              athlètes
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-300">
            Collectez des retours qualifiés pour optimiser l&apos;expérience athlète.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Feedback Examples */}
          <div>
            <h3 className="text-lg font-semibold text-gray-300 mb-6">Exemples d&apos;avis</h3>
            <div className="space-y-4">
              {feedbackItems.map((item, index) => (
                <Card key={index} className="bg-dark-800/50 border-dark-600 p-4">
                  <div className="mb-2">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(item.rating)
                            ? 'text-primary-500 fill-primary-500'
                            : 'text-gray-600'
                            }`}
                        />
                      ))}
                      <span className="text-sm text-gray-400 ml-2">{item.rating}/5</span>
                    </div>
                    <p className="text-gray-300 mb-2">&quot;{item.text}&quot;</p>
                    <p className="text-xs text-gray-500">— {item.author}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Collecte automatisée</h3>
              <ul className="space-y-4">
                {[
                  "Formulaires post-événement personnalisables",
                  "Analyse des notes par épreuve et par journée",
                  "Partage automatique d'un récapitulatif aux participants"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 rounded-xl border border-teal-500/20">
              <BarChart3 className="w-8 h-8 text-teal-400 mb-3" />
              <h4 className="text-lg font-semibold text-white mb-2">Analytics avancées</h4>
              <p className="text-gray-300 text-sm">
                Obtenez des insights détaillés sur la satisfaction des participants pour améliorer vos futurs événements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Modern How It Works Section
function ModernHowItWorksSection() {
  const steps = [
    { n: 1, title: "Créez l'événement", desc: "Paramétrez divisions, WODs et plateaux.", icon: <Calendar className="w-6 h-6" /> },
    { n: 2, title: "Ouvrez les inscriptions", desc: "Gérez les places et la liste d'attente.", icon: <Users className="w-6 h-6" /> },
    { n: 3, title: "Planifiez", desc: "Construisez le planning et les heats.", icon: <Clock className="w-6 h-6" /> },
    { n: 4, title: "Attribuez les juges", desc: "Suivi des postes et validation.", icon: <Shield className="w-6 h-6" /> },
    { n: 5, title: "Scorez en live", desc: "Saisie rapide et publication instantanée.", icon: <Zap className="w-6 h-6" /> },
    { n: 6, title: "Publiez & analysez", desc: "Partagez le classement et le feedback.", icon: <BarChart3 className="w-6 h-6" /> },
  ];

  return (
    <section className="section bg-dark-800">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-indigo-500/10 text-indigo-400 border-indigo-500/20">
            Par où commencer ?
          </Badge>
          <h2 className="mb-6 text-4xl md:text-5xl font-bold">
            Comment{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
              ça marche
            </span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6">
          {steps.map((step) => (
            <Card key={step.n} className="group bg-dark-700/50 border-dark-600 hover:border-primary-500/50 transition-all duration-300 p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary-500/10 text-primary-400 group-hover:bg-primary-500/20 transition-colors">
                  {step.icon}
                </div>
                <Badge className="bg-dark-600 text-gray-400 border-dark-500">
                  Étape {step.n}
                </Badge>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors">
                {step.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {step.desc}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// Modern Bottom CTA
function ModernBottomCTA() {
  return (
    <section className="section bg-dark-900">
      <div className="container-custom">
        <Card className="relative overflow-hidden bg-gradient-to-br from-primary-500/10 via-dark-700 to-dark-800 border border-primary-500/20 p-8 lg:p-12 text-center">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/5 rounded-full blur-2xl" />

          <div className="relative z-10">
            <Badge className="mb-6 bg-primary-500/10 text-primary-400 border-primary-500/20">
              <Sparkles className="w-4 h-4 mr-2" />
              Lancez-vous maintenant
            </Badge>

            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Prêt à organiser votre{" "}
              <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                prochaine compétition ?
              </span>
            </h3>

            <p className="mx-auto max-w-2xl text-xl text-gray-300 mb-8">
              Lancez votre événement en quelques minutes et offrez une expérience premium
              à vos athlètes et spectateurs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="https://app.comprank.fr"
                className="group btn-primary text-lg px-8 py-4"
              >
                Démarrer gratuitement
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <div className="flex items-center gap-2 text-sm text-gray-400">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Pas de carte de crédit requise</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

// Modern FAQ Section
function ModernFAQSection() {
  return (
    <section id="faq" className="section bg-dark-800">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gray-500/10 text-gray-400 border-gray-500/20">
            FAQ
          </Badge>
          <h2 className="mb-6 text-4xl md:text-5xl font-bold text-white">
            Questions{" "}
            <span className="bg-gradient-to-r from-gray-400 to-gray-200 bg-clip-text text-transparent">
              fréquentes
            </span>
          </h2>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible>
            <AccordionItem value="q1">
              <AccordionTrigger>Le classement s&apos;actualise-t-il automatiquement ?</AccordionTrigger>
              <AccordionContent>
                Oui. Dès qu&apos;un score est validé par un juge, le leaderboard est mis à jour en temps réel.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q2">
              <AccordionTrigger>Puis-je rendre un leaderboard public ou privé ?</AccordionTrigger>
              <AccordionContent>
                Vous pouvez partager un lien public, intégrer l&apos;affichage sur écran géant, ou restreindre l&apos;accès aux officiels.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q3">
              <AccordionTrigger>Comment fonctionnent les listes d&apos;attente ?</AccordionTrigger>
              <AccordionContent>
                Activez-les par division. En cas de désistement, le premier de la liste reçoit une invitation et peut confirmer sa place.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q4">
              <AccordionTrigger>Puis-je importer des athlètes existants ?</AccordionTrigger>
              <AccordionContent>
                Oui, via import CSV ou envoi d&apos;invitations avec codes dédiés.
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
      <ModernHero />
      <TrustBar />
      <ModernFeatures />
      <LiveLeaderboardShowcase />
      <ModernPlanningSection />
      <ModernRegistrationsSection />
      <ModernScoringSection />
      <ModernFeedbackSection />
      <ModernHowItWorksSection />
      <ModernBottomCTA />
      <ModernFAQSection />
    </>
  );
}