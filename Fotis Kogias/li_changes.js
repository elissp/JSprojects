document.body.children[1].addEventListener('click', function() {
// DDD  - > color green 
document.body.children[0].children[3].style.color = "green";
// AAAA -> font = 'Helvetica'
document.body.children[0].children[0].style.fontFamily = 'Arial, Helvetica, sans-serif';
document.body.children[0].children[0].textContent = "AAAA"
// CCC -> font = 'Helvetica'
document.body.children[0].children[2].style.fontFamily = 'Arial, Helvetica, sans-serif';
// FFF - Boldest
document.body.children[0].children[4].style.fontWeight = "bold"
// EEE - invisible
document.body.children[0].children[5].style.visibility = 'hidden';

})
