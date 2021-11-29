const category = document.getElementById("course")

if (category.textContent == "E D I T   C O U R S E S") {
    // DOM Elements
    const form = document.getElementById("form");
    const add = document.getElementById("add");
    const existing = document.getElementById("existing");
    const courseName = form["name"];
    const streams = form["streams"];
    const type = form["typee"];
    const startingDate = form["startdate"]
    const endingDate = form["enddate"]
    const description = form["comments"]
    var editCounter = 0

    const courses = JSON.parse(localStorage.getItem("courses")) || [];

    // We edit the existing course with the new values by removing the old
    // version and appending to our course array the edited version
    const editCourse = (name, streams, typee, startdate, enddate, comments) => {
        courses.splice(editCounter, 1)
        courses.push({
            name,
            streams,
            typee,
            startdate,
            enddate,
            comments,
        });

        localStorage.setItem("courses", JSON.stringify(courses));

        return { name, streams, typee, startdate, enddate, comments };
    };


    // Loading our courses one by one from our coursesArray and displaying
    // the first course values as default
    function loadCourses() {
        courses.forEach((course) => {
            var option = document.createElement("option");
            option.text = `${course.name}`;
            existing.appendChild(option)
            courseName.value = courses[0].name
            streams.value = courses[0].streams
            type.value = courses[0].typee
            startingDate.value = courses[0].startdate
            endingDate.value = courses[0].enddate
            description.value = courses[0].comments
        });
    }
    loadCourses()


    // We find the index number of the existing course so we can use it to 
    // display its values. Also we get the value for our editCounter variable
    // so we know which index is the current course in our Array and we can remove it later
    existing.onchange = () => {
        for (let i = 0; i < existing.length; i++) {
            if (existing[i].value == existing.value) {
                courseName.value = courses[i].name
                streams.value = courses[i].streams
                type.value = courses[i].typee
                startingDate.value = courses[i].startdate
                endingDate.value = courses[i].enddate
                description.value = courses[i].comments
                editCounter = i
                break
            }
        }
    }


    form.onsubmit = e => {
        e.preventDefault();

        if (startingDate.value[6] == "1" && endingDate.value[6] != "6") {
            alert("Courses should be 6 months apart!")
        } else if (startingDate.value[6] == "7" && endingDate.value[5] + endingDate.value[6] != "01") {
            alert("Courses should be 6 months apart!")
        } else if (courses.length == 0) {
            alert("No courses have been added to edit, try adding a course first")
        } else if (courseName.value == "") {
            alert("Course name cannot be empty please write atleast 5 characters")
        }
        else {
            alert("Course has been successfully updated")
            editCourse(
                courseName.value,
                streams.value,
                type.value,
                startingDate.value,
                endingDate.value,
                description.value,
            );

            form.reset()
            // We reload the page after every valid submition so the existing
            // array of our courses can have the new objects
            location.reload()
        }
    };
}

else if (category.textContent == "E D I T   T R A I N E R"){
    // DOM Elements
    const form = document.getElementById("form");
    const existing = document.getElementById("choose")
    const trainerName = form["name"];
    const trainerLastName = form["last_name"]
    const streams = form["streams"];
    var editCounter = 0

    const trainers = JSON.parse(localStorage.getItem("trainers")) || [];

    const addTrainer = (name, last_name, streams) => {
        trainers.splice(editCounter, 1)
        trainers.push({
            name,
            last_name,
            streams,
        });

        localStorage.setItem("trainers", JSON.stringify(trainers));

        return { name, last_name, streams };
    };

    function loadCourses() {
        trainers.forEach((trainer) => {
            var option = document.createElement("option");
            option.text = `${trainer.name}`;
            existing.appendChild(option)
            trainerName.value = trainers[0].name
            trainerLastName.value = trainers[0].last_name
            streams.value = trainers[0].streams
        });
    }
    loadCourses()

    existing.onchange = () => {
        for (let i = 0; i < existing.length; i++) {
            if (existing[i].value == existing.value) {
                trainerName.value = trainers[i].name
                trainerLastName.value = trainers[i].last_name
                streams.value = trainers[i].streams
                editCounter = i
                break
            }
        }
    }


    form.onsubmit = e => {
        e.preventDefault();

        trainers.forEach(trainer => {
            if (trainerName.value == trainer.name && trainerLastName.value == trainer.last_name) {
                alert("A trainer with the same name alreadt exists, please select another trainer name")
                trainerName.value = ""
                trainerLastName.value = ""
                
            }
        });

        if (trainerName.value == "" || trainerLastName.value == "") {
            alert("Trainers name cannot be empty please write atleast 5 characters")
        }
         else {
            alert("Trainer has been successfully saved")
            addTrainer(
                trainerName.value,
                trainerLastName.value,
                streams.value,
            );

            form.reset()
            location.reload()
        }           
    };

}

