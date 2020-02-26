//Declare variables intGradeOption, floatTotalPts, floatHwPts, floatMidPts, floatFinPts, stringFinalGrade
//Get user input to determine grade
//Calculate floatTotalPts (sum of HW and exam pts)
//Get user input on whether the course is audit pass/fail (1) or letter grade (2)
//If the grade option is audit, evaluate total score based upon 80% cutoff scorefor pass/fail
//Else determine letter grade based upon the typical A = 90%, B - 80%, etc.
//Output stringFinalGrade

var intGradeOption, floatTotalPts, floatHwPts, floatMidPts, floatFinPts;

floatHwPts = parseFloat(prompt("Please enter final HW pts (0-30):"));
floatMidPts = parseFloat(prompt("Please enter final Midterm pts (0-35):"));
floatFinPts = parseFloat(prompt("Please enter Final Exam pts (0-35):"));
floatTotalPts = parseFloat(floatHwPts + floatMidPts + floatFinalPts);

intGradeOption = parseint(prompt("Enter 1 for A-F scale or enter 2 for pass fail course"));

if (intGradeOption===1){
    if(floatTotalPts >= 90){
        alert("You got an A, great job!");
    }
    if(floatTotalPts >= 80 && floatTotalPts < 90){
        alert("You got a B, push for an A next time!");
    }
    if(floatTotalPts >= 70 && floatTotalPts < 80){
        alert("You got a C, try harder next time!");
    }
    if(floatTotalPts >= 60 && floatTotalPts < 70){
        alert("You got a D, you failed");
    }
    if(floatTotalPts < 60){
        alert("You got a F, you failed");
    }
    }
if (intGradeOption===2){
    if(floatTotalPts >= 80){
        alert("You passed!");
    }
    else{
        alert("You failed");
    }
}
