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

export default createNav;
