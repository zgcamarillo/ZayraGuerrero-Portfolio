window.onscroll = () => {
    scrollRotate();
};
function scrollRotate () {
    const spinner = document.getElementById("spinner");
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    spinner.style.transform = "rotate(" + (scrollPosition/5) + "deg)";
}