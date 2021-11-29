//On Scroll Header and Banner
window.onscroll = function() {myFunction()};

var header = document.getElementById("header");
var banner = document.getElementById("banner");


var sticky = header.offsetTop;
var stickyBanner = banner.offsetTop;


function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        banner.classList.add("stickyBanner");
    } 
    else {
        header.classList.remove("sticky");
        banner.classList.remove("stickyBanner");
  }
}