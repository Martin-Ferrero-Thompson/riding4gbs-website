export type MyStorySlide = {
  title: string;
  bodyMd: string; // markdown slide content
};

export type MyStoryLocaleContent = {
  metaTitle: string;
  heroTitle: string;
  heroSubtitle: string;
  image: { src: string; alt: string };
  slides: MyStorySlide[];
};

export const myStoryContent: Record<"en" | "es" | "fr", MyStoryLocaleContent> = {
  en: {
    metaTitle: "My Story",
    heroTitle: "My Story: The Slow Road Back",
    heroSubtitle: "A journey of resilience, partnership, and a newfound purpose.",
    image: { src: "/mason-bokeh2.jpeg", alt: "Martin and Bike" },
    slides: [
      {
        title: "(1) The Rider Before",
        bodyMd:
          "For as long as I can remember, my life has been intertwined with the simple freedom of a bicycle. I was a long-distance cyclist, happiest when pushing my limits on the beautiful roads and mountains of the UK and Europe. Cycling was more than a hobby; it was a core part of my identity. In 2020, life brought me back to the UK to care for my parents, and it was during this time that I reconnected with a wonderful friend in Spain, Edurne. Our friendship blossomed into a relationship, and we began dreaming of our own cycling adventures together.",
      },
      {
        title: "(2) The Day My World Stopped",
        bodyMd:
          "On **August 5th, 2021**, that future was thrown into terrifying uncertainty. One moment, I was walking through the house; the next, I had collapsed on the floor, unable to move my legs. I was rushed to the hospital, where, after a series of frightening and confusing tests, I was diagnosed with **Guillain-Barré Syndrome (GBS)**.\n\nI was paralysed from the waist down, with little control of my arms or hands. In the space of a day, I had gone from a highly active cyclist to being almost completely immobile. It was a profoundly dark and terrifying place. Throughout this time, my lifeline was Edurne. Separated by hundreds of miles, she was my constant connection to the outside world, a daily voice of hope on the internet that kept my spirits from breaking.",
      },
      {
        title: "(3) The Fight for Every Step",
        bodyMd:
          "The road back was slow and grueling. After the ICU, I was moved to a rehabilitation ward for three months. With official physiotherapy limited, I knew I had to take charge of my own recovery. A fellow patient, Ian, and I would race our wheelchairs down the hospital corridors, a small act of defiance that kept my spirit alive. When I graduated to crutches, I would \"escape\" the hospital grounds, pushing myself to walk further each day, determined to rebuild what I had lost.\n\nRecovery continued long after I left the hospital. It was a daily battle, managing chronic pain and relearning how to live in a body that felt alien to me.",
      },
      {
        title: "(4) A New Beginning, A New Purpose",
        bodyMd:
          "The greatest source of strength through it all was my relationship with Edurne. In 2023, I moved to Pamplona, and we were married. With her incredible support, I finally weaned myself off the last of the medication. We had built a new life together.\n\nLiving here, surrounded by the mountains I love, I realized my perspective had changed. GBS had taken away a lot of my power, but it had given me something in return: a deeper appreciation for the journey itself. This is my **\"Slow Road Back.\"**\n\nIt was from this new perspective that the idea for this challenge was born. This ride is a solo challenge, a personal pilgrimage, but it is made possible by Edurne's unwavering support—she will be there at the start and, most importantly, waiting for me at the finish. This journey is for her, and for every person affected by GBS.",
      },
    ],
  },
  es: {
    metaTitle: "Mi Historia",
    heroTitle: "Mi Historia: El Lento Camino de Regreso",
    heroSubtitle: "Un viaje de resiliencia, colaboración y un nuevo propósito.",
    image: { src: "/mason-bokeh2.jpeg", alt: "Martín y su bicicleta" },
    slides: [
      {
        title: "(1) El Ciclista de Antes",
        bodyMd:
          "Desde que tengo uso de razón, mi vida ha estado entrelazada con la simple libertad de una bicicleta. Era un ciclista de larga distancia, feliz de superar mis límites en las hermosas carreteras y montañas del Reino Unido y Europa. El ciclismo era más que un pasatiempo; era una parte fundamental de mi identidad. En 2020, la vida me trajo de regreso al Reino Unido para cuidar de mis padres, y fue durante este tiempo que me reencontré con una maravillosa amiga en España, Edurne. Nuestra amistad floreció en una relación y comenzamos a soñar con nuestras propias aventuras en bicicleta juntos.",
      },
      {
        title: "(2) El Día que Mi Mundo se Detuvo",
        bodyMd:
          "El **5 de agosto de 2021**, ese futuro se vio arrojado a una aterradora incertidumbre. En un momento, caminaba por la casa; al siguiente, me había desplomado en el suelo, incapaz de mover las piernas. Me llevaron de urgencia al hospital, donde, tras una serie de pruebas aterradoras y confusas, me diagnosticaron el **Síndrome de Guillain-Barré (SGB)**.\n\nEstaba paralizado de cintura para abajo, con poco control de mis brazos o manos. En el lapso de un día, había pasado de ser un ciclista muy activo a estar casi completamente inmóvil. Era un lugar profundamente oscuro y aterrador. Durante todo este tiempo, mi salvavidas fue Edurne. Separados por cientos de kilómetros, ella era mi conexión constante con el mundo exterior, una voz diaria de esperanza en internet que evitó que mi espíritu se quebrara.",
      },
      {
        title: "(3) La Lucha por Cada Paso",
        bodyMd:
          "El camino de regreso fue lento y agotador. Después de la UCI, me trasladaron a una sala de rehabilitación durante tres meses. Con la fisioterapia oficial limitada, supe que tenía que hacerme cargo de mi propia recuperación. Un compañero de hospital, Ian, y yo corríamos en nuestras sillas de ruedas por los pasillos, un pequeño acto de rebeldía que mantenía vivo mi espíritu. Cuando pasé a las muletas, me \"escapaba\" del hospital, esforzándome por caminar un poco más cada día, decidido a reconstruir lo que había perdido.\n\nLa recuperación continuó mucho después de que dejara el hospital. Era una batalla diaria, lidiando con el dolor crónico y reaprendiendo a vivir en un cuerpo que sentía ajeno.",
      },
      {
        title: "(4) Un Nuevo Comienzo, Un Nuevo Propósito",
        bodyMd:
          "La mayor fuente de fortaleza durante todo el proceso fue mi relación con Edurne. En 2023, me mudé a Pamplona y nos casamos. Con su increíble apoyo, finalmente dejé la última de las medicaciones. Habíamos construido una nueva vida juntos.\n\nViviendo aquí, rodeado de las montañas que amo, me di cuenta de que mi perspectiva había cambiado. El SGB me había quitado mucho poder, pero me había dado algo a cambio: un aprecio más profundo por el viaje en sí. Este es mi **\"Lento Camino de Regreso\"**.\n\nFue desde esta nueva perspectiva que nació la idea de este desafío. Este recorrido es un reto en solitario, un peregrinaje personal, pero es posible gracias al apoyo inquebrantable de Edurne: ella estará allí al principio y, lo más importante, esperándome al final. Este viaje es para ella y para cada persona afectada por el SGB.",
      },
    ],
  },
  fr: {
    metaTitle: "Mon Histoire",
    heroTitle: "Mon Histoire : Le Lent Chemin du Retour",
    heroSubtitle: "Un voyage de résilience, de partenariat et d'un nouvel objectif.",
    image: { src: "/mason-bokeh2.jpeg", alt: "Martin et son vélo" },
    slides: [
      {
        title: "(1) Le Cycliste d'Avant",
        bodyMd:
          "D'aussi loin que je me souvienne, ma vie a été liée à la simple liberté d'un vélo. J'étais un cycliste de longue distance, le plus heureux en repoussant mes limites sur les belles routes et montagnes du Royaume-Uni et d'Europe. Le cyclisme était plus qu'un passe-temps ; c'était une partie essentielle de mon identité. En 2020, la vie m'a ramené au Royaume-Uni pour m'occuper de mes parents, et c'est à cette époque que j'ai renoué avec une merveilleuse amie en Espagne, Edurne. Notre amitié s'est transformée en une relation, et nous avons commencé à rêver de nos propres aventures à vélo ensemble.",
      },
      {
        title: "(2) Le Jour Où Mon Monde s'est Arrêté",
        bodyMd:
          "Le **5 août 2021**, cet avenir a été plongé dans une incertitude terrifiante. Un instant, je marchais dans la maison ; l'instant d'après, je m'étais effondré sur le sol, incapable de bouger mes jambes. J'ai été transporté d'urgence à l'hôpital où, après une série de tests effrayants et déroutants, on m'a diagnostiqué le **syndrome de Guillain-Barré (SGB)**.\n\nJ'étais paralysé de la taille aux pieds, avec peu de contrôle sur mes bras ou mes mains. En l'espace d'une journée, j'étais passé d'un cycliste très actif à une immobilité quasi totale. C'était un endroit profondément sombre et terrifiant. Pendant tout ce temps, ma bouée de sauvetage a été Edurne. Séparés par des centaines de kilomètres, elle était ma connexion constante avec le monde extérieur, une voix quotidienne d'espoir sur Internet qui a empêché mon moral de sombrer.",
      },
      {
        title: "(3) Le Combat pour Chaque Pas",
        bodyMd:
          "Le chemin du retour a été lent et éprouvant. Après les soins intensifs, j'ai été transféré dans un service de rééducation pendant trois mois. La kinésithérapie officielle étant limitée, je savais que je devais prendre en main ma propre guérison. Un autre patient, Ian, et moi faisions la course en fauteuil roulant dans les couloirs de l'hôpital, un petit acte de défi qui maintenait mon esprit en vie. Quand je suis passé aux béquilles, je m'\"échappais\" de l'enceinte de l'hôpital, me forçant à marcher un peu plus loin chaque jour, déterminé à reconstruire ce que j'avais perdu.\n\nLa guérison s'est poursuivie longtemps après ma sortie de l'hôpital. C'était une bataille quotidienne, gérant la douleur chronique et réapprenant à vivre dans un corps qui me semblait étranger.",
      },
      {
        title: "(4) Un Nouveau Départ, Un Nouvel Objectif",
        bodyMd:
          "La plus grande source de force à travers tout cela a été ma relation avec Edurne. En 2023, j'ai déménagé à Pampelune et nous nous sommes mariés. Avec son incroyable soutien, j'ai finalement arrêté le dernier de mes médicaments. Nous avions construit une nouvelle vie ensemble.\n\nVivant ici, entouré des montagnes que j'aime, j'ai réalisé que ma perspective avait changé. Le SGB m'avait enlevé beaucoup de pouvoir, mais il m'avait donné quelque chose en retour : une appréciation plus profonde du voyage lui-même. C'est mon **\"Lent Chemin du Retour\"**.\n\nC'est de cette nouvelle perspective qu'est née l'idée de ce défi. Ce parcours est un défi en solitaire, un pèlerinage personnel, mais il est rendu possible par le soutien indéfectible d'Edurne — elle sera là au départ et, plus important encore, m'attendra à l'arrivée. Ce voyage est pour elle, et pour chaque personne affectée par le SGB.",
      },
    ],
  },
};
