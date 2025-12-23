export type Supporter = {
  id: string;
  href: string;
  imgSrc: string;
  imgAlt: string;
  overlayTitle: string;
  ctaLabel: string;
  ctaLang: "en" | "es" | "eu"; // language of the CTA label for screen readers
};

export type HomeLocaleContent = {
  metaTitle: string;
  heroTitle: string;
  watermarkText: string;
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

export const homeContent: Record<"en" | "es" | "eu", HomeLocaleContent> = {
  en: {
    metaTitle: "The Slow Road Back | Home",
    heroTitle: "The Slow Road Back",
    watermarkText: "To Be Replaced By Charity",
    hometownPartnerHeading: "Our Hometown Partner",
    hometownPartnerDescriptionMd:
      "We are incredibly proud to partner with **Cycla Bikes**, our local bike shop here in Pamplona. Their expert support and deep roots in the cycling community are a cornerstone of this challenge. They are generously providing the official **Start and Finish Line** for this epic journey.",
    supportersHeading: "Proudly Supported By:",
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
    ],
    supportMessage: {
      heading: "A Message of Support from Inflammatory Neuropathies UK",
      quote:
        "We are absolutely thrilled to see Martin and Edurne embark on 'The Slow Road Back.' Their courage and determination embody the very spirit we champion at Inflammatory Neuropathies UK. This challenge will shine a much-needed light on Guillain-Barré Syndrome, helping us support more individuals and families affected by GBS. Martin, Edurne, we're cheering you on from the UK!",
      attribution: "xxxxxxx, Head of Patient Advocacy, Inflammatory Neuropathies UK",
      ctaLabel: "Discover More About Our Work",
      ctaHref: "https://www.inflammatoryneuropathies.uk/",
    },
  },
  es: {
    metaTitle: "The Slow Road Back | Un Reto por la Investigación del SGB",
    heroTitle: "El lento camino de regreso",
    watermarkText: "Para ser reemplazado por la organización benéfica",
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
  eu: {
    metaTitle: "The Slow Road Back | Ikerketa SGBren aldeko Erronka",
    heroTitle: "Itzulera Bide Motela",
    watermarkText: "Karitateak ordezkatuko du",
    hometownPartnerHeading: "Gure Jatorrizko Bazkidea",
    hometownPartnerDescriptionMd:
      "Izugarri harro gaude **Cycla Bikes**-ekin, Iruñeko gure bizikleta dendarekin, lankidetzan aritzeaz. Haien laguntza aditua eta txirrindularitza komunitatean dituzten sustrai sakonak erronka honen oinarria dira. Eskuzabaltasunez, abentura epiko honetarako **Irteera eta Helmuga ofizialak** eskaintzen dizkigute.",
    supportersHeading: "Harrotasunez Babestua:",
    introParagraphsMd: [
      "Nire izena Martin da, eta Guillain-Barré Sindromearen (SGB) bizirik atera naiz. Nire sendatze prozesuak irakatsi zidan bidaia helmuga baino garrantzitsuagoa dela. Hau da nire **\"Itzulera Bide Motela\"**.",
      "**2026ko urrian**, erronka txirrindulari oso pertsonal bat hasiko dut, Iruñeko nire etxetik. Baina ez dut bakarrik egingo. Nire emazte zoragarriarekin, Edurne, nire laguntza taldearen bihotza dena, Pirinioei aurre egingo diegu. Gure helburua Atlantikoko kostaldetik Mediterraneora eta buelta egitea da, erresilientzia bidaia honek noraino eramango gaituen ikusteko.",
      "Gure ibilbidea misio partekatu bat da, SGB komunitatearentzat ikusgarritasuna eta funtsak biltzeko. Ez dakigu zehazki zenbat egun beharko ditugun, ezta zenbat mendi igo beharko ditugun. Baina gonbidatzen zaituztegu gu jarraitzera, egunez egun, itxaropen eta erresilientzia bidaia honetan.",
    ],
    partnerLinkTitle: "Cycla Bikes - Zure erreferentziazko bizikleta tailerra",
    partnerLogoAlt: "Cycla Bikes Iruñea Logotipoa",
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
        ctaLabel: "Webgunea Bisitatu",
        ctaLang: "es",
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
