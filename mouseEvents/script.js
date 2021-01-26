const list = document.getElementById("ul");
const items = list.querySelectorAll("li");
list.addEventListener("click", (event) => {
  if (!(event.ctrlKey || event.metaKey)) {
    event.target.className = "selected";
    for (const item of items) {
      item.className = "";
    }
  }
  event.target.className = "selected";
});
