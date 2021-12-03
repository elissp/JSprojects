$(document).ready(function(){

        function hideAllMainForms(){
            $("#formStudentEdit").hide();
            $("#formStudentAdd").hide();
            $("#formTrainerAdd").hide();
            $("#formTrainerEdit").hide();
            $("#formCourseEdit").hide();
            $("#formCourseAdd").hide();
            $("#formAssignmentAdd").hide();
            $("#formAssignmentEdit").hide();
        };
        function hideAllMidForms(){
            $("#studentRow").hide();
            $("#trainerRow").hide();
            $("#assignmentRow").hide();
            $("#studentRowAs").hide();
        }
        function showAllMidForms(){
            $("#studentRow").show();
            $("#trainerRow").show();
            $("#assignmentRow").show();
            $("#studentRowAs").show();
        }
        hideAllMainForms();
    
    $('#course').on('change', function() {
        if ( this.value == 'java' || this.value == 'c' || this.value == 'javascript' || this.value == 'sql')
            hideAllMainForms() + showAllMidForms() + $("#formCourseEdit").show();
        else if(this.value == 'addCourse')
            hideAllMainForms() + $("#formCourseAdd").show();
        else
            hideAllMainForms() + hideAllMidForms();
    }).trigger("change");

    $('#course1').on('change', function() {
        if ( this.value == 'java' || this.value == 'c' || this.value == 'javascript' || this.value == 'sql')
            hideAllMainForms() + hideAllMidForms() + $("#studentRowAs").show();
        else if(this.value == 'addCourse')
            hideAllMainForms() + $("#formCourseAdd").show();
        else
            hideAllMainForms() + hideAllMidForms();
    }).trigger("change");

    $('#studentAsSelect').on('change', function() {
        if ( this.value == 'JohnWick' || this.value == 'AnnaWilson')
        hideAllMainForms() + $("#assignmentRow").show();
        else
            hideAllMainForms() + hideAllMidForms();
    }).trigger("change");

    $('#studentSelect').on('change', function() {
        if ( this.value == 'addStudent')
            $("#formStudentAdd").show() + $("#formStudentEdit").hide();     
        else if(this.value == 'JohnWick')
            $("#formStudentEdit").show() + $("#formStudentAdd").hide(); 
    }).trigger("change");

    $('#trainerSelect').on('change', function() {
        if ( this.value == 'addTrainer')
            $("#formTrainerAdd").show() + $("#formTrainerEdit").hide();     
        else if(this.value == 'SarahParker')
            $("#formTrainerEdit").show() + $("#formTrainerAdd").hide();
    }).trigger("change");

    $('#assignmentSelect').on('change', function() {
        if ( this.value == 'addAssignment')
            $("#formAssignmentAdd").show() + $("#formAssignmentEdit").hide();     
        else if(this.value == 'assignment1')
            $("#formAssignmentEdit").show() + $("#formAssignmentAdd").hide();
    }).trigger("change");

});