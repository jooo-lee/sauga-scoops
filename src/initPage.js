import twoScoopConeImg from "./assets/two-scoop-cone.png";

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

// TODO: create footer

function initPage() {
    createHeader();
    const contentDiv = document.querySelector("#content");
    createNav(contentDiv, "Home");
    createQuote(contentDiv);
    createTwoScoopCone(contentDiv);
    createEst(contentDiv);
}

export default initPage;
