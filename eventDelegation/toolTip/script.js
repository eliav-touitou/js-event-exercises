//creating the tooltip when the mouse is over the button
document.addEventListener("mouseover", (e) => {
  if (e.target.dataset.tooltip != undefined) {
    const tooltip = document.createElement("span");
    tooltip.innerHTML = e.target.dataset.tooltip;
    tooltip.className = "tooltip";
    document.body.append(tooltip);

    //assigning boundaries due to location
    const btnWidth = e.target.getBoundingClientRect().width;
    const btnHeight = e.target.getBoundingClientRect().height;
    const btnClientX = e.target.getBoundingClientRect().x;
    const btnClientY = e.target.getBoundingClientRect().y;
    const tooltipWidth = tooltip.getBoundingClientRect().width;
    const tooltipHeight = tooltip.getBoundingClientRect().height;

    //places the tooltip according to the place of the button
    if (btnClientY > tooltipHeight + 5) {
      tooltip.style.top = `${btnClientY - tooltipHeight - 5}px`;
    } else {
      tooltip.style.top = `${btnClientY + btnHeight + 5}px`;
    }

    if (btnClientX > tooltipWidth) {
      tooltip.style.left = `${btnClientX + btnWidth / 2 - tooltipWidth / 2}px`;
    } else {
      tooltip.style.left = `${btnClientX}px`;
    }
  }
});

//removing the tooltip box when the mouse is out of it
document.addEventListener("mouseout", (e) => {
  if (e.target.dataset.tooltip != undefined) {
    const tooltip = document.querySelector(".tooltip");
    tooltip.remove();
  }
});
