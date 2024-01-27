import user_img from "../assets/anya-forger-heh.avif";

let nav_item_list = ["Specials", "Menu", "Delivery", "About us"];

const headerDiv = function () {
  const header = document.createElement("div");
  header.classList.add("header");

  const nav_left = document.createElement("div");
  nav_left.classList.add("nav");
  header.appendChild(nav_left);

  const nav_right = document.createElement("div");
  nav_right.classList.add("user-bar");
  header.appendChild(nav_right);

  const brand_name = document.createElement("div");
  brand_name.classList.add("name");
  brand_name.textContent = "ChunYang Noodles";
  nav_left.appendChild(brand_name);

  const navBar = document.createElement("ul");
  navBar.classList.add("nav-bar");
  navBar.id = "nav_bar";
  for (let nar_item of nav_item_list) {
    const navBar_item = document.createElement("li");
    navBar_item.classList.add("nav-item");
    navBar_item.id = nar_item.replace(/\s/g, "");
    navBar_item.textContent = nar_item;
    navBar.appendChild(navBar_item);
  }
  nav_left.appendChild(navBar);

  const img_container = document.createElement("div");
  img_container.classList.add("user-pic-container");
  nav_right.appendChild(img_container);

  const img = document.createElement("img");
  img.id = "user-pic";
  img.src = user_img;
  img_container.appendChild(img);

  return header;
};

export default headerDiv;
