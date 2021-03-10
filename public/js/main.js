const NMenu = document.getElementById("n-menu"),
  TMenu = document.getElementById("n-toggle"),
  CMenu = document.getElementById("n-close");
TMenu.addEventListener("click", () => {
  NMenu.classList.toggle("show");
}),
  CMenu.addEventListener("click", () => {
    NMenu.classList.remove("show");
  });
const nLink = document.querySelectorAll(".n_link");
function LnikAction() {
  NMenu.classList.remove("show");
}
nLink.forEach((e) => e.addEventListener("click", LnikAction));
const sections = document.querySelectorAll("section[id]");
function sectionActive() {
  const e = window.pageYOffset;
  sections.forEach((n) => {
    const t = n.offsetHeight,
      c = n.offsetTop - 50;
    (sectionId = n.getAttribute("id")),
      e > c && e <= c + t
        ? document
            .querySelector(".n_menu a[href*=" + sectionId + "]")
            .classList.add("active")
        : document
            .querySelector(".n_menu a[href*=" + sectionId + "]").classList.remove("active");
  });
}
window.addEventListener("scroll", sectionActive);
