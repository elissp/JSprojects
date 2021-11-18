const linkToHome = document.getElementById("home");
const linkToAboutUs = document.getElementById("about-us");
const linkToContact = document.getElementById("contact");
const main = document.getElementById("main");
const myButton = document.getElementById("myButton");

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

function topFunction() {
  main.scrollTo = 0;
}

myButton.addEventListener("click", topFunction);
