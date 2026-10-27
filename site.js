/* Builds the pages from content.js. You normally don't need to edit this file. */
(function () {
  const S = window.SITE;
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const bg = (url, pos) => (url ? `style="background-image:url('${esc(url)}')${pos ? `;background-position:${esc(pos)}` : ""}"` : "");
  /* text with **bold** parts: "**Title:** rest of the text" */
  const rich = (s) => esc(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");

  const ICONS = {
    flower: '<svg viewBox="0 0 48 48"><circle cx="24" cy="12" r="6"/><path d="M24 18v22M24 28c-8 0-12-5-12-11 6 0 12 4 12 11zM24 28c8 0 12-5 12-11-6 0-12 4-12 11zM14 40h20"/></svg>',
    spiral: '<svg viewBox="0 0 48 48"><path d="M24 24c0-2 3-2 3 0s-4 4-6 2-1-8 3-9 11 1 11 9-8 14-15 12-10-9-8-16 9-12 17-11"/></svg>',
    moon: '<svg viewBox="0 0 48 48"><path d="M32 6c-9 3-14 12-11 22s13 14 22 10C38 44 26 44 18 38S6 22 12 13 26 3 32 6z"/></svg>',
    leaf: '<svg viewBox="0 0 48 48"><path d="M24 42V20M24 20c-8-2-10-9-8-14 7 1 10 6 8 14zM24 28c8-1 12-7 11-13-8 0-12 5-11 13zM24 36c-6-1-9-5-9-9 6 0 9 3 9 9z"/></svg>',
    sun: '<svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="7"/><path d="M24 5v6M24 37v6M5 24h6M37 24h6M10.5 10.5l4 4M33.5 33.5l4 4M37.5 10.5l-4 4M14.5 33.5l-4 4"/></svg>',
    heart: '<svg viewBox="0 0 48 48"><path d="M24 40S6 29 6 17c0-6 5-10 10-9 4 1 8 5 8 5s4-4 8-5c5-1 10 3 10 9 0 12-18 23-18 23z"/></svg>',
    clock: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    pin: '<svg viewBox="0 0 24 24"><path d="M12 22s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>',
    lotus: '<svg viewBox="0 0 48 48"><path d="M24 38c-8 0-14-5-16-12 6 0 11 3 16 12 5-9 10-12 16-12-2 7-8 12-16 12zM24 38c-5-6-6-14 0-24 6 10 5 18 0 24z"/></svg>'
  };
  const WA = '<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 00-8.5 15.2L2 22l5-1.4A10 10 0 1012 2zm0 2a8 8 0 11-4.2 14.8l-.4-.2-2.6.7.7-2.5-.3-.4A8 8 0 0112 4zM9 7.5c-.3 0-.6.4-.8.8-.5 1 0 2.300 1.100 3.700 1.300 1.700 2.900 2.800 4.500 3.200.9.200 1.800-.4 2-1.200l-1.800-.9-.8.800c-1.200-.5-2.300-1.600-2.900-2.800l.7-.8-.8-2c-.2-.5-.5-.5-1.200-.5z"/></svg>';
  const ARROW = " →";
  const HEART = '<svg viewBox="0 0 24 24"><path d="M12 20S4 15 4 9.500C4 7 6 5.500 8 5.500c2 0 4 2.500 4 2.500s2-2.500 4-2.500c2 0 4 1.500 4 4C20 15 12 20 12 20z"/></svg>';

  const waLink = () => `https://wa.me/${S.brand.whatsapp}?text=${encodeURIComponent(S.brand.whatsappMessage)}`;
  const page = document.body.dataset.page;

  /* ----- header ----- */
  function header() {
    const here = location.pathname.split("/").pop() || "index.html";
    const links = S.nav.map((n) => {
      const file = n.href.split("#")[0];
      const active = (file === here && !n.href.includes("#")) || (page === "session" && n.label === "Sesiones");
      return `<a href="${esc(n.href)}" class="${active ? "active" : ""}">${esc(n.label)}</a>`;
    }).join("");
    $("header").innerHTML = `
      <div class="wrap">
        <a href="index.html" class="logo">${esc(S.brand.name)}${S.brand.subtitle ? `<small>${esc(S.brand.subtitle)}</small>` : ""}</a>
        <nav class="nav" id="nav">${links}</nav>
        <a class="btn header-book" href="${waLink()}" target="_blank" rel="noopener">${WA}${esc(S.brand.bookLabel)}</a>
        <button class="menu-toggle" aria-label="Menu" onclick="document.getElementById('nav').classList.toggle('open')">☰</button>
      </div>`;
  }

  function footer() {
    $("footer").innerHTML = `<div class="wrap"><span class="txt">${esc(S.footer.text)}</span><span class="script">${esc(S.footer.script)} ♡</span></div>`;
  }

  /* ----- pieces ----- */
  const bookBtn = (label) => `<a class="btn" href="${waLink()}" target="_blank" rel="noopener">${WA}${esc(label)}${ARROW}</a>`;

  function aboutBlock() {
    const a = S.about;
    return `
    <section class="about">
      <div class="about-img" ${bg(a.image)}><div class="script">${esc(a.quote)}<br>♡</div></div>
      <div class="about-text">
        <div class="eyebrow">${esc(a.eyebrow)}</div>
        <h2>${esc(a.title)}</h2>
        ${a.paragraphs.map((p) => `<p>${esc(p)}</p>`).join("")}
        <a class="btn outline" href="sobre-mi.html">${esc(a.button)}${ARROW}</a>
      </div>
    </section>`;
  }

  function band() {
    const a = S.about;
    return `
    <section class="band"><div class="wrap">
      <div class="band-img" ${bg(a.image)}></div>
      <div class="band-body">
        <div>
          <div class="eyebrow">SOBRE MÍ</div>
          <h2>${esc(a.bandTitle)}</h2>
          ${a.paragraphs.map((p) => `<p>${esc(p)}</p>`).join("")}
          <div class="script">${esc(a.bandQuote)}<br>♡</div>
        </div>
        <div class="highlights">
          ${a.highlights.map((h) => `<div>${ICONS[h.icon] || ""}<span>${esc(h.label)}</span></div>`).join("")}
        </div>
      </div>
    </div></section>`;
  }

  /* ----- pages ----- */
  if (page === "home") {
    const h = S.home;
    $("app").innerHTML = `
    <section class="hero style-${esc(h.imageStyle || "fade")}${h.background ? " has-bg" : ""}" ${h.background ? bg(h.background) : ""}>
      <div class="wrap"><div class="hero-text">
        <div class="eyebrow">${esc(h.eyebrow)}</div>
        <h1>${esc(h.title)}</h1>
        <p>${esc(h.text)}</p>
        ${bookBtn(h.button)}
      </div></div>
      <div class="hero-img" ${bg(h.image)}></div>
      <div class="hero-quote script">${esc(h.quote)}<br>${HEART}</div>
    </section>
    <section class="sessions" id="sesiones"><div class="wrap">
      <h2>${esc(S.sessionsIntro.title)}</h2>
      <p class="sub">${esc(S.sessionsIntro.text)}</p>
      <div class="cards">
        ${S.sessions.map((s) => `
          <a class="card" href="sesion.html?s=${esc(s.id)}">
            <div class="icon">${ICONS[s.icon] || ""}</div>
            <h3>${esc(s.name)}</h3>
            <p>${esc(s.short)}</p>
            <span class="more">${esc(S.sessionsIntro.linkLabel)}${ARROW}</span>
          </a>`).join("")}
      </div>
    </div></section>
    ${aboutBlock()}`;
  }

  if (page === "session") {
    const id = new URLSearchParams(location.search).get("s");
    const s = S.sessions.find((x) => x.id === id) || S.sessions[0];
    document.title = `${s.name} · ${S.brand.name}`;
    $("app").innerHTML = `
    <section class="hero">
      <div class="wrap"><div class="hero-text">
        <div class="eyebrow">${esc(s.heroEyebrow)}</div>
        <h1>${esc(s.heroTitle)}</h1>
        <p>${esc(s.heroText)}</p>
        <a class="btn" href="#detalle">${esc(s.heroButton)}${ARROW}</a>
      </div></div>
      <div class="hero-img" ${bg(s.heroImage, s.heroPosition)}></div>
    </section>
    <section class="session" id="detalle"><div class="wrap">
      <div class="session-img" ${bg(s.image, s.imagePosition)}></div>
      <div>
        <div class="eyebrow">SESIONES</div>
        <h2>${esc(s.title)}</h2>
        ${s.quote ? `<div class="quote">${esc(s.quote)}</div>` : ""}
        ${(s.paragraphs || []).map((p) => `<p>${rich(p)}</p>`).join("")}
        ${s.bullets && s.bullets.length ? `<ul class="points">${s.bullets.map((b) => `<li>${rich(b)}</li>`).join("")}</ul>` : ""}
        ${s.closing ? `<div class="quote closing">${esc(s.closing)}</div>` : ""}
        <div class="meta"><span>${ICONS.clock}${esc(s.duration)}</span><span>${ICONS.pin}${esc(s.location)}</span></div>
        <div class="prices">Online <b>${esc(s.priceOnline)}</b><span class="dot">·</span>Presencial <b>${esc(s.pricePresencial)}</b></div>
        ${s.priceExtra ? `<div class="price-extra">${rich(s.priceExtra)}</div>` : ""}
        <a class="btn" href="${waLink()}" target="_blank" rel="noopener">${WA}Reservar por WhatsApp</a>
        ${s.special ? `<div class="special">${ICONS.lotus}<span>${esc(s.special)}</span></div>` : ""}
        ${s.note ? `<div class="note">${rich(s.note)}</div>` : ""}
      </div>
    </div></section>
    ${band()}`;
  }

  if (page === "about") {
    const a = S.aboutPage;
    document.title = `Sobre mí · ${S.brand.name}`;
    $("app").innerHTML = `
    <section class="hero">
      <div class="wrap"><div class="hero-text">
        <div class="eyebrow">${esc(a.heroEyebrow)}</div>
        <h1>${esc(a.heroTitle)}</h1>
        ${a.heroText ? `<p>${esc(a.heroText)}</p>` : ""}
      </div></div>
      <div class="hero-img" ${bg(a.heroImage, a.heroPosition)}></div>
    </section>
    ${a.blocks.map((b, i) => `
    <section class="session${i % 2 ? " flip" : ""}"><div class="wrap">
      <div class="session-img" ${bg(b.image, b.imagePosition)}></div>
      <div>
        ${b.title ? `<h2>${esc(b.title)}</h2>` : ""}
        ${b.paragraphs.map((p) => `<p>${rich(p)}</p>`).join("")}
      </div>
    </div></section>`).join("")}`;
  }

  if (page === "contact") {
    const c = S.contact;
    $("app").innerHTML = `
    <section class="page"><div class="wrap"><div class="narrow">
      <h1>${esc(c.title)}</h1>
      <p>${esc(c.text)}</p>
      <div class="links">
        ${bookBtn(c.whatsappLabel)}
        ${c.email ? `<a class="btn outline" href="mailto:${esc(c.email)}">${esc(c.email)}</a>` : ""}
        ${c.instagram ? `<a class="btn outline" href="${esc(c.instagram)}" target="_blank" rel="noopener">${esc(c.instagramLabel)}</a>` : ""}
      </div>
    </div></div></section>`;
  }

  header();
  footer();
})();
