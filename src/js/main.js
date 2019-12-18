var paywall = require("./lib/paywall");
setTimeout(() => paywall(12135919), 5000);

require("component-responsive-frame/child");
var data = require("../../data/Sheet1.sheet.json");

var stickyNav = document.querySelector(".stickyNav");
var stickyNavTop = stickyNav.offsetTop;

function stickyNavigation() {
    if (window.scrollY >= stickyNavTop) {
      stickyNav.classList.add('fixedNav');
    } else {
      stickyNav.classList.remove('fixedNav');
    }
  }

window.addEventListener('scroll', stickyNavigation);

var albumSections = document.querySelectorAll(".albumSection");


function isInView(element){
    var rect = element.getBoundingClientRect();
    var elemTop = rect.top + (element.offsetHeight / 2);
    var elemBottom = rect.bottom;
    var isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
}

var inView,
    className;
function scroll(){
    inView = [];
    for( var x = 0; x < albumSections.length; x++){
        if(isInView(albumSections[x])){
            inView.push(albumSections[x]);
        }
    }
    if(document.querySelector(".active-section") != null){
        document.querySelector(".active-section").classList.remove("active-section");
    }

    if(inView.length > 0){
        className = inView[inView.length-1].id;
        document.querySelector("." + className).classList.add("active-section");
    }
}

window.addEventListener("scroll", scroll);