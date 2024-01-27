import "../styles/home.css";
import homeDiv from "../pages/home";

const home_load = function () {
  const content = document.querySelector("#content");
  const home = homeDiv();

  content.appendChild(home);

  const menu_item = content.querySelector("#Menu");
  menu_item.classList.add("nav-active");
};

export default home_load;
