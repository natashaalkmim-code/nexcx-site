const $ = (sel, root = document) => root.querySelector(sel);

function escapeHtml(str = "") {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderHero(hero) {
  const title = (hero.titleLines || []).map(l => `<div>${escapeHtml(l)}</div>`).join("");

  return `
    <section class="hero">
      <div class="heroImageWrap">
        <img class="heroImage" src="${escapeHtml(hero.image)}" alt="Colagem NexCX" />
      </div>

      <div class="heroContent" style="background-image: url('${escapeHtml(hero.bg)}')">
        <div class="heroArrow">${escapeHtml(hero.arrow || "↓")}</div>
        <h1 class="heroTitle">${title}</h1>
        <a class="heroCta" href="${escapeHtml(hero.cta?.href || "#contato")}">${escapeHtml(hero.cta?.label || "Vamos conversar")}</a>
      </div>
    </section>
  `;
}

function renderIntro(intro) {
  const paras = (intro.paragraphs || [])
    .map(p => `<p class="p">${escapeHtml(p)}</p>`)
    .join("");

  return `
    <section class="whiteSection">
      <h2 class="h2">${escapeHtml(intro.title || "")}</h2>
      ${paras}
    </section>
  `;
}

function renderServiceCard(item, toggleMoreLabel, toggleLessLabel) {
  const services = (item.services || []).map(x => `<li>${escapeHtml(x)}</li>`).join("");
  const gains = (item.gains || []).map(x => `<li>${escapeHtml(x)}</li>`).join("");

  return `
    <article class="card">
      <h3 class="cardTitle">${escapeHtml(item.title || "")}</h3>
      <p class="cardText">${escapeHtml(item.description || "")}</p>

      <details>
        <summary>
          <span class="toggleMore">
            <span class="toggleIcon">＋</span>
            <span>${escapeHtml(toggleMoreLabel || "Saiba mais")}</span>
          </span>

          <span class="toggleLess">
            <span class="toggleIcon">—</span>
            <span>${escapeHtml(toggleLessLabel || "Mostrar menos")}</span>
          </span>
        </summary>

        <div class="subTitle">Serviços</div>
        <ul class="ul">${services}</ul>

        <div class="subTitle">Ganhos para a empresa</div>
        <ul class="ul">${gains}</ul>
      </details>
    </article>
  `;
}

function renderServices(services) {
  const items = (services.items || [])
    .map(item => renderServiceCard(item, services.toggleMoreLabel, services.toggleLessLabel))
    .join("");

  return `
    <section class="servicesSection">
      <h2 class="servicesTitle">${escapeHtml(services.title || "Nossos Serviços")}</h2>
      ${items}
    </section>
  `;
}

function renderFooter(footer) {
  const idAttr = footer.id ? `id="${escapeHtml(footer.id)}"` : "";
  return `
    <footer class="footerSection" ${idAttr}>
      <div class="footerTitle">${escapeHtml(footer.title || "Contato")}</div>
      <div class="footerText">${escapeHtml(footer.text || "")}</div>
      <a class="footerCta" href="${escapeHtml(footer.cta?.href || "#")}">${escapeHtml(footer.cta?.label || "Vamos conversar")}</a>
    </footer>
  `;
}

async function main() {
  const app = $("#app");
  try {
    const res = await fetch("./content.json", { cache: "no-store" });
    const data = await res.json();

    // aplica theme básico no CSS via variáveis
    if (data.theme?.cardMaxWidth) document.documentElement.style.setProperty("--cardMaxWidth", `${data.theme.cardMaxWidth}px`);
    if (data.theme?.radius) document.documentElement.style.setProperty("--radius", `${data.theme.radius}px`);
    if (typeof data.theme?.sidePadding === "number") document.documentElement.style.setProperty("--sidePadding", `${data.theme.sidePadding}px`);

    app.innerHTML =
      renderHero(data.hero || {}) +
      renderIntro(data.intro || {}) +
      renderServices(data.services || {}) +
      renderFooter(data.footer || {});
  } catch (e) {
    app.innerHTML = `<div class="loading">Deu ruim ao carregar o conteúdo. Confere o <b>content.json</b> e o console.</div>`;
    console.error(e);
  }
}

main();
