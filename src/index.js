import firstLoad from "./functions/firstload";
import home_load from "./functions/homeLoader";
import render from "./functions/render";
import about_load from "./functions/aboutLoader";

firstLoad();
home_load();

const menu_button = document.querySelector("#Menu");
const About_button = document.querySelector("#Aboutus");

menu_button.addEventListener("click", () => {
  render();
  home_load();
});

About_button.addEventListener("click", () => {
  render();
  about_load();
});
