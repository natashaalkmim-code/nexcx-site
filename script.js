(function () {
  const app = document.getElementById("app");

  function escapeHtml(str) {
    return String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function setThemeVars(theme) {
    if (!theme) return;
    const root = document.documentElement;
    if (theme.cardMaxWidth) root.style.setProperty("--cardMaxWidth", `${theme.cardMaxWidth}px`);
    if (theme.radius) root.style.setProperty("--radius", `${theme.radius}px`);
    if (theme.blue) root.style.setProperty("--blue", theme.blue);
    if (theme.white) root.style.setProperty("--white", theme.white);
    if (theme.paper) root.style.setProperty("--paper", theme.paper);
    if (theme.ink) root.style.setProperty("--ink", theme.ink);
    if (theme.accent) root.style.setProperty("--accent", theme.accent);
  }

  function render(data) {
    setThemeVars(data.theme);

    const hero = data.hero || {};
    const intro = data.intro || {};
    const services = data.services || {};
    const footer = data.footer || {};

    const heroTitle = (hero.titleLines || []).map(escapeHtml).join("<br/>");

    const introBlocks = (intro.blocks || [])
      .map((p) => `<p class="p">${escapeHtml(p)}</p>`)
      .join("");

    const serviceCards = (services.items || [])
      .map((item, idx) => {
        const servicesBullets = (item.servicesBullets || [])
          .map((b) => `<li>${escapeHtml(b)}</li>`)
          .join("");

        const gainsBullets = (item.gainsBullets || [])
          .map((b) => `<li>${escapeHtml(b)}</li>`)
          .join("");

        return `
          <article class="card">
            <h3 class="cardTitle">${escapeHtml(item.title || "")}</h3>
            <p class="cardText">${escapeHtml(item.description || "")}</p>

            <details>
              <summary>
                <span class="toggleMore"><span class="toggleIcon">+</span> Saiba mais</span>
                <span class="toggleLess"><span class="toggleIcon">—</span> Mostrar menos</span>
              </summary>

              <div class="subTitle">${escapeHtml(item.servicesTitle || "Serviços")}</div>
              <ul class="ul">${servicesBullets}</ul>

              <div class="subTitle">${escapeHtml(item.gainsTitle || "Ganhos para a empresa")}</div>
              <ul class="ul">${gainsBullets}</ul>
            </details>
          </article>
        `;
      })
      .join("");

    app.innerHTML = `
      <section class="shell">
        <div class="heroImageWrap">
          <img class="heroImage" src="${escapeHtml(hero.image || "")}" alt="NexCX collage" />
        </div>

        <div class="heroContent">
          <div class="heroArrow">${escapeHtml(hero.arrow || "")}</div>
          <h1 class="heroTitle">${heroTitle}</h1>
          <a class="heroCta" href="${escapeHtml(hero.cta?.href || "#")}">${escapeHtml(
      hero.cta?.label || ""
    )}</a>
        </div>

        <div class="whiteSection">
          <h2 class="h2">${escapeHtml(intro.title || "")}</h2>
          ${introBlocks}
        </div>

        <div class="servicesSection">
          <h2 class="servicesTitle">${escapeHtml(services.title || "")}</h2>
          ${serviceCards}
        </div>

        <div class="footerSection" id="${escapeHtml(footer.id || "contato")}">
          <div class="footerTitle">${escapeHtml(footer.title || "")}</div>
          <p class="footerText">${escapeHtml(footer.text || "")}</p>
          <a class="footerCta" href="${escapeHtml(footer.cta?.href || "#")}">${escapeHtml(
      footer.cta?.label || ""
    )}</a>
        </div>
      </section>
    `;
  }

  fetch("./content.json", { cache: "no-store" })
    .then((r) => {
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      return r.json();
    })
    .then(render)
    .catch((err) => {
      console.error(err);
      app.innerHTML = `<div class="loading">Erro carregando content.json</div>`;
    });
})();
