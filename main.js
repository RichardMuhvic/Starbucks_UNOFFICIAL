//On Scroll Header and Banner :
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


//Toggleable Tab Block Star :
function openNumber(evt, blockNumber) {
    var i, tabcontent, tablinks;
  
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    document.getElementById(blockNumber).style.display = "block";
    evt.currentTarget.className += " active";
}