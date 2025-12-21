fetch("content.json")
  .then(res => res.json())
  .then(data => {
    const hero = data.hero;

    document.getElementById("app").innerHTML = `
      <section class="hero-card">
        <div class="hero-image">
          <img src="${hero.image}" alt="Colagem NexCX" />
        </div>

        <div class="hero-content">
          <div class="hero-arrow">${hero.arrow}</div>

          <div class="hero-title">
            ${hero.titleLines.map(line => `<p>${line}</p>`).join("")}
          </div>

          <div class="hero-cta">
            <a href="${hero.cta.href}">
              ${hero.cta.label}
            </a>
          </div>
        </div>
      </section>
    `;
  })
  .catch(err => {
    console.error(err);
    document.getElementById("app").innerHTML =
      "<p style='color:red'>Erro carregando content.json</p>";
  });
