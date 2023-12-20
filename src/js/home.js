import twoScoopImg from "../assets/menu-imgs/two-scoop.png";

const quote = (() => {
    const p = document.createElement("p");
    p.textContent = "BEST ICE CREAM IN THE CITY";
    return p;
})();

const twoScoop = (() => {
    const twoScoop = new Image();
    twoScoop.src = twoScoopImg;
    twoScoop.id = "two-scoop";
    twoScoop.alt = "Two scoop ice cream cone image";
    return twoScoop;
})();

const establishmentDate = (() => {
    const p = document.createElement("p");
    p.textContent = "SCOOPIN' SINCE 2000";
    return p;
})();

function createHomeContent(parent) {
    const div = document.createElement("div");
    div.id = "home-content";

    div.appendChild(quote);
    div.appendChild(twoScoop);
    div.appendChild(establishmentDate);

    parent.appendChild(div);
}

export default createHomeContent;
