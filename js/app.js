/* English Storytelling — renders js/data.js and brings it to life with GSAP. */
(function () {
  "use strict";

  var D = window.SITE || {};
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var G = window.gsap, ST = window.ScrollTrigger;
  var ANIM = !!(G && ST) && !reduce;
  if (G && ST) G.registerPlugin(ST);
  if (G && window.SplitText) G.registerPlugin(window.SplitText);
  if (G && window.Flip) G.registerPlugin(window.Flip);
  if (ANIM) document.documentElement.classList.add("js-anim");

  /* ================= helpers ================= */
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function arr(x) { return Array.isArray(x) ? x : []; }
  function slug(s) {
    return String(s || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "item";
  }
  function cap(s) { s = String(s || ""); return s.charAt(0).toUpperCase() + s.slice(1); }
  function initials(n) { return String(n || "?").trim().split(/\s+/).slice(0, 2).map(function (p) { return p.charAt(0); }).join("").toUpperCase(); }
  function pad(n) { return (n < 10 ? "0" : "") + n; }
  function cleanUrl(u) {
    u = String(u || "").trim();
    if (!u) return "";
    if (u.charAt(0) === "#") return u;
    var m = u.match(/<iframe[^>]*\ssrc\s*=\s*["']([^"']+)["']/i);
    if (m) u = m[1];
    u = u.replace(/&amp;/g, "&");
    if (/^https?:\/\//i.test(u)) return u;
    if (/^\/\//.test(u)) return "https:" + u;
    if (/^[\w-]+(\.[\w-]+)+(\/|$)/.test(u)) return "https://" + u;
    return "";
  }
  var SKILLS = { reading: "Reading", writing: "Writing", listening: "Listening", speaking: "Speaking", grammar: "Grammar", vocabulary: "Vocabulary" };
  var ICONS = {
    reading: '<path d="M12 6.5C10 5 6.5 4.5 3 5.5v13c3.5-1 7-.5 9 1 2-1.5 5.5-2 9-1v-13c-3.5-1-7-.5-9 1Zm0 0v13" />',
    writing: '<path d="M4 20h4L19 9l-4-4L4 16v4Zm9-13 4 4" />',
    listening: '<path d="M4 14v-2a8 8 0 0 1 16 0v2M4 14h3v6H5a1 1 0 0 1-1-1v-5Zm16 0h-3v6h2a1 1 0 0 0 1-1v-5Z" />',
    speaking: '<path d="M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3Zm-7 9a7 7 0 0 0 14 0M12 19v3" />',
    grammar: '<path d="M5 19 10 5h1l5 14M7 14h7M17 9l2 2 3-4" />',
    vocabulary: '<path d="M4 5h11a3 3 0 0 1 3 3v12H7a3 3 0 0 1-3-3V5Zm0 12a3 3 0 0 1 3-3h11M8 9h6" />',
    other: '<circle cx="12" cy="12" r="8" /><path d="M12 8v4l3 2" />'
  };
  function icon(k) { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (ICONS[k] || ICONS.other) + "</svg>"; }
  function skillOf(k) {
    var key = slug(k || "practice");
    return { key: key, cls: SKILLS[key] ? key : "other", label: SKILLS[key] || cap(String(k || "Practice")) };
  }
  var PLATFORMS = [[/youtu\.?be/, "YouTube"], [/drive\.google/, "Google Drive"], [/docs\.google\.com\/forms|forms\.gle/, "Google Forms"],
    [/docs\.google/, "Google Docs"], [/vimeo/, "Vimeo"], [/canva/, "Canva"], [/wordwall/, "Wordwall"], [/genial\.?ly/, "Genially"],
    [/learningapps/, "LearningApps"], [/educaplay/, "Educaplay"], [/liveworksheets/, "Liveworksheets"], [/padlet/, "Padlet"],
    [/vocaroo/, "Vocaroo"], [/spotify/, "Spotify"], [/edpuzzle/, "Edpuzzle"], [/quizizz|wayground/, "Quizizz"], [/kahoot/, "Kahoot!"],
    [/h5p/, "H5P"], [/soundcloud/, "SoundCloud"], [/flip\.com/, "Flip"], [/lastfiveminutes\.github\.io/, "The Last Five Minutes game"]];
  function platform(u) {
    if (u.charAt(0) === "#") return "On this page";
    var x;
    try { x = new URL(u); } catch (e) { return ""; }
    var s = x.hostname.replace(/^www\./, "") + x.pathname;
    for (var i = 0; i < PLATFORMS.length; i++) if (PLATFORMS[i][0].test(s)) return PLATFORMS[i][1];
    return x.hostname.replace(/^www\./, "");
  }
  function ytId(u) {
    var m = String(u || "").match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/))([\w-]{11})/);
    return m ? m[1] : "";
  }
  function mediaVerb(h) {
    if (h.media && h.media.boton) return h.media.boton;
    var f = slug(h.formato);
    if (/song|podcast|audio|music/.test(f)) return "Listen now";
    if (/film|video|movie/.test(f)) return "Watch now";
    return "Watch the story";
  }
  function theme(h) {
    var t = h.tema || {};
    return "--bg:" + (t.bg || "#1a1f3f") + ";--bg2:" + (t.bg2 || "#2a2457") + ";--ink2:" + (t.ink || "#fff6e6") + ";--accent:" + (t.accent || "#ffcf6e") + ";--accent2:" + (t.accent2 || "#a586ff") + ";--c:" + (t.accent || "#ffcf6e");
  }
  function cardColor(h) { var t = h.tema || {}; return t.oscuro === false ? t.accent : (t.bg2 || t.accent); }
  function cardCrop(h) {
    var f = h.tarjetaFoco || h.portadaFoco || "50% 50%", z = h.tarjetaZoom || 1;
    return "object-position:" + esc(f) + (z !== 1 ? ";transform:scale(" + z + ");transform-origin:" + esc(f) : "");
  }
  function bgCrop(a) {
    var src = a.imagen || "";
    if (!src) return "background:var(--s)";
    return "background-image:url('" + esc(src) + "');background-position:" + esc(a.foco || "50% 50%") + ";background-size:" + esc(a.zoom || "cover");
  }

  /* ================= data shape ================= */
  D.historias = arr(D.historias);
  D.galeria = D.galeria && typeof D.galeria === "object" ? D.galeria : { titulo: "Gallery", fotos: [] };
  D.galeria.fotos = arr(D.galeria.fotos);
  var used = {};
  D.historias.forEach(function (h, i) {
    var id = slug(h.id || h.titulo || "story-" + (i + 1));
    while (used[id]) id += "-" + (i + 1);
    used[id] = 1; h.id = id;
    h.media = h.media || { url: "" };
    h.enfoque = h.enfoque || {};
    h.vocabulario = arr(h.vocabulario);
    h.actividades = arr(h.actividades);
    h.galeria = arr(h.galeria);
    h.actividades.forEach(function (a, j) { if (!a.id) a.id = id + "-" + (j + 1); a._story = h; });
  });
  var ALL_ACTS = [];
  D.historias.forEach(function (h) { ALL_ACTS = ALL_ACTS.concat(h.actividades); });

  /* ================= progress (this browser only) ================= */
  var PKEY = "es-progress-v1", done = {};
  try { done = JSON.parse(localStorage.getItem(PKEY) || "{}") || {}; } catch (e) { done = {}; }
  function saveDone() { try { localStorage.setItem(PKEY, JSON.stringify(done)); } catch (e) {} }

  /* ================= rendering ================= */
  function hero() {
    var h = D.hero || {};
    var title = esc(h.titulo || D.nombre || "");
    // the last two words get the gradient italic
    var w = title.split(" ");
    if (w.length > 2) title = w.slice(0, -2).join(" ") + ' <span class="word-accent">' + w.slice(-2).join(" ") + "</span>";
    var stars = "";
    for (var i = 0; i < 70; i++) {
      stars += '<i class="star-dot" style="left:' + (Math.random() * 100).toFixed(1) + "%;top:" + (Math.random() * 85).toFixed(1) + "%;--s:" + (1 + Math.random() * 2.2).toFixed(1) + "px;--t:" + (2 + Math.random() * 4).toFixed(1) + "s;--d:-" + (Math.random() * 5).toFixed(1) + 's"></i>';
    }
    var skills = ["reading", "writing", "listening", "speaking"].map(function (k) { return '<span class="s-' + k + '">' + SKILLS[k] + "</span>"; }).join("");
    var fan = D.historias.slice(0, 4).map(function (s, i) {
      return '<a class="fan-card" href="#story-' + s.id + '" data-i="' + i + '"><img src="' + esc(s.portada) + '" alt="" style="' + cardCrop(s) + '">' +
        '<span class="fc-txt"><small>' + esc(s.formato) + "</small><strong>" + esc(s.titulo) + '</strong></span><span class="shine"></span></a>';
    }).join("");
    return '<section id="home" class="hero"><div class="hero-sky" aria-hidden="true">' + stars + '</div><div class="hero-glow" id="hero-glow"></div>' +
      '<div class="wrap hero-grid"><div class="hero-text">' +
      (h.etiqueta ? '<span class="tag" data-hero><i></i>' + esc(h.etiqueta) + "</span>" : "") +
      '<h1 id="hero-title">' + title + "</h1>" +
      (h.texto ? '<p class="lead" data-hero>' + esc(h.texto) + "</p>" : "") +
      '<div class="hero-skills" data-hero>' + skills + "</div>" +
      '<div class="actions" data-hero><a class="btn btn-gold magnet" href="#stories">' + esc(h.boton || "Explore the stories") +
      ' <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M5 12h14m-6-6 6 6-6 6"/></svg></a>' +
      '<a class="btn btn-ghost magnet" href="#activities">Go to activities</a></div></div>' +
      '<div class="fan" id="fan">' + fan + "</div></div>" +
      '<a class="scroll-cue" href="#welcome" aria-label="Scroll down"><i></i>scroll</a></section>' +
      marquee();
  }

  function marquee() {
    var words = ["Read", "Write", "Listen", "Speak"].concat(D.historias.map(function (h) { return h.titulo; }));
    var row = words.map(function (w) { return "<span>" + esc(w) + "</span>"; }).join("");
    return '<div class="marquee" aria-hidden="true"><div class="marquee-track">' + row + row + "</div></div>";
  }

  function welcome() {
    var b = D.bienvenida || {};
    var notes = arr(D.citas).filter(function (q) { return q && q.texto; }).map(function (q) {
      return '<figure class="note" data-pop><blockquote>“' + esc(q.texto) + "”</blockquote>" + (q.autor ? "<figcaption>" + esc(q.autor) + "</figcaption>" : "") + "</figure>";
    }).join("");
    return '<section id="welcome" class="band welcome"><div class="wrap welcome-grid"><div class="prose">' +
      '<span class="kicker">Hello, explorer!</span>' +
      (b.titulo ? '<h2 class="title-xl" data-split>' + esc(b.titulo) + "</h2>" : "") +
      arr(b.parrafos).map(function (p) { return "<p data-reveal>" + esc(p) + "</p>"; }).join("") +
      "</div>" + (notes ? '<div class="notes-wall">' + notes + "</div>" : "") + "</div></section>";
  }

  var TEAM_COLORS = [["#ffad80", "#ff8fa8"], ["#a586ff", "#8fc2ff"], ["#ffcf6e", "#ffad80"], ["#7fd6a8", "#8fc2ff"]];
  function team() {
    var t = D.equipo || {}, people = arr(t.personas).filter(Boolean);
    if (!people.length) return "";
    return '<section class="band team-band" id="team"><div class="wrap"><div class="head"><span class="kicker">The team</span><h2 class="title-xl" data-split>' +
      esc(t.titulo || "Meet the Teachers") + '</h2></div><div class="team">' +
      people.map(function (p, i) {
        var bio = arr(p.bio), c = TEAM_COLORS[i % TEAM_COLORS.length], foto = String(p.foto || "");
        return '<article class="polaroid" data-pop><div class="ph-frame" style="--c1:' + c[0] + ";--c2:" + c[1] + '">' +
          (foto ? '<img src="' + esc(foto) + '" alt="' + esc(p.nombre) + '">' : "<span>" + esc(initials(p.nombre)) + "</span>") + "</div>" +
          "<h3>" + esc(p.nombre) + "</h3>" + (p.rol ? '<p class="role">' + esc(p.rol) + "</p>" : "") +
          (bio[0] ? '<p class="bio">' + esc(bio[0]) + "</p>" : "") +
          (bio.length > 1 ? '<details class="more"><summary>Read more</summary>' + bio.slice(1).map(function (x) { return '<p class="bio">' + esc(x) + "</p>"; }).join("") + "</details>" : "") +
          "</article>";
      }).join("") + "</div></div></section>";
  }

  function objectives() {
    var o = D.objetivos || {}, areas = arr(o.areas).filter(Boolean);
    if (!areas.length) return "";
    return '<section class="band objectives" id="objectives"><div class="wrap"><div class="head"><span class="kicker">What students practice</span><h2 class="title-xl" data-split>' +
      esc(o.titulo || "Learning Objectives") + "</h2>" + (o.intro ? "<p data-reveal>" + esc(o.intro) + "</p>" : "") + '</div><div class="objs">' +
      areas.map(function (a) {
        var sk = skillOf(a.area);
        return '<div class="obj s-' + sk.cls + '" data-pop><div class="obj-ic">' + icon(sk.cls) + "</div><h3>" + esc(a.area) + "</h3><ul>" +
          arr(a.items).map(function (it) { return "<li>" + esc(it) + "</li>"; }).join("") + "</ul></div>";
      }).join("") + "</div></div></section>";
  }

  function picker() {
    var cards = D.historias.map(function (h, i) {
      return '<a class="pick" href="#story-' + h.id + '" style="' + theme(h) + '"><span class="pick-im"><img src="' + esc(h.portada) + '" alt="" loading="lazy" style="' + cardCrop(h) + '"></span>' +
        '<span class="pick-num">' + pad(i + 1) + '</span><span class="pick-in"><span class="fmt">' + esc(h.formato || "Story") + "</span>" +
        "<h3>" + esc(h.titulo) + "</h3>" + (h.resumen ? "<p>" + esc(h.resumen) + "</p>" : "") +
        '<span class="go">Open chapter <i>→</i></span></span></a>';
    }).join("");
    return '<section id="stories" class="band picker"><div class="wrap"><div class="head"><span class="kicker">' + D.historias.length + ' stories, ' + D.historias.length + " worlds</span>" +
      '<h2 class="title-xl" data-split>Choose your <em>story</em></h2><p data-reveal>Pick a story, enjoy it, and practice with its activities.</p>' +
      '<p class="h-hint" aria-hidden="true">Keep scrolling <i>→</i></p></div></div>' +
      '<div class="h-pin" id="h-pin"><div class="h-track" id="h-track">' + cards +
      '<div class="pick-end"><p>Every story is a new adventure.</p><a class="btn btn-gold" href="#story-' + (D.historias[0] ? D.historias[0].id : "") + '">Start with chapter 1</a></div>' +
      "</div></div></section>";
  }

  function chips(title, list, alt) {
    list = arr(list).filter(Boolean);
    if (!list.length) return "";
    return '<div class="focus"><h4>' + title + '</h4><div class="chips">' + list.map(function (x) { return '<span class="chip' + (alt ? " alt" : "") + '">' + esc(x) + "</span>"; }).join("") + "</div></div>";
  }

  function flash(v, h, small) {
    return '<button type="button" class="flash' + (small ? " small" : "") + '" data-fg="vocab" data-fv="' + h.id + '" style="--c:' + esc(cardColor(h)) + '" aria-pressed="false" aria-label="' + esc(v.palabra) + ': flip the card">' +
      '<span class="flash-in"><span class="face front">' + (small ? "" : '<img class="thumb" src="' + esc(h.portada) + '" alt="">') +
      "<strong>" + esc(v.palabra) + "</strong><small>↻ Tap to flip</small></span>" +
      '<span class="face back"><i class="bim" style="background-image:url(\'' + esc(h.portada) + '\')"></i><span>' + esc(v.significado) + "</span>" + (small ? "" : "<small>" + esc(h.titulo) + "</small>") + "</span></span></button>";
  }

  var FX = { song: "note", podcast: "petal", film: "dust", fairy: "dot" };
  function fxKind(h) {
    var f = slug(h.formato);
    if (/song|music/.test(f)) return FX.song;
    if (/podcast|audio/.test(f)) return FX.podcast;
    if (/film|video|movie/.test(f)) return FX.film;
    return FX.fairy;
  }
  function particles(h) {
    var k = fxKind(h), out = "", n = k === "dust" ? 26 : 18, t = h.tema || {};
    var petals = [t.accent || "#a586ff", t.accent2 || "#ffcf6e", "#ffffff"];
    for (var i = 0; i < n; i++) {
      var st = "--x:" + (Math.random() * 100).toFixed(1) + "%;--t:" + (12 + Math.random() * 14).toFixed(1) + "s;--d:-" + (Math.random() * 20).toFixed(1) + "s;--dx:" + ((Math.random() - .5) * 220).toFixed(0) + "px;--r:" + ((Math.random() - .5) * 720).toFixed(0) + "deg;";
      if (k === "note") out += '<i class="fx-note" style="' + st + "--z:" + (16 + Math.random() * 22).toFixed(0) + 'px;--o:.55">' + (i % 3 ? "♪" : "♫") + "</i>";
      else if (k === "petal") out += '<i class="fx-petal" style="' + st + "--z:" + (12 + Math.random() * 14).toFixed(0) + "px;--c:" + petals[i % 3] + ';--o:.8"></i>';
      else if (k === "dust") out += '<i class="fx-dust" style="' + st + "--z:" + (1.5 + Math.random() * 2.5).toFixed(1) + 'px;--o:.6"></i>';
      else out += '<i class="fx-dot" style="' + st + "--z:" + (3 + Math.random() * 4).toFixed(1) + 'px;--o:.85"></i>';
    }
    return out;
  }

  function chapter(h, i) {
    var url = cleanUrl(h.media.url), yt = ytId(url), f = h.enfoque, light = h.tema && h.tema.oscuro === false;
    var play = url
      ? (yt ? '<button type="button" class="play-big magnet" data-yt="' + yt + '">' : '<a class="play-big magnet" href="' + esc(url) + '" target="_blank" rel="noopener">') +
        '<span class="play-ring"><svg viewBox="0 0 24 24"><path d="M7 4.5v15l12.5-7.5z" fill="currentColor"/></svg></span><span>' + esc(mediaVerb(h)) +
        "<small>" + (yt ? "Plays right here" : esc(platform(url)) + " · opens in a new tab") + "</small></span>" + (yt ? "</button>" : "</a>")
      : '<span class="soon-badge"><i></i>' + esc(cap(h.formato || "Media")) + " coming soon</span>";
    var transcript = String(h.transcripcion || "").trim()
      ? '<details class="transcript glass"><summary>' + (/song/.test(slug(h.formato)) ? "Lyrics" : "Transcript") + "</summary><div>" + esc(String(h.transcripcion).trim()) + "</div></details>" : "";
    var words = h.vocabulario.filter(function (v) { return v && v.palabra; });
    var mini = words.length ? '<div class="glass"><div class="focus"><h4>Key words · flip them!</h4></div><div class="mini-words">' + words.slice(0, 3).map(function (v) { return flash(v, h, true); }).join("") + "</div></div>" : "";
    var dn = h.actividades.filter(function (a) { return done[a.id]; }).length;
    var photos = h.galeria.filter(function (p) { return p && p.imagen; }).map(function (p, j) {
      return '<button type="button" class="ph" data-lb="' + esc(p.imagen) + '" data-cap="' + esc(p.pie || "") + '"><img src="' + esc(p.imagen) + '" alt="' + esc(p.pie || "") + '" loading="lazy">' + (p.pie ? "<span>" + esc(p.pie) + "</span>" : "") + "</button>";
    }).join("");
    return '<article class="chapter' + (light ? " light" : "") + '" id="story-' + h.id + '" style="' + theme(h) + '" data-dark="' + (light ? "0" : "1") + '">' +
      '<div class="ch-backdrop" style="background-image:url(\'' + esc(h.portada) + '\')"></div><div class="ch-fx" aria-hidden="true">' + particles(h) + "</div>" +
      '<span class="ch-num" aria-hidden="true">' + pad(i + 1) + "</span>" +
      '<div class="wrap"><header class="ch-head"><span class="ch-kicker">Chapter ' + (i + 1) + ' · <span class="fmt-t">' + esc(h.formato || "Story") + "</span></span>" +
      '<h2 class="ch-title" data-split>' + esc(h.titulo) + "</h2>" + (h.resumen ? '<p class="ch-sum" data-reveal>' + esc(h.resumen) + "</p>" : "") + "</header>" +
      '<div class="ch-grid"><div><div class="stage" data-stage><img class="stage-img" src="' + esc(h.portada) + '" alt="' + esc(h.titulo) + ' cover" loading="lazy" style="object-position:' + esc(h.portadaFoco || "50% 50%") + '">' + play + "</div>" +
      (yt ? '<a class="yt-link" href="' + esc(url) + '" target="_blank" rel="noopener">Open on YouTube ↗</a>' : "") + "</div>" +
      '<aside class="ch-notes"><div class="glass" data-reveal>' + chips("Grammar focus", f.gramatica) + chips("Vocabulary focus", f.vocabulario, true) + "</div>" +
      (mini ? '<div data-reveal>' + mini.replace('<div class="glass">', '<div class="glass">') + "</div>" : "") + (transcript ? '<div data-reveal>' + transcript + "</div>" : "") + "</aside></div>" +
      (photos ? '<div class="practice"><div class="practice-head"><h3>Photos</h3></div><div class="gallery">' + photos + "</div></div>" : "") +
      (h.actividades.length ? '<div class="practice"><div class="practice-head"><h3>Practice <em>here!</em></h3>' +
        '<div class="ch-meter"><span data-ch-count="' + h.id + '">' + dn + " / " + h.actividades.length + '</span><div class="bar"><span data-ch-bar="' + h.id + '" style="width:' + Math.round(dn / h.actividades.length * 100) + "%;--b:var(--accent)\"></span></div></div></div>" +
        '<div class="acts">' + h.actividades.map(function (a, j) { return activity(h, a, j); }).join("") + "</div></div>" : "") +
      "</div></article>";
  }

  function doneBtn(id) {
    var on = !!done[id];
    return '<button type="button" class="done-btn" data-done="' + esc(id) + '" aria-pressed="' + on + '"><span class="ck">' + (on ? "✓" : "") + "</span><span class=\"lbl\">" + (on ? "Done!" : "Mark as done") + "</span></button>";
  }

  function activity(h, a, j) {
    var sk = skillOf(a.habilidad), url = cleanUrl(a.link), internal = url.charAt(0) === "#";
    return '<div class="act s-' + sk.cls + (done[a.id] ? " is-done" : "") + '" id="act-' + esc(a.id) + '" data-act="' + esc(a.id) + '">' +
      '<div class="act-media"><div class="im" style="' + bgCrop(a) + '"></div><span class="pill">' + icon(sk.cls) + esc(sk.label) + '</span><span class="act-num">' + pad(j + 1) + "</span>" +
      '<span class="stamp" aria-hidden="true"><span><b>✓</b>DONE</span></span></div>' +
      '<div class="act-body">' + (a.titulo ? "<h4>" + esc(a.titulo) + "</h4>" : "") + (a.instrucciones ? "<p>" + esc(a.instrucciones) + "</p>" : "") +
      '<div class="act-foot">' + (url
        ? "<span><a class=\"act-open\" href=\"" + esc(url) + '"' + (internal ? ' data-filter-story="' + h.id + '"' : ' target="_blank" rel="noopener"') + ">" + esc(a.boton || "Open activity") + ' <span class="arr" aria-hidden="true">' + (internal ? "↓" : "↗") + '</span></a><span class="host">' + esc(platform(url)) + "</span></span>"
        : '<span class="soon-txt">Coming soon</span>') + doneBtn(a.id) + "</div></div></div>";
  }

  function filterBar(group, items) {
    return '<div class="filters" role="group" aria-label="Filter">' + items.map(function (it, i) {
      return '<button type="button" class="filter' + (it.img || it.cls ? "" : " plain") + (it.cls ? " s-" + it.cls : "") + '" data-group="' + group + '" data-value="' + esc(it.value) + '" aria-pressed="' + (i === 0) + '">' +
        (it.img ? '<img src="' + esc(it.img) + '" alt="">' : "") + (it.cls ? "<i></i>" : "") + esc(it.label) + "</button>";
    }).join("") + "</div>";
  }

  function vocab() {
    var withV = D.historias.filter(function (h) { return h.vocabulario.some(function (v) { return v && v.palabra; }); });
    var cards = "";
    withV.forEach(function (h) { h.vocabulario.forEach(function (v) { if (v && v.palabra) cards += flash(v, h, false); }); });
    return '<section id="vocabulary" class="band vocab-band"><div class="wrap"><div class="head"><span class="kicker">Flashcards</span><h2 class="title-xl" data-split>Vocabulary</h2>' +
      "<p data-reveal>Read the word, guess the meaning, then flip the card.</p></div>" +
      (cards ? filterBar("vocab", [{ value: "all", label: "All stories" }].concat(withV.map(function (h) { return { value: h.id, label: h.titulo, img: h.portada }; }))) +
        '<div class="cards" id="vocab-cards">' + cards + '</div><p class="vocab-tip">Tip: say each word out loud before you flip it!</p>' : '<p class="soon-txt">Words will appear here soon.</p>') +
      "</div></section>";
  }

  function actsIndex() {
    var seen = {}, order = [], cards = "";
    D.historias.forEach(function (h) {
      h.actividades.forEach(function (a) {
        var sk = skillOf(a.habilidad);
        if (!seen[sk.key]) { seen[sk.key] = sk; order.push(sk.key); }
        cards += '<a class="ix s-' + sk.cls + (done[a.id] ? " is-done" : "") + '" href="#act-' + esc(a.id) + '" data-ix="' + esc(a.id) + '" data-fg="skill" data-fv="' + sk.key + '">' +
          '<span class="ix-im" style="' + bgCrop(a) + '"></span><span class="ix-tx"><span class="pill">' + icon(sk.cls) + esc(sk.label) + "</span><strong>" + esc(a.titulo || sk.label) + "</strong>" +
          '<span class="from">' + esc(h.titulo) + '</span></span><span class="tick" aria-hidden="true">✓</span></a>';
      });
    });
    var known = Object.keys(SKILLS);
    order.sort(function (a, b) { var x = known.indexOf(a), y = known.indexOf(b); return (x < 0 ? 99 : x) - (y < 0 ? 99 : y); });
    return '<section id="activities" class="band index-band"><div class="wrap"><div class="head"><span class="kicker">By skill</span><h2 class="title-xl" data-split>Activities</h2>' +
      "<p data-reveal>Choose a skill to practice and jump straight to the activity.</p></div>" +
      (cards ? filterBar("skill", [{ value: "all", label: "All" }].concat(order.map(function (k) { return { value: k, label: seen[k].label, cls: seen[k].cls }; }))) +
        '<div class="index" id="ix-cards">' + cards + "</div>" : '<p class="soon-txt">Activities will appear here soon.</p>') +
      "</div></section>";
  }

  function bar(label, d, t, color) {
    var p = t ? Math.round(d / t * 100) : 0;
    return '<div><div class="bar-l"><span>' + label + "</span><span>" + d + " / " + t + '</span></div><div class="bar" role="progressbar" aria-label="' + label + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + p + '"><span style="width:' + p + "%;--b:" + color + '"></span></div></div>';
  }

  function counts() {
    var total = 0, d = 0;
    ALL_ACTS.forEach(function (a) { total++; if (done[a.id]) d++; });
    return { d: d, t: total, p: total ? Math.round(d / total * 100) : 0 };
  }

  function progressInner() {
    var by = {}, order = [], c = counts();
    var storyBars = D.historias.map(function (h) {
      var sd = 0;
      h.actividades.forEach(function (a) {
        var sk = skillOf(a.habilidad);
        if (!by[sk.key]) { by[sk.key] = { sk: sk, d: 0, t: 0 }; order.push(sk.key); }
        by[sk.key].t++;
        if (done[a.id]) { sd++; by[sk.key].d++; }
      });
      return bar(esc(h.titulo), sd, h.actividades.length, (h.tema && h.tema.accent) || "var(--gold)");
    }).join("");
    var stickers = D.historias.filter(function (h) { return h.actividades.length; }).map(function (h) {
      var sd = h.actividades.filter(function (a) { return done[a.id]; }).length, got = sd === h.actividades.length;
      return '<div class="sticker' + (got ? " got" : "") + '" data-sticker="' + h.id + '"><img src="' + esc(h.portada) + '" alt=""><span><strong>' + esc(h.titulo) + "</strong><small>" + (got ? "★ Story complete!" : sd + " of " + h.actividades.length + " done") + "</small></span></div>";
    }).join("");
    var R = 76, C = (2 * Math.PI * R).toFixed(1);
    return '<div class="prog"><div class="box ring-box"><div class="ring"><svg viewBox="0 0 170 170" aria-hidden="true"><defs><linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffcf6e"/><stop offset=".5" stop-color="#ff8fa8"/><stop offset="1" stop-color="#a586ff"/></linearGradient></defs>' +
      '<circle class="trk" cx="85" cy="85" r="' + R + '"/><circle class="val" id="ring-val" cx="85" cy="85" r="' + R + '" stroke-dasharray="' + C + '" stroke-dashoffset="' + (C * (1 - c.p / 100)).toFixed(1) + '"/></svg><b id="ring-num">' + c.p + "%</b></div>" +
      "<p><strong>" + c.d + "</strong> of <strong>" + c.t + "</strong> activities done</p>" +
      (c.t && c.d === c.t ? '<p class="cheer">You finished everything. Amazing work!</p>' : c.d ? '<p class="cheer">Keep going, you are doing great!</p>' : '<p class="cheer">Your adventure starts now!</p>') + "</div>" +
      '<div class="box"><h3>By story</h3>' + storyBars + "</div>" +
      '<div class="box"><h3>By skill</h3>' + order.map(function (k) { var x = by[k]; return bar(esc(x.sk.label), x.d, x.t, "var(--" + x.sk.cls + ")"); }).join("") + "</div></div>" +
      '<div class="stickers">' + stickers + "</div>";
  }

  function progressSec() {
    return '<section id="progress" class="band progress-band"><div class="wrap"><div class="head"><span class="kicker">Your journey</span><h2 class="title-xl" data-split>My <em>Progress</em></h2>' +
      '<p data-reveal>Mark each activity as done to track your progress and collect a sticker for every story. It is saved on this device only.</p></div>' +
      '<div id="prog-body">' + progressInner() + '</div><button type="button" class="reset" id="reset">Reset my progress</button></div></section>';
  }

  function gallerySec() {
    var g = D.galeria, fotos = g.fotos.filter(function (p) { return p && p.imagen; });
    if (!fotos.length) return "";
    return '<section id="gallery" class="band welcome"><div class="wrap"><div class="head"><span class="kicker">Photos</span><h2 class="title-xl" data-split>' + esc(g.titulo || "Gallery") + "</h2>" +
      (g.intro ? "<p>" + esc(g.intro) + "</p>" : "") + '</div><div class="gallery">' +
      fotos.map(function (p) { return '<button type="button" class="ph" data-lb="' + esc(p.imagen) + '" data-cap="' + esc(p.pie || "") + '"><img src="' + esc(p.imagen) + '" alt="' + esc(p.pie || "") + '" loading="lazy">' + (p.pie ? "<span>" + esc(p.pie) + "</span>" : "") + "</button>"; }).join("") +
      "</div></div></section>";
  }

  function footer() {
    var c = D.contacto || {};
    var redes = arr(c.redes).filter(function (r) { return r && cleanUrl(r.url); });
    var name = esc(D.nombre || "English Storytelling").split(" ");
    var big = name.length > 1 ? name.slice(0, -1).join(" ") + " <em>" + name.slice(-1) + "</em>" : name[0];
    return '<div class="wrap"><p class="foot-big">' + big + '</p><div class="foot-in"><div>' + (D.pie ? "<p>" + esc(D.pie) + "</p>" : "") + "</div>" +
      '<div class="foot-links">' + (c.email ? '<a href="mailto:' + esc(c.email) + '">' + esc(c.email) + "</a>" : "") +
      redes.map(function (r) { var u = cleanUrl(r.url); return '<a href="' + esc(u) + '" target="_blank" rel="noopener">' + esc(r.nombre || platform(u)) + "</a>"; }).join("") +
      '<a class="to-top" href="#home">Back to top ↑</a></div></div></div>';
  }

  function navLinks() {
    var items = [["home", "Home"], ["stories", "Stories"]];
    if (D.galeria.fotos.some(function (p) { return p && p.imagen; })) items.push(["gallery", "Gallery"]);
    items.push(["vocabulary", "Vocabulary"], ["activities", "Activities"], ["progress", "Progress"]);
    $("#links").insertAdjacentHTML("beforeend", items.map(function (x) { return '<a href="#' + x[0] + '" data-nav="' + x[0] + '">' + x[1] + "</a>"; }).join(""));
  }

  /* ================= build ================= */
  document.title = D.nombre || "English Storytelling";
  $("#brand-name").textContent = D.nombre || "English Storytelling";
  navLinks();
  $("#site").innerHTML = hero() + welcome() + team() + objectives() + picker() + D.historias.map(chapter).join("") + gallerySec() + vocab() + actsIndex() + progressSec();
  $("#foot").innerHTML = footer();
  updateScore();

  /* ================= interactions ================= */
  function updateScore() { var c = counts(); $("#nav-score-n").textContent = c.d + "/" + c.t; }

  var toastT = 0;
  function toast(html) {
    var t = $("#toast"); t.innerHTML = html; t.classList.add("show");
    clearTimeout(toastT); toastT = setTimeout(function () { t.classList.remove("show"); }, 2600);
  }

  function burst(el, big) {
    if (!window.confetti || reduce) return;
    var r = el.getBoundingClientRect();
    var o = { x: (r.left + r.width / 2) / innerWidth, y: (r.top + r.height / 2) / innerHeight };
    var colors = ["#ffcf6e", "#ff8fa8", "#a586ff", "#8fc2ff", "#7fd6a8"];
    window.confetti({ particleCount: big ? 160 : 70, spread: big ? 110 : 70, startVelocity: big ? 45 : 32, origin: o, colors: colors, scalar: .9, zIndex: 135, disableForReducedMotion: true });
    if (big) setTimeout(function () { window.confetti({ particleCount: 120, spread: 160, origin: { x: .5, y: .35 }, colors: colors, zIndex: 135 }); }, 250);
  }

  function setDone(id, on, srcEl) {
    if (on) done[id] = 1; else delete done[id];
    saveDone();
    $$('[data-done="' + id + '"]').forEach(function (b) {
      b.setAttribute("aria-pressed", on); $(".ck", b).textContent = on ? "✓" : ""; $(".lbl", b).textContent = on ? "Done!" : "Mark as done";
    });
    $$('[data-act="' + id + '"], [data-ix="' + id + '"]').forEach(function (el) { el.classList.toggle("is-done", on); });
    var act = ALL_ACTS.filter(function (a) { return a.id === id; })[0], h = act && act._story;
    if (h) {
      var dn = h.actividades.filter(function (a) { return done[a.id]; }).length;
      var cnt = $('[data-ch-count="' + h.id + '"]'), br = $('[data-ch-bar="' + h.id + '"]');
      if (cnt) cnt.textContent = dn + " / " + h.actividades.length;
      if (br) br.style.width = Math.round(dn / h.actividades.length * 100) + "%";
    }
    $("#prog-body").innerHTML = progressInner();
    updateScore();
    if (on && srcEl) {
      var c = counts(), storyDone = h && h.actividades.every(function (a) { return done[a.id]; });
      burst(srcEl, storyDone);
      if (ANIM) G.fromTo(".nav-score", { scale: 1.35 }, { scale: 1, duration: .6, ease: "elastic.out(1,.4)" });
      toast(storyDone ? "★ <b>Sticker unlocked:</b> " + esc(h.titulo) + "!" : "Great job! <b>" + c.d + " of " + c.t + "</b> activities done");
    }
  }

  document.addEventListener("click", function (e) {
    var t = e.target;
    var db = t.closest("[data-done]");
    if (db) { setDone(db.getAttribute("data-done"), db.getAttribute("aria-pressed") !== "true", db); return; }
    var fl = t.closest(".flash");
    if (fl) { fl.setAttribute("aria-pressed", fl.getAttribute("aria-pressed") !== "true"); return; }
    var f = t.closest(".filter");
    if (f) { filterBy(f.getAttribute("data-group"), f.getAttribute("data-value")); return; }
    var y = t.closest("[data-yt]");
    if (y) { playVideo(y); return; }
    var fs = t.closest("[data-filter-story]");
    if (fs) { filterBy("vocab", fs.getAttribute("data-filter-story")); }
    var ph = t.closest("[data-lb]");
    if (ph) { $("#lb-img").src = ph.getAttribute("data-lb"); $("#lb-cap").textContent = ph.getAttribute("data-cap") || ""; $("#lb").hidden = false; $("#lb-x").focus(); return; }
    if (t.closest("#lb-x") || t.id === "lb") { $("#lb").hidden = true; return; }
    if (t.closest("#reset")) {
      var r = $("#reset");
      if (!r.classList.contains("armed")) { r.classList.add("armed"); r.textContent = "Click again to erase all progress"; setTimeout(function () { r.classList.remove("armed"); r.textContent = "Reset my progress"; }, 4000); return; }
      Object.keys(done).forEach(function (k) { setDone(k, false); });
      r.classList.remove("armed"); r.textContent = "Reset my progress"; toast("Progress reset. A fresh start!");
      return;
    }
    if (t.closest("#links a")) closeMenu();
  });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") { $("#lb").hidden = true; closeMenu(); } });

  function playVideo(btn) {
    var stage = btn.closest(".stage"), id = btn.getAttribute("data-yt");
    var f = document.createElement("iframe");
    f.src = "https://www.youtube-nocookie.com/embed/" + id + "?autoplay=1&rel=0&modestbranding=1";
    f.title = "Video"; f.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen"; f.allowFullscreen = true;
    stage.classList.add("playing");
    if (ANIM) { G.to(btn, { scale: .6, opacity: 0, duration: .3, onComplete: function () { btn.remove(); } }); G.from(f, { opacity: 0, duration: .6, delay: .2 }); }
    else btn.remove();
    stage.appendChild(f);
  }

  function filterBy(group, value) {
    $$('.filter[data-group="' + group + '"]').forEach(function (b) { b.setAttribute("aria-pressed", b.getAttribute("data-value") === value); });
    var box = group === "vocab" ? $("#vocab-cards") : $("#ix-cards");
    if (!box) return;
    var items = $$('[data-fg="' + group + '"]', box);
    var state = ANIM && window.Flip ? window.Flip.getState(items) : null;
    items.forEach(function (el) { el.style.display = value === "all" || el.getAttribute("data-fv") === value ? "" : "none"; if (group === "vocab") el.setAttribute("aria-pressed", "false"); });
    if (state) {
      window.Flip.from(state, { duration: .55, ease: "power2.inOut", absolute: true, scale: true,
        onEnter: function (els) { return G.fromTo(els, { opacity: 0, scale: .6 }, { opacity: 1, scale: 1, duration: .45 }); },
        onLeave: function (els) { return G.to(els, { opacity: 0, scale: .6, duration: .3 }); },
        onComplete: function () { ST.refresh(); } });
    }
  }

  /* menu */
  var menuBtn = $("#menu-btn"), links = $("#links");
  function closeMenu() { links.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); document.body.classList.remove("menu-open"); }
  menuBtn.addEventListener("click", function () {
    var open = !links.classList.contains("open");
    links.classList.toggle("open", open); menuBtn.setAttribute("aria-expanded", open); document.body.classList.toggle("menu-open", open);
    if (open && ANIM) G.fromTo($$("a", links), { y: 40, opacity: 0 }, { y: 0, opacity: 1, stagger: .06, duration: .5, delay: .15, ease: "power3.out" });
  });

  /* nav: solid after the hero, dark over dark sections, current section */
  var top = $("#top");
  var darkSecs = $$(".hero, .picker, .chapter[data-dark='1'], .progress-band, .foot");
  function navState() {
    top.classList.toggle("solid", scrollY > 40);
    var y = (top.offsetHeight || 68) / 2, onDark = false;
    darkSecs.forEach(function (s) { var r = s.getBoundingClientRect(); if (r.top <= y && r.bottom >= y) onDark = true; });
    top.classList.toggle("on-dark", onDark);
    var h = document.documentElement.scrollHeight - innerHeight;
    $("#scrollbar").style.transform = "scaleX(" + (h > 0 ? scrollY / h : 0) + ")";
  }
  var navSecs = $$("#links a").map(function (a) { return document.getElementById(a.getAttribute("data-nav")); });
  function navCurrent() {
    var mid = innerHeight * .4, cur = null;
    navSecs.forEach(function (s) { if (!s) return; var r = s.getBoundingClientRect(); if (r.top <= mid) cur = s.id; });
    // chapters belong to "Stories"
    $$(".chapter").forEach(function (c) { var r = c.getBoundingClientRect(); if (r.top <= mid && r.bottom > mid) cur = "stories"; });
    $$("#links a").forEach(function (a) { a.classList.toggle("current", a.getAttribute("data-nav") === cur); });
    movePill();
  }
  function movePill() {
    var pill = $("#links-pill"), a = $("#links a.current");
    if (!pill) return;
    if (!a || getComputedStyle(pill).display === "none") { pill.style.opacity = 0; return; }
    var st = "translateX(" + a.offsetLeft + "px)";
    if (ANIM) G.to(pill, { x: a.offsetLeft, width: a.offsetWidth, opacity: 1, duration: .45, ease: "power3.out", overwrite: true });
    else { pill.style.transform = st; pill.style.width = a.offsetWidth + "px"; pill.style.opacity = 1; }
  }
  var ticking = false;
  addEventListener("scroll", function () { if (!ticking) { ticking = true; requestAnimationFrame(function () { navState(); navCurrent(); ticking = false; }); } }, { passive: true });
  addEventListener("resize", function () { navCurrent(); });
  navState(); navCurrent();

  /* ================= motion ================= */
  if (!ANIM) { var l = $("#loader"); if (l) l.remove(); return; }

  var mm = G.matchMedia();
  var fine = matchMedia("(pointer: fine)").matches;

  // split headings into lines/words that rise from a mask
  function splitRise(el, opts) {
    if (!window.SplitText) return G.from(el, Object.assign({ y: 40, opacity: 0, duration: .9, ease: "power3.out" }, opts));
    var s = new window.SplitText(el, { type: "lines,words", linesClass: "split-line", autoSplit: false });
    return G.from(s.words, Object.assign({ yPercent: 110, rotate: 4, duration: .9, ease: "power4.out", stagger: .05 }, opts));
  }

  // loader -> hero intro
  var tl = G.timeline({ defaults: { ease: "power3.out" } });
  tl.to(".loader-book path", { strokeDashoffset: 0, duration: .8, ease: "power2.inOut" })
    .from(".loader-name", { y: 20, opacity: 0, duration: .5 }, "-=.45")
    .to("#loader", { yPercent: -100, duration: .8, ease: "power4.inOut" }, "+=.15")
    .set("#loader", { display: "none" });
  tl.add(splitRise("#hero-title", { stagger: .07, duration: 1.1 }), "-=.45");
  tl.from("[data-hero]", { y: 30, opacity: 0, stagger: .1, duration: .8 }, "-=.8");
  tl.from(".top-in > *", { y: -20, opacity: 0, stagger: .06, duration: .6, clearProps: "transform,opacity" }, "-=.8");

  // hero fan of covers
  mm.add("(min-width: 980px)", function () {
    var cards = $$(".fan-card"), n = cards.length;
    var spots = [{ x: -58, y: -51, r: -7 }, { x: 60, y: -56, r: 5 }, { x: -62, y: 53, r: 4 }, { x: 56, y: 50, r: -6 }];
    cards.forEach(function (c, i) {
      var s = spots[i] || spots[0];
      G.set(c, { xPercent: -50 + s.x, yPercent: -50 + s.y, rotation: s.r, zIndex: i + 1 });
    });
    tl.from(cards, { yPercent: 60, rotation: 0, xPercent: -50, opacity: 0, scale: .7, duration: 1.2, stagger: .1, ease: "expo.out" }, "-=1.1");
    cards.forEach(function (c, i) {
      c.addEventListener("mouseenter", function () { G.to(c, { scale: 1.1, rotation: 0, zIndex: 10, duration: .4, ease: "power3.out" }); });
      c.addEventListener("mouseleave", function () { G.to(c, { scale: 1, rotation: (spots[i] || spots[0]).r, zIndex: i + 1, duration: .5, ease: "power3.out" }); });
    });
    // gentle float + mouse tilt
    var fan = $("#fan");
    G.set(fan, { transformPerspective: 1400, transformStyle: "preserve-3d" });
    G.to(fan, { y: -12, duration: 3, yoyo: true, repeat: -1, ease: "sine.inOut" });
    var rx = G.quickTo(fan, "rotationX", { duration: .8, ease: "power3" }), ry = G.quickTo(fan, "rotationY", { duration: .8, ease: "power3" });
    var glow = $("#hero-glow"), gx = G.quickTo(glow, "left", { duration: .6 }), gy = G.quickTo(glow, "top", { duration: .6 });
    var hero = $(".hero");
    function mv(e) { var r = hero.getBoundingClientRect(); var px = (e.clientX - r.left) / r.width - .5, py = (e.clientY - r.top) / r.height - .5; ry(px * 14); rx(-py * 10); gx(e.clientX - r.left); gy(e.clientY - r.top); glow.style.opacity = 1; }
    hero.addEventListener("mousemove", mv);
    // the fan drifts away as you scroll
    G.to(fan, { yPercent: 18, opacity: .3, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });
    return function () { hero.removeEventListener("mousemove", mv); };
  });
  mm.add("(max-width: 979px)", function () {
    tl.from(".fan-card", { y: 60, opacity: 0, stagger: .08, duration: .9 }, "-=1");
  });
  G.to(".hero-text", { yPercent: -12, opacity: .2, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });

  // magnetic buttons
  if (fine) $$(".magnet").forEach(function (b) {
    var qx = G.quickTo(b, "x", { duration: .4, ease: "power3" }), qy = G.quickTo(b, "y", { duration: .4, ease: "power3" });
    b.addEventListener("mousemove", function (e) { var r = b.getBoundingClientRect(); qx((e.clientX - r.left - r.width / 2) * .3); qy((e.clientY - r.top - r.height / 2) * .35); });
    b.addEventListener("mouseleave", function () { qx(0); qy(0); });
  });

  // section headings
  $$("[data-split]").forEach(function (el) {
    var tw = splitRise(el, { paused: true });
    ST.create({ trigger: el, start: "top 85%", once: true, onEnter: function () { tw.play(); } });
  });
  ST.batch("[data-reveal]", { start: "top 88%", once: true, onEnter: function (b) { G.from(b, { y: 36, opacity: 0, duration: .9, stagger: .12, ease: "power3.out" }); } });
  ST.batch("[data-pop]", { start: "top 88%", once: true, onEnter: function (b) { G.from(b, { y: 60, opacity: 0, rotation: function (i) { return i % 2 ? 6 : -6; }, scale: .9, duration: 1, stagger: .12, ease: "back.out(1.6)" }); } });
  ST.batch(".obj-ic", { start: "top 90%", once: true, onEnter: function (b) { G.from(b, { scale: 0, rotation: -90, duration: .8, stagger: .08, ease: "back.out(2)" }); } });

  // horizontal story picker (pinned on desktop)
  mm.add("(min-width: 1000px) and (min-height: 620px)", function () {
    var track = $("#h-track"), pin = $("#h-pin");
    $(".picker").classList.add("pinned");
    function dist() { return Math.max(0, track.scrollWidth - innerWidth); }
    var tw = G.to(track, { x: function () { return -dist(); }, ease: "none",
      scrollTrigger: { trigger: pin, start: "center center", end: function () { return "+=" + dist(); }, pin: true, scrub: .8, invalidateOnRefresh: true, anticipatePin: 1 } });
    $$(".pick", track).forEach(function (p) {
      G.from($(".pick-in", p), { y: 40, opacity: 0, duration: .8, ease: "power3.out", scrollTrigger: { trigger: p, containerAnimation: tw, start: "left 85%", toggleActions: "play none none reverse" } });
      G.fromTo($(".pick-im", p), { xPercent: -5 }, { xPercent: 5, ease: "none", scrollTrigger: { trigger: p, containerAnimation: tw, start: "left right", end: "right left", scrub: true } });
    });
    return function () { $(".picker").classList.remove("pinned"); };
  });
  G.from(".pick", { y: 80, opacity: 0, stagger: .1, duration: 1, ease: "power3.out", scrollTrigger: { trigger: "#h-pin", start: "top 85%", once: true } });

  // chapters: the cover opens like a curtain, image parallax, cards deal in
  $$(".chapter").forEach(function (ch) {
    var stage = $("[data-stage]", ch), img = $(".stage-img", ch);
    G.fromTo(stage, { clipPath: "inset(10% 14% 10% 14% round 40px)" }, { clipPath: "inset(0% 0% 0% 0% round 26px)", ease: "none", scrollTrigger: { trigger: stage, start: "top 95%", end: "top 35%", scrub: true } });
    G.fromTo(img, { yPercent: -6, scale: 1.15 }, { yPercent: 6, scale: 1, ease: "none", scrollTrigger: { trigger: stage, start: "top bottom", end: "bottom top", scrub: true } });
    G.from($(".ch-num", ch), { yPercent: 40, opacity: 0, ease: "none", scrollTrigger: { trigger: ch, start: "top bottom", end: "top 20%", scrub: true } });
    G.from($(".ch-kicker", ch), { x: -30, opacity: 0, duration: .7, ease: "power3.out", scrollTrigger: { trigger: ch, start: "top 75%", once: true } });
    G.from($(".ch-backdrop", ch), { scale: 1.3, ease: "none", scrollTrigger: { trigger: ch, start: "top bottom", end: "bottom top", scrub: true } });
    var acts = $$(".act", ch);
    if (acts.length) G.from(acts, { y: 90, rotationX: -25, rotation: function (i) { return (i % 2 ? 1 : -1) * 4; }, opacity: 0, duration: 1, stagger: .12, ease: "power3.out", transformPerspective: 900,
      scrollTrigger: { trigger: $(".acts", ch), start: "top 85%", once: true } });
    var minis = $$(".mini-words .flash", ch);
    if (minis.length) ST.create({ trigger: minis[0], start: "top 85%", once: true, onEnter: function () {
      // a little teaser: the first card flips and flips back
      G.from(minis, { y: 30, opacity: 0, stagger: .1, duration: .6, ease: "back.out(1.7)" });
      setTimeout(function () { if (minis[0].getAttribute("aria-pressed") === "false") { minis[0].setAttribute("aria-pressed", "true"); setTimeout(function () { minis[0].setAttribute("aria-pressed", "false"); }, 1300); } }, 900);
    } });
  });

  // activity cards tilt toward the pointer
  if (fine) $$(".act").forEach(function (a) {
    var rx = G.quickTo(a, "rotationX", { duration: .5, ease: "power3" }), ry = G.quickTo(a, "rotationY", { duration: .5, ease: "power3" });
    G.set(a, { transformPerspective: 900 });
    a.addEventListener("mousemove", function (e) { var r = a.getBoundingClientRect(); ry(((e.clientX - r.left) / r.width - .5) * 10); rx(-((e.clientY - r.top) / r.height - .5) * 10); });
    a.addEventListener("mouseleave", function () { rx(0); ry(0); });
  });

  // vocabulary + index cards deal in
  ST.batch(".cards .flash", { start: "top 92%", once: true, onEnter: function (b) { G.from(b, { y: 70, rotation: function () { return (Math.random() - .5) * 16; }, opacity: 0, duration: .8, stagger: .06, ease: "back.out(1.5)" }); } });
  ST.batch(".ix", { start: "top 94%", once: true, onEnter: function (b) { G.from(b, { x: -30, opacity: 0, duration: .6, stagger: .05, ease: "power3.out" }); } });
  ST.batch(".filters", { start: "top 92%", once: true, onEnter: function (b) { G.from($$(".filter", b[0]), { y: 20, opacity: 0, stagger: .05, duration: .5, ease: "power3.out" }); } });

  // progress: ring and bars fill when they come into view
  ST.create({ trigger: "#prog-body", start: "top 80%", once: true, onEnter: function () {
    var v = $("#ring-val"), num = $("#ring-num"), c = counts();
    if (v) { var full = parseFloat(v.getAttribute("stroke-dasharray")); G.fromTo(v, { attr: { "stroke-dashoffset": full } }, { attr: { "stroke-dashoffset": full * (1 - c.p / 100) }, duration: 1.6, ease: "power3.out" }); }
    var o = { n: 0 }; G.to(o, { n: c.p, duration: 1.6, ease: "power3.out", onUpdate: function () { num.textContent = Math.round(o.n) + "%"; } });
    $$("#prog-body .bar span").forEach(function (s) { var w = s.style.width; G.fromTo(s, { width: 0 }, { width: w, duration: 1.2, ease: "power3.out", delay: .2 }); });
    G.from("#prog-body .sticker", { scale: .6, opacity: 0, stagger: .1, duration: .7, ease: "back.out(2)" });
  } });

  // footer
  G.from(".foot-big", { yPercent: 40, opacity: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: ".foot", start: "top 90%", once: true } });

  // images that load late change heights: keep triggers right
  addEventListener("load", function () { ST.refresh(); });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ST.refresh(); });
})();
