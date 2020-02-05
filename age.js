function oldness () {
  var age= prompt("how old are you");
    var weekAge = parseFloat(age * 52);
    var ageDays = parseFloat(age * 365.25);
    var fortnighAge = parseFloat(ageDays/14); 
    var monthAge = parseFloat(age*12);

alert("You're " + age +" years old" +  ", You're "+ monthAge + " Months Old" + ", You're " + fortnighAge + " fortnights old" + ", You are  " + weekAge + " weeks old" + ", You are " + ageDays + " days old" );
}

oldness();