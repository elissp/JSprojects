// const lista = document.getElementById("list").
// style.color="blue";

// let body = document.childNodes[1].childNodes[2].
// childNodes[1].childNodes[3].style.color="red";
// let x = "w"
// let fff = document.childNodes[1].childNodes[2]
// .childNodes[1].childNodes[8].appendChild(<li>"FFF"</li>);
// console.log(fff)

//access child node
const child = document.body.children[0].children[1];
console.log(child)
//change color
const firstElem = document.body.children[0].children[1].style.color = 'red';
// create New Li
const newListItem = document.createElement('li');
//assign the text value to LI
newListItem.textContent = 'FFF' ;
//Add in list
document.body.children[0].insertBefore(newListItem , document.body.children[0].children[4])

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

document.body.children[2].addEventListener('click', function() {
    for (var i = 0, len = a.length; i < len; i++ ){
        document.body.children[0].children[i].style.fontWeight = 'revert';
        document.body.children[0].children[i].style.color = 'revert';
        document.body.children[0].children[i].style.visibility = 'revert';
        document.body.children[0].children[i].style.fontFamily = 'revert';}
})









