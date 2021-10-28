"use strict";
const elemNames = ["Home", "Contact", "Projects", "Commission"];
let smaller = false;
function formatNav() {
    if (window.innerWidth < 950) {
        const elems = document.getElementsByClassName("linkContainer");
        const elem = elems[0];
        if (!elem)
            return;
        for (const child of Array.from(elem.children)) {
            const c = child;
            c.innerText = c.innerText[0];
        }
    }
    else {
        const elems = document.getElementsByClassName("linkContainer");
        const elem = elems[0];
        if (!elem)
            return;
        let index = 0;
        for (const child of Array.from(elem.children)) {
            const c = child;
            c.innerText = elemNames[index];
            index += 1;
        }
    }
}
window.addEventListener("resize", () => {
    if (window.innerWidth < 950) {
        if (!smaller) {
            smaller = true;
            formatNav();
        }
    }
    else {
        if (smaller) {
            smaller = false;
            formatNav();
        }
    }
});
