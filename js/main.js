//CHANGE BACKGROUND COLOR AND IMAGE BASED ON SEASON

function display(){
  //get the date & month
  var month = new Date().getMonth();
  var seasonalImage = document.getElementById("seasonal-image");
  var body = document.getElementById("body");

  if (month > 1 && month <5){ //spring
    seasonalImage.src = "img/spring.jpg";
    body.style.background = "rgba(124, 252, 0, 0.4)";
  }

  else if (month > 4 && month < 8 ){ //summer
    seasonalImage.src = "img/summer.jpg";
    body.style.background = "rgba(255, 215, 0, 0.4)";
  }

  else if (month > 7 && month < 11 ){ //autumn
    seasonalImage.src = "img/autumn.jpg";
    body.style.background = "rgba(210, 105, 30, 0.4)";
  }

  else { //winter
    seasonalImage.src = "img/winter.jpg";
    body.style.background = "rgba(0, 191, 255, 0.4)";
  }
}//end display function

//CALL THE DISPLAY FUNCTION ON LOAD
window.onload = display();

//Accesses the results area of the page
var farenheitResult = document.getElementById("farenheitResult");
var celsiusResult = document.getElementById("celsiusResult");
var kelvinResult = document.getElementById("kelvinResult");

var farenheitTemp = 0;
var celsiusTemp = 0;
var kelvinTemp = 0;

//function to convert the temperature based on user input
function executeConversion (){
  var tempInput = document.getElementById("temp-input").value;
  var tempScale = document.getElementById("temp-scale").value;
  
  //Checks to ensure that input is a number 
  if ($.isNumeric(tempInput)==false){
    alert("You must enter the temperature as a number.")
  }

  //User inputs farenheit temp  
  if (tempScale == "farenheit"){
    farenheitTemp = tempInput;
    celsiusTemp = ((farenheitTemp - 32) * (5 / 9));
    kelvinTemp = (celsiusTemp + 273.15);
  }

  //User inputs celsius temp
  else if (tempScale == "celsius"){
    celsiusTemp = tempInput;
    farenheitTemp = ((celsiusTemp * 1.8) + 32);
    kelvinTemp = ((farenheitTemp + 459.67) * (5 / 9));
  }

  //User inputs kelvin temp
  else if (tempScale == "kelvin") {
    kelvinTemp = tempInput;
    celsiusTemp = (kelvinTemp - 273.15);
    farenheitTemp = ((celsiusTemp * 1.8) + 32);
  }
  
  //User neglects to choose a temp scale
  else {
    alert("Please select a temperature scale");
  }

  //Rounds all temperatures to the nearest tenth
  farenheitTemp = Math.round(10*farenheitTemp)/10;
  celsiusTemp = Math.round(10*celsiusTemp)/10;
  kelvinTemp= Math.round(10*kelvinTemp)/10;

  //Displays coversion results on the page
  farenheitResult.innerText = farenheitTemp + " degrees Farenheit.";
  celsiusResult.innerText = celsiusTemp + " degrees Celsius.";
  kelvinResult.innerText = kelvinTemp + " degrees Kelvin.";
}//Ends function

//Calls function to convert on click
document.getElementById("convert-temp-button").addEventListener("click", executeConversion);
