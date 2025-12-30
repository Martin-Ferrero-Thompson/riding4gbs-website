export type OurStorySlide = {
  title: string;
  bodyMd: string; // markdown slide content
};

export type OurStoryLocaleContent = {
  metaTitle: string;
  heroTitle: string;
  heroSubtitle: string;
  image: { src: string; alt: string };
  slides: OurStorySlide[];
};

export const ourStoryContent: Record<"en" | "es" | "eu", OurStoryLocaleContent> = {
  en: {
    metaTitle: "Our Story",
    heroTitle: "The Slow Road Back",
    heroSubtitle: "Hi, I'm Martin. In 2021, Guillain-Barré Syndrome (GBS) changed my life, but it didn't define it. This is my 'Slow Road Back'—my story so far...",
    image: { src: "/mason-bokeh2.jpeg", alt: "Martin and Bike" },
    slides: [
      {
        title: "The Rider Before",
        bodyMd:
          "For as long as I can remember, my life has been intertwined with the simple freedom of a bicycle. I was a long-distance cyclist, happiest when pushing my limits on the beautiful roads and mountains of the UK and Europe. Cycling was more than a hobby; it was a core part of my identity. Whether it was mountain biking over the moors, running in the forests with the dogs, or embarking on long road adventures, being outdoors fueled my energy and my mental well-being.\n\nIt was on one these adventures, I shared the road with a close friend and ride partner, herself living with a chronic autoimmune condition. Together, we tackled epic journeys, like riding the entire length of the Rhine from Rotterdam to its source near Andermatt in Switzerland. Cycling took me to incredible places and introduced me to amazing people.\n\nIt was also during this time that I reconnected with a wonderful friend in Spain, Edurne. Our friendship blossomed into a relationship, and we began dreaming of our own cycling adventures together, maybe even the Camino de Santiago. Life felt full of possibility.\n\nInspired by a friend, I planned a major fundraising ride in the UK (for another autoimmune charity) —a hilly 2000 mile, self-supported route from Land's End to John O'Groats. Tragically, an accident forced me to stop early. I was gutted. But Edurne's support shone through, and our focus shifted to planning our ride together in Spain.\n\nShortly after returning home to Yorkshire, however, the first warning signs appeared. A persistent lower back pain made sleeping difficult. Then came the strange tingling, the fleeting moments of weakness in my legs. Masked by painkillers and dismissed as nothing serious, life carried on... until the day my world stopped.",
      },

      {
        title: "The Day My World Stopped",
        bodyMd:
          "On __August 5th, 2021__, that future was thrown into terrifying uncertainty. One moment, I was walking through the house; The next, I had collapsed on the floor, unable to move my legs. I tried to stand, but nothing happened. It was pure shock and disbelief. \n\nThe paramedics arrived quickly, and soon I was on my way to the A&E hospital. My mind was racing. What was happening to me? Why? What did this mean for my life, for my future with Edurne, for our plans to ride together? Would I ever ride again? So many questions, and no answers. \n\nAfter a long wait, I was admitted. Doctors ran tests, trying to understand the sudden paralysis that was now creeping into my arms and hands. A spinal tap revealed elevated proteins, and finally, a diagnosis emerged: Guillain-Barré Syndrome. It was a name I'd never heard before, but one that would change everything. \n\nI was rushed to Intensive Care and immediately started on a five-day course of Immunoglobulin (IVIG). In the space of a day, I had gone from a highly active cyclist to being almost completely immobile. It was a profoundly dark and terrifying place. Throughout this time, separated by thousands of miles, my lifeline was Edurne. She was my constant connection to the outside world, a daily voice of hope on the internet that kept my spirits from breaking. After a few weeks, I was moved to a rehabilitation hospital. The long, slow road back was just beginning.",
      },

      {
        title: "The Fight for Every Step",
        bodyMd:
          "The road back was slow and grueling. After the ICU, I was moved to a rehabilitation ward for three months. With official physiotherapy limited, I knew I had to take charge of my own recovery. A fellow patient, Ian, and I would race our wheelchairs down the hospital corridors, a small act of defiance that kept my spirit alive. When I graduated to crutches, I would \"escape\" the hospital grounds, pushing myself to walk further each day, determined to rebuild what I had lost.\n\nRecovery continued long after I left the hospital. It was a daily battle, managing chronic pain and relearning how to live in a body that felt alien to me.",
      },

      {
        title: "A New Beginning, A New Purpose",
        bodyMd:
          "Released from the hospital, I returned home, but the struggle was far from over. I was living with the lasting effects of GBS—significant weakness in my legs from the muscle atrophy, reliant on high doses of neuropathic painkillers, and dependent on using a catheter. \n\nBut I was determined not to let these define me. The mountains were calling, and my spirit hadn't broken. Fueled by the support of my family, and crucially, by the unwavering love of Edurne thousands of miles away, I started rebuilding. I reconnected with my local cycling community, joining group rides even if I was the slowest one. I ventured out more and more, discovering that while the pre-GBS speed was gone, a new appreciation for simply being outdoors had taken its place. I even found joy in helping others, volunteering as a tandem pilot for riders less able than myself. \n\nThrough it all, the greatest source of strength was my relationship with Edurne. Our connection grew deeper, and in 2023, we made a life-changing decision: I moved to Pamplona,  and that October, we were married. \n\nWith Edurne's incredible support by my side, we tackled the final hurdles together. I finally weaned myself off the last of the medication and catheters. We had built a new life, surrounded by the mountains I love. It was here I realized my perspective had taken a true shift. GBS had taken away power, but it had given me something profound in return: a deeper appreciation for the journey itself, for every single pedal stroke. This became my '__Slow Road Back.__' \n\nIt was from this new perspective that the idea for this challenge was born. This ride is a deeply personal pilgrimage, a testament to recovery, but it's only possible because of Edurne's unwavering support. It is our shared mission. This journey is for her, for every person affected by GBS, and for the incredible support teams who stand beside them.",
      },

    ],
  },
  es: {
    metaTitle: "Mi Historia",
    heroTitle: "El Lento Camino de Regreso",
    heroSubtitle: "Un viaje de resiliencia, colaboración y un nuevo propósito.",
    image: { src: "/mason-bokeh2.jpeg", alt: "Martín y su bicicleta" },
    slides: [
      {
        title: "[1/4] El Ciclista de Antes",
        bodyMd:
          "Desde que tengo uso de razón, mi vida ha estado entrelazada con la simple libertad de una bicicleta. Era un ciclista de larga distancia, feliz de superar mis límites en las hermosas carreteras y montañas del Reino Unido y Europa. El ciclismo era más que un pasatiempo; era una parte fundamental de mi identidad. En 2020, la vida me trajo de regreso al Reino Unido para cuidar de mis padres, y fue durante este tiempo que me reencontré con una maravillosa amiga en España, Edurne. Nuestra amistad floreció en una relación y comenzamos a soñar con nuestras propias aventuras en bicicleta juntos.",
      },
      {
        title: "[2/4] El Día que Mi Mundo se Detuvo",
        bodyMd:
          "El **5 de agosto de 2021**, ese futuro se vio arrojado a una aterradora incertidumbre. En un momento, caminaba por la casa; al siguiente, me había desplomado en el suelo, incapaz de mover las piernas. Me llevaron de urgencia al hospital, donde, tras una serie de pruebas aterradoras y confusas, me diagnosticaron el **Síndrome de Guillain-Barré (SGB)**.\n\nEstaba paralizado de cintura para abajo, con poco control de mis brazos o manos. En el lapso de un día, había pasado de ser un ciclista muy activo a estar casi completamente inmóvil. Era un lugar profundamente oscuro y aterrador. Durante todo este tiempo, mi salvavidas fue Edurne. Separados por cientos de kilómetros, ella era mi conexión constante con el mundo exterior, una voz diaria de esperanza en internet que evitó que mi espíritu se quebrara.",
      },
      {
        title: "[3/4] La Lucha por Cada Paso",
        bodyMd:
          "El camino de regreso fue lento y agotador. Después de la UCI, me trasladaron a una sala de rehabilitación durante tres meses. Con la fisioterapia oficial limitada, supe que tenía que hacerme cargo de mi propia recuperación. Un compañero de hospital, Ian, y yo corríamos en nuestras sillas de ruedas por los pasillos, un pequeño acto de rebeldía que mantenía vivo mi espíritu. Cuando pasé a las muletas, me \"escapaba\" del hospital, esforzándome por caminar un poco más cada día, decidido a reconstruir lo que había perdido.\n\nLa recuperación continuó mucho después de que dejara el hospital. Era una batalla diaria, lidiando con el dolor crónico y reaprendiendo a vivir en un cuerpo que sentía ajeno.",
      },
      {
        title: "[4/4] Un Nuevo Comienzo, Un Nuevo Propósito",
        bodyMd:
          "La mayor fuente de fortaleza durante todo el proceso fue mi relación con Edurne. En 2023, me mudé a Pamplona y nos casamos. Con su increíble apoyo, finalmente dejé la última de las medicaciones. Habíamos construido una nueva vida juntos.\n\nViviendo aquí, rodeado de las montañas que amo, me di cuenta de que mi perspectiva había cambiado. El SGB me había quitado mucho poder, pero me había dado algo a cambio: un aprecio más profundo por el viaje en sí. Este es mi **\"Lento Camino de Regreso\"**.\n\nFue desde esta nueva perspectiva que nació la idea de este desafío. Este recorrido es un reto en solitario, un peregrinaje personal, pero es posible gracias al apoyo inquebrantable de Edurne: ella estará allí al principio y, lo más importante, esperándome al final. Este viaje es para ella y para cada persona afectada por el SGB.",
      },
    ],
  },
  eu: {
    metaTitle: "Gure Istorioa",
    heroTitle: "Itzulera Bide Motela",
    heroSubtitle: "Kaixo, Martin naiz. 2021ean, Guillain-Barré Sindromeak (SGB) nire bizitza aldatu zuen, baina ez zuen definitu. Hau da nire 'Itzulera Bide Motela'—orain arteko nire istorioa...",
    image: { src: "/mason-bokeh2.jpeg", alt: "Martin eta bere bizikleta" },
    slides: [
      {
        title: "[1/4] Txirrindularia Lehenago",
        bodyMd:
          "Gogoratzen dudanetik, nire bizitza bizikleta baten askatasun sinplearekin lotuta egon da. Distantzia luzeko txirrindularia nintzen, zoriontsuen nire mugak gainditzen Erresuma Batuko eta Europako errepide eta mendi ederretan. Txirrindularitza zaletasun bat baino gehiago zen; nire identitatearen funtsezko zati bat zen. 2020an, bizitzak Erresuma Batura ekarri ninduen gurasoak zaintzera, eta garai horretan berriro elkartu nintzen Espainian lagun zoragarri batekin, Edurnerekin. Gure adiskidetasuna harreman batean loratu zen eta elkarrekin gure bizikleta abenturak amesten hasi ginen.",
      },
      {
        title: "[2/4] Nire Mundua Gelditu Zen Eguna",
        bodyMd:
          "**2021eko abuztuaren 5ean**, etorkizun hori ziurgabetasun beldurgarri batera bota zuten. Une batean, etxean zehar ibiltzen ari nintzen; hurrengoan, lurrean erori nintzen, hankak mugitu ezinik. Larrialdietara eraman ninduten, eta bertan, proba beldurgarri eta nahasgarri batzuen ondoren, **Guillain-Barré Sindromea (SGB)** diagnostikatu zidaten.\n\nGerrikoa behera paralizatuta nengoen, besoen edo eskuen kontrol gutxirekin. Egun baten buruan, txirrindulari oso aktibo izatetik ia guztiz mugiezin izatera pasa nintzen. Leku sakonki ilun eta beldurgarria zen. Denbora horretan guztian, nire salbamendua Edurne izan zen. Ehunka kilometrotara bananduta, bera zen nire konexio etengabea kanpoko munduarekin, nire espiritua haustea saihestu zuen eguneroko itxaropen ahotsa interneten.",
      },
      {
        title: "[3/4] Pauso Bakoitzaren Aldeko Borroka",
        bodyMd:
          "Itzulera bidea motela eta nekagarria izan zen. ZIUren ondoren, errehabilitazio gela batera eraman ninduten hiru hilabetez. Fisioterapia ofiziala mugatua zenez, banekien nire sendatze prozesuaren ardura hartu behar nuela. Ospitaleko kide batek, Ianek, eta nik gure gurpil-aulkiekin lasterketak egiten genituen ospitaleko korridoreetan, nire espiritua bizirik mantentzen zuen errebeldia ekintza txiki bat. Makuluetara pasa nintzenean, ospitaleko esparrutik \"ihes\" egiten nuen, egunero pixka bat urrunago ibiltzera behartuz, galdu nuena berreraikitzeko erabakita.\n\nSendatzeak ospitalea utzi eta askoz geroago jarraitu zuen. Eguneroko borroka zen, min kronikoa kudeatzen eta arrotza sentitzen nuen gorputz batean bizitzen berriro ikasten.",
      },
      {
        title: "[4/4] Hasiera Berri Bat, Helburu Berri Bat",
        bodyMd:
          "Prozesu osoan zehar indar iturri handiena Edurnerekiko nire harremana izan zen. 2023an, Iruñera joan nintzen bizitzera eta ezkondu egin ginen. Bere laguntza izugarriarekin, azkenean azken botikak utzi nituen. Bizitza berri bat eraiki genuen elkarrekin.\n\nHemen bizitzen, maite ditudan mendiez inguratuta, nire ikuspegia aldatu zela konturatu nintzen. SGBk botere asko kendu zidan, baina trukean zerbait eman zidan: bidaia beraren estimu sakonagoa. Hau da nire **\"Itzulera Bide Motela\"**.\n\nIkuspegi berri horretatik sortu zen erronka honen ideia. Ibilbide hau bakarkako erronka da, erromesaldi pertsonala, baina Edurneren laguntza etengabeagatik da posible: bera egongo da hasieran eta, garrantzitsuena, amaieran nire zain. Bidaia hau berarentzat da, eta SGBk kaltetutako pertsona bakoitzarentzat.",
      },
    ],
  },
};
