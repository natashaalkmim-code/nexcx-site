export function renderServices(servicesBlock, escapeHtml) {
  const id = servicesBlock?.id || "servicos";
  const title = servicesBlock?.title || "Nossos Serviços";
  const items = Array.isArray(servicesBlock?.items) ? servicesBlock.items : [];

  const cards = items
    .map((it, idx) => {
      const t = it?.title || "";
      const summary = it?.summary || "";

      const servicesTitle = it?.servicesTitle || "Serviços";
      const gainsTitle = it?.gainsTitle || "Ganhos para a empresa";

      const services = Array.isArray(it?.services) ? it.services : [];
      const gains = Array.isArray(it?.gains) ? it.gains : [];

      return `
        <article class="card" data-acc="${idx}">
          <h3>${escapeHtml(t)}</h3>
          <p>${escapeHtml(summary)}</p>

          <div class="more-row" role="button" tabindex="0" aria-expanded="false" data-acc-toggle="${idx}">
            <span class="plus" aria-hidden="true">+</span>
            <span class="label">Saiba mais</span>
          </div>

          <div class="details" data-acc-body="${idx}">
            <div class="details-inner">
              <h4>${escapeHtml(servicesTitle)}</h4>
              <ul class="list">
                ${services.map((s) => `<li>${escapeHtml(s)}</li>`).join("")}
              </ul>

              <h4>${escapeHtml(gainsTitle)}</h4>
              <ul class="list">
                ${gains.map((g) => `<li>${escapeHtml(g)}</li>`).join("")}
              </ul>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  // Script inline só pra esse bloco (sem depender de outros)
  // Obs: é HTML + JS embutido porque estamos renderizando string.
  const behavior = `
    <script>
      (function(){
        function setState(i, open){
          var body = document.querySelector('[data-acc-body="'+i+'"]');
          var toggle = document.querySelector('[data-acc-toggle="'+i+'"]');
          if(!body || !toggle) return;

          var plus = toggle.querySelector('.plus');
          var label = toggle.querySelector('.label');

          if(open){
            body.classList.add('open');
            toggle.setAttribute('aria-expanded', 'true');
            if(plus) plus.textContent = '—';
            if(label) label.textContent = 'Mostrar menos';
          } else {
            body.classList.remove('open');
            toggle.setAttribute('aria-expanded', 'false');
            if(plus) plus.textContent = '+';
            if(label) label.textContent = 'Saiba mais';
          }
        }

        document.addEventListener('click', function(e){
          var t = e.target.closest('[data-acc-toggle]');
          if(!t) return;
          var i = t.getAttribute('data-acc-toggle');
          var body = document.querySelector('[data-acc-body="'+i+'"]');
          if(!body) return;
          var open = body.classList.contains('open');
          setState(i, !open);
        });

        document.addEventListener('keydown', function(e){
          if(e.key !== 'Enter' && e.key !== ' ') return;
          var t = e.target.closest('[data-acc-toggle]');
          if(!t) return;
          e.preventDefault();
          var i = t.getAttribute('data-acc-toggle');
          var body = document.querySelector('[data-acc-body="'+i+'"]');
          if(!body) return;
          var open = body.classList.contains('open');
          setState(i, !open);
        });
      })();
    </script>
  `;

  return `
    <section id="${escapeHtml(id)}" class="section section-blue anchor">
      <h2 class="services-title">${escapeHtml(title)}</h2>
      ${cards}
      ${behavior}
    </section>
  `;
}
