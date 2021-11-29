//On Scroll
window.onscroll = function() {myFunction()};

var header = document.getElementById("header");
var banner = document.getElementById("banner");

var sticky = header.offsetTop;
var stickyBanner = banner.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } 
    else {
        header.classList.remove("sticky");
  }
}

function myFunction() {
    if (window.pageYOffset > sticky) {
        banner.classList.add("stickyBanner");
    } 
    else {
        banner.classList.remove("stickyBanner");
    }
  }
