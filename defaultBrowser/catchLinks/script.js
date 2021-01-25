const links = document.querySelectorAll("a");

for (let link of links) {
  link.addEventListener("click", (e) => {
    if (!confirm(`Leave to ${e.target.innerText}?`)) {
      e.preventDefault();
    }
  });
}
