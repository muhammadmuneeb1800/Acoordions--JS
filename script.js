const main = document.querySelectorAll(".second");

main.forEach((item) => {
  const title = item.querySelector(".title");
  const para = item.querySelector(".para");

  title.addEventListener("click", () => {
    for (let i = 0; i < main.length; i++) {
      if (main[i] != item) {
        main[i].classList.remove("active");
      } else {
        item.classList.toggle("active");
      }
    }
  });
});
