import { ensureHtmlElement } from "./utility.js";

const layouts = [
    "components/text.html",
    "components/button.html",
    "components/layout1.html",
    "components/layout2.html",
    "components/layout3.html",
];

//ensure canvas cont is full width
//read the canvas Cont width
//read the canvas width
//ensure the canvas scale changed to fit in the canvas width
//allow canvas dimensions to be changed
//allow image to be in the topCont
//allow image to be moved
//start matching

function main() {
    let currentIndex = 0;
    const container = ensureHtmlElement(`#layoutContainer`)

    let buttonShowing = false

    async function loadLayout(index: number) {
        const res = await fetch(layouts[index]);
        const html = await res.text();

        container.innerHTML = html;
    }

    // Initial load
    loadLayout(currentIndex);

    const nextBtn = ensureHtmlElement(`#nextBtn`)
    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % layouts.length;
        loadLayout(currentIndex);
    });
    const prevBtn = ensureHtmlElement(`#prevBtn`)
    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + layouts.length) % layouts.length;
        loadLayout(currentIndex);
    });

    const bttnCont = ensureHtmlElement(`#bttnCont`)
    console.log(`$bttnCont`, bttnCont)
    const visibilityBtn = ensureHtmlElement(`#visibilityBttn`)
    visibilityBtn.addEventListener("click", () => {
        buttonShowing = !buttonShowing

        if (buttonShowing) {
            bttnCont.style.display = "flex"

        } else {
            bttnCont.style.display = "none"
        }
    });

}
main()