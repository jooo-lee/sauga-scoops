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

;// CONCATENATED MODULE: ./src/assets/two-scoop-cone.png
const two_scoop_cone_namespaceObject = __webpack_require__.p + "assets/606f7271e59468b1675a.png";
;// CONCATENATED MODULE: ./src/assets/github-mark-pink.svg
const github_mark_pink_namespaceObject = __webpack_require__.p + "assets/8d11c51445d780baa14d.svg";
;// CONCATENATED MODULE: ./src/initPage.js



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
    twoScoopCone.src = two_scoop_cone_namespaceObject;
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
    githubIcon.src = github_mark_pink_namespaceObject;
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

/* harmony default export */ const src_initPage = (initPage);

;// CONCATENATED MODULE: ./src/index.js



src_initPage();

/******/ })()
;
//# sourceMappingURL=main.js.map