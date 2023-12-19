/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/assets/two-scoop.png
const two_scoop_namespaceObject = __webpack_require__.p + "assets/606f7271e59468b1675a.png";
;// CONCATENATED MODULE: ./src/js/home.js


const quote = (() => {
    const p = document.createElement("p");
    p.textContent = "BEST ICE CREAM IN THE CITY";
    return p;
})();

const twoScoop = (() => {
    const twoScoop = new Image();
    twoScoop.src = two_scoop_namespaceObject;
    twoScoop.setAttribute("id", "two-scoop");
    twoScoop.setAttribute("alt", "Two scoop ice cream cone image");
    return twoScoop;
})();

const establishmentDate = (() => {
    const p = document.createElement("p");
    p.textContent = "SCOOPIN' SINCE 2000";
    return p;
})();

function createHomeContent(parent) {
    const div = document.createElement("div");
    div.setAttribute("id", "home-content");

    div.appendChild(quote);
    div.appendChild(twoScoop);
    div.appendChild(establishmentDate);

    parent.appendChild(div);
}

/* harmony default export */ const home = (createHomeContent);

;// CONCATENATED MODULE: ./src/assets/github-mark-pink.svg
const github_mark_pink_namespaceObject = __webpack_require__.p + "assets/8d11c51445d780baa14d.svg";
;// CONCATENATED MODULE: ./src/js/initPage.js



function createHeader() {
    const body = document.querySelector("body");
    const header = document.createElement("header");
    const h1 = document.createElement("h1");
    h1.textContent = "Sauga Scoops";
    header.appendChild(h1);
    body.insertBefore(header, body.firstChild);
}

function createNav(tabs, activeTab) {
    const body = document.querySelector("body");
    const contentDiv = document.querySelector("#content");
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");
    for (const tab of tabs) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.setAttribute("href", "#");
        a.setAttribute("data-page", tab);
        a.classList.add("tab");
        a.textContent = tab;
        if (tab == activeTab) a.classList.add("active-tab");
        li.appendChild(a);
        ul.appendChild(li);
    }
    nav.appendChild(ul);
    body.insertBefore(nav, contentDiv);
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
    githubIcon.src = github_mark_pink_namespaceObject;
    githubIcon.setAttribute("id", "github-icon");
    githubIcon.setAttribute("alt", "GitHub icon");
    githubLink.appendChild(githubIcon);
    bottomDiv.appendChild(githubLink);
    footer.appendChild(bottomDiv);
    body.appendChild(footer);
}

function initPage() {
    const tabs = ["Home", "Menu", "Contact"];
    const contentDiv = document.querySelector("#content");
    createHeader();
    createNav(tabs, "Home");
    home(contentDiv);
    createFooter();
}

/* harmony default export */ const js_initPage = (initPage);

;// CONCATENATED MODULE: ./src/menu-imgs/one-scoop.png
const one_scoop_namespaceObject = __webpack_require__.p + "assets/64b307ec01685fd02701.png";
;// CONCATENATED MODULE: ./src/menu-imgs/two-scoop.png
const menu_imgs_two_scoop_namespaceObject = __webpack_require__.p + "assets/606f7271e59468b1675a.png";
;// CONCATENATED MODULE: ./src/menu-imgs/soft-serve-1.png
const soft_serve_1_namespaceObject = __webpack_require__.p + "assets/2f58d1faeb3c957b60bc.png";
;// CONCATENATED MODULE: ./src/menu-imgs/soft-serve-2.png
const soft_serve_2_namespaceObject = __webpack_require__.p + "assets/6e4eeea58f261364bb23.png";
;// CONCATENATED MODULE: ./src/menu-imgs/popsicle.png
const popsicle_namespaceObject = __webpack_require__.p + "assets/1daa04e7f7cb94f68763.png";
;// CONCATENATED MODULE: ./src/menu-imgs/carrot.png
const carrot_namespaceObject = __webpack_require__.p + "assets/03d7224cf2f840351ddb.png";
;// CONCATENATED MODULE: ./src/js/menu.js







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
    card.appendChild(createImg(one_scoop_namespaceObject));
    card.appendChild(createTitle("Single Scooper"));
    card.appendChild(createDescription("Sometimes one scoop is enough."));
    return card;
})();

