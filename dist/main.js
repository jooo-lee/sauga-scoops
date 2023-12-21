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

;// CONCATENATED MODULE: ./src/assets/menu-imgs/two-scoop.png
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

/* harmony default export */ const home = (createHomeContent);

;// CONCATENATED MODULE: ./src/assets/github-mark-pink.svg
const github_mark_pink_namespaceObject = __webpack_require__.p + "assets/8d11c51445d780baa14d.svg";
;// CONCATENATED MODULE: ./src/js/initPage.js




const faviconLink = (() => {
    const link = document.createElement("link");
    link.rel = "icon";
    link.href = two_scoop_namespaceObject;
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
    githubIcon.src = github_mark_pink_namespaceObject;
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

    home(contentDiv);
}

/* harmony default export */ const js_initPage = (initPage);

;// CONCATENATED MODULE: ./src/assets/menu-imgs/one-scoop.png
const one_scoop_namespaceObject = __webpack_require__.p + "assets/64b307ec01685fd02701.png";
;// CONCATENATED MODULE: ./src/assets/menu-imgs/soft-serve-1.png
const soft_serve_1_namespaceObject = __webpack_require__.p + "assets/2f58d1faeb3c957b60bc.png";
;// CONCATENATED MODULE: ./src/assets/menu-imgs/soft-serve-2.png
const soft_serve_2_namespaceObject = __webpack_require__.p + "assets/6e4eeea58f261364bb23.png";
;// CONCATENATED MODULE: ./src/assets/menu-imgs/popsicle.png
const popsicle_namespaceObject = __webpack_require__.p + "assets/1daa04e7f7cb94f68763.png";
;// CONCATENATED MODULE: ./src/assets/menu-imgs/carrot.png
const carrot_namespaceObject = __webpack_require__.p + "assets/03d7224cf2f840351ddb.png";
;// CONCATENATED MODULE: ./src/js/menu.js







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
    one_scoop_namespaceObject,
    "Single Scooper",
    "Sometimes one scoop is enough."
);

const twoScoopCard = createCard(
    two_scoop_namespaceObject,
    "Double Scooper",
    "When you need more than one scoop."
);

const oneFlavSoftCard = createCard(
    soft_serve_1_namespaceObject,
    "Single Flavour Soft Serve",
    "Ice cream but softer."
);

const twoFlavSoftCard = createCard(
    soft_serve_2_namespaceObject,
    "Double Flavour Soft Serve",
    "Not one, but TWO flavours!"
);

const popsicleCard = createCard(
    popsicle_namespaceObject,
    "Popsicle",
    "Share with your friend. Or don't."
);

const carrotSoftCard = createCard(
    carrot_namespaceObject,
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
    div.id = "contact-content";

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