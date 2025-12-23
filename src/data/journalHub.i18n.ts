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

export const journalHubContent: Record<"en" | "es" | "eu", JournalHubLocaleContent> = {
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
  eu: {
    metaTitle: "Egunkari Zentroa | Riding4GBS",
    heroTitle: "Egunkari Zentroa",
    heroSubtitle:
      "Jarraitu eguneroko aurrerapena errepidetik, eguneraketekin, argazkiekin eta bidaiaren istorioekin.",
    featuredHeading: "Eguneraketa Nabarmena",
    latestHeading: "Azken Eguneraketak",
    dates: { featuredLocale: "eu-ES", listLocale: "eu-ES" },
  },
};
