var paywall = require("./lib/paywall");
setTimeout(() => paywall(12345678), 5000);

require("component-responsive-frame/child");


var albumSections = document.querySelectorAll(".albumSection");

//1-5 break 6 - 10 break 10 - 15 break 15 - 20 playlist

function sectionStyle(){
    for (var x = 0; x < albumSections.length; x++){
        var place = x + 1;
        albumSections[x].innerHTML = "<p>section: </p>" + place + "</p>";
        console.log(x);
    }
}

sectionStyle();