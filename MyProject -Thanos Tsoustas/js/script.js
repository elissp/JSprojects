let linkToHome = document.getElementById("home");
let linkToAboutUs = document.getElementById("about-us");
let linkToContact = document.getElementById("contact");
const openRequestedUrlHome = () => {
  window.open("index.html", "_self");
};
const openRequestedUrlAboutUs = () => {
  window.open("index_2.html", "_self");
};
const openRequestedUrlContact = () => {
  window.open("index_3.html", "_self");
};

linkToHome.addEventListener("click", openRequestedUrlHome);
linkToAboutUs.addEventListener("click", openRequestedUrlAboutUs);
linkToContact.addEventListener("click", openRequestedUrlContact);

let main = document.getElementById("main");

let myButton = document.getElementById("myButton");

function topFunction() {
  main.scrollTop = 0;
  main.scrollTop = 0;
}

myButton.addEventListener("click", topFunction);
