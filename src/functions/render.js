//remove all items except the header

const render = function () {
  const content = document.querySelector("#content");

  while (content.children.length > 1) content.children[1].remove();

  const nav_bar = document.querySelector("#nav_bar");
  for (let nav_item of nav_bar.children)
    nav_item.classList.remove("nav-active");
};

export default render;
