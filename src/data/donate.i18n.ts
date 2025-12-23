export type DonateCardId = 'uk' | 'es' | 'eu';

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
  comingSoon: string;
};

export const donateContent: Record<'en' | 'es' | 'eu', DonateLocaleContent> = {
  en: {
    metaTitle: 'Donate',
    heroTitle: 'Support Patient-Led Research in the UK',
    heroIntroMd: [
      'We are proud to partner with Inflammatory Neuropathies UK, the national organisation supporting people affected by GBS, CIDP, and related conditions.',
      '100% of every donation made here in the UK will go directly to their vital work. Your support will help fund the research that UK patients and families have identified as their top priorities.',
      'Your contribution can help:\n\n- Map long-term symptoms and residuals to improve daily patient care.\n- Investigate the fear of recurrence and develop better support systems.\n- Understand the impact of aging on GBS and CIDP survivors.\n- Improve emotional and mental health support for patients, families, and caregivers.\n- Provide the long-term impact of committed physiotherapy on recovery.',
      'This is your chance to fund the research that matters most to the people who matter most.',
    ].join('\n\n'),
    comingSoon: 'Donation options coming soon',
    card: {
      id: 'uk',
      title: 'Donate to:',
      image: { src: '/logos/INUK-Wordmark-Logo_RGB.png', alt: 'Inflammatory Neuropathies UK Logo' },
      bodyMd:
        'Your contribution, no matter the size, will make a real difference. UK taxpayers can add 25% to their donation at no extra cost through **Gift Aid**. Thank you for your support.',
      buttonLabel: 'Donate in £ (GBP)',
    },
  },
  es: {
    metaTitle: 'Donar',
    heroTitle: 'Apoya la Misión: Financia una Cura',
    heroIntroMd:
      'Este desafío épico está dedicado a un único objetivo: financiar la investigación vital que conducirá a mejores tratamientos y, un día, a una cura para el Síndrome de Guillain-Barré. El 100% de cada donación benéfica va directamente a nuestras organizaciones asociadas oficiales. Tu contribución, sin importar el tamaño, es un poderoso acto de esperanza para cada persona afectada por esta devastadora condición.',
    comingSoon: 'Próximamente',
    card: {
      id: 'es',
      title: 'Para Donantes Españoles',
      image: { src: '/logos/GBS-CIDP_neuropatias-RC-3.png', alt: 'Logo de GBS CIDP España' },
      bodyMd:
        'Apoya la investigación financiada por GBS|CIDP España para ayudar a los pacientes en toda España.',
      buttonLabel: 'Donar en € (EUR)',
    },
  },
  eu: {
    metaTitle: 'Dohaintza egin',
    heroTitle: 'Lagundu Misioa: Finantzatu Sendabidea',
    heroIntroMd:
      'Erronka epiko hau helburu bakar bati eskainita dago: Guillain-Barré Sindromearentzako tratamendu hobeak eta, egunen batean, sendabidea ekarriko duen funtsezko ikerketa finantzatzea. Karitatezko dohaintza bakoitzaren %100 gure erakunde laguntzaile ofizialetara doa zuzenean. Zure ekarpena, tamaina edozein dela ere, itxaropen ekintza indartsua da egoera suntsitzaile honek kaltetutako pertsona bakoitzarentzat.',
    comingSoon: 'Laster',
    card: {
      id: 'eu',
      title: 'Espainiako Emaileentzat',
      image: { src: '/logos/GBS-CIDP_neuropatias-RC-3.png', alt: 'GBS CIDP España Logotipoa' },
      bodyMd:
        'Lagundu GBS|CIDP España-k finantzatutako ikerketa Espainia osoko pazienteei laguntzeko.',
      buttonLabel: 'Egin dohaintza €-tan (EUR)',
    },
  },
};
