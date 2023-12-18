import "../styles.css";
import initPage from "./initPage.js";
import createHomeContent from "./home.js";
import createMenuContent from "./menu.js";
import createContactContent from "./contact.js";

initPage();

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
                    createHomeContent(contentDiv);
                    break;
                case "Menu":
                    createMenuContent(contentDiv);
                    break;
                case "Contact":
                    createContactContent(contentDiv);
                    break;
                default:
                    break;
            }
        });
    }
})();
