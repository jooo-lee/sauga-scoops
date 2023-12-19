const location = (() => {
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

    div.appendChild(location);
    div.appendChild(phoneNum);
    div.appendChild(openingHrs);

    parent.appendChild(div);
}

export default createContactContent;
