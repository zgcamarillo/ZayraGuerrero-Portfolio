const toggleButton = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

toggleButton.addEventListener("click", () => {
    navMenu.classList.toggle("open")
})

window.onscroll = () => {
    scrollRotate();
};
function scrollRotate () {
    const spinner = document.getElementById("spinner");
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    spinner.style.transform = "rotate(" + (scrollPosition/5) + "deg)";
}