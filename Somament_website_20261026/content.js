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

  /* ---------- Sessions (add / remove blocks freely) ----------
     icon options: flower, spiral, moon, leaf, sun, heart        */
  sessions: [
    {
      id: "somatica",                         // used in the page address: sesion.html?s=somatica
      name: "Terapia somática",
      icon: "flower",
      short: "Conecta con tu cuerpo, libera tensiones y recupera el equilibrio.",
      heroEyebrow: "TERAPIA SOMÁTICA",
      heroTitle: "Habitar el cuerpo, volver a ti",
      heroText: "Una sesión de exploración y acompañamiento a través del cuerpo, las sensaciones y la conciencia corporal. Para que puedas sentir, liberar y reconectar con tu fuerza vital.",
      heroButton: "Conoce más sobre esta sesión",
      heroImage: "images/somatica-hero.jpg",
      image: "images/somatica.jpg",
      title: "Terapia somática",
      quote: "Tu cuerpo guarda lo que no se dice. Escucharlo también es sanar.",
      paragraphs: [
        "A través de la terapia somática exploramos la conexión entre tus emociones, tu historia y las sensaciones que habitan en tu cuerpo. Desde una mirada profunda y respetuosa, acompañamos el proceso de liberar tensiones, reconocer patrones y recuperar el equilibrio.",
        "Cada sesión es un espacio para habitarte, sentirte y volver a tu centro, integrando cuerpo, mente y emoción."
      ],
      duration: "60 minutos",
      location: "Online · Presencial",
      priceOnline: "88 €",
      pricePresencial: "99 €",
      special: "Tarifa especial para personas residentes en países de Centroamérica y Sudamérica con bajos ingresos: 55 €."
    },
    {
      id: "reiki",
      name: "Reiki",
      icon: "spiral",
      short: "Armoniza tu energía, calma tu mente y abre espacio a lo nuevo.",
      heroEyebrow: "SANACIÓN · ENERGÍA · TRANSFORMACIÓN",
      heroTitle: "Un espacio para volver a ti",
      heroText: "Te acompaño en tu proceso de transformación a través del trabajo energético, la sabiduría ancestral y la escucha profunda.",
      heroButton: "Conoce mis sesiones",
      heroImage: "images/reiki-hero.jpg",
      image: "images/reiki.jpg",
      title: "Reiki chamánico",
      quote: "Una sesión para armonizar tu energía y reconectar con tu esencia.",
      paragraphs: [
        "Trabajo energético a través del Reiki chamánico, enfocado en los puntos donde pueden existir bloqueos a nivel físico, emocional y energético.",
        "Durante la sesión utilizo cristales, péndulo, aromas e instrumentos como parte del proceso.",
        "Cada encuentro es único y personalizado, atendiendo a lo que emerge durante la sesión y a lo que necesitas en ese momento."
      ],
      duration: "60 minutos",
      location: "Online · Presencial",
      priceOnline: "88 €",
      pricePresencial: "99 €",
      special: "Tarifa especial para personas residentes en países de Centroamérica y Sudamérica con bajos ingresos: 55 €."
    },
    {
      id: "tarot",
      name: "Tarot",
      icon: "moon",
      short: "Una guía para tomar conciencia y ver con más claridad tu camino.",
      heroEyebrow: "TAROT TRANSPERSONAL",
      heroTitle: "Un espacio para comprender lo que estás viviendo y abrir nuevas perspectivas.",
      heroText: "A través del tarot, exploramos las situaciones que atraviesas, tus procesos personales y aquello que puede estar operando en planos más profundos de tu experiencia.",
      heroButton: "Conoce más sobre esta sesión",
      heroImage: "images/tarot-hero.jpg",
      image: "images/tarot.jpg",
      title: "Tarot transpersonal",
      quote: "Una herramienta de autoconocimiento para mirar con más claridad lo que vives.",
      paragraphs: [
        "El tarot transpersonal te invita a mirar más allá de lo evidente, conectando con tu sabiduría interior y ofreciéndote nuevas perspectivas sobre tu presente, tus desafíos y tus posibilidades.",
        "Durante la sesión exploramos tus preguntas, bloqueos, patrones y emociones desde una mirada profunda y consciente, para que puedas comprender, integrar y avanzar con mayor claridad y confianza."
      ],
      duration: "60 minutos",
      location: "Online · Presencial",
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
      heroTitle: "Soltar lo que pesa, dar espacio a lo nuevo",
      heroText: "Una sesión para liberar bloqueos, renovar tu vitalidad y volver a sentir la ligereza.",
      heroButton: "Conoce más sobre esta sesión",
      heroImage: "images/limpieza-hero.jpg",
      image: "images/limpieza.jpg",
      title: "Limpieza energética",
      quote: "Libera lo que ya no te pertenece.",
      paragraphs: [
        "Escribe aquí la descripción de la sesión de limpieza energética.",
        "Puedes añadir tantos párrafos como quieras."
      ],
      duration: "60 minutos",
      location: "Online · Presencial",
      priceOnline: "88 €",
      pricePresencial: "99 €",
      special: ""     // leave "" to hide the special-rate line
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
