var $ = function (id) 
{
    return document.getElementById(id);
};

var calculate_click = function () 
{
    var floatHwPts;
    var floatMid_pts;
    var floatFin_pts;
    var floatFinal_grade;
    var grade_option;
    var String_msg;
    
    floatHwPts = parseFloat($("hw_pts").value);
    floatMid_pts = parseFloat($("mid_pts").value);
    floatFin_pts = parseFloat($("fin_pts").value);
    floatFinal_grade = parseFloat(floatHwPts + floatMid_pts + floatFin_pts);
    grade_option = parseInt($("grade_option").value);
    
    if (grade_option === 2){
    if(floatFinal_grade >= 90){
        String_msg=(" A ");
}
    /*else{
        (floatTotalPts >= 80 && floatTotalPts<=71);
        alert("You got a B Good Work.");
    }*/
    if (floatFinal_grade >= 80 ){
        String_msg=(" B ");
}
    if (floatFinal_grade <= 70 ){
        String_msg=(" C ");
    }
    if (floatFinal_grade <= 60 ){
        String_msg=(" D ");
    }
    if (floatFinal_grade <= 50){
        String_msg=(" F ");
    }
    //if (floatFinal_grade <=49){
      //  String_msg=(" F ");
    //}
}
if (grade_option === 1) {
    if (floatFinal_grade >= 80){
        String_msg=("Pass");
    }
    else{ 
        String_msg=("Fail");
    }
}
$("final_grade").value = String_msg;
};

window.onload = function () 
{
    $("final_grade").value = ""; //blanks the final grade text box upon page load
    $("calculate").onclick = calculate_click; //activates main method when the button is clicked 
    $("hw_pts").focus(); //puts the cursor on the first DOM text input box
};