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
  cards: DonateCard[];
};

export const donateContent: Record<'en' | 'es' | 'fr', DonateLocaleContent> = {
  en: {
    metaTitle: 'Donate',
    heroTitle: 'Support the Mission: Fund a Cure',
    heroIntroMd:
      'This epic challenge is dedicated to one single goal: funding the vital research that will lead to better treatments and, one day, a cure for Guillain-Barré Syndrome. 100% of every charitable donation goes directly to our official partner organizations. Your contribution, no matter the size, is a powerful act of hope for every person affected by this devastating condition.',
    cards: [
      {
        id: 'uk',
        title: 'For UK Donors',
        image: { src: '/logos/INUK-Wordmark-Logo_RGB.png', alt: 'Inflammatory Neuropathies UK Logo' },
        bodyMd:
          'Support the research funded by Inflammatory Neuropathies UK. UK taxpayers can add 25% to their donation at no extra cost through **Gift Aid**.',
        buttonLabel: 'Donate in £ (GBP)',
      },
      {
        id: 'es',
        title: 'Para donantes españoles',
        image: { src: '/logos/GBS-CIDP_neuropatias-RC-3.png', alt: 'GBS CIDP España Logo' },
        bodyMd:
          'Apoya la investigación financiada por GBS|CIDP España para ayudar a los pacientes en toda España.',
        buttonLabel: 'Donar en € (EUR)',
      },
      {
        id: 'fr',
        title: 'Para donantes franceses',
        image: { src: '/logos/fr.jpg', alt: 'Association Française du Syndrome de Guillain-Barré Logo' },
        bodyMd:
          "Soutenez la recherche financée par l'Association Française du Syndrome de Guillain-Barré.",
        buttonLabel: 'Faire un don en € (EUR)',
      },
    ],
  },
  es: {
    metaTitle: 'Donar',
    heroTitle: 'Apoya la Misión: Financia una Cura',
    heroIntroMd:
      'Este desafío épico está dedicado a un único objetivo: financiar la investigación vital que conducirá a mejores tratamientos y, un día, a una cura para el Síndrome de Guillain-Barré. El 100% de cada donación benéfica va directamente a nuestras organizaciones asociadas oficiales. Tu contribución, sin importar el tamaño, es un poderoso acto de esperanza para cada persona afectada por esta devastadora condición.',
    cards: [
      {
        id: 'uk',
        title: 'Para Donantes del Reino Unido',
        image: { src: '/logos/INUK-Wordmark-Logo_RGB.png', alt: 'Logo de Inflammatory Neuropathies UK' },
        bodyMd:
          'Apoya la investigación financiada por Inflammatory Neuropathies UK. Los contribuyentes del Reino Unido pueden añadir un 25% a su donación sin coste adicional a través de **Gift Aid**.',
        buttonLabel: 'Donar en £ (GBP)',
      },
      {
        id: 'es',
        title: 'Para Donantes Españoles y de la UE',
        image: { src: '/logos/GBS-CIDP_neuropatias-RC-3.png', alt: 'Logo de GBS CIDP España' },
        bodyMd:
          'Apoya la investigación financiada por GBS|CIDP España para ayudar a los pacientes en toda España.',
        buttonLabel: 'Donar en € (EUR)',
      },
      {
        id: 'fr',
        title: 'Para Donantes Franceses',
        image: { src: '/logos/fr.jpg', alt: 'Logo de la Association Française du Syndrome de Guillain-Barré' },
        bodyMd:
          "Soutenez la recherche financée par l'Association Française du Syndrome de Guillain-Barré.",
        buttonLabel: 'Faire un don en € (EUR)',
      },
    ],
  },
  fr: {
    metaTitle: 'Faire un Don',
    heroTitle: 'Soutenez la Mission : Financez un Remède',
    heroIntroMd:
      "Ce défi épique est dédié à un seul objectif : financer la recherche vitale qui mènera à de meilleurs traitements et, un jour, à un remède pour le syndrome de Guillain-Barré. 100% de chaque don caritatif va directement à nos organisations partenaires officielles. Votre contribution, quelle que soit sa taille, est un puissant acte d'espoir pour chaque personne touchée par cette maladie dévastatrice.",
    cards: [
      {
        id: 'uk',
        title: 'Pour les Donateurs Britanniques',
        image: { src: '/logos/INUK-Wordmark-Logo_RGB.png', alt: 'Logo de Inflammatory Neuropathies UK' },
        bodyMd:
          'Soutenez la recherche financée par Inflammatory Neuropathies UK. Les contribuables britanniques peuvent ajouter 25% à leur don sans frais supplémentaires grâce au **Gift Aid**.',
        buttonLabel: 'Faire un don en £ (GBP)',
      },
      {
        id: 'es',
        title: "Pour les Donateurs Espagnols et de l'UE",
        image: { src: '/logos/GBS-CIDP_neuropatias-RC-3.png', alt: 'Logo de GBS CIDP España' },
        bodyMd:
          'Apoya la investigación financiada por GBS|CIDP España para ayudar a los pacientes en toda España.',
        buttonLabel: 'Donar en € (EUR)',
      },
      {
        id: 'fr',
        title: 'Pour les Donateurs Français',
        image: { src: '/logos/fr.jpg', alt: "Logo de l'Association Française du Syndrome de Guillain-Barré" },
        bodyMd:
          "Soutenez la recherche financée par l'Association Française du Syndrome de Guillain-Barré.",
        buttonLabel: 'Faire un don en € (EUR)',
      },
    ],
  },
};
