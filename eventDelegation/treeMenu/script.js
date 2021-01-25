let lis = document.querySelectorAll("li");
for (let li of lis) {
  let span = document.createElement("span");
  li.prepend(span);
  span.append(span.nextSibling);
}
const tree = document.querySelector("#tree");

tree.addEventListener("click", (e) => {
  if (e.target.tagName != "SPAN") {
    return;
  }

  let childrenContainer = e.target.parentNode.querySelector("ul");
  if (!childrenContainer) return;
  childrenContainer.hidden = !childrenContainer.hidden;
});
