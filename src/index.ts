const layouts = [
    "components/text.html",
    "components/button.html",
    "components/layout1.html",
    "components/layout2.html",
    "components/layout3.html",
];

function main() {
    let currentIndex = 0;
    const container = document.getElementById("layoutContainer");

    async function loadLayout(index: number) {
        if (container === null) throw new Error("not seeing container")

        const res = await fetch(layouts[index]);
        const html = await res.text();

        container.innerHTML = html;
    }

    // Initial load
    loadLayout(currentIndex);

    const nextBtn = document.getElementById("nextBtn")
    if (nextBtn === null) return
    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % layouts.length;
        loadLayout(currentIndex);
    });

    const prevBtn = document.getElementById("prevBtn")
    if (prevBtn === null) return
    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + layouts.length) % layouts.length;
        loadLayout(currentIndex);
    });
}
main()