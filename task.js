function task2(){
var today = new Date();  
var day = today.getDay();  
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];  
var week="Today is : " + daylist[day] + ".<br>";  
var hour = today.getHours();  
var minute = today.getMinutes();  
var second = today.getSeconds();  
var prepand = (hour >= 12)? " PM ":" AM ";  
hour = (hour >= 12)? hour - 12: hour;  
if (hour===0 && prepand===' PM ')   
{   if (minute===0 && second===0)  
{   hour=12;  prepand=' Noon';  
}   else  
{  hour=12;  prepand=' PM';  
}   
}   
if (hour===0 && prepand===' AM ')   
{   if (minute===0 && second===0)  
{   hour=12;  prepand=' Midnight';  
}   else  
{  hour=12;  prepand=' AM';  
}   }  
document.querySelector('.task--a').innerHTML =week+"Current Time : "+hour + prepand + " : " + minute + " : " + second;
}


function task3(){
	var str=prompt("enter num");    
	let reversed = "";
  for (var i = str.length - 1; i >= 0; i--){        
    reversed += str[i];
  }    
	document.querySelector('.task-3').innerHTML =reversed;
}

function task4(){
	let n=parseInt(prompt("Enter a number:",n));
	let k=n;
	for(let i=n-1;i>1;i--){
		n*=i;
	}
	document.querySelector('.task-4').innerHTML =k+"! = "+n;
}

function LargerNum(){
	let a=parseInt(prompt("Enter num1:",a));
	let b=parseInt(prompt("Enter num1:",b));
	let answer=(a>b) ? a : 
	b;
	document.querySelector('.task-5').innerHTML =answer;
}

function ArrayToString(){
	let  myColor = ["Red", "Green", "White", "Black"];
	for(let i=0;i<myColor.length;i++){
			myColor.toString();
			var plus=myColor.join('+');
	}
	document.querySelector('.task-6').innerHTML =myColor+"<br>"+plus;
}

function GetMonth(){
    let month="";
    let month2="";
    let monthes=["January","February","March","April","May","Jun","July","August","September","October","November","Desember"];
    let month_name1=new Date("10/11/2009");
    let month_name2=new Date("11/13/2014");
    for(let i=0;i<=12;i++){
    if(i==month_name1.getMonth()){
        month+=monthes[i];
    }
    if(i==month_name2.getMonth()){
        month2+=monthes[i]
    }
}
    document.querySelector('.task-7').innerHTML =month+"<br>"+month2;
}

function Upper(aChar=prompt("Enter a string:"))
   {	
      let myCharCode = aChar.charCodeAt(0);
   
      if((myCharCode > 50) && (myCharCode <  70))
      {
         answer="Uppercase!";
      }
      else
   			answer="Not an Uppercase!";
   document.querySelector('.task-8').innerHTML =answer;
   }

// =========================================================
// Functons
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

//smiley
context.fillStyle = 'yellow';
context.beginPath();
context.arc(320, 240, 200, 0, 2 * Math.PI);
context.fill();
context.closePath();

//eyes
context.fillStyle = 'cyan';
context.beginPath();
context.arc(270, 175, 30, 0, 2 * Math.PI);
context.fill();
context.closePath();

context.beginPath();
context.arc(370, 175, 30, 0, 2 * Math.PI);
context.fill();
context.closePath();

//mouth
context.strokeStyle = 'black';
context.lineWidth = 10;
context.beginPath();
context.arc(320, 240, 150, 0, 1 * Math.PI);
context.stroke();
context.closePath();

