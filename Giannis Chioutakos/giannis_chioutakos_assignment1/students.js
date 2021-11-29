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
    }
});
        
function getFormData() {
        let formData = {};
        formData.fullName = document.getElementById('name').value;
        formData.address = document.getElementById('address').value;
        formData.email = document.getElementById('email').value;
        formData.phone =  document.getElementById('phone').value;
        formData.course = document.getElementById('courses').value;
        formData.courseLength = document.querySelector('input[name="course-length"]:checked').value;
        // formData.courseLength = document.querySelector('input[name="course-length]:checked').value;
        console.log(formData);
        return formData;
        
}

function insertNewRecord(data) {
    var tableEl = document.getElementById('student-list').getElementsByTagName('tbody')[0];
    var newRow = tableEl.insertRow(0);
    newRow.classList.add('table-list-row');
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    let cell5 = newRow.insertCell(4);
    let cell6 = newRow.insertCell(5);
    let cellbtn = newRow.insertCell(6);
    cell1.innerHTML = data.fullName;
    cell2.innerHTML = data.address;
    cell3.innerHTML = data.email;
    cell4.innerHTML = data.phone;
    cell5.innerHTML = data.course;
    cell6.innerHTML = data.courseLength;
    
    // create the EDIT/DELETE BUTTON
    cellbtn.innerHTML = '<button onClick="editRow(this)" class="btn-table edit-btn">Edit</button> <button onClick="deleteRow(this)" class="btn-table delete-btn">Delete</button>';

}
    
function deleteRow(td) {
    if(confirm('Are you sure you want to delete this?')) {
        let row = td.parentNode.parentNode.rowIndex;
        document.getElementById('teachers-list').deleteRow(row);

    }
}

function validateData() {
    let name = document.getElementById('name').value;
    let address = document.getElementById('address').value;
    let email = document.getElementById('email').value;
    let phone =  document.getElementById('phone').value;
    let course = document.getElementById('courses').value;

    if(name === "" || address == "" || email === "" || phone === "" || course ==="") {
        alert('Fill all the information');
        return false;
    } 
    return true;
}