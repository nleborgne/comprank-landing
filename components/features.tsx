import {
  Trophy,
  Users,
  LineChart,
  Clock,
  Gauge,
  Calendar,
  Smartphone,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="card p-6 hover:border-primary-600/60 border-black/60 border-2 transition-all duration-300">
      <div className="p-3 rounded-lg bg-primary-500/10 inline-flex mb-4 text-primary-500">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Trophy size={24} />,
      title: "Classements en Direct",
      description:
        "Mises à jour des scores en temps réel visibles par les athlètes et les spectateurs sur n'importe quel appareil.",
      delay: 100,
    },
    {
      icon: <Users size={24} />,
      title: "Gestion des Athlètes",
      description:
        "Inscription facile, affectation des équipes et organisation des divisions pour les compétiteurs.",
      delay: 200,
    },
    {
      icon: <LineChart size={24} />,
      title: "Analyses de Performance",
      description:
        "Suivi complet des données et métriques de performance pertinentes pour les athlètes.",
      delay: 300,
    },
    {
      icon: <Clock size={24} />,
      title: "Chronométrage des WODs",
      description:
        "Système de chronométrage automatisé avec affichage des comptes à rebours et gestion des séries (heats).",
      delay: 400,
    },
    {
      icon: <Gauge size={24} />,
      title: "Système de Score",
      description:
        "Options de notation flexibles avec allocations de points personnalisables par épreuve.",
      delay: 500,
    },
    {
      icon: <Calendar size={24} />,
      title: "Planification d'Événements",
      description:
        "Interface de calendrier intuitive pour gérer plusieurs événements et séries (heats).",
      delay: 600,
    },
    {
      icon: <Smartphone size={24} />,
      title: "Notation Mobile",
      description:
        "Enregistrez les scores via des appareils mobiles avec capacité hors ligne et synchronisation.",
      delay: 700,
    },
    {
      icon: <CheckCircle size={24} />,
      title: "Gestion des Juges",
      description:
        "Assignez des juges aux postes, suivez les no-reps et validez les scores en temps réel.",
      delay: 800,
    },
    {
      icon: <AlertTriangle size={24} />,
      title: "Standards Adaptatifs",
      description:
        "Adaptez les WODs pour différentes divisions et gérez les performances Rx versus Scaled.",
      delay: 900,
    },
  ];

  return (
    <section id="features" className="section bg-dark-800">
      <div className="container-custom">
        <div className="section-title">
          <h2 className="mb-4">
            <span className="text-primary-500">Fonctionnalités</span> Innovantes
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            Tout ce dont vous avez besoin pour organiser des compétitions
            professionnelles du début à la fin
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
