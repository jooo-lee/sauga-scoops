import "./styles.css";
import initPage from "./initPage.js";
import GitHubIconSvg from "./assets/github-mark-pink.svg";

initPage();

// Add GitHub logo as link in footer
const GitHubIcon = new Image();
GitHubIcon.src = GitHubIconSvg;
GitHubIcon.setAttribute("id", "github-icon");
GitHubIcon.setAttribute("alt", "GitHub icon");
document.querySelector("#github-link").appendChild(GitHubIcon);
