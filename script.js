function animarScroll() {
  const divs = document.querySelectorAll(".js-scroll");
  const windowMetade = window.innerHeight * 0.6;

  divs.forEach((div) => {
    const sectionTop = div.getBoundingClientRect().top;
    const isSectionVisible = sectionTop - windowMetade < 0;
    if (isSectionVisible) {
      div.classList.add("ativo");
    }
  });
}

animarScroll();
window.addEventListener("scroll", animarScroll);
