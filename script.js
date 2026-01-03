// ===============================
// ELEMENTOS FIXOS (TOPO + SCROLL)
// ===============================

const backToTop = document.getElementById("backToTop");
const heroScroll = document.getElementById("heroScroll");
const target = document.getElementById("sobre");

// mostrar ou esconder botão "voltar ao topo"
window.addEventListener("scroll", () => {
  if (!backToTop) return;
  if (window.scrollY > 300) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

// clicar no botão para voltar ao topo
if (backToTop) {
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// clicar na bolinha e descer até a seção branca
if (heroScroll && target) {
  heroScroll.addEventListener("click", () => {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

// ============================
// TOGGLE DE SERVIÇOS (CARDS)
// ============================

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

// inicia todos os cards fechados
serviceCards.forEach((card) => {
  const btn = card.querySelector(".serviceToggleBtn");
  const body = card.querySelector(".serviceBody");

  if (btn && !btn.hasAttribute("aria-expanded")) btn.setAttribute("aria-expanded", "false");
  if (body && !body.hasAttribute("aria-hidden")) body.setAttribute("aria-hidden", "true");

  closeCard(card);

  if (btn) {
    btn.addEventListener("click", () => {
      const isOpen = card.classList.contains("open");

      // fecha os outros
      serviceCards.forEach((c) => {
        if (c !== card) closeCard(c);
      });

      // alterna o card clicado
      if (isOpen) closeCard(card);
      else openCard(card);
    });
  }
});

// recalcula a altura do conteúdo aberto ao redimensionar a janela
window.addEventListener("resize", () => {
  serviceCards.forEach((card) => {
    if (!card.classList.contains("open")) return;
    const body = card.querySelector(".serviceBody");
    if (!body) return;
    body.style.maxHeight = body.scrollHeight + "px";
  });
});

// ============================
// TOGGLE DA EQUIPE
// ============================

const teamMembers = document.querySelectorAll(".teamMember");

teamMembers.forEach((member) => {
  const button = member.querySelector(".teamToggleBtn");
  const moreText = member.querySelector(".teamMoreText");

  button.addEventListener("click", () => {
    const isOpen = member.classList.toggle("open");
    button.setAttribute("aria-expanded", isOpen);
    moreText.setAttribute("aria-hidden", !isOpen);
    button.textContent = isOpen ? "Ver menos" : "Saiba mais";
  });
});