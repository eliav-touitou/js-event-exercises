const largeImg = document.querySelector("#largeImg");
let links = document.querySelectorAll("a");

for (let link of links) {
  link.addEventListener("click", (e) => {
    largeImg.src = link.href;
    e.preventDefault();
  });
}
