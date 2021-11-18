//functions to pages.

function homePage() {
var homing= window.open("index.html", "_self");
}
function contactMe() {
    var myWindow = window.open("contact.html", "_self");
}
function aboutUs() {
    var myWindow = window.open("aboutus.html", "_self");
}
function instagramPage() {
    var myWindow = window.open("https://www.instagram.com/", "_blank");
}
function facebookPage() {
    var myWindow = window.open("https://www.facebook.com/", "_blank");
}
function twitterPage() {
    var myWindow = window.open("https://www.twitter.com/", "_blank");
}


//topPage button

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("topBtn").style.display = "block";
    } else {
        document.getElementById("topBtn").style.display = "none";
    }
  }


  
function topPage() {
    window.scrollTo({        
        left:0,
        top:0,
        behavior: "smooth"       
    });     
}

//search button function
function searchButton() {
    alert("nice try! Cant search anything...");
}
