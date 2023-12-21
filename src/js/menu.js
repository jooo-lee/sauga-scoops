import oneScoopImg from "../assets/menu-imgs/one-scoop.png";
import twoScoopImg from "../assets/menu-imgs/two-scoop.png";
import oneFlavSoftImg from "../assets/menu-imgs/soft-serve-1.png";
import twoFlavSoftImg from "../assets/menu-imgs/soft-serve-2.png";
import popsicleImg from "../assets/menu-imgs/popsicle.png";
import carrotSoftImg from "../assets/menu-imgs/carrot.png";

function createImg(img) {
    const newImg = new Image();
    newImg.src = img;
    newImg.classList.add("menu-item-img");
    return newImg;
}

function createTitle(text) {
    const p = document.createElement("p");
    p.textContent = text;
    p.classList.add("menu-item-title");
    return p;
}

function createDescription(text) {
    const p = document.createElement("p");
    p.textContent = text;
    p.classList.add("menu-item-description");
    return p;
}

function createCard(img, title, description) {
    const div = document.createElement("div");
    div.classList.add("menu-card");

    div.appendChild(createImg(img));
    div.appendChild(createTitle(title));
    div.appendChild(createDescription(description));

    return div;
}

const oneScoopCard = createCard(
    oneScoopImg,
    "Single Scooper",
    "Sometimes one scoop is enough."
);

const twoScoopCard = createCard(
    twoScoopImg,
    "Double Scooper",
    "When you need more than one scoop."
);

const oneFlavSoftCard = createCard(
    oneFlavSoftImg,
    "Single Flavour Soft Serve",
    "Ice cream but softer."
);

const twoFlavSoftCard = createCard(
    twoFlavSoftImg,
    "Double Flavour Soft Serve",
    "Not one, but TWO flavours!"
);

const popsicleCard = createCard(
    popsicleImg,
    "Popsicle",
    "Share with your friend. Or don't."
);

const carrotSoftCard = createCard(
    carrotSoftImg,
    "Carrot Soft Serve",
    "Limited and delicious. Trust me."
);

function createMenuContent(parent) {
    const div = document.createElement("div");
    div.id = "menu-content";

    div.appendChild(oneScoopCard);
    div.appendChild(twoScoopCard);
    div.appendChild(oneFlavSoftCard);
    div.appendChild(twoFlavSoftCard);
    div.appendChild(popsicleCard);
    div.appendChild(carrotSoftCard);

    parent.appendChild(div);
}

export default createMenuContent;
