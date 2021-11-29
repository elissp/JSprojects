


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
    formData.courseTitle = document.getElementById('course-title').value;
    formData.startDate = document.getElementById('start-date').value;
    formData.endDate =  document.getElementById('end-date').value;
    formData.cost = document.getElementById('total-cost').value;
    formData.textarea = document.getElementById('text-area').value;
    console.log(formData);
    return formData;
}



function insertNewRecord(data) {
    var tableEl = document.getElementById('course-table').getElementsByTagName('tbody')[0];
    var newRow = tableEl.insertRow(0);
    newRow.classList.add('table-list-row');
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    let cell5 = newRow.insertCell(4);
    let cellbtn = newRow.insertCell(5);
    cell1.innerHTML = data.courseTitle;
    cell2.innerHTML = data.startDate;
    cell3.innerHTML = data.endDate;
    cell4.innerHTML = data.cost;
    cell5.innerHTML = data.textarea;
    // create the EDIT/DELETE BUTTON
    cellbtn.innerHTML = '<button onClick="editRow(this)" class="btn-table edit-btn">Edit</button> <button onClick="deleteRow(this)" class="btn-table delete-btn">Delete</button>';

}



function deleteRow(td) {
    if(confirm('Are you sure you want to delete this')) {
        let row = td.parentElement.parentElement.rowIndex;
        document.getElementById('course-table').deleteRow(row);

    }
}



function validateData() {
    let courseTitle = document.getElementById('course-title').value;
    let startDate = document.getElementById('start-date').value;
    let endDate =  document.getElementById('end-date').value;
    let cost = document.getElementById('total-cost').value;
    let textarea = document.getElementById('text-area').value;
    if(courseTitle == "" || startDate === "" || endDate === "" || cost ==="" || textarea === "") {
        alert('Fill all the information');
        return false;
    } 
    return true;
}