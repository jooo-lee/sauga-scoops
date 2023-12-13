import "./styles.css";
import twoScoopConeImg from "./assets/two-scoop-cone.png";

const content = document.querySelector("#content");

// Add two scoop cone image to content
const twoScoopCone = new Image();
twoScoopCone.src = twoScoopConeImg;
twoScoopCone.setAttribute("id", "two-scoop-cone");
twoScoopCone.setAttribute("alt", "Two scoop ice cream cone image");

content.insertBefore(twoScoopCone, content.lastElementChild);
