const year = document.getElementById('year');
const pageLinks = document.querySelectorAll('.page-link');


// SIMPLE EVENT LISTENERS
pageLinks[0].addEventListener("click", () => {
	window.location.href = "index.html";
})

pageLinks[1].addEventListener("click", () => {
	window.location.href = "about.html";
})

pageLinks[2].addEventListener("click", () => {
	window.location.href = "contact.html";
})

// BACK TO TOP FUNCTIONALITY 
const backToTopBtn = document.querySelector('.back-to-top');
window.onscroll = function() {showBackToTop()};

function showBackToTop() {
	if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		backToTopBtn.style.bottom = "20px";
	}
	else {
		backToTopBtn.style.bottom = "-100px";
	}
}

function backToTop() {
	document.documentElement.scrollTo({
		top: 0,
		behavior: 'smooth'
	})
}

// SIMPLE SCRIPT TO GET FULL YEAR
year.innerText = new Date().getFullYear();
