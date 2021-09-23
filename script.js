var button = document.getElementById("button");
var currentDay = document.getElementById("currentDay"); 
console.log(currentDay);


//Moment Current Time
currentDay.textContent = moment().format('MMMM Do YYYY, h:mm:ss a');


// Store
localStorage.setItem("taskname09", "");
localStorage.setItem("taskname10", "");
localStorage.setItem("taskname11", "");
localStorage.setItem("taskname12", "");
localStorage.setItem("taskname13", "");
localStorage.setItem("taskname14", "");
localStorage.setItem("taskname15", "");
localStorage.setItem("taskname16", "");

// Retrieve
document.getElementById("result").innerHTML = localStorage.getItem("taskname09");
document.getElementById("result").innerHTML = localStorage.getItem("taskname10");
document.getElementById("result").innerHTML = localStorage.getItem("taskname11");
document.getElementById("result").innerHTML = localStorage.getItem("taskname12");
document.getElementById("result").innerHTML = localStorage.getItem("taskname13");
document.getElementById("result").innerHTML = localStorage.getItem("taskname14");
document.getElementById("result").innerHTML = localStorage.getItem("taskname15");
document.getElementById("result").innerHTML = localStorage.getItem("taskname16");



console.log("asdjhsadg")
button.addEventListener("click", function(event){
   //alert(event.target);
   console.log("clicked")
});