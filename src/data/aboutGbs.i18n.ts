export type NarrativeSlide = {
  kind: "narrative";
  title: string;
  bodyMd: string;
};

export type ImageSlide = {
  kind: "image";
  title: string;
  image: { src: string; alt: string };
  captionMd?: string;
};

export type ResourcesSlide = {
  kind: "resources";
  title: string;
  resources: Array<{
    title: string;
    descriptionMd: string;
    href: string;
    ctaLabel: string;
  }>;
};

export type AboutGbsSlide = NarrativeSlide | ImageSlide | ResourcesSlide;

export type AboutGbsLocaleContent = {
  metaTitle: string;
  heroTitle: string;
  heroSubtitle: string;
  slides: AboutGbsSlide[];
};

export const aboutGbsContent: Record<"en" | "es" | "fr", AboutGbsLocaleContent> = {
  en: {
    metaTitle: "About GBS",
    heroTitle: "What is Guillain-Barré Syndrome?",
    heroSubtitle: "Understanding the condition behind the challenge.",
    slides: [
      {
        kind: "narrative",
        title: "What is Guillain-Barré Syndrome?",
        bodyMd:
          "Guillain-Barré Syndrome (GBS) is a rare and serious autoimmune disorder where the body's immune system mistakenly attacks its own peripheral nerves—the network outside of the brain and spinal cord.\n\nThe onset is often sudden, escalating over hours or days into a neurological emergency. It is the leading cause of acute, non-trauma-related paralysis worldwide.",
      },
      {
        kind: "narrative",
        title: "A Case of Mistaken Identity",
        bodyMd:
          "The most accepted theory is **\"molecular mimicry\"**. Often, the syndrome begins after a common infection, like a stomach bug (*Campylobacter jejuni*) or a respiratory virus.\n\nThe immune system creates antibodies to fight the germ, but some parts of the germ look remarkably similar to our own nerve cells. The antibodies make a catastrophic error and begin attacking the healthy nerves, leading to the weakness, numbness, and paralysis that define GBS.",
      },
      {
        kind: "narrative",
        title: "Hope on the Horizon",
        bodyMd:
          "While current treatments help, they are not a cure and are not effective for everyone. This is why research is so critical. Scientists are working to find faster diagnostic tools and develop new, more targeted therapies. Your support helps fuel this vital research and brings hope to every person affected by GBS.",
      },
      {
        kind: "image",
        title: "Impact on Nerve Cells",
        image: { src: "/gbs-details.png", alt: "Guillain-Barré Syndrome Explanation - Neuron and Nerve System" },
        captionMd: "*Image illustrating the impact of GBS on nerve cells and pathways.*",
      },
      {
        kind: "resources",
        title: "Find Out More",
        resources: [
          {
            title: "GBS|CIDP Foundation Int.",
            descriptionMd: "The leading global nonprofit for supporting patients and funding research for GBS.",
            href: "https://www.gbs-cidp.org/",
            ctaLabel: "Visit Website →",
          },
          {
            title: "GBS|CIDP España",
            descriptionMd: "A patient advocacy group based in Spain, providing support and resources.",
            href: "https://gbs-cidp.org.es/",
            ctaLabel: "Visit Website →",
          },
          {
            title: "AFSGB & TSFN (France)",
            descriptionMd:
              "The French association for Guillain-Barré Syndrome, providing information and support to patients in France.",
            href: "https://www.guillainbarre.fr/",
            ctaLabel: "Visiter le site web →",
          },
        ],
      },
    ],
  },
  es: {
    metaTitle: "Sobre el SGB",
    heroTitle: "¿Qué es el Síndrome de Guillain-Barré?",
    heroSubtitle: "Entendiendo la condición detrás del desafío.",
    slides: [
      {
        kind: "narrative",
        title: "¿Qué es el Síndrome de Guillain-Barré?",
        bodyMd:
          "El Síndrome de Guillain-Barré (SGB) es un trastorno autoinmune raro y grave en el que el sistema inmunitario del cuerpo ataca por error a sus propios nervios periféricos, la red de nervios fuera del cerebro y la médula espinal.\n\nEl inicio suele ser repentino, escalando en horas o días hasta convertirse en una emergencia neurológica. Es la principal causa de parálisis aguda no traumática en todo el mundo.",
      },
      {
        kind: "narrative",
        title: "Un Caso de Identidad Equivocada",
        bodyMd:
          "La teoría más aceptada es la de **\"mimetismo molecular\"**. A menudo, el síndrome comienza después de una infección común, como una bacteria estomacal (*Campylobacter jejuni*) o un virus respiratorio.\n\nEl sistema inmunitario crea anticuerpos para combatir el germen, pero algunas partes del germen se parecen notablemente a nuestras propias células nerviosas. Los anticuerpos cometen un error catastrófico y comienzan a atacar los nervios sanos, lo que provoca la debilidad, el entumecimiento y la parálisis que definen el SGB.",
      },
      {
        kind: "narrative",
        title: "Esperanza en el Horizonte",
        bodyMd:
          "Aunque los tratamientos actuales ayudan, no son una cura y no son efectivos para todos. Por eso la investigación es tan crucial. Los científicos están trabajando para encontrar herramientas de diagnóstico más rápidas y desarrollar nuevas terapias más específicas. Tu apoyo impulsa esta investigación vital y lleva esperanza a cada persona afectada por el SGB.",
      },
      {
        kind: "image",
        title: "Impacto en las Células Nerviosas",
        image: { src: "/gbs-details.png", alt: "Explicación del Síndrome de Guillain-Barré - Neurona y Sistema Nervioso" },
        captionMd: "*Imagen que ilustra el impacto del SGB en las células y vías nerviosas.*",
      },
      {
        kind: "resources",
        title: "Más Información",
        resources: [
          {
            title: "GBS|CIDP Foundation Int.",
            descriptionMd:
              "La principal organización mundial sin ánimo de lucro que apoya a los pacientes y financia la investigación del SGB.",
            href: "https://www.gbs-cidp.org/",
            ctaLabel: "Visitar Sitio Web →",
          },
          {
            title: "GBS|CIDP España",
            descriptionMd:
              "Un grupo de defensa de pacientes con sede en España, que ofrece apoyo y recursos.",
            href: "https://gbs-cidp.org.es/",
            ctaLabel: "Visitar Sitio Web →",
          },
          {
            title: "AFSGB & TSFN (Francia)",
            descriptionMd:
              "La asociación francesa del Síndrome de Guillain-Barré, que proporciona información y apoyo a los pacientes en Francia.",
            href: "https://www.guillainbarre.fr/",
            ctaLabel: "Visiter le site web →",
          },
        ],
      },
    ],
  },
  fr: {
    metaTitle: "À propos du SGB",
    heroTitle: "Qu'est-ce que le syndrome de Guillain-Barré ?",
    heroSubtitle: "Comprendre la maladie derrière le défi.",
    slides: [
      {
        kind: "narrative",
        title: "Qu'est-ce que le syndrome de Guillain-Barré ?",
        bodyMd:
          "Le syndrome de Guillain-Barré (SGB) est une maladie auto-immune rare et grave dans laquelle le système immunitaire de l'organisme attaque par erreur ses propres nerfs périphériques — le réseau nerveux situé à l'extérieur du cerveau et de la moelle épinière.\n\nL'apparition est souvent soudaine, s'aggravant en quelques heures ou quelques jours pour devenir une urgence neurologique. C'est la principale cause de paralysie aiguë non traumatique dans le monde.",
      },
      {
        kind: "narrative",
        title: "Un Cas d'Erreur d'Identité",
        bodyMd:
          "La théorie la plus acceptée est celle du **\"mimétisme moléculaire\"**. Souvent, le syndrome débute après une infection courante, comme une gastro-entérite (*Campylobacter jejuni*) ou un virus respiratoire.\n\nLe système immunitaire crée des anticorps pour combattre le microbe, mais certaines parties de ce microbe ressemblent étrangement à nos propres cellules nerveuses. Les anticorps commettent une erreur catastrophique et commencent à attaquer les nerfs sains, entraînant la faiblesse, l'engourdissement et la paralysie qui définissent le SGB.",
      },
      {
        kind: "narrative",
        title: "L'Espoir à l'Horizon",
        bodyMd:
          "Bien que les traitements actuels aident, ils ne constituent pas un remède et ne sont pas efficaces pour tout le monde. C'est pourquoi la recherche est si cruciale. Les scientifiques s'efforcent de trouver des outils de diagnostic plus rapides et de développer de nouvelles thérapies plus ciblées. Votre soutien alimente cette recherche vitale et apporte de l'espoir à chaque personne touchée par le SGB.",
      },
      {
        kind: "image",
        title: "Impact sur les Cellules Nerveuses",
        image: { src: "/gbs-details.png", alt: "Explication du syndrome de Guillain-Barré - Neurone et système nerveux" },
        captionMd: "*Image illustrant l'impact du SGB sur les cellules et voies nerveuses.*",
      },
      {
        kind: "resources",
        title: "En Savoir Plus",
        resources: [
          {
            title: "GBS|CIDP Foundation Int.",
            descriptionMd:
              "La principale organisation mondiale à but non lucratif qui soutient les patients et finance la recherche sur le SGB.",
            href: "https://www.gbs-cidp.org/",
            ctaLabel: "Visiter le site →",
          },
          {
            title: "GBS|CIDP España",
            descriptionMd:
              "Un groupe de défense des patients basé en Espagne, qui fournit soutien et ressources.",
            href: "https://gbs-cidp.org.es/",
            ctaLabel: "Visitar el sitio web →",
          },
          {
            title: "AFSGB & TSFN (France)",
            descriptionMd:
              "L'association française du syndrome de Guillain-Barré, qui fournit des informations et un soutien aux patients en France.",
            href: "https://www.guillainbarre.fr/",
            ctaLabel: "Visiter le site web →",
          },
        ],
      },
    ],
  },
};
