export function renderHero(hero, escapeHtml) {
  const image = hero?.image || "";
  const arrow = hero?.arrow || "↓";
  const titleLines = Array.isArray(hero?.titleLines) ? hero.titleLines : [];
  const ctaLabel = hero?.cta?.label || "Vamos conversar";
  const ctaHref = hero?.cta?.href || "#contato";

  return `
    <section class="hero-wrap">
      <img class="hero-image" src="${escapeHtml(image)}" alt="Hero" />
      <div class="section section-blue hero-bottom">
        <div class="hero-arrow">${escapeHtml(arrow)}</div>
        <h1 class="hero-title">
          ${titleLines.map((l) => `<span>${escapeHtml(l)}</span>`).join("")}
        </h1>
        <a class="btn" href="${escapeHtml(ctaHref)}">${escapeHtml(ctaLabel)}</a>
      </div>
    </section>
  `;
}
