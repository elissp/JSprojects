let linkToAboutUs = document.getElementById("about-us");
const openRequestedUrl = () => window.open("index_2.html", "_self");
let main = document.getElementById("main");

linkToAboutUs.addEventListener("click", openRequestedUrl);

let myButton = document.getElementById("myButton");

function topFunction() {
  main.scrollTop = 0;
  main.scrollTop = 0;
}

myButton.addEventListener("click", topFunction);
