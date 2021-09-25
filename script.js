var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var currentDay = document.getElementById("currentDay"); 
console.log(currentDay);
console.log(button1, button2); 

//Moment Current Time
currentDay.textContent = moment().format('MMMM Do YYYY, h:mm:ss a');


// Store



// Retrieve from LS and set the value for the input fields 

document.getElementById("taskname09").value = localStorage.getItem("taskname09");
document.getElementById("taskname10").value = localStorage.getItem("taskname10");
/* document.getElementById("result").innerHTML = localStorage.getItem("taskname11");
document.getElementById("result").innerHTML = localStorage.getItem("taskname12");
document.getElementById("result").innerHTML = localStorage.getItem("taskname13");
document.getElementById("result").innerHTML = localStorage.getItem("taskname14");
document.getElementById("result").innerHTML = localStorage.getItem("taskname15");
document.getElementById("result").innerHTML = localStorage.getItem("taskname16");
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