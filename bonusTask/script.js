window.addEventListener("DOMContentLoaded", func);

function func() {
  let grab = false;
  document.addEventListener("mousedown", (e) => {
    grab = true;
  });
  document.addEventListener("mousemove", onMouseMove);
  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }
  document.addEventListener("mouseup", (e) => {});
}
