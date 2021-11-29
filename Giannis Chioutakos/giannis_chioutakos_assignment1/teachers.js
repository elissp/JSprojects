const burgerNav = () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
    });
}
burgerNav();


// TEACHERS FORM:


const formBtn = document.getElementById('form-button');

formBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if(validateData()) {
        var formData = getFormData();
        insertNewRecord(formData);
        console.log(formData);
    }     
});

function getFormData() {
        let formData = {};
        formData.fullName = document.getElementById('full-name').value;
        formData.email = document.getElementById('email').value;
        formData.phone =  document.getElementById('phone').value;
        formData.stream = document.getElementById('stream').value;
        
        return formData;
            
}
            
            



function insertNewRecord(data) {
    var tableEl = document.getElementById('teachers-list').getElementsByTagName('tbody')[0];
    var newRow = tableEl.insertRow(0);
    newRow.classList.add('table-list-row');
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    let cellbtn = newRow.insertCell(4);
    cell1.innerHTML = data.fullName;
    cell2.innerHTML = data.email;
    cell3.innerHTML = data.phone;
    cell4.innerHTML = data.stream;
    // create the EDIT/DELETE BUTTON
    cellbtn.innerHTML = '<button onClick="editRow(this)" class="btn-table edit-btn">Edit</button> <button onClick="deleteRow(this)" class="btn-table delete-btn">Delete</button>';

}
    

function deleteRow(td) {
    if(confirm('Are you sure you want to delete this?')) {
        let row = td.parentNode.parentNode.rowIndex;
        document.getElementById('teachers-list').deleteRow(row);

    }
}


// function onEdit(td) {
//     let selectedRow = td.parentElement.parentElement;
//     document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
//     document.getElementById("empCode").value = selectedRow.cells[1].innerHTML;
//     document.getElementById("salary").value = selectedRow.cells[2].innerHTML;
//     document.getElementById("city").value = selectedRow.cells[3].innerHTML;
//     console.log(selectedRow);
// }

function validateData() {
    let form  = document.getElementById('add_teachers');
    let name = document.getElementById('full-name').value;
    let email = document.getElementById('email').value;
    let phone =  document.getElementById('phone').value;
    let stream = document.getElementById('stream').value;
    if(form === "" || name == "" || email === "" || phone === "" || stream ==="") {
        alert('Fill all the information');
        return false;
    } else {
        return true;
    }
}