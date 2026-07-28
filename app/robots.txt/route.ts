import { SITE_URL } from "@/lib/site";

// Content Signals (https://contentsignals.org/) : déclare l'usage autorisé du
// contenu du site par les robots. Indexation et réponses assistées par IA sont
// autorisées — c'est ainsi que les organisateurs nous trouvent. L'entraînement
// de modèles est réservé.
const CONTENT_SIGNAL = "search=yes, ai-input=yes, ai-train=no";

const body = `# La collecte automatisée du contenu de ce site est autorisée pour
# l'indexation par les moteurs de recherche et pour la génération de réponses
# assistées par IA. L'utilisation de ce contenu pour l'entraînement de modèles
# d'IA est réservée et nécessite l'accord écrit de CompRank.
#
# Contact : contact@comprank.fr
# Format des directives Content-Signal : https://contentsignals.org/

User-agent: *
Content-Signal: ${CONTENT_SIGNAL}
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
Host: ${SITE_URL}
`;

export const dynamic = "force-static";

export function GET() {
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