const twoScoopCard = (() => {
    const card = createCard();
    card.appendChild(createImg(menu_imgs_two_scoop_namespaceObject));
    card.appendChild(createTitle("Double Scooper"));
    card.appendChild(createDescription("When you need more than one scoop."));
    return card;
})();

const oneFlavSoftCard = (() => {
    const card = createCard();
    card.appendChild(createImg(soft_serve_1_namespaceObject));
    card.appendChild(createTitle("Single Flavour Soft Serve"));
    card.appendChild(createDescription("Ice cream but softer."));
    return card;
})();

const twoFlavSoftCard = (() => {
    const card = createCard();
    card.appendChild(createImg(soft_serve_2_namespaceObject));
    card.appendChild(createTitle("Double Flavour Soft Serve"));
    card.appendChild(createDescription("Not one, but TWO flavours!"));
    return card;
})();

const popsicleCard = (() => {
    const card = createCard();
    card.appendChild(createImg(popsicle_namespaceObject));
    card.appendChild(createTitle("Popsicle"));
    card.appendChild(createDescription("Share with your friend. Or don't."));
    return card;
})();

const carrotSoftCard = (() => {
    const card = createCard();
    card.appendChild(createImg(carrot_namespaceObject));
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

/* harmony default export */ const menu = (createMenuContent);

;// CONCATENATED MODULE: ./src/js/contact.js
const contact_location = (() => {
    const div = document.createElement("div");

    const h2 = document.createElement("h2");
    h2.textContent = "Location";
    div.appendChild(h2);

    const p = document.createElement("p");
    p.textContent = "99 Ice Cream Lane, Mississauga ON L5B 2C9";
    div.appendChild(p);

    return div;
})();

const phoneNum = (() => {
    const div = document.createElement("div");

    const h2 = document.createElement("h2");
    h2.textContent = "Call us";
    div.appendChild(h2);

    const p = document.createElement("p");
    p.textContent = "647 123 4567";
    div.appendChild(p);

    return div;
})();

const openingHrs = (() => {
    const div = document.createElement("div");

    const h2 = document.createElement("h2");
    h2.textContent = "Opening hours";
    div.appendChild(h2);

    const p = document.createElement("p");
    p.textContent = "4 p.m. to 10 p.m. everyday";
    div.appendChild(p);

    return div;
})();

function createContactContent(parent) {
    const div = document.createElement("div");
    div.setAttribute("id", "contact-content");

    div.appendChild(contact_location);
    div.appendChild(phoneNum);
    div.appendChild(openingHrs);

    parent.appendChild(div);
}

/* harmony default export */ const contact = (createContactContent);

;// CONCATENATED MODULE: ./src/js/index.js






js_initPage();

// Handle tab switching logic
(function () {
    const tabs = document.getElementsByClassName("tab");
    for (const tab of tabs) {
        tab.addEventListener("click", (e) => {
            // Do nothing if active tab clicked
            if (tab.id === "active-tab") return;

            // Update active tab
            for (const tab of tabs) {
                tab.classList.remove("active-tab");
            }
            e.target.classList.add("active-tab");

            // Wipe out current content and load new content
            const contentDiv = document.querySelector("#content");
            contentDiv.replaceChildren();
            switch (e.target.dataset.page) {
                case "Home":
                    home(contentDiv);
                    break;
                case "Menu":
                    menu(contentDiv);
                    break;
                case "Contact":
                    contact(contentDiv);
                    break;
                default:
                    break;
            }
        });
    }
})();

/******/ })()
;
//# sourceMappingURL=main.js.map