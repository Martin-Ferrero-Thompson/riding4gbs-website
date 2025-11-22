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

export const challengeContent: Record<"en" | "es" | "fr" | "eu", ChallengeLocaleContent> = {
  en: {
    metaTitle: "The Challenge | Riding4GBS",
    heroTitle: "To Conquer the Pyrenees",
    heroDescriptionMd:
      "This is more than a bike ride; it's the next chapter in our shared story. A testament to Edurne's unwavering support through every step of my GBS journey, this is our challenge — a complete coast-to-coast traverse of one of the world's most challenging mountain ranges.",
    stats: [
      { value: "~21", label: "Total Days" },
      { value: "~2,000", label: "Kilometres" },
      { value: "~38,000", label: "Metres of Climbing" },
      { value: "~4.5x", label: "The Height of Everest" },
    ],
    styleHeading: "The Style: A Shared Journey",
    styleBodyMd:
      "This challenge is a journey we will undertake as a team, side-by-side. We'll be riding in a self-supported bikepacking style, carrying all our own equipment and relying on the kindness of the community we meet along the way. We would be honored and motivated to have local riders join us for a few kilometers or to share the effort on a classic mountain pass. This journey is about community, and we welcome anyone who wants to be a part of it.",
    legs: [
      {
        title: "The French Assault",
        bodyMd:
          "Our journey begins by taking on the giants. The first leg of the challenge is a relentless assault on the legendary climbs of the French Pyrenees. Following the path of the Tour de France, on this leg we will cross into France to conquer icons like the Col d'Aubisque and the mighty Col du Tourmalet on the long road to the Mediterranean.",
      },
      {
        title: "The Spanish Homecoming",
        bodyMd:
          "After reaching the Mediterranean, the journey turns west for the long road home. This is a test of endurance and heart, a deep dive into the Spanish side of the mountains. Our route will focus on the long, remote, and beautiful roads of Catalunya, Aragón, and finally, Navarra. The climbs are less steep but just as relentless, demanding a different kind of strength for the journey back to the Atlantic.",
      },
    ],
  },
  es: {
    metaTitle: "El Reto | Riding4GBS",
    heroTitle: "Para conquistar los Pirineos",
    heroDescriptionMd:
      "Esto es más que un paseo en bicicleta; es el siguiente capítulo de nuestra historia compartida. Como testimonio del apoyo incondicional de Edurne en cada paso de mi camino hacia el GBS, este es nuestro reto: una travesía completa de costa a costa por una de las cordilleras más desafiantes del mundo.",
    stats: [
      { value: "~21", label: "Días Totales" },
      { value: "~2,000", label: "Kilómetros" },
      { value: "~38,000", label: "Metros de Ascensión" },
      { value: "~4.5x", label: "La Altura del Everest" },
    ],
    styleHeading: "El estilo: un viaje compartido",
    styleBodyMd:
      "Este desafío es un viaje que emprenderemos en equipo, codo con codo. Pedalearemos con autosuficiencia, llevando todo nuestro equipo y confiando en la amabilidad de la comunidad que encontremos en el camino. Nos sentiríamos honrados y motivados si ciclistas locales nos acompañaran durante unos kilómetros o compartieran el esfuerzo en un paso de montaña clásico. Este viaje se centra en la comunidad, y damos la bienvenida a cualquiera que quiera formar parte de él.",
    legs: [
      {
        title: "El asalto francés",
        bodyMd:
          "Nuestro viaje comienza enfrentándonos a los gigantes. La primera etapa del desafío es un asalto implacable a las legendarias ascensiones de los Pirineos franceses. Siguiendo la estela del Tour de Francia, en esta etapa cruzaremos a Francia para conquistar iconos como el Col d'Aubisque y el imponente Col du Tourmalet en el largo camino hacia el Mediterráneo.",
      },
      {
        title: "El regreso a casa español",
        bodyMd:
          "Tras llegar al Mediterráneo, el viaje gira hacia el oeste para emprender el largo camino de regreso. Esta es una prueba de resistencia y coraje, una inmersión profunda en la vertiente española de las montañas. Nuestra ruta se centrará en las largas, remotas y hermosas carreteras de Cataluña, Aragón y, finalmente, Navarra. Las subidas son menos empinadas, pero igual de implacables, y exigen una fuerza diferente para el regreso al Atlántico.",
      },
    ],
  },
  fr: {
    metaTitle: "Le Défi | Riding4GBS",
    heroTitle: "À la conquête des Pyrénées",
    heroDescriptionMd:
      "C'est plus qu'une simple randonnée à vélo ; c'est le prochain chapitre de notre histoire commune. Témoignage du soutien indéfectible d'Edurne à chaque étape de mon parcours GBS, voici notre défi : une traversée complète d'un océan à l'autre de l'une des chaînes de montagnes les plus difficiles au monde.",
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
  eu: {
    metaTitle: "Erronka | Riding4GBS",
    heroTitle: "Pirinioak Konkistatzeko",
    heroDescriptionMd:
      "Hau bizikleta ibilaldi bat baino gehiago da; gure istorio partekatuaren hurrengo kapitulua da. Edurnek nire SGB bidaiaren pauso bakoitzean emandako laguntza etengabearen lekuko, hau da gure erronka: munduko mendikate zailenetako baten kostaldetik kostalderako zeharkaldi osoa.",
    stats: [
      { value: "~21", label: "Egun Guztira" },
      { value: "~2,000", label: "Kilometro" },
      { value: "~38,000", label: "Igoera Metroak" },
      { value: "~4.5x", label: "Everest-en Altuera" },
    ],
    styleHeading: "Estiloa: Bidaia Partekatu Bat",
    styleBodyMd:
      "Erronka hau talde gisa egingo dugun bidaia da, elkarren ondoan. Autosufizientzian pedaleatuko dugu, gure ekipamendu guztia eramanez eta bidean aurkitzen dugun komunitatearen adeitasunean konfiantza izanez. Ohore eta motibazio handia izango litzateke tokiko txirrindulariak gurekin kilometro batzuetan batzea edo mendate klasiko batean ahalegina partekatzea. Bidaia hau komunitateari buruzkoa da, eta parte izan nahi duen edonori ongi etorria ematen diogu.",
    legs: [
      {
        title: "Frantziar Erasoa",
        bodyMd:
          "Gure bidaia erraldoiei aurre eginez hasten da. Erronkaren lehen etapa Frantziako Pirinioetako igoera mitikoen aurkako eraso etengabea da. Frantziako Tourraren bidea jarraituz, etapa honetan Frantziara gurutzatuko dugu Col d'Aubisque eta Col du Tourmalet bezalako ikonoak konkistatzeko Mediterraneorako bide luzean.",
      },
      {
        title: "Espainiar Etxeratzea",
        bodyMd:
          "Mediterraneora iritsi ondoren, bidaia mendebalderantz itzultzen da etxera bide luzerako. Hau erresistentzia eta bihotz proba bat da, mendien Espainiako aldean murgiltze sakona. Gure ibilbidea Katalunia, Aragoi eta, azkenik, Nafarroako errepide luze, urrun eta ederretan zentratuko da. Igoerak ez dira hain aldapatsuak baina bai etengabeak, Atlantikorako itzulerako bidaiarako beste indar mota bat eskatuz.",
      },
    ],
  },
};
