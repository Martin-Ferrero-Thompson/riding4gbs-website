export type LandingLocale = "en" | "es" | "eu" | "fr";

// Per-locale flag (emoji or asset path). For Ikurriña we reuse the SVG used elsewhere.
export const landingFlag: Record<LandingLocale, string> = {
  en: "🇬🇧",
  es: "🇪🇸",
  eu: "/flags/eu.svg",
  fr: "🇫🇷",
};

// Lead paragraph describing the challenge (language-specific full sentence).
export const landingIntroLead: Record<LandingLocale, string> = {
  en: "In October 2026, this epic 2,000km journey across the Pyrenees is dedicated to funding vital GBS research through our international partners below.",
  es: "En octubre de 2026, este épico viaje de 2.000 km a través de los Pirineos está dedicado a financiar la investigación vital del SGB a través de nuestros socios internacionales a continuación.",
  eu: "2026ko urrian, Pirinioetan zehar 2.000 km-ko ibilaldi epiko hau gure nazioarteko bazkideen bidez GBS ikerketa funtsezkoa finantzatzeari eskainita dago.",
  fr: "En octobre 2026, ce voyage épique de 2 000 km à travers les Pyrénées est dédié au financement de la recherche essentielle sur le SGB par le biais de nos partenaires internationaux ci-dessous.",
};

// Short, action-oriented instruction shown beneath each language intro.
export const landingIntroInstruction: Record<LandingLocale, string> = {
  en: "Select from the partners below.",
  es: "Selecciona uno de los socios a continuación.",
  eu: "Aukeratu beheko bazkideen artean.",
  fr: "Sélectionnez l’un des partenaires ci-dessous.",
};

// Helper shape to consume in pages if needed.
export interface LandingCopy {
  flag: string;
  lead: string;
  instruction: string;
}

export const landingCopy: Record<LandingLocale, LandingCopy> = Object.fromEntries(
  (Object.keys(landingFlag) as LandingLocale[]).map((loc) => [
    loc,
    { flag: landingFlag[loc], lead: landingIntroLead[loc], instruction: landingIntroInstruction[loc] },
  ])
) as Record<LandingLocale, LandingCopy>;
