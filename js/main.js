//function to change the background color and image and based on the season

//get the date & month
var month = new Date().getMonth();
//var month = 8;  //Testing var
var seasonalImage = document.getElementById("seasonal-image");
var wrapper = document.getElementById("wrapper");

if (month > 1 && month <5){
    //console.log("spring");
    seasonalImage.src = "img/spring.jpg";
    wrapper.style.background = "rgba(124, 252, 0, 0.5)";
}

else if (month > 4 && month < 8 ){
 // console.log("summer");
  seasonalImage.src = "img/summer.jpg";
  wrapper.style.background = "rgba(255, 215, 0, 0.5)";
}

else if (month > 7 && month < 11 ){
  //console.log("autumn");
  seasonalImage.src = "img/autumn.jpg";
  wrapper.style.background = "rgba(210, 105, 30, 0.8)";
}

else {
  //console.log("winter");
  seasonalImage.src = "img/winter.jpg";
  wrapper.style.background = "rgba(0, 191, 255, 0.5)";
}




//Converts Temperature
//Access the button to convert
var convertButton = document.getElementById("convert-temp-button");

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

   
if (tempScale == "farenheit"){
   farenheitTemp = tempInput;
   celsiusTemp = ((farenheitTemp - 32) * (5 / 9));
   kelvinTemp = (celsiusTemp + 273.15);
}

else if (tempScale == "celsius"){
   celsiusTemp = tempInput;
   farenheitTemp = ((celsiusTemp * 1.8) + 32);
   kelvinTemp = ((farenheitTemp + 459.67) * (5 / 9));
}

else if (tempScale == "kelvin") {
   kelvinTemp = tempInput;
   celsiusTemp = (kelvinTemp - 273.15);
   farenheitTemp = ((celsiusTemp * 1.8) + 32);
}
  
else {
  alert("Please select a temperature scale");
  }


 console.log("Input: " + tempInput);
 console.log("Farenheit: " + farenheitTemp);
 console.log("Celsius: " + celsiusTemp);
 console.log("Kelvin: " + kelvinTemp);


farenheitResult.innerText = farenheitTemp + " degrees Farenheit.";

celsiusResult.innerText = celsiusTemp + " degrees Celsius.";

kelvinResult.innerText = kelvinTemp + " degrees Kelvin.";
}
//Ends function

//Calls function to convert on click
convertButton.addEventListener("click", executeConversion);



