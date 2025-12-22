// botão voltar ao topo
const backToTop = document.getElementById("backToTop");

// segurança: se o botão não existir, não roda nada
if (backToTop) {
  // mostrar / esconder ao rolar
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  });

  // clique → voltar ao topo
  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
