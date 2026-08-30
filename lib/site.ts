import type { Metadata } from "next";

export const SITE_NAME = "CompRank";
export const SITE_URL = "https://www.comprank.fr";
export const APP_URL = "https://app.comprank.fr";

// Liens vers les fiches store de l'app mobile CompRank.
// L'ID App Store est un PLACEHOLDER jusqu'à la publication de l'app. La landing
// peut être déployée avant : remplacer uniquement cette constante le jour de la
// publication. L'URL Play est déjà définitive.
export const IOS_APP_URL =
  "https://apps.apple.com/fr/app/comprank/id0000000000";
export const ANDROID_APP_URL =
  "https://play.google.com/store/apps/details?id=com.comprank.comprank";

export const SITE_DESCRIPTION =
  "Gérez inscriptions, planning, Scorecards et classements avec CompRank, plus la Régie live et le chronométrage RFID pour vos compétitions CrossFit et HYROX.";

type PageMetadata = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadata): Metadata {
  return {
    title: {
      absolute: `${title} | ${SITE_NAME}`,
    },
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: "fr_FR",
      type: "website",
      images: [
        {
          url: "/og-card.png",
          width: 1200,
          height: 630,
          alt: "CompRank, logiciel de gestion de compétitions CrossFit et HYROX",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: ["/og-card.png"],
    },
  };
}
