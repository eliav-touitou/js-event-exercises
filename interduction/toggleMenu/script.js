window.addEventListener("DOMContentLoaded", (loaded) => {
  let menu = document.getElementById("sweeties");

  menu.addEventListener("click", () => {
    menu.classList.toggle("open");
  });
});
