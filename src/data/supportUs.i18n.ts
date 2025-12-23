export type SupportUsLocaleContent = {
  metaTitle: string;
  heroTitle: string;
  heroIntroMd: string;
  section: {
    heading: string;
    bodyMd: string;
  };
  carousel: {
    title: string;
    footerMd: string;
  };
  cta: {
    label: string;
    url?: string; // optional per-locale URL for the CTA
    missingMd?: string; // optional fallback message when url is missing
  };
};

export const supportUsContent: Record<'en' | 'es' | 'eu', SupportUsLocaleContent> = {
  en: {
    metaTitle: 'Support Us',
    heroTitle: 'Be Part of the Effort',
    heroIntroMd:
      'A self-supported ride across the Pyrenees is a huge logistical challenge. This page is for friends, family, and members of the cycling community who wish to contribute directly to supporting the ride itself. This support is entirely separate from the charitable fundraising.',
    section: {
      heading: '⚙️ Help Keep the Wheels Turning',
      bodyMd:
        'Every aspect of this journey, from specialized gear and durable components to daily nutrition and simple shelter, is self-funded. Your direct contribution, no matter the size, helps cover these essential costs and provides a huge morale boost to the team on our **Slow Road Back**.',
    },
    carousel: {
      title: 'Our Incredible Support Crew',
      footerMd:
        'A heartfelt thank you to everyone who has directly contributed to making this journey possible. Your support means the world to us!',
    },
    cta: {
      label: 'Join our amazing support crew!',
      url: 'https://Ko-fi.com/riding4gbs',
      missingMd:
        "CTA coming soon. In the meantime, please reach out if you'd like to contribute directly to the ride support.",
    },
  },
  es: {
    metaTitle: 'Apóyanos',
    heroTitle: 'Sé Parte del Esfuerzo',
    heroIntroMd:
      'Un viaje autosuficiente a través de los Pirineos es un enorme desafío logístico. Esta página es para amigos, familiares y miembros de la comunidad ciclista que deseen contribuir directamente al apoyo del propio viaje. Este apoyo es totalmente independiente de la recaudación de fondos benéficos.',
    section: {
      heading: '⚙️ Ayuda a que las Ruedas Sigan Girando',
      bodyMd:
        'Cada aspecto de este viaje, desde el equipo especializado y los componentes duraderos hasta la nutrición diaria y el refugio simple, es autofinanciado. Tu contribución directa, sin importar el tamaño, ayuda a cubrir estos costos esenciales y proporciona un gran impulso moral en nuestro **Lento Camino de Regreso**.',
    },
    carousel: {
      title: 'Nuestro Increíble Equipo de Apoyo',
      footerMd:
        'A sincere agradecimiento a todos los que han contribuido directamente para hacer posible este viaje. ¡Tu apoyo significa el mundo para nosotros!',
    },
    cta: {
      label: '¡Únete a nuestro increíble equipo de apoyo!',
      url: 'https://Ko-fi.com/riding4gbs',
      missingMd:
        'CTA próximamente. Mientras tanto, ponte en contacto si deseas contribuir directamente al apoyo del viaje.',
    },
  },
  eu: {
    metaTitle: 'Lagundu Guri',
    heroTitle: 'Izan Ahaleginaren Parte',
    heroIntroMd:
      'Pirinioak zeharkatzea autosufizientzian erronka logistiko itzela da. Orrialde hau bidaia bera zuzenean lagundu nahi duten lagun, senide eta txirrindularitza komunitateko kideentzat da. Laguntza hau karitatezko diru-bilketatik guztiz bereizita dago.',
    section: {
      heading: '⚙️ Lagundu Gurpilak Biraka Mantentzen',
      bodyMd:
        'Bidaia honen alderdi bakoitza, ekipamendu espezializatutik eta osagai iraunkorretatik hasi eta eguneroko elikadura eta aterpe sinpleraino, autofinantzatua da. Zure ekarpen zuzenak, tamaina edozein dela ere, ezinbesteko kostu horiek estaltzen laguntzen du eta bultzada moral handia ematen dio taldeari gure **Itzulera Bide Motelan**.',
    },
    carousel: {
      title: 'Gure Laguntza Talde Sinestezina',
      footerMd:
        'Bihotzezko eskerrak bidaia hau posible egiten zuzenean lagundu duzuen guztioi. Zure laguntzak mundua esan nahi du guretzat!',
    },
    cta: {
      label: 'Batu gure laguntza talde zoragarrira!',
      url: 'https://Ko-fi.com/riding4gbs',
      missingMd:
        'CTA laster. Bitartean, jarri harremanetan bidaiaren laguntzan zuzenean lagundu nahi baduzu.',
    },
  },
};
