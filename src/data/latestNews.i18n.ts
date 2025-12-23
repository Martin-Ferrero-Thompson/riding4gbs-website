export type LatestNewsLocaleContent = {
  metaTitle: string;
  heroTitle: string;
  heroSubtitle: string;
  updatesHeading: string;
  placeholderHeading: string;
  placeholderBody: string;
};

export const latestNewsContent: Record<"en" | "es" | "eu", LatestNewsLocaleContent> = {
  en: {
    metaTitle: "Latest News | Riding4GBS",
    heroTitle: "Latest News",
    heroSubtitle: "Key announcements and milestone updates from the Riding4GBS journey.",
    updatesHeading: "Recent Highlights",
    placeholderHeading: "News Page Coming Alive",
    placeholderBody: "Content will appear here as official announcements and media coverage are published. Stay tuned for ride milestones, fundraising achievements, and press mentions.",
  },
  es: {
    metaTitle: "Últimas Noticias | Riding4GBS",
    heroTitle: "Últimas Noticias",
    heroSubtitle: "Anuncios clave y actualizaciones de hitos del viaje Riding4GBS.",
    updatesHeading: "Aspectos Recientes",
    placeholderHeading: "La página de noticias está tomando forma",
    placeholderBody: "El contenido aparecerá aquí a medida que se publiquen anuncios oficiales y cobertura mediática. Mantente atento a los hitos del viaje, logros de recaudación y menciones en prensa.",
  },
  eu: {
    metaTitle: "Azken Albisteak | Riding4GBS",
    heroTitle: "Azken Albisteak",
    heroSubtitle: "Riding4GBS bidaiaren iragarpen nagusiak eta mugarrien eguneraketak.",
    updatesHeading: "Azken Nabarmentzeak",
    placeholderHeading: "Albisteen Orria Bizitzen Ari Da",
    placeholderBody: "Edukia hemen agertuko da iragarpen ofizialak eta hedabideen estaldura argitaratu ahala. Egon adi bidaiaren mugarriei, diru-bilketaren lorpen-ei eta prentsa-aipamenei.",
  },
};
