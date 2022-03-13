const roverImgage = document.querySelector(".header img");
const mainHeading = document.querySelector(".header h1");
const mainTable = document.querySelector(".table-main-header");

window.addEventListener("scroll", () => {
    if (this.scrollY != 0) {
        roverImgage.classList.add("active");
        mainHeading.classList.add("active");
        mainTable.classList.add("active");
        roverImgage.addEventListener("transitionend", () => {
            document.querySelector(".header").classList.add("active");
            setTimeout(() => {
                document.querySelector(".header").style.display = "none";
                document.querySelector(".extra-scroll").style.display = "none";
            }, 450);
        })
    }
    // } else {
    //     document.querySelector(".header").style.height = "23vh";
    //     roverImgage.classList.remove("active");
    //     mainHeading.classList.remove("active");
    //     mainTable.classList.remove("active");
    // }
})