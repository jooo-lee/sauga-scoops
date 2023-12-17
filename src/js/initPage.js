import createNav from "./nav.js";
import createHomeContent from "./home.js";
import githubIconSvg from "../assets/github-mark-pink.svg";

function createHeader() {
    const body = document.querySelector("body");
    const header = document.createElement("header");
    const h1 = document.createElement("h1");
    h1.textContent = "Sauga Scoops";
    header.appendChild(h1);
    body.insertBefore(header, body.firstChild);
}

function createFooter() {
    const body = document.querySelector("body");
    const footer = document.createElement("footer");
    const topDiv = document.createElement("div");
    const freepikLink = document.createElement("a");
    freepikLink.setAttribute(
        "href",
        "https://www.freepik.com/author/surang/icons/surang-red_752?t=f&query=ice+cream"
    );
    freepikLink.textContent = "Ice Cream Icons from Freepik";
    freepikLink.setAttribute("target", "_blank");
    topDiv.appendChild(freepikLink);
    footer.appendChild(topDiv);
    const bottomDiv = document.createElement("div");
    const p = document.createElement("p");
    p.textContent = "© Joseph Lee 2023";
    bottomDiv.appendChild(p);
    const githubLink = document.createElement("a");
    githubLink.setAttribute("id", "github-link");
    githubLink.setAttribute("href", "https://github.com/jooo-lee");
    githubLink.setAttribute("target", "_blank");
    const githubIcon = new Image();
    githubIcon.src = githubIconSvg;
    githubIcon.setAttribute("id", "github-icon");
    githubIcon.setAttribute("alt", "GitHub icon");
    githubLink.appendChild(githubIcon);
    bottomDiv.appendChild(githubLink);
    footer.appendChild(bottomDiv);
    body.appendChild(footer);
}

function initPage() {
    const contentDiv = document.querySelector("#content");
    createHeader();
    createNav(contentDiv, "Home");
    createHomeContent(contentDiv);
    createFooter();
}

export default initPage;
