
var nav = document.getElementById('top');

window.onscroll = function () {
    if (window.pageYOffset > 10) {
        nav.style.position = "fixed";
        nav.style.top = "0px";
    }
    else {
        nav.style.position = "absolute";
        nav.style.top = "0px";
    }
}
