var assumedNumbers = {
    AGE: 90,
    MONTHS: 12,
    WEEKS: 52,
    DAYS: 365
};




function calculate(){
    var age = parseInt(document.getElementById("age").value);
    var daysLeft = (assumedNumbers.AGE * assumedNumbers.DAYS)-(age * assumedNumbers.DAYS); 
    var weekLeft = (assumedNumbers.AGE * assumedNumbers.WEEKS) - (age * assumedNumbers.WEEKS);
    var monthLeft = (assumedNumbers.AGE * assumedNumbers.MONTHS) - (age * assumedNumbers.MONTHS);
    var startResult = document.getElementById('startResult').innerHTML;
    var resultDiv = document.getElementById('resultDiv');

    if(isNaN(age)){
        alert("Your input is not a number!");
        console.log("Your input is not a number!");
    }
    else{
        if(age > assumedNumbers.AGE){
            alert("You are greater than " + assumedNumbers.AGE + " years old");
        }
        else{
                // alert(`You have ${daysLeft} days, ${weekLeft} weeks, and ${monthLeft} months left.`);
                console.log(`You have ${daysLeft} days, ${weekLeft} weeks, and ${monthLeft} months left.`);
                resultDiv.style.visibility = 'visible';

                document.getElementById('listTable').innerHTML = `<li>You have</li> <li><i class="fas fa-sun"></i> ${daysLeft} days</li> <li><i class="fas fa-calendar-week"></i> ${weekLeft} weeks</li> <li><i class="far fa-moon"></i> ${monthLeft} months</li> <li>until 90 years old</li>` 
                
                document.getElementById("submitBtn").innerHTML = 'Reset';                       

                document.getElementById('submitBtn').onclick = function(){  // reset button
                    document.getElementById('startResult').innerHTML = startResult;
                        
            }
        }
    }
}
