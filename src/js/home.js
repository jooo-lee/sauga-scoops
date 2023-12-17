import twoScoopConeImg from "../assets/two-scoop-cone.png";

function createQuote(parent) {
    const p = document.createElement("p");
    p.textContent = "BEST ICE CREAM IN THE CITY";
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

function createHomeContent(parent) {
    createQuote(parent);
    createTwoScoopCone(parent);
    createEst(parent);
}

export default createHomeContent;
