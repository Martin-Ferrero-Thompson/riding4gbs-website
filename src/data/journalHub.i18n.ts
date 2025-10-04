export type JournalHubDates = {
  featuredLocale: string;
  listLocale: string;
};

export type JournalHubLocaleContent = {
  metaTitle: string;
  heroTitle: string;
  heroSubtitle: string;
  featuredHeading: string;
  latestHeading: string;
  dates: JournalHubDates;
};

export const journalHubContent: Record<"en" | "es" | "fr", JournalHubLocaleContent> = {
  en: {
    metaTitle: "Journal Hub | Riding4GBS",
    heroTitle: "Journal Hub",
    heroSubtitle:
      "Follow the daily progress from the road, with updates, photos, and stories from the journey.",
    featuredHeading: "Featured Update",
    latestHeading: "Latest Updates",
    dates: { featuredLocale: "en-US", listLocale: "en-US" },
  },
  es: {
    metaTitle: "Centro del Diario | Riding4GBS",
    heroTitle: "Centro del Diario",
    heroSubtitle:
      "Sigue el progreso diario desde la carretera, con actualizaciones, fotos e historias del viaje.",
    featuredHeading: "Actualización Destacada",
    latestHeading: "Últimas Actualizaciones",
    dates: { featuredLocale: "es-ES", listLocale: "es-ES" },
  },
  fr: {
    metaTitle: "Journal de Route | Riding4GBS",
    heroTitle: "Journal de Route",
    heroSubtitle:
      "Suivez la progression quotidienne depuis la route, avec des mises à jour, des photos et des récits du voyage.",
    featuredHeading: "Mise à Jour en Vedette",
    latestHeading: "Dernières Mises à Jour",
    dates: { featuredLocale: "fr-FR", listLocale: "fr-FR" },
  },
};
