export type OurProgressFormat = {
  gbpLocale: string;
  eurLocale: string;
  climbingNumberLocale?: string;
};

export type OurProgressLocaleContent = {
  metaTitle: string;
  heroTitle: string;
  heroSubtitle: string;
  mapHeading: string;
  mapIntro: string;
  mapImageAlt: string;
  numbersHeading: string;
  format: OurProgressFormat;
};

export const ourProgressContent: Record<"en" | "es" | "fr", OurProgressLocaleContent> = {
  en: {
    metaTitle: "Our Progress",
    heroTitle: "Follow The Journey: Live Progress",
    heroSubtitle: "This page will be updated daily with data from the road.",
    mapHeading: "Live Location Map",
    mapIntro:
      "This map shows the completed route so far. Check back daily to see my progress across the Pyrenees!",
    mapImageAlt: "The route map for the challenge.",
    numbersHeading: "By the Numbers",
    format: { gbpLocale: "en-GB", eurLocale: "de-DE" },
  },
  es: {
    metaTitle: "Nuestro Progreso",
    heroTitle: "Sigue el Viaje: Progreso en Vivo",
    heroSubtitle: "Esta página se actualizará diariamente con datos desde la carretera.",
    mapHeading: "Mapa de Ubicación en Vivo",
    mapIntro:
      "Este mapa muestra la ruta completada hasta ahora. ¡Vuelve a diario para ver mi progreso a través de los Pirineos!",
    mapImageAlt: "El mapa de la ruta para el desafío.",
    numbersHeading: "Las Cifras",
    format: { gbpLocale: "en-GB", eurLocale: "de-DE" },
  },
  fr: {
    metaTitle: "Notre Progression",
    heroTitle: "Suivez l'Aventure : Progression en Direct",
    heroSubtitle: "Cette page sera mise à jour quotidiennement avec les données de la route.",
    mapHeading: "Carte de Localisation en Direct",
    mapIntro:
      "Cette carte montre l'itinéraire accompli jusqu'à présent. Revenez chaque jour pour voir ma progression à travers les Pyrénées !",
    mapImageAlt: "La carte de l'itinéraire du défi.",
    numbersHeading: "Les Chiffres",
    format: { gbpLocale: "en-GB", eurLocale: "fr-FR", climbingNumberLocale: "fr-FR" },
  },
};
