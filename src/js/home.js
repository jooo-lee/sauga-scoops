import twoScoopImg from "../assets/two-scoop.png";

function createQuote(parent) {
    const p = document.createElement("p");
    p.textContent = "BEST ICE CREAM IN THE CITY";
    parent.appendChild(p);
}

function createTwoScoop(parent) {
    const twoScoop = new Image();
    twoScoop.src = twoScoopImg;
    twoScoop.setAttribute("id", "two-scoop");
    twoScoop.setAttribute("alt", "Two scoop ice cream cone image");
    parent.appendChild(twoScoop);
}

function createEst(parent) {
    const p = document.createElement("p");
    p.textContent = "SCOOPIN' SINCE 2000";
    parent.appendChild(p);
}

function createHomeContent(parent) {
    createQuote(parent);
    createTwoScoop(parent);
    createEst(parent);
}

export default createHomeContent;
