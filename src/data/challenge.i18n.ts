export type ChallengeStat = {
  value: string; // e.g., "~21", "~2,000"
  label: string; // e.g., "Total Days"
};

export type ChallengeLeg = {
  title: string;
  bodyMd: string;
};

export type ChallengeLocaleContent = {
  metaTitle: string;
  heroTitle: string; // includes emoji if desired
  heroDescriptionMd: string;
  stats: ChallengeStat[]; // expect 4 entries
  styleHeading: string;
  styleBodyMd: string;
  legs: ChallengeLeg[]; // expect 2 entries
};

export const challengeContent: Record<"en" | "es" | "fr", ChallengeLocaleContent> = {
  en: {
    metaTitle: "The Challenge | Riding4GBS",
    heroTitle: "Conquering the Pyrenees: The Route 🚵",
    heroDescriptionMd:
      "This is not just a bike ride; it's a complete coast-to-coast traverse of one of the world's most formidable mountain ranges.",
    stats: [
      { value: "~21", label: "Total Days" },
      { value: "~2,000", label: "Kilometres" },
      { value: "~38,000", label: "Metres of Climbing" },
      { value: "~4.5x", label: "The Height of Everest" },
    ],
    styleHeading: "The Style: A Self-Supported Journey",
    styleBodyMd:
      "This challenge is a journey back to basics, undertaken in a self-supported bikepacking style. I'll be carrying all my own equipment, relying on the kindness of the community I meet along the way. While the logistical test is a personal one, the road itself is open to all. I would be honoured and motivated to have local riders join me for a few kilometres or to share the effort on a classic mountain pass. This journey is about community, and I welcome anyone who wants to be a part of it.",
    legs: [
      {
        title: "Leg 1: The Epic Crossing",
        bodyMd:
          "The journey begins by heading east from the Basque Country, following the path of the Tour de France legends. This first leg of the journey crosses into France to conquer icons like the Col du Tourmalet before tackling \"The Pinnacle\"—the Port d'Envalira in Andorra. It is a pure test of climbing strength on the road to the Mediterranean.",
      },
      {
        title: "Leg 2: The Journey Home",
        bodyMd:
          "Upon reaching the coast, the goal is to turn back west and begin the long journey home. This is a test of endurance and resilience. The return route will focus on the Spanish side, tackling the long, remote, and beautiful roads of the Pre-Pyrenees in Catalunya, Aragón, and finally, Navarra. The climbs are less steep but just as relentless, demanding a different kind of strength for the long road back.",
      },
    ],
  },
  es: {
    metaTitle: "El Reto | Riding4GBS",
    heroTitle: "Conquistando los Pirineos: La Ruta 🚵",
    heroDescriptionMd:
      "Esto no es solo un paseo en bicicleta; es una travesía completa de costa a costa de una de las cordilleras más formidables del mundo.",
    stats: [
      { value: "~21", label: "Días Totales" },
      { value: "~2,000", label: "Kilómetros" },
      { value: "~38,000", label: "Metros de Ascensión" },
      { value: "~4.5x", label: "La Altura del Everest" },
    ],
    styleHeading: "El Estilo: Un Viaje Autosuficiente",
    styleBodyMd:
      "Este desafío es un viaje de vuelta a lo básico, realizado en un estilo de \"bikepacking\" autosuficiente. Llevaré todo mi propio equipo, confiando en la amabilidad de la comunidad que encuentre en el camino. Aunque la prueba logística es personal, la carretera está abierta a todos. Sería un honor y una motivación que ciclistas locales se unieran a mí durante algunos kilómetros o para compartir el esfuerzo en un puerto de montaña clásico. Este viaje trata sobre la comunidad, y doy la bienvenida a cualquiera que quiera formar parte de él.",
    legs: [
      {
        title: "Etapa 1: El Cruce Épico",
        bodyMd:
          "El viaje comienza dirigiéndose hacia el este desde el País Vasco, siguiendo el camino de las leyendas del Tour de Francia. Esta primera etapa del viaje cruza a Francia para conquistar iconos como el Col du Tourmalet antes de afrontar \"La Cima\"—el Port d'Envalira en Andorra. Es una prueba pura de fuerza en la escalada camino al Mediterráneo.",
      },
      {
        title: "Etapa 2: El Viaje de Vuelta a Casa",
        bodyMd:
          "Al llegar a la costa, el objetivo es dar la vuelta hacia el oeste y comenzar el largo viaje de regreso a casa. Esta es una prueba de resistencia y resiliencia. La ruta de vuelta se centrará en el lado español, afrontando las largas, remotas y hermosas carreteras de los Prepirineos en Cataluña, Aragón y, finalmente, Navarra. Las subidas son menos empinadas pero igual de implacables, exigiendo un tipo diferente de fuerza para el largo camino de vuelta.",
      },
    ],
  },
  fr: {
    metaTitle: "Le Défi | Riding4GBS",
    heroTitle: "À la conquête des Pyrénées : La Route 🚵",
    heroDescriptionMd:
      "Ce n'est pas juste une balade à vélo ; c'est une traversée complète d'une côte à l'autre de l'une des chaînes de montagnes les plus redoutables du monde.",
    stats: [
      { value: "~21", label: "Jours au total" },
      { value: "~2,000", label: "Kilomètres" },
      { value: "~38,000", label: "Mètres de dénivelé" },
      { value: "~4.5x", label: "La hauteur de l'Everest" },
    ],
    styleHeading: "Le Style : Un Voyage en Autonomie",
    styleBodyMd:
      "Ce défi est un retour à l'essentiel, entrepris dans un style de \"bikepacking\" en autonomie. Je transporterai tout mon propre équipement, en comptant sur la gentillesse de la communauté que je rencontrerai en chemin. Bien que le test logistique soit personnel, la route elle-même est ouverte à tous. Je serais honoré et motivé si des cyclistes locaux se joignaient à moi pour quelques kilomètres ou pour partager l'effort sur un col de montagne classique. Ce voyage est une question de communauté, et je souhaite la bienvenue à tous ceux qui veulent en faire partie.",
    legs: [
      {
        title: "Étape 1 : La Traversée Épique",
        bodyMd:
          "Le voyage commence en se dirigeant vers l'est depuis le Pays Basque, en suivant le chemin des légendes du Tour de France. Cette première étape du voyage traverse la France pour conquérir des icônes comme le Col du Tourmalet avant de s'attaquer au \"Pinacle\"—le Port d'Envalira en Andorre. C'est un pur test de force en montagne sur la route de la Méditerranée.",
      },
      {
        title: "Étape 2 : Le Retour à la Maison",
        bodyMd:
          "Une fois la côte atteinte, l'objectif est de repartir vers l'ouest pour commencer le long voyage de retour. C'est un test d'endurance et de résilience. L'itinéraire de retour se concentrera sur le côté espagnol, en s'attaquant aux routes longues, isolées et magnifiques des Pré-Pyrénées en Catalogne, en Aragón et enfin en Navarre. Les ascensions sont moins raides mais tout aussi implacables, exigeant un autre type de force pour le long chemin du retour.",
      },
    ],
  },
};
