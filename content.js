/* ==========================================================
   CONTENT FILE  -  edit everything about your website here.
   Text goes between "quotes". Images are paths to files in
   the /images folder (replace the file or change the path).
   ========================================================== */

window.SITE = {

  /* ---------- General ---------- */
  brand: {
    name: "ESTIBALIZALQUIMIA",              // logo text in the header
    subtitle: "",                  // small line under the logo (e.g. "MUJER ALQUIMIA"), leave "" for none
    whatsapp: "34622035176",       // number with country code, no + or spaces
    whatsappMessage: "Hola, quiero reservar una sesión",
    bookLabel: "Reservar sesión"   // button in the header
  },

  /* ---------- Menu ---------- */
  nav: [
    { label: "Inicio",   href: "index.html" },
    { label: "Sesiones", href: "index.html#sesiones" },
    { label: "Sobre mí", href: "sobre-mi.html" },
    { label: "Contacto", href: "contacto.html" }
  ],

  /* ---------- Home page ---------- */
  home: {
    eyebrow: "TERAPIA SOMÁTICA · REIKI · TAROT\nCANALIZACIÓN · LIMPIEZA ENERGÉTICA\nRITUAL ALQUIMIA",
    title: "Te acompaño en tu propio proceso alquímico",
    text: "Sesiones de autoconocimiento, liberación y transformación.\nUn espacio para reconectar contigo y recuperar tu soberanía.",
    button: "Quiero reservar una sesión",
    /* Hero picture. Three ways to set it up (choose with imageStyle):
       "fade"   = photo on the right that fades into the beige (current)
       "full"   = ONE wide photo (with shadows, plant etc. already in it) covering the whole hero
       "cutout" = PNG of the woman with transparent background, placed over "background" below   */
    imageStyle: "cutout",
    image: "images/woman.png",                  // PNG of the woman with transparent background
    background: "images/hero-background.jpg",   // wide background picture (shadows + plant)
    quote: "Aquí también se sana con el alma"
  },

  sessionsIntro: {
    title: "Encuentra el espacio que necesitas",
    text: "Cada sesión es única, como tú. Explora las opciones y elige la que más resuene contigo.",
    linkLabel: "Ver sesión",
    detailLabel: "SESIÓN"          // small label above the title on each session page
  },

  /* ---------- Sessions / services (add / remove / reorder blocks freely) ----------
     The cards on the home page AND the session pages are built from this list, in this order.
     To add a service: copy a whole block { ... }, change the id and the texts, and add its photo to /images.

     icon options: flower, spiral, moon, leaf, sun, heart, lotus
     In any text you can put **double asterisks** around words to make them bold.
     Optional lines (delete them when you don't need them): quote, bullets, closing, priceExtra, special, note.

     Photos: "heroImage" = photo in the top banner (images/servicio-....-banner.jpg),
     "image" = photo next to the text (images/servicio-....jpg). To use a better photo, replace that file
     with a higher resolution one that has the SAME file name. No need to change anything in this file.
     heroPosition / imagePosition = which part of the photo stays visible, e.g. "center 30%".        */
  sessions: [
    {
      id: "somatica",
      name: "Terapia Somática",
      icon: "flower",
      short: "Conecta con tu cuerpo, libera patrones\ny recupera el equilibrio.",
      heroEyebrow: "TERAPIA SOMÁTICA",
      heroTitle: "Habitar el cuerpo,\nvolver a ti",
      heroText: "Una sesión de exploración y acompañamiento a través del cuerpo, las sensaciones y la conciencia corporal. Para que puedas sentir, liberar y reconectar con tu fuerza vital.",
      heroButton: "Conoce más sobre esta sesión",
      heroImage: "images/servicio-terapia-somatica-banner.jpg",
      heroPosition: "center 38%",
      image: "images/servicio-terapia-somatica.jpg",
      imagePosition: "center 40%",
      title: "Terapia somática",
      quote: "Tu cuerpo guarda lo que no se dice. Escucharlo también es sanar.",
      paragraphs: [
        "Un espacio de escucha y exploración a través del cuerpo, las sensaciones y la conciencia corporal.",
        "Un acompañamiento personalizado de profundo autoconocimiento para conectar con tu cuerpo y adentrarte en un proceso de autodescubrimiento, explorando y atendiendo aquello que emerge durante la sesión. Cada sesión es única y se adapta a tus necesidades y a lo que emerge en cada encuentro."
      ],
      duration: "60 minutos",
      location: "Online · Presencial · Con cita previa",
      priceOnline: "88 €",
      pricePresencial: "99 €",
      special: "Tarifa especial para personas residentes en países de Centroamérica y Sudamérica con bajos ingresos: 55 €."
    },
    {
      id: "reiki",                           // used in the page address: sesion.html?s=reiki
      name: "Reiki Chamánico",
      icon: "spiral",
      short: "Armoniza tu energía, calma tu mente\ny abre espacio a lo nuevo.",
      heroEyebrow: "REIKI CHAMÁNICO",
      heroTitle: "Un espacio para\nvolver a ti",
      heroText: "Te acompaño en tu proceso de transformación a través del trabajo energético y la sabiduría ancestral.",
      heroButton: "Conoce más sobre esta sesión",
      heroImage: "images/servicio-reiki-chamanico-banner.jpg",
      heroPosition: "center 30%",
      image: "images/servicio-reiki-chamanico.jpg",
      imagePosition: "center 40%",
      title: "Reiki chamánico",
      quote: "Una sesión para armonizar tu energía y reconectar con tu esencia.",
      paragraphs: [
        "Trabajo energético a través del Reiki chamánico, enfocado en los puntos donde pueden existir bloqueos a nivel físico, emocional y energético.",
        "Durante la sesión realizo un trabajo de ajuste, reestructuración y armonización, utilizando cristales, péndulo, aromas e instrumentos como parte del proceso. Cada encuentro es único y personalizado, atendiendo a lo que emerge durante la sesión y a las necesidades de cada momento."
      ],
      duration: "60 minutos",
      location: "Online · Presencial · Con cita previa",
      priceOnline: "88 €",
      pricePresencial: "99 €",
      special: "Tarifa especial para personas residentes en países de Centroamérica y Sudamérica con bajos ingresos: 55 €."
    },
    {
      id: "tarot",
      name: "Tarot Transpersonal",
      icon: "moon",
      short: "Una guía para tomar conciencia\ny ver con más claridad tu camino.",
      heroEyebrow: "TAROT TRANSPERSONAL",
      heroTitle: "Un espacio\npara comprender\nlo que estás viviendo\ny abrir nuevas perspectivas.",
      heroText: "A través del tarot, exploramos las situaciones que atraviesas,\ntus procesos personales y aquello que puede estar operando\nen planos más profundos de tu experiencia.",
      heroButton: "Conoce más sobre esta sesión",
      heroImage: "images/servicio-tarot-transpersonal-banner.jpg",
      heroPosition: "center 50%",
      image: "images/servicio-tarot-transpersonal.jpg",
      imagePosition: "center 50%",
      title: "Tarot transpersonal",
      quote: "Una herramienta de autoconocimiento para mirar con más claridad lo que vives.",
      paragraphs: [
        "Un espacio de exploración y autoconocimiento para comprender lo que estás viviendo, descubrir patrones y abrirte a nuevas perspectivas.",
        "A través del tarot, exploramos las situaciones que atraviesas, tus procesos personales y aquello que puede estar operando en planos más profundos de tu experiencia:"
      ],
      bullets: [
        "**Autoconocimiento:** exploramos patrones, emociones y aspectos de tu mundo interior que pueden ayudarte a comprenderte mejor.",
        "**Comprensión de situaciones:** miramos desde otra perspectiva aquello que estás viviendo, abriendo espacio a nuevas comprensiones.",
        "**Orientación personal:** exploramos tus preguntas e inquietudes para encontrar claridad y reconocer nuevas posibilidades en tu camino.",
        "**Conexión interior:** un espacio para escuchar tu intuición, profundizar en tu proceso y conectar con tu propia sabiduría."
      ],
      closing: "Una invitación a mirar más allá de lo evidente, comprender tu presente y recuperar tu soberanía personal.",
      duration: "60 minutos",
      location: "Online · Presencial · Con cita previa",
      priceOnline: "88 €",
      pricePresencial: "99 €",
      special: "Tarifa especial para personas residentes en países de Centroamérica y Sudamérica con bajos ingresos: 55 €."
    },
    {
      id: "canalizacion",
      name: "Canalización Psicosomática",
      icon: "lotus",
      short: "Una lectura canalizada de tu campo,\nfísico, emocional y energético.",
      heroEyebrow: "CANALIZACIÓN PSICOSOMÁTICA",
      heroTitle: "Una mirada profunda hacia tu verdad.",
      heroText: "Una lectura canalizada de tu campo, físico, emocional y energético\npara explorar aquello que emerge de tu cuerpo,\ntu historia personal, tu linaje y tus vínculos.",
      heroButton: "Conoce más sobre esta sesión",
      heroImage: "images/servicio-canalizacion-psicosomatica-banner.jpg",
      heroPosition: "center 30%",
      image: "images/servicio-canalizacion-psicosomatica.jpg",
      imagePosition: "center 30%",
      title: "Canalización psicosomática",
      paragraphs: [
        "Un espacio profundo de autoconocimiento para dar luz a tu historia, explorar aquello que emerge y abrirte a una nueva comprensión de ti misma:"
      ],
      bullets: [
        "**Memoria corporal:** a través de la información que recibo del campo, exploramos lo que emerge en relación con tus órganos, afecciones, enfermedades y lesiones, y sus conexiones con tu historia de vida.",
        "**Línea de tiempo:** edades, lugares y vivencias significativas que emergen durante la canalización y que pueden aportar una nueva mirada a tu presente.",
        "**Linaje familiar:** canalizo información del campo de tus padres y familiares, explorando sus historias, las vivencias de su infancia y los patrones que pueden resonar en tu propia vida, estén vivos o hayan fallecido.",
        "**Vínculos relacionales:** exploramos tus relaciones pasadas y presentes, las dinámicas y lealtades que pueden ayudarte a comprender tu historia y tu manera de vincularte."
      ],
      closing: "Dale espacio a tu historia y a tu linaje para reconectar contigo y recuperar tu soberanía.",
      duration: "60 minutos",
      location: "Online · Presencial · Con cita previa",
      priceOnline: "88 €",
      pricePresencial: "99 €",
      special: "Tarifa especial para personas residentes en países de Centroamérica y Sudamérica con bajos ingresos: 55 €."
    },
    {
      id: "limpieza",
      name: "Limpieza Energética",
      icon: "leaf",
      short: "Limpieza, armonización y protección chamánica\nde personas y espacios.",
      heroEyebrow: "LIMPIEZA ENERGÉTICA",
      heroTitle: "Ritual\nde limpieza energética\ny protección chamánica.",
      heroText: "Con mapacho (tabaco sagrado),\nsahumerios y poderosas hierbas del Perú.",
      heroButton: "Conoce más sobre esta sesión",
      heroImage: "images/servicio-limpieza-energetica-banner.jpg",
      heroPosition: "center 45%",
      image: "images/servicio-limpieza-energetica.jpg",
      imagePosition: "center 45%",
      title: "Limpieza energética",
      paragraphs: [
        "Un trabajo dirigido a liberar bloqueos y limpiar cargas energéticas, el mal de ojo, corte de lazos y despejar energías densas, favoreciendo la renovación, la armonización y la protección energética. Las limpiezas pueden realizarse tanto a personas como a espacios, adaptando el ritual a las necesidades de cada caso.",
        "**Opcional (solo presencial):** baño de florecimiento con flores frescas, hierbas dulces, esencias y resinas después de la limpieza energética profunda. Es una práctica chamánica de una comunidad indígena de la Amazonía, utilizada para renovar el espíritu, atraer estados de bienestar, prosperidad y apertura vital."
      ],
      duration: "60 minutos (90 minutos con baño de florecimiento)",
      location: "Online · Presencial · Con cita previa",
      priceOnline: "88 €",
      pricePresencial: "99 €",
      priceExtra: "Limpieza + baño de florecimiento (solo presencial): **111 €**",
      special: "Tarifa especial para personas residentes en países de Centroamérica y Sudamérica con bajos ingresos: 55 €.",
      note: "!! En las limpiezas presenciales de espacios se aplica un suplemento por tiempo de desplazamiento según los kilómetros recorridos."
    },
    {
      id: "ritual-alquimia",
      name: "Ritual Alquimia",
      icon: "sun",
      short: "Una experiencia integrativa y alquímica\npara tu cuerpo, mente y espíritu.",
      heroEyebrow: "RITUAL ALQUIMIA",
      heroTitle: "Una experiencia integrativa y alquímica para tu cuerpo,\nmente y espíritu.",
      heroText: "Un encuentro contigo para sentirte y reconectar con tu esencia,\ntu poder y soberanía.",
      heroButton: "Conoce más sobre esta sesión",
      heroImage: "images/servicio-ritual-alquimia-banner.jpg",
      heroPosition: "center 68%",
      image: "images/servicio-ritual-alquimia.jpg",
      imagePosition: "center 65%",
      title: "Ritual Alquimia",
      paragraphs: [
        "Un espacio para cuidarte, escucharte, reconectar contigo y alquimizar lo que surja durante la sesión, acompañándote en tu proceso de autoconocimiento, transformación y soberanía personal. Integramos diferentes herramientas que se complementan entre sí, siempre adaptándonos a tu momento y a tus necesidades:"
      ],
      bullets: [
        "**Terapia somática:** conectar con tu cuerpo, escuchar sus sensaciones y atender aquello que, desde su propia inteligencia, necesita emerger.",
        "**Limpieza energética:** ritual de limpieza y protección chamánica profunda con mapacho, sahumerios y hierbas del Perú.",
        "**Reiki chamánico:** ajuste, reestructuración y armonización de bloqueos con cristales, péndulo, aromas e instrumentos.",
        "**Tarot transpersonal:** una herramienta de exploración y reflexión para abrir nuevas perspectivas y profundizar en tu mundo interno."
      ],
      duration: "90 minutos",
      location: "Online · Presencial · Con cita previa",
      priceOnline: "99 €",
      pricePresencial: "111 €",
      special: "Tarifa especial para personas residentes en países de Centroamérica y Sudamérica con bajos ingresos: 77 €."
    }
  ],

  /* ---------- About (home block + "Sobre mí" page) ---------- */
  about: {
    eyebrow: "SOBRE MÍ",
    title: "Un acompañamiento cercano, consciente y respetuoso.",
    paragraphs: [
      "Me llamo Estíbaliz y, desde mi propio camino de transformación, integro mi historia, mis formaciones, mis aprendizajes y mi alquimia para acompañarte en el tuyo.",
      "Te ofrezco un espacio seguro donde puedas parar, sentir y reconectar con lo que necesites en este momento de tu vida.",
      "Cada sesión es un encuentro contigo, una oportunidad para escuchar tu cuerpo, tu energía y tu intuición."
    ],
    button: "Conoce más sobre mí",
    image: "images/about.jpg",
    quote: "Volver a ti también es un acto de amor",
    /* the small 3-icon list used in the About band on the session pages */
    highlights: [
      { icon: "spiral", label: "Terapia somática" },
      { icon: "leaf",   label: "Herramientas ancestrales" },
      { icon: "sun",    label: "Acompañamiento personalizado" }
    ],
    bandQuote: "Tu proceso también es mi camino"
  },

  /* ---------- "Conoce más sobre mí" page (sobre-mi.html) ----------
     Photos: heroImage = top banner, image = photo next to each block. Replace the files with the SAME name. */
  aboutPage: {
    heroEyebrow: "CONOCE MÁS SOBRE MÍ",
    heroTitle: "",                                  // optional big title in the banner, "" for none
    heroText: "",                                   // optional line under the title, "" for none
    heroImage: "images/sobre-mi-banner.jpg",
    heroPosition: "center",                          // banner photo is always shown whole (not cropped), on the right
    blocks: [
      {
        image: "images/sobre-mi-historia.jpg",
        imagePosition: "center 30%",
        title: "Mi historia personal,\nmi alquimia",   // optional heading, "" for none
        paragraphs: [
          "Mi camino no ha sido lineal. Desde mi infancia y a lo largo de mi vida, he atravesado experiencias desgarradoras de abandono, abusos y situaciones de riesgo vital. Estas vivencias me llevaron a emprender mi propio camino de autoconocimiento, sanación y transformación para salir del bucle de sufrimiento en el que sobrevivía.",
          "Fue un camino de presencia, escucha y reencuentro conmigo misma, con mis propias sombras y luces. Un proceso alquímico que me permitió transformar el miedo en amor y descubrir una nueva manera de habitarme, relacionarme, comprender la vida y disfrutarla."
        ]
      },
      {
        image: "images/sobre-mi-formacion.jpg",
        imagePosition: "center 30%",
        title: "Mi formación,\nmi recorrido",
        paragraphs: [
          "Me he formado como Terapeuta Integrativa Somática, Psicoterapia Sensoriomotriz con enfoque sensible al trauma, también he profundizado con formaciones en Neurobiología Interpersonal, Mindfulness y Comunicación No Violenta.",
          "Mi camino personal de sanación me acercó a las plantas maestras, a través de las cuales viví una experiencia profundamente terapéutica. Más adelante, mi búsqueda espiritual me llevó a conocer y aprender de las tradiciones, ceremonias y rituales ancestrales de distintos sabedores indígenas, con quienes continúo aprendiendo en mi camino como mujer medicina, acogiendo sus conocimientos y enseñanzas con profunda humildad, gratitud y respeto.",
          "Este recorrido ha enriquecido mi práctica terapéutica, ampliando mi mirada e incorporando una dimensión energética y espiritual que dialoga con mi formación psicológica y somática."
        ]
      }
    ]
  },

  /* ---------- Contact page ---------- */
  contact: {
    title: "Contacto",
    text: "Escríbeme y encontramos juntas la sesión que mejor te acompañe.",
    whatsappLabel: "Escríbeme por WhatsApp",
    email: "contacto.somament@gmail.com",
    instagram: "https://instagram.com/estibaliz.mujeralquimia",
    instagramLabel: "Instagram"
  },

  /* ---------- Footer ---------- */
  footer: {
    text: "ESTIBALIZALQUIMIA",
    script: "Vuelve a ti"
  }
};
