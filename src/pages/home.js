import d1 from "../assets/dumpling1.jpg";
import d2 from "../assets/dumpling2.jpg";
import d3 from "../assets/dumpling3.jpg";
import d4 from "../assets/dumpling4.jpg";
import d5 from "../assets/dumpling5.jpg";

const imgs = [d1, d2, d3, d4, d5];

const homeDiv = function () {
  const home_container = document.createElement("div");
  home_container.classList.add("home_container");
  content.appendChild(home_container);

  for (let img of imgs) {
    const item_div = document.createElement("div");
    item_div.classList.add("menu_img_container");
    const img_div = document.createElement("img");
    img_div.classList.add("menu_img");
    img_div.src = img;
    item_div.appendChild(img_div);
    home_container.appendChild(item_div);
  }

  return home_container;
};

export default homeDiv;
