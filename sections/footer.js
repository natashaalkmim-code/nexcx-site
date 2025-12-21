export function renderFooter(footer, escapeHtml) {
  const id = footer?.id || "contato";
  const title = footer?.title || "Vamos conversar";
  const text = footer?.text || "";
  const ctaLabel = footer?.cta?.label || "Abrir contato";
  const ctaHref = footer?.cta?.href || "#";

  return `
    <footer id="${escapeHtml(id)}" class="section section-paper footer anchor">
      <h2 class="h2">${escapeHtml(title)}</h2>
      <p class="p">${escapeHtml(text)}</p>
      <div style="margin-top:18px;">
        <a class="btn" style="border-color:#22225e;color:#22225e;" href="${escapeHtml(ctaHref)}">
          ${escapeHtml(ctaLabel)}
        </a>
      </div>
    </footer>
  `;
}
