// sections/services.js
export function renderServices(data, escapeHtml) {
  const services = data?.services?.items ?? [];

  return `
  <section class="section section--blue" id="servicos">
    <div class="container">
      <h2 class="sectionTitle">${escapeHtml(data?.services?.title ?? "Nossos Serviços")}</h2>

      <div class="cards">
        ${services
          .map((item, i) => {
            const title = escapeHtml(item.title ?? "");
            const desc = escapeHtml(item.description ?? "");
            const panelId = `service-panel-${i}`;

            const servicesList = Array.isArray(item.services) ? item.services : [];
            const gainsList = Array.isArray(item.gains) ? item.gains : [];

            return `
            <article class="card">
              <h3 class="cardTitle">${title}</h3>
              <p class="cardText">${desc}</p>

              <button
                class="toggleBtn"
                type="button"
                data-toggle="service"
                aria-expanded="false"
                aria-controls="${panelId}"
              >
                Saiba mais
              </button>

              <div class="togglePanel" id="${panelId}" hidden>
                <div class="toggleBlock">
                  <h4 class="toggleTitle">Serviços</h4>
                  <ul class="bullets">
                    ${servicesList.map((x) => `<li>${escapeHtml(x)}</li>`).join("")}
                  </ul>
                </div>

                <div class="toggleBlock">
                  <h4 class="toggleTitle">Ganhos para a empresa</h4>
                  <ul class="bullets">
                    ${gainsList.map((x) => `<li>${escapeHtml(x)}</li>`).join("")}
                  </ul>
                </div>
              </div>
            </article>
          `;
          })
          .join("")}
      </div>
    </div>
  </section>
  `;
}
