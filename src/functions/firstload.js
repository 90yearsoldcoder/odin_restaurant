import headerDiv from "../pages/header";
import "../styles/header.css";

const firstLoad = function () {
  const content = document.querySelector("#content");
  const header = headerDiv();

  content.appendChild(header);
};

export default firstLoad;