else if (category.textContent == "E D I T   S T U D E N T"){
    // DOM Elements
    const form = document.getElementById("form");
    const existing = document.getElementById("choose")
    const studentName = form["name"];
    const studentLastName = form["last_name"]
    const birthDate = form["birthDate"]
    const plans = form["plans"];
    var editCounter = 0


    const students = JSON.parse(localStorage.getItem("students")) || [];

    const editStudent = (name, last_name, birthDate, plans) => {
        students.splice(editCounter,1)
        students.push({
            name,
            last_name,
            birthDate,
            plans,
        });

        localStorage.setItem("students", JSON.stringify(students));

        return { name, last_name, birthDate, plans };
    };

    function loadCourses() {
        students.forEach((student) => {
            var option = document.createElement("option");
            option.text = `${student.name}`;
            existing.appendChild(option)
            studentName.value = students[0].name
            studentLastName.value = students[0].last_name
            birthDate.value = students[0].birthDate
            plans.value = students[0].plans
        });
    }
    loadCourses()

    existing.onchange = () => {
        for (let i = 0; i < existing.length; i++) {
            if (existing[i].value == existing.value) {
                studentName.value = students[i].name
                studentLastName.value = students[i].last_name
                birthDate.value = students[i].birthDate
                plans.value = students[i].plans
                editCounter = i
                break
            }
        }
    }


    form.onsubmit = e => {
        e.preventDefault();

        students.forEach(student => {
            if (studentName.value == student.name && studentLastName.value == student.last_name) {
                alert("A student with the same name alreadt exists, please select another student name")
                studentName.value = ""
                studentLastName.value = ""
                
            }
        });

        if (studentName.value == "" || studentLastName.value == "") {
            alert("Students name cannot be empty please write atleast 5 characters")
        }
         else {
            alert("Student has been successfully saved")
            editStudent(
                studentName.value,
                studentLastName.value,
                birthDate.value,
                plans.value,
            );

            form.reset()
            location.reload()
        }           
    };

}

else if (category.textContent == "E D I T   A S S I G N M E N T"){
     // DOM Elements
     const form = document.getElementById("form");
     const existing = document.getElementById("existing")
     const assignmentName = form["name"];
     const subDate = form["subdate"]
     const oralMark = form["oralmark"];
     const totalMark = form["totalmark"]
     const description = form["comments"]
     var editCounter = 0
 
 
     const assignments = JSON.parse(localStorage.getItem("assignments")) || [];
 
     const editAssignment = (name, subdate, oralmark, totalmark, comments) => {
         assignments.splice(editCounter, 1)
         assignments.push({
             name,
             subdate,
             oralmark,
             totalmark,
             comments,
         });
 
         localStorage.setItem("assignments", JSON.stringify(assignments));
 
         return { name, subdate, oralmark, totalmark, comments };
     };

    function loadCourses() {
        assignments.forEach((assignment) => {
            var option = document.createElement("option");
            option.text = `${assignment.name}`;
            existing.appendChild(option)
            assignmentName.value = assignments[0].name
            subDate.value = assignments[0].subdate
            oralMark.value = assignments[0].oralmark
            totalMark.value = assignments[0].totalmark
            description.value = assignments[0].comments
        });
    }
    loadCourses()

    existing.onchange = () => {
        for (let i = 0; i < existing.length; i++) {
            if (existing[i].value == existing.value) {
                assignmentName.value = assignments[i].name
                subDate.value = assignments[i].subdate
                oralMark.value = assignments[i].oralmark
                totalMark.value = assignments[i].totalmark
                description.value = assignments[i].comments
                editCounter = i
                console.log(1)
                break
            }
        }
    }


    form.onsubmit = e => {
        e.preventDefault();

        assignments.forEach(assignment => {
            if (assignmentName.value == assignment.name) {
                alert("An assignment with the same name alreadt exists, please select another assignment name")
                assignmentName.value = ""  
            }
        });

        if (assignmentName.value == "") {
            alert("Assignment name cannot be empty please write atleast 5 characters")
        }
         else {
            alert("Assignment has been successfully saved")
            editAssignment(
                assignmentName.value,
                subDate.value,
                oralMark.value,
                totalMark.value,
                description.value,
            );

            form.reset()
            location.reload()
        }           
    };

}