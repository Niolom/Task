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


function Reverse(){
	 let end=document.getElementById("string-6").childNodes[0].nodeValue;
	document.getElementById("string-6").innerHTML = document.getElementById("string-1").childNodes[0].nodeValue;
	document.getElementById("string-1").innerHTML = document.getElementById("string-3").childNodes[0].nodeValue;
document.getElementById("string-3").innerHTML = document.getElementById("string-2").childNodes[0].nodeValue;
document.getElementById("string-2").innerHTML = document.getElementById("string-5").childNodes[0].nodeValue;
document.getElementById("string-5").innerHTML = document.getElementById("string-4").childNodes[0].nodeValue;
document.getElementById("string-4").innerHTML = end;
}

//Объект NodeListпредставляет собой список (набор) узлов, извлеченных из документа.

function myFunction (){
    let myNodelist = document.querySelectorAll(".element")
    let i;
    for (i = 0; i < myNodelist.length; i++) {
        myNodelist[i].style.color = "green";
        if(i<3){
        	myNodelist[i].style.color = "red";
        }
    }
}
//Node.appendChild()функция appendChild() перемещает его из текущей позиции в новую позицию (нет необходимости удалять узел из родительского узла перед добавлением его к какому-либо другому узлу).
function myContainer(){
	var tasks = ['Buy lemonade', 'Make toasts', 'Repair car', 'Play games', 'Pet a cat'];
	for(var i=0;i<5;i++){
	 var newLi = document.createElement('li');
	 newLi.className="task";
	
  newLi.innerHTML = tasks[i];
  todolist.appendChild(newLi);
}}

function hrline(){
    //	var all=document.getElementByTagName('*');
    
    let referenceNode = document.querySelectorAll('p');
    for(var i=0;i<referenceNode.length;i++){
    let newNode = document.createElement('hr');
    referenceNode[i].appendChild(newNode);
    }
    }

function Remove(){
  let textnode = document.createTextNode("Canned Fish x 4");
  let x = document.getElementById("cartitems");
  x.children[1].remove();
  x.replaceChild(textnode, x.lastChild);
}

function infoAdd(){
    let ul = document.createElement('ul');
    document.body.appendChild(ul);
    while (true) {
    let newLi = prompt("Введите список пункты","");
    if (newLi === null || newLi === 0){
        break
    }
    let li = document.createElement("li");
    li.appendChild(document.createTextNode (newLi));
    ul.appendChild(li);
    }
}
