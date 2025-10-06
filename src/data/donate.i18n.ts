export type DonateCardId = 'uk' | 'es' | 'fr';

export type DonateCard = {
  id: DonateCardId;
  title: string;
  image: { src: string; alt: string };
  bodyMd: string;
  buttonLabel: string;
};

export type DonateLocaleContent = {
  metaTitle: string;
  heroTitle: string;
  heroIntroMd: string;
  card: DonateCard; // single, locale-specific donation card
};

export const donateContent: Record<'en' | 'es' | 'fr', DonateLocaleContent> = {
  en: {
    metaTitle: 'Donate',
    heroTitle: 'Support the Mission: Fund a Cure',
    heroIntroMd:
      'This epic challenge is dedicated to one single goal: funding the vital research that will lead to better treatments and, one day, a cure for Guillain-Barré Syndrome. 100% of every charitable donation goes directly to our official partner organizations. Your contribution, no matter the size, is a powerful act of hope for every person affected by this devastating condition.',
    card: {
      id: 'uk',
      title: 'For UK Donors',
      image: { src: '/logos/INUK-Wordmark-Logo_RGB.png', alt: 'Inflammatory Neuropathies UK Logo' },
      bodyMd:
        'Support the research funded by Inflammatory Neuropathies UK. UK taxpayers can add 25% to their donation at no extra cost through **Gift Aid**.',
      buttonLabel: 'Donate in £ (GBP)',
    },
  },
  es: {
    metaTitle: 'Donar',
    heroTitle: 'Apoya la Misión: Financia una Cura',
    heroIntroMd:
      'Este desafío épico está dedicado a un único objetivo: financiar la investigación vital que conducirá a mejores tratamientos y, un día, a una cura para el Síndrome de Guillain-Barré. El 100% de cada donación benéfica va directamente a nuestras organizaciones asociadas oficiales. Tu contribución, sin importar el tamaño, es un poderoso acto de esperanza para cada persona afectada por esta devastadora condición.',
    card: {
      id: 'es',
      title: 'Para Donantes Españoles',
      image: { src: '/logos/GBS-CIDP_neuropatias-RC-3.png', alt: 'Logo de GBS CIDP España' },
      bodyMd:
        'Apoya la investigación financiada por GBS|CIDP España para ayudar a los pacientes en toda España.',
      buttonLabel: 'Donar en € (EUR)',
    },
  },
  fr: {
    metaTitle: 'Faire un Don',
    heroTitle: 'Soutenez la Mission : Financez un Remède',
    heroIntroMd:
      "Ce défi épique est dédié à un seul objectif : financer la recherche vitale qui mènera à de meilleurs traitements et, un jour, à un remède pour le syndrome de Guillain-Barré. 100% de chaque don caritatif va directement à nos organisations partenaires officielles. Votre contribution, quelle que soit sa taille, est un puissant acte d'espoir pour chaque personne touchée par cette maladie dévastatrice.",
    card: {
      id: 'fr',
      title: 'Pour les Donateurs Français',
      image: { src: '/logos/fr.jpg', alt: "Logo de l'Association Française du Syndrome de Guillain-Barré" },
      bodyMd:
        "Soutenez la recherche financée par l'Association Française du Syndrome de Guillain-Barré.",
      buttonLabel: 'Faire un don en € (EUR)',
    },
  },
};
