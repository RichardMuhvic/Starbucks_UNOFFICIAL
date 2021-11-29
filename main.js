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
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(blockNumber).style.display = "block";
    evt.currentTarget.className += " active";
}