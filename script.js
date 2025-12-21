// Cache-buster automático da colagem (pra parar de ficar vendo imagem velha)
document.addEventListener("DOMContentLoaded", () => {
  const img = document.querySelector(".heroImage");
  if (!img) return;

  // se já tem ?v= no HTML, ele mantém, mas se não tiver, adiciona
  const url = new URL(img.src, window.location.href);
  if (!url.searchParams.get("v")) {
    url.searchParams.set("v", String(Date.now()));
    img.src = url.toString();
  }
});
