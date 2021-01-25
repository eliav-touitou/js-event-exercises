const container = document.getElementById("container");
container.addEventListener("click", hide);

function hide(e) {
  const target = e.target;
  if (target.className === "remove-button") {
    target.parentElement.hidden = true;
  } else {
    return;
  }
}
