const header = document.querySelector("header");
const table = document.querySelector(".main-table");
const extraScroll = document.querySelector(".extra-scroll");

window.addEventListener("scroll", () => {
    if (this.scrollY != 0) {
        header.classList.add("active");
        table.classList.add("active");
        extraScroll.classList.add("active");
        header.querySelector("img").addEventListener("transitionend", () => {
            header.style.display = "none";
        })
    }
})