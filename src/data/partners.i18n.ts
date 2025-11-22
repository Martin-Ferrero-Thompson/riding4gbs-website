export type PartnersSectionKey = 'pirineoPartners' | 'cimaSupporters' | 'amigosDelReto';

export type PartnersSection = {
  key: PartnersSectionKey;
  heading: string;
};

export type PartnersCta = {
  heading: string;
  bodyMd: string;
  buttonLabel: string;
  buttonHref: string; // keep configurable; currently '#'
};

export type PartnersLocaleContent = {
  metaTitle: string;
  heroTitle: string;
  heroSubtitleMd: string;
  sections: PartnersSection[];
  showDividerBeforeCta?: boolean;
  cta: PartnersCta;
};

export const partnersContent: Record<'en' | 'es' | 'fr' | 'eu', PartnersLocaleContent> = {
  en: {
    metaTitle: 'Partners',
    heroTitle: 'The Partners Behind the Challenge',
    heroSubtitleMd:
      'This ambitious challenge is only possible thanks to the generous support of our partners. Every contribution—whether financial or in-kind—directly fuels our mission to raise awareness and fund vital research for Guillain-Barré Syndrome. We are incredibly grateful to the following organizations for believing in our journey.',
    sections: [
      { key: 'pirineoPartners', heading: 'Pirineo Partners' },
      { key: 'cimaSupporters', heading: 'Cima Supporters' },
      { key: 'amigosDelReto', heading: 'Amigos del Reto' },
    ],
    showDividerBeforeCta: false,
    cta: {
      heading: 'Become a Partner: Join the Journey',
      bodyMd:
        'Associate your brand with a powerful, international story of resilience, hope, and endurance. We offer a unique opportunity to showcase your products and services to an engaged audience across Spain, the UK, and beyond. By partnering with us, you are not just sponsoring a bike ride; you are funding a cure and inspiring a community.',
      buttonLabel: 'Download Partnership Packet',
      buttonHref: '#',
    },
  },
  es: {
    metaTitle: 'Colaboradores',
    heroTitle: 'El Equipo Detrás del Reto',
    heroSubtitleMd:
      'Este ambicioso desafío solo es posible gracias al generoso apoyo de nuestros colaboradores. Cada contribución, ya sea financiera o en especie, impulsa directamente nuestra misión de crear conciencia y financiar la investigación vital para el Síndrome de Guillain-Barré. Estamos increíblemente agradecidos a las siguientes organizaciones por creer en nuestro viaje.',
    sections: [
      { key: 'pirineoPartners', heading: 'Colaboradores del Pirineo' },
      { key: 'cimaSupporters', heading: 'Apoyos de Cima' },
      { key: 'amigosDelReto', heading: 'Amigos del Reto' },
    ],
    showDividerBeforeCta: true,
    cta: {
      heading: 'Conviértete en Colaborador: Únete al Viaje',
      bodyMd:
        'Asocia tu marca con una poderosa historia internacional de resiliencia, esperanza y superación. Ofrecemos una oportunidad única para mostrar tus productos y servicios a una audiencia comprometida en España, el Reino Unido y más allá. Al colaborar con nosotros, no solo estás patrocinando un viaje en bicicleta; estás financiando una cura e inspirando a una comunidad.',
      buttonLabel: 'Descargar Dossier de Colaboración',
      buttonHref: '#',
    },
  },
  fr: {
    metaTitle: 'Partenaires',
    heroTitle: "L'Équipe Derrière le Défi",
    heroSubtitleMd:
      "Ce défi ambitieux n'est possible que grâce au soutien généreux de nos partenaires. Chaque contribution, qu'elle soit financière ou en nature, alimente directement notre mission de sensibilisation et de financement de la recherche vitale sur le syndrome de Guillain-Barré. Nous sommes incroyablement reconnaissants envers les organisations suivantes de croire en notre voyage.",
    sections: [
      { key: 'pirineoPartners', heading: 'Partenaires des Pyrénées' },
      { key: 'cimaSupporters', heading: 'Soutiens de Cima' },
      { key: 'amigosDelReto', heading: 'Amis du Défi' },
    ],
    showDividerBeforeCta: true,
    cta: {
      heading: "Devenez Partenaire : Rejoignez l'Aventure",
      bodyMd:
        "Associez votre marque à une histoire internationale puissante de résilience, d'espoir et d'endurance. Nous offrons une occasion unique de présenter vos produits et services à un public engagé en Espagne, au Royaume-Uni et au-delà. En vous associant à nous, vous ne parrainez pas seulement une randonnée à vélo ; vous financez un remède et inspirez une communauté.",
      buttonLabel: 'Télécharger le Dossier de Partenariat',
      buttonHref: '#',
    },
  },
  eu: {
    metaTitle: 'Laguntzaileak',
    heroTitle: 'Erronkaren Atzean Dagoen Taldea',
    heroSubtitleMd:
      'Erronka handinahi hau gure laguntzaileen babes eskuzabalari esker bakarrik da posible. Ekarpen bakoitzak —finantzarioa edo gauzazkoa— zuzenean bultzatzen du gure misioa: kontzientzia sortzea eta Guillain-Barré Sindromearentzako funtsezko ikerketa finantzatzea. Izugarri eskertuta gaude ondorengo erakundeei gure bidaian sinesteagatik.',
    sections: [
      { key: 'pirineoPartners', heading: 'Pirinioetako Laguntzaileak' },
      { key: 'cimaSupporters', heading: 'Cima Babesleak' },
      { key: 'amigosDelReto', heading: 'Erronkaren Lagunak' },
    ],
    showDividerBeforeCta: true,
    cta: {
      heading: 'Bihurtu Laguntzaile: Batu Bidaiara',
      bodyMd:
        'Lotu zure marka erresilientzia, itxaropen eta erresistentzia istorio indartsu eta nazioarteko batekin. Aukera paregabea eskaintzen dugu zure produktuak eta zerbitzuak Espainian, Erresuma Batuan eta haratago konprometitutako audientzia bati erakusteko. Gurekin lankidetzan arituz, ez zara bizikleta ibilaldi bat babesten ari soilik; sendabide bat finantzatzen eta komunitate bat inspiratzen ari zara.',
      buttonLabel: 'Deskargatu Lankidetza Txostena',
      buttonHref: '#',
    },
  },
};
