export type SupportMeLocaleContent = {
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

export const supportMeContent: Record<'en' | 'es' | 'fr', SupportMeLocaleContent> = {
  en: {
    metaTitle: 'Support Me',
    heroTitle: 'Be Part of the Effort',
    heroIntroMd:
      'A self-supported ride across the Pyrenees is a huge logistical challenge. This page is for friends, family, and members of the cycling community who wish to contribute directly to the effort of the ride itself. This support is entirely separate from the charitable fundraising.',
    section: {
      heading: '⚙️ Help Keep the Wheels Turning',
      bodyMd:
        'Every aspect of this journey, from specialized gear and durable components to daily nutrition and simple shelter, is self-funded. Your direct contribution, no matter the size, helps cover these essential costs and provides a huge morale boost on my **Slow Road Back**.',
    },
    carousel: {
      title: 'Our Incredible Support Crew',
      footerMd:
        'A heartfelt thank you to everyone who has directly contributed to making this journey possible. Your support means the world to me!',
    },
    cta: {
      label: 'Want to see your name here - Join my amazing support crew!',
      url: 'https://Ko-fi.com/riding4gbs',
      missingMd:
        "CTA coming soon. In the meantime, please reach out if you'd like to contribute directly to the ride support.",
    },
  },
  es: {
    metaTitle: 'Apóyame',
    heroTitle: 'Sé Parte del Esfuerzo',
    heroIntroMd:
      'Un viaje autosuficiente a través de los Pirineos es un enorme desafío logístico. Esta página es para amigos, familiares y miembros de la comunidad ciclista que deseen contribuir directamente al esfuerzo del propio viaje. Este apoyo es totalmente independiente de la recaudación de fondos benéficos.',
    section: {
      heading: '⚙️ Ayuda a que las Ruedas Sigan Girando',
      bodyMd:
        'Cada aspecto de este viaje, desde el equipo especializado y los componentes duraderos hasta la nutrición diaria y el refugio simple, es autofinanciado. Tu contribución directa, sin importar el tamaño, ayuda a cubrir estos costos esenciales y proporciona un gran impulso moral en mi **Lento Camino de Regreso**.',
    },
    carousel: {
      title: 'Nuestro Increíble Equipo de Apoyo',
      footerMd:
        'Un sincero agradecimiento a todos los que han contribuido directamente para hacer posible este viaje. ¡Tu apoyo significa el mundo para mí!',
    },
    cta: {
      label: '¿Quieres ver tu nombre aquí? ¡Únete a mi increíble equipo de apoyo!',
      url: 'https://Ko-fi.com/riding4gbs',
      missingMd:
        'CTA próximamente. Mientras tanto, ponte en contacto si deseas contribuir directamente al apoyo del viaje.',
    },
  },
  fr: {
    metaTitle: 'Soutenez-moi',
    heroTitle: "Participez à l'Effort",
    heroIntroMd:
      "Une traversée des Pyrénées en autonomie est un énorme défi logistique. Cette page est destinée aux amis, à la famille et aux membres de la communauté cycliste qui souhaitent contribuer directement à l'effort du voyage lui-même. Ce soutien est entièrement distinct de la collecte de fonds caritative.",
    section: {
      heading: '⚙️ Aidez à Faire Tourner les Roues',
      bodyMd:
        "Chaque aspect de ce voyage, de l'équipement spécialisé et des composants durables à la nutrition quotidienne et à l'abri simple, est autofinancé. Votre contribution directe, quelle que soit sa taille, aide à couvrir ces coûts essentiels et constitue un énorme soutien moral pour mon **Lent Chemin du Retour**.",
    },
    carousel: {
      title: 'Notre Incroyable Équipe de Soutien',
      footerMd:
        'Un grand merci à tous ceux qui ont contribué directement à rendre ce voyage possible. Votre soutien compte énormément pour moi !',
    },
    cta: {
      label: 'Rejoignez mon incroyable équipe de soutien !',
      url: 'https://Ko-fi.com/riding4gbs',
      missingMd:
        "CTA à venir. En attendant, contactez-moi si vous souhaitez contribuer directement au soutien du voyage.",
    },
  },
};
