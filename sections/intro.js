export function renderIntro(intro, escapeHtml) {
  const id = intro?.id || "intro";
  const title = intro?.title || "O que fazemos";
  const strong = intro?.textStrong || "";
  const text = intro?.text || "";

  return `
    <section id="${escapeHtml(id)}" class="section section-paper anchor">
      <h2 class="h2">${escapeHtml(title)}</h2>
      <p class="p" style="font-weight:900; color:#22225e;">
        ${escapeHtml(strong)}
      </p>
      <p class="p">${escapeHtml(text)}</p>
    </section>
  `;
}
