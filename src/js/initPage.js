import faviconImg from "../assets/menu-imgs/two-scoop.png";
import createHomeContent from "./home.js";
import githubIconSvg from "../assets/github-mark-pink.svg";

const faviconLink = (() => {
    const link = document.createElement("link");
    link.rel = "icon";
    link.href = faviconImg;
    link.type = "image/x-icon";
    return link;
})();

const header = (() => {
    const header = document.createElement("header");
    const h1 = document.createElement("h1");
    h1.textContent = "Sauga Scoops";
    header.appendChild(h1);
    return header;
})();

const nav = (() => {
    const tabs = ["Home", "Menu", "Contact"];
    const activeTab = tabs[0];

    const nav = document.createElement("nav");
    const ul = document.createElement("ul");

    // Create anchor tag for each tab
    for (const tab of tabs) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = "#";
        a.setAttribute("data-page", tab);
        a.classList.add("tab");
        a.textContent = tab;
        if (tab == activeTab) a.classList.add("active-tab");
        li.appendChild(a);
        ul.appendChild(li);
    }

    nav.appendChild(ul);
    return nav;
})();

const footer = (() => {
    const footer = document.createElement("footer");

    // Create top half of footer
    const topDiv = document.createElement("div");
    const freepikLink = document.createElement("a");
    freepikLink.href =
        "https://www.freepik.com/author/surang/icons/surang-red_752?t=f&query=ice+cream";
    freepikLink.id = "freepik-link";
    freepikLink.textContent = "Ice Cream Icons from Freepik";
    freepikLink.target = "_blank";
    topDiv.appendChild(freepikLink);
    footer.appendChild(topDiv);

    // Create bottom half of footer
    const bottomDiv = document.createElement("div");
    const p = document.createElement("p");
    p.textContent = "© Joseph Lee 2023";
    bottomDiv.appendChild(p);
    const githubLink = document.createElement("a");
    githubLink.id = "github-link";
    githubLink.href = "https://github.com/jooo-lee";
    githubLink.target = "_blank";
    const githubIcon = new Image();
    githubIcon.src = githubIconSvg;
    githubIcon.id = "github-icon";
    githubIcon.alt = "GitHub icon";
    githubLink.appendChild(githubIcon);
    bottomDiv.appendChild(githubLink);

    footer.appendChild(bottomDiv);
    return footer;
})();

function initPage() {
    document.head.appendChild(faviconLink);

    const body = document.querySelector("body");
    const contentDiv = document.querySelector("#content");

    body.insertBefore(header, body.firstChild);
    body.insertBefore(nav, contentDiv);
    body.appendChild(footer);

    createHomeContent(contentDiv);
}

export default initPage;
