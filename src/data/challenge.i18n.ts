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
  legs: ChallengeLeg[]; // expect 1 entry
};

export const challengeContent: Record<"en" | "es" | "eu", ChallengeLocaleContent> = {
  en: {
    metaTitle: "The Challenge | Riding4GBS",
    heroTitle: "To Conquer the Pyrenees",
    heroDescriptionMd:
      "This is more than a bike ride; it's the next chapter in our shared story. A testament to Edurne's unwavering support through every step of my GBS journey, this is our challenge — a complete coast-to-coast traverse of one of the world's most challenging mountain ranges.",
    stats: [
      { value: "~12", label: "Total Days" },
      { value: "~1,000", label: "Kilometres" },
      { value: "~22,000", label: "Metres of Climbing" },
      { value: "~2.5x", label: "The Height of Everest" },
    ],
    styleHeading: "The Style: A Shared Journey",
    styleBodyMd:
      "This challenge is a journey we will undertake as a team, side-by-side. We'll be riding in a self-supported bikepacking style, carrying all our own equipment and relying on the kindness of the community we meet along the way. We would be honored and motivated to have local riders join us for a few kilometers or to share the effort on a classic mountain pass. This journey is about community, and we welcome anyone who wants to be a part of it.",
    legs: [
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
      { value: "~12", label: "Días Totales" },
      { value: "~1,000", label: "Kilómetros" },
      { value: "~22,000", label: "Metros de Ascensión" },
      { value: "~2.5x", label: "La Altura del Everest" },
    ],
    styleHeading: "El estilo: un viaje compartido",
    styleBodyMd:
      "Este desafío es un viaje que emprenderemos en equipo, codo con codo. Pedalearemos con autosuficiencia, llevando todo nuestro equipo y confiando en la amabilidad de la comunidad que encontremos en el camino. Nos sentiríamos honrados y motivados si ciclistas locales nos acompañaran durante unos kilómetros o compartieran el esfuerzo en un paso de montaña clásico. Este viaje se centra en la comunidad, y damos la bienvenida a cualquiera que quiera formar parte de él.",
    legs: [
      {
        title: "El regreso a casa español",
        bodyMd:
          "Tras llegar al Mediterráneo, el viaje gira hacia el oeste para emprender el largo camino de regreso. Esta es una prueba de resistencia y coraje, una inmersión profunda en la vertiente española de las montañas. Nuestra ruta se centrará en las largas, remotas y hermosas carreteras de Cataluña, Aragón y, finalmente, Navarra. Las subidas son menos empinadas, pero igual de implacables, y exigen una fuerza diferente para el regreso al Atlántico.",
      },
    ],
  },
  eu: {
    metaTitle: "Erronka | Riding4GBS",
    heroTitle: "Pirinioak Konkistatzeko",
    heroDescriptionMd:
      "Hau bizikleta ibilaldi bat baino gehiago da; gure istorio partekatuaren hurrengo kapitulua da. Edurnek nire SGB bidaiaren pauso bakoitzean emandako laguntza etengabearen lekuko, hau da gure erronka: munduko mendikate zailenetako baten kostaldetik kostalderako zeharkaldi osoa.",
    stats: [
      { value: "~12", label: "Egun Guztira" },
      { value: "~1,000", label: "Kilometro" },
      { value: "~22,000", label: "Igoera Metroak" },
      { value: "~2.5x", label: "Everest-en Altuera" },
    ],
    styleHeading: "Estiloa: Bidaia Partekatu Bat",
    styleBodyMd:
      "Erronka hau talde gisa egingo dugun bidaia da, elkarren ondoan. Autosufizientzian pedaleatuko dugu, gure ekipamendu guztia eramanez eta bidean aurkitzen dugun komunitatearen adeitasunean konfiantza izanez. Ohore eta motibazio handia izango litzateke tokiko txirrindulariak gurekin kilometro batzuetan batzea edo mendate klasiko batean ahalegina partekatzea. Bidaia hau komunitateari buruzkoa da, eta parte izan nahi duen edonori ongi etorria ematen diogu.",
    legs: [
      {
        title: "Espainiar Etxeratzea",
        bodyMd:
          "Mediterraneora iritsi ondoren, bidaia mendebalderantz itzultzen da etxera bide luzerako. Hau erresistentzia eta bihotz proba bat da, mendien Espainiako aldean murgiltze sakona. Gure ibilbidea Katalunia, Aragoi eta, azkenik, Nafarroako errepide luze, urrun eta ederretan zentratuko da. Igoerak ez dira hain aldapatsuak baina bai etengabeak, Atlantikorako itzulerako bidaiarako beste indar mota bat eskatuz.",
      },
    ],
  },
};
