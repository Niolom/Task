let today = new Date ();
let day = today.getDay();
let daylist = [ "Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
 console.log ("Today is : " + daylist[day] + ".");
 
 document.querySelector(".day").innerHTML = "Today is : " + daylist[day] + ".";
 console.log("Today is : " + daylist[day] + ".");

 let hour = today.getHours();
 let minute = today.getMinutes();
 let second = today.getSeconds();
 
 let prepand = (hour >= 12)? "PM" : "AM";
  hour = (hour >= 12) ? hour - 12 : hour;
 
 if(hour === 0 && prepand === "PM") 
 {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = "Noon";
    }
    else{
        hour = 12;
        prepand = "PM";
    }
 }
 if (hour === 0 && prepand === "AM") {
    if (minute === 0 && second === 0){
        hour = 12;
        prepand = "Midnight";
    }
    else {
       hour= 12 ;
       prepand ="AM";
    }
 }
 

 document.querySelector(".time").innerHTML ="Current Time :" + hour + prepand + ":" + minute + ":" + second
 console.log("Current Time :" + hour + prepand  + ":"  + minute + ":"  + second );

const task = [3,2,2,4,3];
const reversed = task.reverse();
console.log (reversed);
document.querySelector(".task2").innerHTML = task;


function fact (n) {
    if (n == 1)
    return 1;
    else 
    return  n * fact (n-1);
}
let recursive = fact (5);

document.write (recursive);
const myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.toString());
console.log(myColor.join());
console.log(myColor.join('+'));


let month_name = function (month){
    mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    return mlist [month.getMonth()];
}
console.log(month_name(new Date("10/11/2009")));
console.log(month_name(new Date("11/13/2014")));


function upper_case(str)
{
   regexp = /^[A-Z]/;
   if (regexp.test(str))
    {
      console.log("String's first character is uppercase");
    } 
    else
    {
      console.log("String's first character is not uppercase");
    }
}
upper_case('Dom');
upper_case('dom');

let input1 = parseInt(prompt("Enter first number:"));
let input2 = parseInt(prompt("Enter second number:"));
if (input1 == input2) {
    //console.log(input1 + " is equal to " + input2);
} else if (input1 > input2) {
    console.log(input1 + " is larger than " + input2);
} else {
    console.log(input1 + " is lesser than " + input2);
}