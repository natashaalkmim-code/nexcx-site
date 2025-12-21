// script.js
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
  const res = await fetch("/content.json", { cache: "no-store" });
  if (!res.ok) throw new Error(`Falha ao carregar content.json (${res.status})`);
  return res.json();
}

function bindInteractions() {
  // Event delegation: funciona mesmo que o HTML seja renderizado depois
  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-toggle='service']");
    if (!btn) return;

    e.preventDefault();

    const targetId = btn.getAttribute("aria-controls");
    if (!targetId) return;

    const panel = document.getElementById(targetId);
    if (!panel) return;

    const isOpen = btn.getAttribute("aria-expanded") === "true";

    btn.setAttribute("aria-expanded", String(!isOpen));
    btn.textContent = isOpen ? "Saiba mais" : "Mostrar menos";

    panel.hidden = isOpen;
    panel.classList.toggle("is-open", !isOpen);
  });
}

async function init() {
  const app = document.getElementById("app");
  if (!app) return;

  try {
    const data = await loadContent();

    app.innerHTML = [
      renderHero(data, escapeHtml),
      renderIntro(data, escapeHtml),
      renderServices(data, escapeHtml),
      renderFooter(data, escapeHtml),
    ].join("");

    bindInteractions();
  } catch (err) {
    console.error(err);
    app.innerHTML = `<p style="padding:24px">Erro carregando content.json</p>`;
  }
}

init();
