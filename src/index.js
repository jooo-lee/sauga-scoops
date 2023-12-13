import "./styles.css";
import twoScoopConeImg from "./assets/two-scoop-cone.png";
import GitHubIconSvg from "./assets/github-mark-pink.svg";

const content = document.querySelector("#content");

// Add two scoop cone image to content
const twoScoopCone = new Image();
twoScoopCone.src = twoScoopConeImg;
twoScoopCone.setAttribute("id", "two-scoop-cone");
twoScoopCone.setAttribute("alt", "Two scoop ice cream cone image");
content.insertBefore(twoScoopCone, content.lastElementChild);

// Add GitHub logo as link in footer
const GitHubIcon = new Image();
GitHubIcon.src = GitHubIconSvg;
GitHubIcon.setAttribute("id", "github-icon");
GitHubIcon.setAttribute("alt", "GitHub icon");
document.querySelector("#github-link").appendChild(GitHubIcon);
