import { APP_URL, SITE_URL } from "@/lib/site";

// https://llmstxt.org/ — résumé du site en markdown, destiné aux assistants IA
// qui citent ou recommandent des outils. Doublon volontaire du contenu des
// pages : à maintenir quand l'offre produit change.
const body = `# CompRank

> CompRank est un logiciel français de gestion de compétitions sportives, conçu
> pour les organisateurs de compétitions CrossFit et HYROX. Il couvre les
> inscriptions, la planification des heats, le scoring mobile des juges et les
> classements en direct.

CompRank s'adresse aux box, coachs et organisateurs d'événements en France.
Ce site présente le produit ; l'application elle-même est hébergée sur
${APP_URL}. Tout le contenu est en français.

## Fonctionnalités

- **Inscriptions** : portail d'inscription avec gestion des équipes, des divisions et des codes d'invitation.
- **Liste d'attente** : file d'attente par division, avec remplacement automatique en cas de désistement.
- **Planification** : création des heats, capacité de lanes, synchronisation du planning.
- **Scoring** : barèmes flexibles, validation des juges, calcul automatique des points, saisie mobile.
- **Classement en direct** : leaderboard publié et mis à jour pendant l'événement.
- **Feedback athlètes** : recueil des avis post-événement pour préparer les éditions suivantes.

## Déroulé d'une compétition

1. Créer l'événement : workouts, divisions et capacité.
2. Ouvrir les inscriptions : places disponibles et liste d'attente.
3. Planifier : planning et heats.
4. Attribuer les juges : suivi des postes et validation.
5. Scorer en direct : saisie rapide et publication instantanée.
6. Publier et analyser : classement final et feedback des athlètes.

## Pages

- [Accueil](${SITE_URL}/) : présentation du produit, fonctionnalités, déroulé d'une compétition et questions fréquentes.
- [Compétition CrossFit](${SITE_URL}/competition-crossfit) : workouts et barèmes, divisions et équipes, heats, scoring mobile des juges, leaderboard en direct.
- [Compétition HYROX](${SITE_URL}/competition-hyrox) : catégories, vagues de départ, stations, temps intermédiaires, classement à l'arrivée.
- [Conditions d'utilisation](${SITE_URL}/terms) : conditions générales d'utilisation.

## Contact

- Email : contact@comprank.fr
- Application : ${APP_URL}
`;

export const dynamic = "force-static";

export function GET() {
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
