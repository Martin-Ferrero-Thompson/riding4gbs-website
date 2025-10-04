export type HomeLocaleContent = {
  metaTitle: string;
  heroTitle: string;
  hometownPartnerHeading: string;
  hometownPartnerDescriptionHtml: string; // trusted HTML
  supportersHeading: string;
  introParagraphsHtml: string[]; // array of trusted HTML strings
  ctaLabel: string; // used for all supporter cards
  partnerLinkTitle: string; // title attribute for Cycla link
};

export const homeContent: Record<"en" | "es" | "fr", HomeLocaleContent> = {
  en: {
    metaTitle: "The Slow Road Back | Home",
    heroTitle: "The Slow Road Back",
    hometownPartnerHeading: "Our Hometown Partner",
    hometownPartnerDescriptionHtml:
      "We are incredibly proud to partner with <strong>Cycla Bikes</strong>, our local bike shop here in Pamplona. Their expert support and deep roots in the cycling community are a cornerstone of this challenge. They are generously providing the official <strong>Start and Finish Line</strong> for this epic journey.",
    supportersHeading: "Proudly Supporting:",
    introParagraphsHtml: [
      "My name is Martin, and I am a survivor of Guillain-Barré Syndrome (GBS). My recovery taught me that the journey is more important than the destination. This is my <strong>Slow Road Back</strong>.",
      "<strong>On September 30th, 2026</strong>, I will begin a deeply personal cycling challenge, starting from my home in Pamplona. With my incredible wife, Edurne, as the heart of my support team, we are taking on the Pyrenees. Our goal is for us to ride from the Atlantic coast to the Mediterranean and back again to see how far this journey of resilience will take us.",
      "Our ride is a shared mission to raise vital awareness and funds for the GBS community. We don't know exactly how many days it will take, or how many mountains will have to be climbed. But we invite you to follow along, day by day, on our journey of hope and resilience.",
    ],
    ctaLabel: "Visit Website",
    partnerLinkTitle: "Cycla Bikes - Your reference cycling workshop",
  },
  es: {
    metaTitle: "The Slow Road Back | Un Reto por la Investigación del SGB",
    heroTitle: "El lento camino de regreso",
    hometownPartnerHeading: "Nuestro compañero de origen",
    hometownPartnerDescriptionHtml:
      "Estamos sumamente orgullosos de colaborar con <strong>Cycla Bikes</strong>, nuestra tienda de bicicletas local en Pamplona. Su apoyo experto y su sólida trayectoria en la comunidad ciclista son la piedra angular de este desafío. Ellos, generosamente, nos proporcionan <strong>la salida y la meta oficiales</strong> para esta épica aventura.",
    supportersHeading: "Apoyando con orgullo a:",
    introParagraphsHtml: [
      "Me llamo Martin, y soy un superviviente del Síndrome de Guillain-Barré (SGB). Mi recuperación me enseñó que el viaje es más importante que el destino. Este es mi <strong>\"Lento Camino de Regreso\"</strong>.",
      "<strong>El 30 de septiembre de 2026</strong>, comenzaré un reto ciclista muy personal, desde mi casa en Pamplona. Pero no lo haré solo. Con mi increíble esposa, Edurne, como el corazón de mi equipo de apoyo, nos enfrentamos a los Pirineos. Nuestro objetivo es que nosotros pedaleemos desde la costa atlántica hasta el Mediterráneo y de vuelta, para ver hasta dónde nos lleva este viaje de resiliencia.",
      "Nuestra travesía es una misión compartida para dar visibilidad y recaudar fondos para la comunidad del SGB. No sabemos exactamente cuántos días tomará, ni cuántas montañas habrá que escalar. Pero os invitamos a seguirnos, día a día, en nuestro viaje de esperanza y resiliencia.",
    ],
    ctaLabel: "Visita el sitio web",
    partnerLinkTitle: "Cycla Bikes - Your reference cycling workshop",
  },
  fr: {
    metaTitle: "The Slow Road Back | Un Parcours pour la Recherche sur le SGB",
    heroTitle: "Le lent chemin du retour",
    hometownPartnerHeading: "Notre partenaire local",
    hometownPartnerDescriptionHtml:
      "Nous sommes extrêmement fiers de collaborer avec <strong>Cycla Bikes</strong>, notre magasin de vélos local à Pampelune. Leur expertise et leur ancrage profond dans la communauté cycliste sont essentiels à ce défi. Ils fournissent généreusement les <strong>lignes de départ et d'arrivée officielles</strong> de cette aventure épique.",
    supportersHeading: "Fièrement en soutien à :",
    introParagraphsHtml: [
      "Je m'appelle Martin, et je suis un survivant du syndrome de Guillain-Barré (SGB). Ma convalescence m'a appris que le voyage est plus important que la destination. C'est mon <strong>\"Lent Chemin du Retour\"</strong>.",
      "<strong>Le 30 septembre 2026</strong>, je commencerai un défi cycliste profondément personnel depuis notre domicile à Pampelune. Mais je ne le fais pas seul. Avec mon incroyable épouse, Edurne, qui est le cœur de mon équipe de soutien, nous nous attaquons aux Pyrénées. Notre objectif est que nous roulions de la côte atlantique à la Méditerranée et retour, pour voir jusqu'où ce voyage de résilience nous mènera.",
      "Notre parcours est une mission partagée pour sensibiliser et collecter des fonds pour la communauté du SGB. Nous ne savons pas exactement combien de jours cela prendra, ni combien de montagnes il faudra gravir. Mais nous vous invitons à nous suivre, jour après jour, dans notre voyage d'espoir et de résilience.",
    ],
    ctaLabel: "Visiter le site web",
    partnerLinkTitle: "Cycla Bikes - Your reference cycling workshop",
  },
};
