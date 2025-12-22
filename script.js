// =====================================
// ELEMENTOS FIXOS (TOPO + HERO SCROLL)
// =====================================
const backToTop = document.getElementById("backToTop");
const heroScroll = document.getElementById("heroScroll");
const target = document.getElementById("sobre");

// mostrar/esconder botão voltar ao topo
window.addEventListener("scroll", () => {
  if (!backToTop) return;
  if (window.scrollY > 300) backToTop.classList.add("show");
  else backToTop.classList.remove("show");
});

// voltar ao topo
if (backToTop) {
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// descer para a seção branca
if (heroScroll) {
  heroScroll.addEventListener("click", () => {
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

// =====================================
// TOGGLES DE SERVIÇOS (accordion)
// =====================================
const serviceCards = Array.from(document.querySelectorAll(".serviceCard"));

const setToggleLabel = (btn, isOpen) => {
  if (!btn) return;
  const plus = btn.querySelector(".servicePlus");
  const text = btn.querySelector(".serviceToggleText");

  if (plus) plus.textContent = isOpen ? "−" : "+";
  if (text) text.textContent = isOpen ? "Ver menos" : "Saiba mais";
};

const closeCard = (card) => {
  const btn = card.querySelector(".serviceToggleBtn");
  const body = card.querySelector(".serviceBody");

  card.classList.remove("open");
  if (btn) btn.setAttribute("aria-expanded", "false");
  if (body) {
    body.setAttribute("aria-hidden", "true");
    body.style.maxHeight = "0px";
  }

  setToggleLabel(btn, false);
};

const openCard = (card) => {
  const btn = card.querySelector(".serviceToggleBtn");
  const body = card.querySelector(".serviceBody");

  card.classList.add("open");
  if (btn) btn.setAttribute("aria-expanded", "true");
  if (body) {
    body.setAttribute("aria-hidden", "false");
    body.style.maxHeight = body.scrollHeight + "px";
  }

  setToggleLabel(btn, true);
};

// init: fecha tudo
serviceCards.forEach((card) => {
  const btn = card.querySelector(".serviceToggleBtn");
  const body = card.querySelector(".serviceBody");

  if (btn && !btn.hasAttribute("aria-expanded")) btn.setAttribute("aria-expanded", "false");
  if (body && !body.hasAttribute("aria-hidden")) body.setAttribute("aria-hidden", "true");

  closeCard(card);

  if (btn) {
    btn.addEventListener("click", () => {
      const isOpen = card.classList.contains("open");

      // fecha os outros (accordion)
      serviceCards.forEach((c) => {
        if (c !== card) closeCard(c);
      });

      if (isOpen) closeCard(card);
      else openCard(card);
    });
  }
});

// recalcula altura do aberto no resize
window.addEventListener("resize", () => {
  serviceCards.forEach((card) => {
    if (!card.classList.contains("open")) return;
    const body = card.querySelector(".serviceBody");
    if (!body) return;
    body.style.maxHeight = body.scrollHeight + "px";
  });
});
