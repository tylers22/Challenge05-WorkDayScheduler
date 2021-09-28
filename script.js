var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");
var button5 = document.getElementById("button5");
var button6 = document.getElementById("button6");
var button7 = document.getElementById("button7");
var button8 = document.getElementById("button8");
var currentDay = document.getElementById("currentDay"); 
console.log(currentDay);
console.log(button1, button2); 

//Moment Current Time
currentDay.textContent = moment().format('MMMM Do YYYY, h:mm:ss a');

// Retrieve from LS and set the value for the input fields 

document.getElementById("taskname09").value = localStorage.getItem("taskname09");
document.getElementById("taskname10").value = localStorage.getItem("taskname10");
document.getElementById("taskname11").value = localStorage.getItem("taskname11");
/* document.getElementById("taskname12").value = localStorage.getItem("taskname12");
document.getElementById("taskname13").value = localStorage.getItem("taskname13");
document.getElementById("taskname14").value = localStorage.getItem("taskname14");
document.getElementById("taskname15").value = localStorage.getItem("taskname15");
document.getElementById("taskname16").value = localStorage.getItem("taskname16");
*/ 

function savetoLocalStorage(){
   console.log("clicked - saveto" );
   //time stamp 
   var inputValue = document.getElementsByClassName("taskname")[1].value; 
   var timestamp = document.getElementsByClassName("taskname")[1].id;
   //value input for that time stamp 
   console.log(timestamp); 
   localStorage.setItem(timestamp, inputValue);
}


button1.addEventListener("click", function(event){
   //alert(event.target);
   console.log("clicked" );
   //time stamp 
   var inputValue = document.getElementsByClassName("taskname")[0].value; 
   var timestamp = document.getElementsByClassName("taskname")[0].id;
   //value input for that time stamp 
   console.log(timestamp); 
   localStorage.setItem(timestamp, inputValue);
   
});

//button1.addEventListener("click", savetoLocalStorage); 
button2.addEventListener("click", savetoLocalStorage); 