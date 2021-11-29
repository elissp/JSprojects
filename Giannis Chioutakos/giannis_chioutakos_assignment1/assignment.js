


const formBtn = document.getElementById("form-button");
formBtn.addEventListener("click", (e) => {
	e.preventDefault();
	if (validateData()) {
		var formData = getFormData();
		insertNewRecord(formData);
		console.log(formData);
	}
});    
       



function getFormData() {
    let formData = {};
    formData.assignmentTitle = document.getElementById('assignment-title').value;
    formData.subDate = document.getElementById('sub-date').value;
    formData.oralMark =  document.getElementById('oral-mark').value;
    formData.totalMark = document.getElementById('total-mark').value;
    formData.textarea = document.getElementById('text-area').value;
    console.log(formData);
    return formData;
}


// !NOW THIS
function insertNewRecord(data) {
    var tableEl = document.getElementById('assignment-list').getElementsByTagName('tbody')[0];
    var newRow = tableEl.insertRow(0);
    newRow.classList.add('table-list-row');
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    let cell5 = newRow.insertCell(4);
    let cellbtn = newRow.insertCell(5);
    cell1.innerHTML = data.assignmentTitle;
    cell2.innerHTML = data.subDate;
    cell3.innerHTML = data.oralMark;
    cell4.innerHTML = data.totalMark;
    cell5.innerHTML = data.textarea;
    // create the EDIT/DELETE BUTTON
    cellbtn.innerHTML = '<button onClick="editRow(this)" class="btn-table edit-btn">Edit</button> <button onClick="deleteRow(this)" class="btn-table delete-btn">Delete</button>';

}



function deleteRow(td) {
    if(confirm('Are you sure you want to delete this')) {
        let row = td.parentElement.parentElement.rowIndex;
        document.getElementById('assignment-list').deleteRow(row);

    }
}



function validateData() {
    let assignmentTitle = document.getElementById('assignment-title').value;
    let subDate = document.getElementById('sub-date').value;
    let oralMark =  document.getElementById('oral-mark').value;
    let totalMark = document.getElementById('total-mark').value;
    let textarea = document.getElementById('text-area').value;
    if(assignmentTitle === "" || subDate === "" || oralMark === "" || totalMark ==="" || textarea === "") {
        alert('Fill all the information');
        return false;
    } 
    return true;
}