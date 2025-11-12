export type Supporter = {
  id: string;
  href: string;
  imgSrc: string;
  imgAlt: string;
  overlayTitle: string;
  ctaLabel: string;
  ctaLang: "en" | "es" | "fr"; // language of the CTA label for screen readers
};

export type HomeLocaleContent = {
  metaTitle: string;
  heroTitle: string;
  hometownPartnerHeading: string;
  hometownPartnerDescriptionMd: string; // markdown-supported
  supportersHeading: string;
  introParagraphsMd: string[]; // array of markdown strings
  partnerLinkTitle: string; // title attribute for Cycla link
  partnerLogoAlt: string; // localized alt for Cycla logo
  supporters: Supporter[]; // supporters cards with per-card CTA labels
  supportMessage?: {
    heading: string;
    quote: string;
    attribution: string;
    ctaLabel: string;
    ctaHref?: string; // optional override for CTA link
  };
};

export const homeContent: Record<"en" | "es" | "fr", HomeLocaleContent> = {
  en: {
    metaTitle: "The Slow Road Back | Home",
    heroTitle: "The Slow Road Back",
    hometownPartnerHeading: "Our Hometown Partner",
    hometownPartnerDescriptionMd:
      "We are incredibly proud to partner with **Cycla Bikes**, our local bike shop here in Pamplona. Their expert support and deep roots in the cycling community are a cornerstone of this challenge. They are generously providing the official **Start and Finish Line** for this epic journey.",
    supportersHeading: "Proudly Supporting:",
    introParagraphsMd: [
      "My name is Martin, and I am a survivor of Guillain-Barré Syndrome (GBS). My recovery taught me that the journey is more important than the destination. This is my **Slow Road Back**.",
      "**In October 2026**, I will begin a deeply personal cycling challenge, starting from my home in Pamplona. With my incredible wife, Edurne, as the heart of my support team, we are taking on the Pyrenees. Our goal is for us to ride from the Atlantic coast to the Mediterranean and back again to see how far this journey of resilience will take us.",
      "Our ride is a shared mission to raise vital awareness and funds for the GBS community. We don't know exactly how many days it will take, or how many mountains will have to be climbed. But we invite you to follow along, day by day, on our journey of hope and resilience.",
    ],
    partnerLinkTitle: "Cycla Bikes - Your reference cycling workshop",
    partnerLogoAlt: "Cycla Bikes Pamplona Logo",
    supporters: [
      {
        id: "inuk",
        href: "https://www.inflammatoryneuropathies.uk/",
        imgSrc: "/logos/INUK-Wordmark-Logo_RGB.png",
        imgAlt: "Inflammatory Neuropathies UK",
        overlayTitle: "Inflammatory Neuropathies UK",
        ctaLabel: "Visit Website",
        ctaLang: "en",
      },
      {
        id: "es",
        href: "https://gbs-cidp.org.es/",
        imgSrc: "/logos/GBS-CIDP_neuropatias-RC-3.png",
        imgAlt: "GBS|CIDP España",
        overlayTitle: "GBS|CIDP España",
        ctaLabel: "Visita el sitio web",
        ctaLang: "es",
      },
      {
        id: "fr",
        href: "https://www.epodin.org/",
        imgSrc: "/logos/fr.png",
        imgAlt: "EPODIN - European Patient Organisation for Dysimmune & Inflammatory Neuropathies",
        overlayTitle: "EPODIN - European Patient Organisation for Dysimmune & Inflammatory Neuropathies",
        ctaLabel: "Visiter le site web",
        ctaLang: "fr",
      },
    ],
    supportMessage: {
      heading: "A Message of Support from Inflammatory Neuropathies UK",
      quote:
        "We are absolutely thrilled to see Martin and Edurne embark on 'The Slow Road Back.' Their courage and determination embody the very spirit we champion at Inflammatory Neuropathies UK. This challenge will shine a much-needed light on Guillain-Barré Syndrome, helping us support more individuals and families affected by GBS. Martin, Edurne, we're cheering you on from the UK!",
      attribution: "Sarah Davies, Head of Patient Advocacy, Inflammatory Neuropathies UK",
      ctaLabel: "Discover More About Our Work",
      ctaHref: "https://www.inflammatoryneuropathies.uk/",
    },
  },
  es: {
    metaTitle: "The Slow Road Back | Un Reto por la Investigación del SGB",
    heroTitle: "El lento camino de regreso",
    hometownPartnerHeading: "Nuestro compañero de origen",
    hometownPartnerDescriptionMd:
      "Estamos sumamente orgullosos de colaborar con **Cycla Bikes**, nuestra tienda de bicicletas local en Pamplona. Su apoyo experto y su sólida trayectoria en la comunidad ciclista son la piedra angular de este desafío. Ellos, generosamente, nos proporcionan **la salida y la meta oficiales** para esta épica aventura.",
    supportersHeading: "Apoyando con orgullo a:",
    introParagraphsMd: [
      "Me llamo Martin, y soy un superviviente del Síndrome de Guillain-Barré (SGB). Mi recuperación me enseñó que el viaje es más importante que el destino. Este es mi **\"Lento Camino de Regreso\"**.",
      "**En octubre de 2026**, comenzaré un reto ciclista muy personal, desde mi casa en Pamplona. Pero no lo haré solo. Con mi increíble esposa, Edurne, como el corazón de mi equipo de apoyo, nos enfrentamos a los Pirineos. Nuestro objetivo es que nosotros pedaleemos desde la costa atlántica hasta el Mediterráneo y de vuelta, para ver hasta dónde nos lleva este viaje de resiliencia.",
      "Nuestra travesía es una misión compartida para dar visibilidad y recaudar fondos para la comunidad del SGB. No sabemos exactamente cuántos días tomará, ni cuántas montañas habrá que escalar. Pero os invitamos a seguirnos, día a día, en nuestro viaje de esperanza y resiliencia.",
    ],
    partnerLinkTitle: "Cycla Bikes - Your reference cycling workshop",
    partnerLogoAlt: "Logo de Cycla Bikes Pamplona",
    supporters: [
      {
        id: "inuk",
        href: "https://www.inflammatoryneuropathies.uk/",
        imgSrc: "/logos/INUK-Wordmark-Logo_RGB.png",
        imgAlt: "Inflammatory Neuropathies UK",
        overlayTitle: "Inflammatory Neuropathies UK",
        ctaLabel: "Visit Website",
        ctaLang: "en",
      },
      {
        id: "es",
        href: "https://gbs-cidp.org.es/",
        imgSrc: "/logos/GBS-CIDP_neuropatias-RC-3.png",
        imgAlt: "GBS|CIDP España",
        overlayTitle: "GBS|CIDP España",
        ctaLabel: "Visita el sitio web",
        ctaLang: "es",
      },
      {
        id: "fr",
        href: "https://www.epodin.org/",
        imgSrc: "/logos/fr.png",
        imgAlt: "EPODIN - European Patient Organisation for Dysimmune & Inflammatory Neuropathies",
        overlayTitle: "EPODIN - European Patient Organisation for Dysimmune & Inflammatory Neuropathies",
        ctaLabel: "Visiter le site web",
        ctaLang: "fr",
      },
    ],
    supportMessage: {
      heading: "A Message of Support from Inflammatory Neuropathies UK",
      quote:
        "We are absolutely thrilled to see Martin embark on 'The Slow Road Back.' His courage and determination embody the very spirit we champion at Inflammatory Neuropathies UK. This challenge will shine a much-needed light on Guillain-Barré Syndrome, helping us support more individuals and families affected by GBS. Martin, we're cheering you on from the UK!",
      attribution: "Sarah Davies, Head of Patient Advocacy, Inflammatory Neuropathies UK",
      ctaLabel: "Discover More About Our Work",
      ctaHref: "https://www.inflammatoryneuropathies.uk/",
    },
  },
  fr: {
    metaTitle: "The Slow Road Back | Un Parcours pour la Recherche sur le SGB",
    heroTitle: "Le lent chemin du retour",
    hometownPartnerHeading: "Notre partenaire local",
    hometownPartnerDescriptionMd:
      "Nous sommes extrêmement fiers de collaborer avec **Cycla Bikes**, notre magasin de vélos local à Pampelune. Leur expertise et leur ancrage profond dans la communauté cycliste sont essentiels à ce défi. Ils fournissent généreusement les **lignes de départ et d'arrivée officielles** de cette aventure épique.",
    supportersHeading: "Fièrement en soutien à :",
    introParagraphsMd: [
      "Je m'appelle Martin, et je suis un survivant du syndrome de Guillain-Barré (SGB). Ma convalescence m'a appris que le voyage est plus important que la destination. C'est mon **\"Lent Chemin du Retour\"**.",
      "**En octobre 2026**, je commencerai un défi cycliste profondément personnel depuis notre domicile à Pampelune. Mais je ne le fais pas seul. Avec mon incroyable épouse, Edurne, qui est le cœur de mon équipe de soutien, nous nous attaquons aux Pyrénées. Notre objectif est que nous roulions de la côte atlantique à la Méditerranée et retour, pour voir jusqu'où ce voyage de résilience nous mènera.",
      "Notre parcours est une mission partagée pour sensibiliser et collecter des fonds pour la communauté du SGB. Nous ne savons pas exactement combien de jours cela prendra, ni combien de montagnes il faudra gravir. Mais nous vous invitons à nous suivre, jour après jour, dans notre voyage d'espoir et de résilience.",
    ],
    partnerLinkTitle: "Cycla Bikes - Your reference cycling workshop",
    partnerLogoAlt: "Logo Cycla Bikes Pampelune",
    supporters: [
      {
        id: "inuk",
        href: "https://www.inflammatoryneuropathies.uk/",
        imgSrc: "/logos/INUK-Wordmark-Logo_RGB.png",
        imgAlt: "Inflammatory Neuropathies UK",
        overlayTitle: "Inflammatory Neuropathies UK",
        ctaLabel: "Visit Website",
        ctaLang: "en",
      },
      {
        id: "es",
        href: "https://gbs-cidp.org.es/",
        imgSrc: "/logos/GBS-CIDP_neuropatias-RC-3.png",
        imgAlt: "GBS|CIDP España",
        overlayTitle: "GBS|CIDP España",
        ctaLabel: "Visita el sitio web",
        ctaLang: "es",
      },
      {
        id: "fr",
        href: "https://www.epodin.org/",
        imgSrc: "/logos/fr.png",
        imgAlt: "EPODIN - European Patient Organisation for Dysimmune & Inflammatory Neuropathies",
        overlayTitle: "EPODIN - European Patient Organisation for Dysimmune & Inflammatory Neuropathies",
        ctaLabel: "Visiter le site web",
        ctaLang: "fr",
      },
  ],
  supportMessage: {
      heading: "A Message of Support from Inflammatory Neuropathies UK",
      quote:
        "We are absolutely thrilled to see Martin embark on 'The Slow Road Back.' His courage and determination embody the very spirit we champion at Inflammatory Neuropathies UK. This challenge will shine a much-needed light on Guillain-Barré Syndrome, helping us support more individuals and families affected by GBS. Martin, we're cheering you on from the UK!",
      attribution: "Sarah Davies, Head of Patient Advocacy, Inflammatory Neuropathies UK",
      ctaLabel: "Discover More About Our Work",
      ctaHref: "https://www.inflammatoryneuropathies.uk/",
    },
  },
};
