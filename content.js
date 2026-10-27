/* ==========================================================
   CONTENT FILE  -  edit everything about your website here.
   Text goes between "quotes". Images are paths to files in
   the /images folder (replace the file or change the path).
   ========================================================== */

window.SITE = {

  /* ---------- General ---------- */
  brand: {
    name: "SOMAMENT",              // logo text in the header
    subtitle: "",                  // small line under the logo (e.g. "MUJER ALQUIMIA"), leave "" for none
    whatsapp: "34600000000",       // number with country code, no + or spaces
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
    eyebrow: "TERAPIA SOMÁTICA · REIKI · TAROT · LIMPIEZA ENERGÉTICA",
    title: "Escucharte también es cuidarte.",
    text: "Un espacio para parar, sentir y reconectar contigo. Te acompaño a encontrar aquello que necesitas, desde una mirada cercana, consciente y respetuosa.",
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
    linkLabel: "Ver sesiones"
  },

  /* ---------- Sessions / services (add / remove / reorder blocks freely) ----------
     The cards on the home page AND the session pages are built from this list, in this order.
     To add a service: copy a whole block { ... }, change the id and the texts, and add its photo to /images.

     icon options: flower, spiral, moon, leaf, sun, heart, lotus
     In any text you can put **double asterisks** around words to make them bold.
     Optional lines (delete them when you don't need them): quote, bullets, closing, priceExtra, special, note.

     Photos: "image" = photo next to the text, "heroImage" = photo in the top banner.
     By default both use the same file (images/servicio-....jpg). To use a better photo, replace that file
     with a higher resolution one that has the SAME file name. No need to change anything in this file.
     heroPosition / imagePosition = which part of the photo stays visible, e.g. "center 30%".        */
  sessions: [
    {
      id: "reiki",                           // used in the page address: sesion.html?s=reiki
      name: "Reiki Chamánico",
      icon: "spiral",
      short: "Armoniza tu energía, calma tu mente y abre espacio a lo nuevo.",
      heroEyebrow: "SANACIÓN · ENERGÍA · TRANSFORMACIÓN",
      heroTitle: "Un espacio para volver a ti",
      heroText: "Te acompaño en tu proceso de transformación a través del trabajo energético, la sabiduría ancestral y la escucha profunda.",
      heroButton: "Conoce mis sesiones",
      heroImage: "images/servicio-reiki-chamanico.jpg",
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
      id: "limpieza",
      name: "Limpieza Energética",
      icon: "leaf",
      short: "Libera bloqueos, renueva tu vitalidad y siente la ligereza de lo que fluye.",
      heroEyebrow: "LIMPIEZA ENERGÉTICA",
      heroTitle: "Ritual de limpieza energética y protección chamánica profunda",
      heroText: "Con mapacho (tabaco sagrado), sahumerios y poderosas hierbas del Perú.",
      heroButton: "Conoce más sobre esta sesión",
      heroImage: "images/servicio-limpieza-energetica.jpg",
      heroPosition: "center 45%",
      image: "images/servicio-limpieza-energetica.jpg",
      imagePosition: "center 45%",
      title: "Limpieza energética",
      paragraphs: [
        "Un trabajo dirigido a liberar bloqueos y limpiar cargas energéticas, incluyendo el mal de ojo y energías densas, favoreciendo la renovación, la armonización y la protección energética. Las limpiezas pueden realizarse tanto a personas como a espacios, adaptando el ritual a las necesidades de cada caso.",
        "**Opcional (solo presencial):** baño de florecimiento con flores frescas, hierbas dulces, esencias y resinas después de la limpieza energética profunda. Es una práctica chamánica traída con mucho respeto y amor desde la Amazonía, utilizada para renovar el espíritu, atraer estados de bienestar, prosperidad y apertura vital."
      ],
      duration: "60 minutos (90 minutos con baño de florecimiento)",
      location: "Online · Presencial · Con cita previa",
      priceOnline: "88 €",
      pricePresencial: "99 €",
      priceExtra: "Limpieza + baño de florecimiento (solo presencial): **111 €**",
      special: "Tarifa especial para personas residentes en países de Centroamérica y Sudamérica con bajos ingresos: 55 €.",
      note: "En las limpiezas presenciales de espacios se aplica un suplemento por desplazamiento según los kilómetros recorridos."
    },
    {
      id: "ritual-alquimia",
      name: "Ritual Alquimia",
      icon: "sun",
      short: "Una experiencia integrativa y alquímica para tu cuerpo, mente y espíritu.",
      heroEyebrow: "RITUAL ALQUIMIA",
      heroTitle: "Una experiencia integrativa y alquímica para tu cuerpo, mente y espíritu.",
      heroText: "Un encuentro contigo para sentirte y reconectar con tu esencia, tu poder y soberanía.",
      heroButton: "Conoce más sobre esta sesión",
      heroImage: "images/servicio-ritual-alquimia.jpg",
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
    },
    {
      id: "tarot",
      name: "Tarot Transpersonal",
      icon: "moon",
      short: "Una guía para tomar conciencia y ver con más claridad tu camino.",
      heroEyebrow: "TAROT TRANSPERSONAL",
      heroTitle: "Un espacio para comprender lo que estás viviendo y abrir nuevas perspectivas.",
      heroText: "A través del tarot, exploramos las situaciones que atraviesas, tus procesos personales y aquello que puede estar operando en planos más profundos de tu experiencia.",
      heroButton: "Conoce más sobre esta sesión",
      heroImage: "images/servicio-tarot-transpersonal.jpg",
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
      short: "Una lectura canalizada de tu campo físico, emocional y energético.",
      heroEyebrow: "CANALIZACIÓN PSICOSOMÁTICA",
      heroTitle: "Una mirada profunda hacia tu verdad.",
      heroText: "Una lectura canalizada de tu campo físico, emocional y energético para explorar aquello que emerge de tu cuerpo, tu historia personal, tu linaje y tus vínculos.",
      heroButton: "Conoce más sobre esta sesión",
      heroImage: "images/servicio-canalizacion-psicosomatica.jpg",
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
      id: "somatica",
      name: "Terapia Somática",
      icon: "flower",
      short: "Conecta con tu cuerpo, libera tensiones y recupera el equilibrio.",
      heroEyebrow: "TERAPIA SOMÁTICA",
      heroTitle: "Habitar el cuerpo, volver a ti",
      heroText: "Una sesión de exploración y acompañamiento a través del cuerpo, las sensaciones y la conciencia corporal. Para que puedas sentir, liberar y reconectar con tu fuerza vital.",
      heroButton: "Conoce más sobre esta sesión",
      heroImage: "images/servicio-terapia-somatica.jpg",
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
    }
  ],

  /* ---------- About (home block + "Sobre mí" page) ---------- */
  about: {
    eyebrow: "SOBRE SOMAMENT",
    title: "Un acompañamiento cercano, consciente y respetuoso.",
    paragraphs: [
      "Soy Somament, y a través de la terapia somática, el Reiki, el tarot y la limpieza energética, te ofrezco un espacio seguro donde puedas parar, sentir y reconectar con lo que necesitas.",
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
    bandTitle: "Somament",
    bandQuote: "Tu proceso también es mi camino"
  },

  /* ---------- Contact page ---------- */
  contact: {
    title: "Contacto",
    text: "Escríbeme y encontramos juntas la sesión que mejor te acompañe.",
    whatsappLabel: "Escríbeme por WhatsApp",
    email: "hola@example.com",
    instagram: "https://instagram.com/tuusuario",
    instagramLabel: "Instagram"
  },

  /* ---------- Footer ---------- */
  footer: {
    text: "SOMAMENT · BIENESTAR",
    script: "Vuelve a ti"
  }
};
