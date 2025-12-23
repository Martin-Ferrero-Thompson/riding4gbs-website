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

export const ourProgressContent: Record<"en" | "es" | "eu", OurProgressLocaleContent> = {
  en: {
    metaTitle: "Our Progress",
    heroTitle: "Follow The Journey",
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
    heroTitle: "Sigue el Viaje",
    heroSubtitle: "Esta página se actualizará diariamente con datos desde la carretera.",
    mapHeading: "Mapa de Ubicación en Vivo",
    mapIntro:
      "Este mapa muestra la ruta completada hasta ahora. ¡Vuelve a diario para ver mi progreso a través de los Pirineos!",
    mapImageAlt: "El mapa de la ruta para el desafío.",
    numbersHeading: "Las Cifras",
    format: { gbpLocale: "en-GB", eurLocale: "de-DE" },
  },
  eu: {
    metaTitle: "Gure Aurrerapena",
    heroTitle: "Jarraitu Bidaia",
    heroSubtitle: "Orrialde hau egunero eguneratuko da errepideko datuekin.",
    mapHeading: "Zuzeneko Kokapen Mapa",
    mapIntro:
      "Mapa honek orain arte osatutako ibilbidea erakusten du. Itzuli egunero nire aurrerapena Pirinioetan zehar ikusteko!",
    mapImageAlt: "Erronkaren ibilbide mapa.",
    numbersHeading: "Zenbakiak",
    format: { gbpLocale: "en-GB", eurLocale: "es-ES" },
  },
};
