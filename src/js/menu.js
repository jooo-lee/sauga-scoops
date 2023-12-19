import oneScoopImg from "../menu-imgs/one-scoop.png";
import twoScoopImg from "../menu-imgs/two-scoop.png";
import oneFlavSoftImg from "../menu-imgs/soft-serve-1.png";
import twoFlavSoftImg from "../menu-imgs/soft-serve-2.png";
import popsicleImg from "../menu-imgs/popsicle.png";
import carrotSoftImg from "../menu-imgs/carrot.png";

function createImg(img) {
    const newImg = new Image();
    newImg.src = img;
    newImg.classList.add("menu-img");
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

function createCard() {
    const div = document.createElement("div");
    div.classList.add("menu-card");
    return div;
}

const oneScoopCard = (() => {
    const card = createCard();
    card.appendChild(createImg(oneScoopImg));
    card.appendChild(createTitle("Single Scooper"));
    card.appendChild(createDescription("Sometimes one scoop is enough."));
    return card;
})();

const twoScoopCard = (() => {
    const card = createCard();
    card.appendChild(createImg(twoScoopImg));
    card.appendChild(createTitle("Double Scooper"));
    card.appendChild(createDescription("When you need more than one scoop."));
    return card;
})();

const oneFlavSoftCard = (() => {
    const card = createCard();
    card.appendChild(createImg(oneFlavSoftImg));
    card.appendChild(createTitle("Single Flavour Soft Serve"));
    card.appendChild(createDescription("Ice cream but softer."));
    return card;
})();

const twoFlavSoftCard = (() => {
    const card = createCard();
    card.appendChild(createImg(twoFlavSoftImg));
    card.appendChild(createTitle("Double Flavour Soft Serve"));
    card.appendChild(createDescription("Not one, but TWO flavours!"));
    return card;
})();

const popsicleCard = (() => {
    const card = createCard();
    card.appendChild(createImg(popsicleImg));
    card.appendChild(createTitle("Popsicle"));
    card.appendChild(createDescription("Share with your friend. Or don't."));
    return card;
})();

const carrotSoftCard = (() => {
    const card = createCard();
    card.appendChild(createImg(carrotSoftImg));
    card.appendChild(createTitle("Carrot Soft Serve"));
    card.appendChild(createDescription("Limited and delicious. Trust me."));
    return card;
})();

function createMenuContent(parent) {
    const div = document.createElement("div");
    div.setAttribute("id", "menu-content");

    div.appendChild(oneScoopCard);
    div.appendChild(twoScoopCard);
    div.appendChild(oneFlavSoftCard);
    div.appendChild(twoFlavSoftCard);
    div.appendChild(popsicleCard);
    div.appendChild(carrotSoftCard);

    parent.appendChild(div);
}

export default createMenuContent;
