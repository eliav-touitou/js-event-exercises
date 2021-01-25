window.addEventListener("DOMContentLoaded", (loaded) => {
  const panes = document.querySelectorAll(".pane");

  //a loop that passes through all the panes to give each one a button
  for (let pane of panes) {
    const button = document.createElement("button");
    button.innerHTML = "[X]";
    pane.append(button);
    //creating the event response - deleting the pane
    button.addEventListener("click", () => {
      pane.remove();
    });
  }
});
