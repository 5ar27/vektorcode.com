/* ============================================================
   VEKTORCODE — main.js
   Animacije: GSAP + ScrollTrigger (CDN) · skrolovanje je nativno
   Forma: Google Apps Script → Google Sheets + email notifikacija
   ============================================================ */

/* >>> NALEPITE OVDE URL VAŠE GOOGLE APPS SCRIPT WEB APLIKACIJE <<<
   (uputstvo: UPUTSTVO.md, korak "Povezivanje forme sa Google Sheets") */
const SHEETS_ENDPOINT = "";

(function () {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hasGsap = typeof window.gsap !== "undefined";
  const animate = hasGsap && !reduce;

  if (animate) document.documentElement.classList.add("gsap");

  /* ---------- nav ---------- */
  const nav = document.querySelector("nav");
  const navlinks = document.getElementById("navlinks");
  const burger = document.querySelector(".burger");
  if (burger) burger.addEventListener("click", () => navlinks.classList.toggle("open"));

  const prog = document.getElementById("progress");
  const fc = document.getElementById("floatcta");
  function onScroll() {
    const h = document.documentElement;
    const sc = h.scrollTop || document.body.scrollTop;
    const max = h.scrollHeight - h.clientHeight;
    if (prog) prog.style.width = (max > 0 ? (sc / max) * 100 : 0) + "%";
    if (nav) nav.classList.toggle("scrolled", sc > 10);
    if (fc) fc.classList.toggle("show", document.body.dataset.page === "home" && sc > 640);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- hero word-split ---------- */
  function splitHero(withAnim) {
    const h = document.querySelector("[data-split]");
    if (!h) return;
    const walk = (node) => {
      [...node.childNodes].forEach(ch => {
        if (ch.nodeType === 3 && ch.textContent.trim()) {
          const frag = document.createDocumentFragment();
          ch.textContent.split(/(\s+)/).forEach(part => {
            if (!part.trim()) { frag.appendChild(document.createTextNode(part)); return; }
            const m = document.createElement("span"); m.className = "mask";
            const w = document.createElement("span"); w.className = "w"; w.textContent = part;
            m.appendChild(w); frag.appendChild(m);
          });
          node.replaceChild(frag, ch);
        } else if (ch.nodeType === 1 && !ch.classList.contains("mask")) walk(ch);
      });
    };
    walk(h);
    if (withAnim && animate) {
      gsap.fromTo(h.querySelectorAll(".w"),
        { yPercent: 115 },
        { yPercent: 0, duration: 0.9, ease: "power4.out", stagger: 0.045, delay: 0.15 });
    }
  }
  document.addEventListener("DOMContentLoaded", () => splitHero(true));
  window.addEventListener("langchange", () => setTimeout(() => splitHero(false), 0));

  /* ---------- scroll reveals ---------- */
  function initReveals() {
    if (!animate || !window.ScrollTrigger) {
      document.querySelectorAll(".reveal,.reveal-l,.reveal-r").forEach(el => {
        el.style.opacity = 1; el.style.transform = "none";
      });
      return;
    }
    gsap.registerPlugin(ScrollTrigger);
    document.querySelectorAll(".reveal,.reveal-l,.reveal-r").forEach(el => {
      const d = (parseInt(el.dataset.delay, 10) || 0) / 1000;
      gsap.to(el, {
        opacity: 1, x: 0, y: 0, duration: 0.9, ease: "power3.out", delay: d,
        scrollTrigger: { trigger: el, start: "top 88%", once: true }
      });
    });

    /* blob parallax u hero sekciji */
    document.querySelectorAll(".hero .blob").forEach((b, i) => {
      gsap.to(b, {
        yPercent: i % 2 ? -18 : 22, ease: "none",
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1.2 }
      });
    });

    /* telefon — blagi 3D ulazak + notifikacije */
    const phone = document.getElementById("phone");
    if (phone) {
      gsap.from(phone, {
        rotateX: 12, rotateY: -8, y: 60, opacity: 0, duration: 1.1, ease: "power3.out",
        scrollTrigger: { trigger: phone, start: "top 80%", once: true }
      });
      gsap.to(phone.querySelectorAll(".notif"), {
        opacity: 1, y: 0, duration: 0.55, ease: "power3.out", stagger: 0.55,
        scrollTrigger: { trigger: phone, start: "top 70%", once: true }
      });
    }

    /* slike projekata — clip reveal + blagi parallax */
    document.querySelectorAll(".shot img, .fw img").forEach(img => {
      gsap.fromTo(img, { scale: 1.12 }, {
        scale: 1, duration: 1.2, ease: "power3.out",
        scrollTrigger: { trigger: img, start: "top 92%", once: true }
      });
    });
  }

  /* ---------- brojači ---------- */
  function countTo(el) {
    if (el.dataset.done) return; el.dataset.done = 1;
    const t = +el.dataset.count, suf = el.dataset.suffix || "", pre = el.dataset.prefix || "";
    if (!animate) { el.textContent = pre + t + suf; return; }
    const o = { v: 0 };
    gsap.to(o, {
      v: t, duration: 1.2, ease: "power3.out",
      onUpdate: () => { el.textContent = pre + Math.round(o.v) + suf; }
    });
  }
  function initCounters() {
    const els = document.querySelectorAll("[data-count]");
    if (!animate || !window.ScrollTrigger) { els.forEach(el => countTo(el)); return; }
    els.forEach(el => {
      ScrollTrigger.create({ trigger: el, start: "top 90%", once: true, onEnter: () => countTo(el) });
    });
  }

  /* ---------- audit kartica ---------- */
  function initAudit() {
    const card = document.querySelector(".audit");
    if (!card) return;
    const run = () => {
      const sc = document.getElementById("score"), bar = document.getElementById("bar");
      if (!sc) return;
      if (!animate) { sc.textContent = 34; if (bar) bar.style.width = "34%"; return; }
      const o = { v: 0 };
      gsap.to(o, { v: 34, duration: 1.3, ease: "power3.out", onUpdate: () => sc.textContent = Math.round(o.v) });
      if (bar) gsap.to(bar, { width: "34%", duration: 1.4, ease: "power3.out", delay: 0.15 });
    };
    if (animate && window.ScrollTrigger) {
      ScrollTrigger.create({ trigger: card, start: "top 85%", once: true, onEnter: run });
    } else run();
  }

  /* ---------- lightbox (projekti) ---------- */
  function initLightbox() {
    const lb = document.getElementById("lightbox");
    if (!lb) return;
    const img = lb.querySelector("img");
    document.querySelectorAll(".shot").forEach(s => {
      s.addEventListener("click", () => {
        const src = s.querySelector("img");
        img.src = src.currentSrc || src.src;
        img.alt = src.alt;
        lb.classList.add("open");
        document.body.style.overflow = "hidden";
      });
    });
    const close = () => {
      lb.classList.remove("open");
      document.body.style.overflow = "";
    };
    lb.addEventListener("click", (e) => { if (e.target === lb || e.target.closest(".close")) close(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
  }

  /* ---------- kontakt forma → Google Sheets ---------- */
  function initForm() {
    const form = document.getElementById("leadform");
    if (!form) return;
    const msg = document.getElementById("formmsg");
    const btn = form.querySelector('button[type="submit"]');
    const t = (k) => {
      const v = window.VC_I18N && VC_I18N.dict[k];
      return v ? v[VC_I18N.lang === "en" ? 1 : 0] : k;
    };
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      btn.disabled = true;
      const orig = btn.textContent;
      btn.textContent = t("f.sending");
      const data = new FormData(form);
      data.append("lang", (window.VC_I18N && VC_I18N.lang) || "sr");
      data.append("page", location.href);
      try {
        if (SHEETS_ENDPOINT) {
          await fetch(SHEETS_ENDPOINT, { method: "POST", body: data, mode: "no-cors" });
        } else {
          /* rezervna opcija dok Google Sheets nije povezan: otvara email */
          const body = [...data.entries()].map(([k, v]) => k + ": " + v).join("\n");
          window.location.href = "mailto:office@vektorcode.com?subject=" +
            encodeURIComponent("Zahtev za besplatnu analizu — " + (data.get("business") || "")) +
            "&body=" + encodeURIComponent(body);
        }
        form.style.display = "none";
        msg.classList.remove("err");
        msg.textContent = t("f.ok");
        msg.style.display = "block";
      } catch (err) {
        msg.classList.add("err");
        msg.textContent = t("f.err");
        msg.style.display = "block";
        btn.disabled = false;
        btn.textContent = orig;
      }
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initReveals();
    initCounters();
    initAudit();
    initLightbox();
    initForm();
  });
})();
