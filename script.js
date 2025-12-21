import { renderHero } from "./sections/hero.js";
import { renderIntro } from "./sections/intro.js";
import { renderServices } from "./sections/services.js";
import { renderFooter } from "./sections/footer.js";

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

async function loadContent() {
  const res = await fetch("./content.json", { cache: "no-store" });
  if (!res.ok) throw new Error(`Falha ao carregar content.json: ${res.status}`);
  return res.json();
}

function applyTheme(theme) {
  if (!theme) return;
  const root = document.documentElement;
  if (theme.blue) root.style.setProperty("--blue", theme.blue);
  if (theme.white) root.style.setProperty("--white", theme.white);
  if (theme.cardMaxWidth) root.style.setProperty("--cardMaxWidth", `${theme.cardMaxWidth}px`);
  if (theme.radius) root.style.setProperty("--radius", `${theme.radius}px`);
}

function setupBackToTop() {
  const btn = document.getElementById("backToTop");
  if (!btn) return;

  const onScroll = () => {
    if (window.scrollY > 420) btn.classList.add("show");
    else btn.classList.remove("show");
  };

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function setupSmoothAnchors() {
  document.addEventListener("click", (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute("href");
    if (!id || id === "#") return;

    const target = document.querySelector(id);
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

async function init() {
  const app = document.getElementById("app");
  if (!app) return;

  try {
    const data = await loadContent();
    applyTheme(data.theme);

    app.innerHTML = `
      <div class="phone">
        ${renderHero(data.hero, escapeHtml)}
        ${renderIntro(data.intro, escapeHtml)}
        ${renderServices(data.services, escapeHtml)}
        ${renderFooter(data.footer, escapeHtml)}
      </div>
    `;

    setupBackToTop();
    setupSmoothAnchors();
  } catch (err) {
    console.error(err);
    app.innerHTML = `
      <div class="phone">
        <section class="section section-paper">
          <h2 class="h2">Ops.</h2>
          <p class="p">Erro carregando <b>content.json</b>. Abre o console.</p>
        </section>
      </div>
    `;
  }
}

init();
