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

export const aboutGbsContent: Record<"en" | "es" | "fr" | "eu", AboutGbsLocaleContent> = {
  en: {
    metaTitle: "About GBS",
    heroTitle: "About Guillain-Barré Syndrome",
    heroSubtitle: "Understanding the condition behind the challenge.",
    slides: [
      {
        kind: "narrative",
        title: "What is Guillain-Barré Syndrome (GBS)?",
        bodyMd:
          "In short, Guillain-Barré Syndrome (GBS) is a rare condition where your body's immune system, which is supposed to fight off germs, gets confused and starts attacking your nerves instead.\n\nIt's an autoimmune issue. Think of it this way:\n\n1. You get a normal infection, like the flu or food poisoning.\n2. Your immune system gears up to fight it.\n3. After the infection is gone, the immune system, for some reason, doesn't stand down. It mistakenly identifies your own nerves as the enemy and attacks them.",
      },
      {
        kind: "narrative",
        title: "The Nerve Analogy",
        bodyMd:
          "Think of your nerves as electrical wires.\n\n1. The wire itself is called the axon (it sends the signal).\n2. The plastic insulation around the wire is called the myelin (it protects the signal and helps it move fast).\n\nIn GBS, the immune system attacks and damages this \"insulation\" (myelin) or, in some cases, the \"wire\" (axon) itself. When that happens, the electrical signals from your brain (like \"move your legs\" or \"feel that touch\") get scrambled, slowed down, or lost.",
      },
      {
        kind: "narrative",
        title: "Key Things to Know",
        bodyMd:
          "1. **What are the symptoms?** It usually starts fast, often with weakness, tingling, or numbness in your feet and legs. This weakness then spreads up your body. In severe cases, it can cause paralysis, making it hard to walk, talk, or even breathe.\n\n2. **Is it contagious?** No. You cannot catch GBS from someone, and you can't pass it on. It's also not hereditary (passed down in families).\n\n3. **Who gets it?** It's very rare (about 1-2 people per 100,000). It can affect anyone, but it's slightly more common in adults and men.\n\n4. **Are there different types?** The \"syndrome\" part means it's a collection of related issues.\n   - The most common type (AIDP) is when the \"insulation\" gets damaged.\n   - Other types (AMAN/AMSAN) are when the \"wire\" itself gets damaged.\n   - Miller Fisher Syndrome (MFS) is a specific variant with three main symptoms: poor balance/coordination, paralysis of eye muscles, and loss of reflexes.\n\n5. **Will I recover?** The illness usually gets worse for up to four weeks, hits a plateau, and then recovery begins. Most people (about 80%) make a good recovery, but it is often very slow, taking months or even years. Some people are left with long-term problems like fatigue or weakness.\n\nIn essence, GBS is a case of \"friendly fire\" from your own body, causing temporary (but sometimes long-lasting) damage to your nervous system's wiring.",
      },
      {
        kind: "narrative",
        title: "What Happens After GBS",
        bodyMd:
          "This text covers what life looks like after you leave the hospital for Guillain-Barré Syndrome (GBS). In short, recovery is a marathon, not a sprint, and you'll have a lot of support.\n\n**The Outlook**\n\n- **The good news:** Most people recover well. 60-80% of patients are walking on their own within six months, and the majority recover within a year.\n- **The tough news:** About 15% of people will have lasting issues, such as permanent mobility problems (perhaps needing a wheelchair), persistent pain, or major fatigue.\n\n**Your Recovery Team**\n\n- You'll likely have a team of specialists to help you get back on your feet:\n  - **Physiotherapist:** Helps you with movement, rebuilding muscle, and walking.\n  - **Occupational therapist (OT):** Helps you with everyday tasks, like adapting your home or finding new ways to get dressed.\n  - **Speech therapist:** Helps if you have trouble swallowing or communicating.\n  - **Counselor:** Helps you cope emotionally with the recovery process.",
      },
      {
        kind: "narrative",
        title: "What Happens After GBS cont'd",
        bodyMd:
          "**Going Home & The Plan**\n\nLeaving the hospital can be intimidating. You'll get a \"Care Plan\" before you go. This is just a detailed schedule that outlines:\n\n- What treatment and support you'll get (e.g., community care, equipment).\n- Who will provide the support.\n- When and how often they'll help.\n- Who to contact if you have problems.\n\n**Lingering Symptoms**\n\nIt is completely normal to have lingering symptoms for weeks or months. The most common are:\n\n- Extreme tiredness (fatigue).\n- Weakness, tingling, or aching in your limbs.\n- Nerve pain.\n- Balance and coordination problems.\n\nThese symptoms might feel worse when you're tired or sick (like with a cold). This is normal and does not mean the GBS is coming back. A relapse is extremely rare.",
      },
      {
        kind: "narrative",
        title: "Other Key Points",
        bodyMd:
          "- **Pain:** Pain can show up during the recovery phase, even if you didn't have it during the acute illness. It usually gets better, but it's important to manage it and explain it to your family.\n- **Your immune system:** GBS does not damage or weaken your immune system long-term.\n- **Exercise & rest:** Exercise is good for rebuilding strength and fighting fatigue, but you must pace yourself. Rest is just as critical as activity. Aim for a good sleep schedule rather than lots of naps.\n- **Follow-ups:** You probably won't see your neurologist much anymore. Your main point of contact for recovery will likely be a community physiotherapist.\n- **Hygiene:** You may need help with basics like washing or brushing teeth. It's important to see a dentist soon after coming home, as oral health is often neglected during serious illness.",
      },
      {
        kind: "narrative",
        title: "The Slow Road Back: (And Why It's Okay That It's Slow)",
        bodyMd:
          "You've got this!!\n\nLet's be real: recovering from GBS is a marathon you never signed up for, and you're probably (and understandably) tired of running. This process is tough, it's often slow, and it's okay to be frustrated, angry, or just plain over it. You're allowed to have bad days. Your feelings are valid, and anyone who tells you to \"just stay positive\" hasn't been in your shoes. Acknowledging that this is incredibly difficult isn't being negative; it's being realistic.\n\nThis recovery isn't a smooth, straight line. It's more like a chaotic scribble. You'll have \"two steps forward, one step back\" days, and those \"back\" steps can feel like a massive failure. They're not. They are a normal, infuriating part of a complex healing process. Your body is doing a massive, invisible repair job. Your only job is to pace yourself (which is harder than it sounds) and not compare your progress to anyone else's, or even to your own from last week.\n\nSo, celebrate the small, seemingly ridiculous wins. Got your own socks on? That's a win. Made it through a physio session? Win. Didn't throw something during a moment of frustration? Also a win. You don't get extra points for doing this alone, so lean on your support team and let them help. You've already navigated the impossible just by getting to this point. You have the strength for this, even (and especially) on the days you're convinced you don't.\n\nYou are not alone...",
      },
      {
        kind: "resources",
        title: "Find Out More",
        resources: [
          {
            title: "Inflammatory Neuropathies UK",
            descriptionMd: "Inflammatory Neuropathies UK is the only UK charity exclusively dedicated to supporting people living with approximately forty conditions collectively known as Inflammatory Neuropathies.",
            href: "https://www.inflammatoryneuropathies.uk/how-we-can-help",
            ctaLabel: "For Help and Information Please Visit The Inflammatory Neuropathies UK Website →",
          },
        ],
      },
    ],
  },
  es: {
    metaTitle: "Sobre el SGB",
    heroTitle: "¿Qué el Síndrome de Guillain-Barré?",
    heroSubtitle: "Entendiendo la condición detrás del desafío.",
    slides: [
      {
        kind: "narrative",
        title: "[1/5] ¿Qué es el Síndrome de Guillain-Barré?",
        bodyMd:
          "El Síndrome de Guillain-Barré (SGB) es un trastorno autoinmune raro y grave en el que el sistema inmunitario del cuerpo ataca por error a sus propios nervios periféricos, la red de nervios fuera del cerebro y la médula espinal.\n\nEl inicio suele ser repentino, escalando en horas o días hasta convertirse en una emergencia neurológica. Es la principal causa de parálisis aguda no traumática en todo el mundo.",
      },
      {
        kind: "narrative",
        title: "[2/5] Un Caso de Identidad Equivocada",
        bodyMd:
          "La teoría más aceptada es la de **\"mimetismo molecular\"**. A menudo, el síndrome comienza después de una infección común, como una bacteria estomacal (*Campylobacter jejuni*) o un virus respiratorio.\n\nEl sistema inmunitario crea anticuerpos para combatir el germen, pero algunas partes del germen se parecen notablemente a nuestras propias células nerviosas. Los anticuerpos cometen un error catastrófico y comienzan a atacar los nervios sanos, lo que provoca la debilidad, el entumecimiento y la parálisis que definen el SGB.",
      },
      {
        kind: "narrative",
        title: "[3/5] Esperanza en el Horizonte",
        bodyMd:
          "Aunque los tratamientos actuales ayudan, no son una cura y no son efectivos para todos. Por eso la investigación es tan crucial. Los científicos están trabajando para encontrar herramientas de diagnóstico más rápidas y desarrollar nuevas terapias más específicas. Tu apoyo impulsa esta investigación vital y lleva esperanza a cada persona afectada por el SGB.",
      },
      {
        kind: "image",
        title: "[4/5] Impacto en las Células Nerviosas",
        image: { src: "/gbs-details.png", alt: "Explicación del Síndrome de Guillain-Barré - Neurona y Sistema Nervioso" },
        captionMd: "*Imagen que ilustra el impacto del SGB en las células y vías nerviosas.*",
      },
      {
        kind: "resources",
        title: "[5/5] Más Información",
        resources: [
          {
            title: "GBS|CIDP España",
            descriptionMd:
              "Un grupo de defensa de pacientes con sede en España, que ofrece apoyo y recursos.",
            href: "https://gbs-cidp.org.es/",
            ctaLabel: "Visitar Sitio Web →",
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
        title: "[1/5] Qu'est-ce que le syndrome de Guillain-Barré ?",
        bodyMd:
          "Le syndrome de Guillain-Barré (SGB) est une maladie auto-immune rare et grave dans laquelle le système immunitaire de l'organisme attaque par erreur ses propres nerfs périphériques — le réseau nerveux situé à l'extérieur du cerveau et de la moelle épinière.\n\nL'apparition est souvent soudaine, s'aggravant en quelques heures ou quelques jours pour devenir une urgence neurologique. C'est la principale cause de paralysie aiguë non traumatique dans le monde.",
      },
      {
        kind: "narrative",
        title: "[2/5] Un Cas d'Erreur d'Identité",
        bodyMd:
          "La théorie la plus acceptée est celle du **\"mimétisme moléculaire\"**. Souvent, le syndrome débute après une infection courante, comme une gastro-entérite (*Campylobacter jejuni*) ou un virus respiratoire.\n\nLe système immunitaire crée des anticorps pour combattre le microbe, mais certaines parties de ce microbe ressemblent étrangement à nos propres cellules nerveuses. Les anticorps commettent une erreur catastrophique et commencent à attaquer les nerfs sains, entraînant la faiblesse, l'engourdissement et la paralysie qui définissent le SGB.",
      },
      {
        kind: "narrative",
        title: "[3/5] L'Espoir à l'Horizon",
        bodyMd:
          "Bien que les traitements actuels aident, ils ne constituent pas un remède et ne sont pas efficaces pour tout le monde. C'est pourquoi la recherche est si cruciale. Les scientifiques s'efforcent de trouver des outils de diagnostic plus rapides et de développer de nouvelles thérapies plus ciblées. Votre soutien alimente cette recherche vitale et apporte de l'espoir à chaque personne touchée par le SGB.",
      },
      {
        kind: "image",
        title: "[4/5] Impact sur les Cellules Nerveuses",
        image: { src: "/gbs-details.png", alt: "Explication du syndrome de Guillain-Barré - Neurone et système nerveux" },
        captionMd: "*Image illustrant l'impact du SGB sur les cellules et voies nerveuses.*",
      },
      {
        kind: "resources",
        title: "[5/5] En Savoir Plus",
        resources: [
          {
            title: "EPODIN - European Patient Organisation for Dysimmune & Inflammatory Neuropathies",
            descriptionMd:
              "EPODIN - European Patient Organisation for Dysimmune & Inflammatory Neuropathies, qui fournit des informations et un soutien aux patients en France.",
            href: "https://www.epodin.org/",
            ctaLabel: "Visiter le site web →",
          },
        ],
      },
    ],
  },
  eu: {
    metaTitle: "SGBri buruz",
    heroTitle: "Zer da Guillain-Barré Sindromea?",
    heroSubtitle: "Erronkaren atzean dagoen egoera ulertzen.",
    slides: [
      {
        kind: "narrative",
        title: "[1/5] Zer da Guillain-Barré Sindromea?",
        bodyMd:
          "Guillain-Barré Sindromea (GBS) nahaste autoimmune arraro eta larria da. Bertan, gorputzaren sistema immunitarioak oker erasotzen die bere nerbio periferikoei — hau da, garunetik eta bizkarrezur-muinetik kanpo dagoen nerbio-sareari.\n\nHasiera bat-batekoa izan ohi da, ordu edo egun gutxitan larriagotuz, larrialdi neurologiko bihurtu arte. Mundu mailan paralisia akutu ez-traumatikoaren kausa nagusia da.",
      },
      {
        kind: "narrative",
        title: "[2/5] Identitate Nahaste Kasu Bat",
        bodyMd:
          "Onartuen dagoen teoria **\"mimetismo molekularra\"** da. Askotan, sindromea infekzio arrunt baten ondoren hasten da, adibidez, urdaileko bakterio bat (*Campylobacter jejuni*) edo arnas birus bat.\n\nSistema immunitarioak antigorputzak sortzen ditu germenari aurre egiteko, baina germen horren zati batzuk gure nerbio-zelulen antza handia dute. Antigorputzek akats larria egiten dute eta nerbio osasuntsuak erasotzen hasten dira, SGB definitzen duten ahultasuna, inurridura eta paralisia eraginez.",
      },
      {
        kind: "narrative",
        title: "[3/5] Itxaropena Zerumugan",
        bodyMd:
          "Gaur egungo tratamenduek laguntzen badute ere, ez dira sendabidea eta ez dira eraginkorrak guztientzat. Horregatik da hain garrantzitsua ikerketa. Zientzialariak diagnostiko-tresna azkarragoak aurkitzeko eta terapia berri eta zehatzagoak garatzeko lanean ari dira. Zure laguntzak funtsezko ikerketa hau bultzatzen du eta itxaropena ematen dio SGBk kaltetutako pertsona bakoitzari.",
      },
      {
        kind: "image",
        title: "[4/5] Eragina Nerbio Zeluletan",
        image: { src: "/gbs-details.png", alt: "Guillain-Barré Sindromearen azalpena - Neurona eta Nerbio Sistema" },
        captionMd: "*SGBk nerbio-zeluletan eta bideetan duen eragina erakusten duen irudia.*",
      },
      {
        kind: "resources",
        title: "[5/5] Informazio Gehiago",
        resources: [
          {
            title: "GBS|CIDP España",
            descriptionMd:
              "Espainian egoitza duen pazienteen defentsa-taldea, laguntza eta baliabideak eskaintzen dituena.",
            href: "https://gbs-cidp.org.es/",
            ctaLabel: "Webgunea Bisitatu →",
          },
        ],
      },
    ],
  },
};
