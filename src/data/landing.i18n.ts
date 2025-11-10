export type LandingInstructionLocale = "en" | "es" | "fr";

// Short, action-oriented instruction shown on the root landing page
// beneath each language intro. Keep phrasing concise and consistent.
export const landingIntroInstruction: Record<LandingInstructionLocale, string> = {
  en: "Select from the partners below.",
  es: "Selecciona uno de los socios a continuación.",
  fr: "Sélectionnez l’un des partenaires ci-dessous.",
};
