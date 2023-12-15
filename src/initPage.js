import twoScoopConeImg from "./assets/two-scoop-cone.png";
import githubIconSvg from "./assets/github-mark-pink.svg";

function createHeader() {
    const body = document.querySelector("body");
    const header = document.createElement("header");
    const h1 = document.createElement("h1");
    h1.textContent = "Sauga Scoops";
    header.appendChild(h1);
    body.insertBefore(header, body.firstChild);
}

function createNav(parent, activeTab) {
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");
    const tabs = ["Home", "Menu", "Contact"];
    for (const tab of tabs) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.setAttribute("href", "#");
        a.textContent = tab;
        if (tab == activeTab) a.setAttribute("id", "active-tab");
        li.appendChild(a);
        ul.appendChild(li);
    }
    nav.appendChild(ul);
    parent.appendChild(nav);
}

function createQuote(parent) {
    const p = document.createElement("p");
    p.textContent = "« BEST ICE CREAM IN THE CITY ! »";
    parent.appendChild(p);
}

function createTwoScoopCone(parent) {
    const twoScoopCone = new Image();
    twoScoopCone.src = twoScoopConeImg;
    twoScoopCone.setAttribute("id", "two-scoop-cone");
    twoScoopCone.setAttribute("alt", "Two scoop ice cream cone image");
    parent.appendChild(twoScoopCone);
}

function createEst(parent) {
    const p = document.createElement("p");
    p.textContent = "SCOOPIN' SINCE 2000";
    parent.appendChild(p);
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
    createHeader();
    const contentDiv = document.querySelector("#content");
    createNav(contentDiv, "Home");
    createQuote(contentDiv);
    createTwoScoopCone(contentDiv);
    createEst(contentDiv);
    createFooter();
}

export default initPage;
