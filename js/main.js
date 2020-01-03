//function to change the background color and image and based on the season

//get the date & month
var month = new Date().getMonth();
//var month = 8;  //Testing var
var seasonalImage = document.getElementById("seasonal-image");
var wrapper = document.getElementById("wrapper");

if (month > 1 && month <5){
    console.log("spring");
    seasonalImage.src = "img/spring.jpg";
    wrapper.style.background = "rgba(124, 252, 0, 0.5)";
}

else if (month > 4 && month < 8 ){
  console.log("summer");
  seasonalImage.src = "img/summer.jpg";
  wrapper.style.background = "rgba(255, 215, 0, 0.5)";
}

else if (month > 7 && month < 11 ){
  console.log("autumn");
  seasonalImage.src = "img/autumn.jpg";
  wrapper.style.background = "rgba(210, 105, 30, 0.8)";
}

else {
  console.log("winter");
  seasonalImage.src = "img/winter.jpg";
  wrapper.style.background = "rgba(0, 191, 255, 0.5)";
}


//function to convert temperature

//gets button to convert
var convertButton = document.getElementById("convert-temp-button");
var farenheitTemp;
var kelvinTemp;
var celsiusTemp;
var farenheitResult = document.getElementById("farenheitResult");
var celsiusResult = document.getElementById("celsiusResult");
var kelvinResult = document.getElementById("kelvinResult");

function convertTemp (){
//Stores user temperature input
  var tempInput = document.getElementById("temp-input").value;
//Stores user temperature scale input
  var tempScale = document.getElementById("temp-scale").value;
//Converts temperatures
if (tempScale = "farenheit"){  
   farenheitTemp = tempInput;
   celsiusTemp = ((farenheit - 32) * (5 / 9));
   kelvinTemp = (celsius + 273.15);
   console.log(farenheitTemp + " farenheit");
   console.log(celsiusTemp + " celsius");
   console.log(kelvinTemp + " kelvin");
}
else if (tempScale = "celsius"){
   celsiusTemp = tempInput;
   farenheitTemp = ((celsiusTemp * 1.8) + 32);
   kelvinTemp = (celsiusTemp + 273.15);
   console.log(farenheitTemp + " farenheit");
   console.log(celsiusTemp + " celsius");
   console.log(kelvinTemp + " kelvin");
}

else if (tempScale = "kelvin"){
  kelvinTemp = tempInput;
  celsiusTemp = (kelvinTemp - 273.15);
  farenheitTemp = ((celsiusTemp * 1.8) + 32);
  console.log(farenheitTemp + " farenheit");
  console.log(celsiusTemp + " celsius");
  console.log(kelvinTemp + " kelvin");
}

//add in a default else alert to pick a scale of if tempScale = selected

farenheitResult.innerText = farentheitTemp + " degrees Farenheit.";
celsiusResult.innerText = celsiusTemp + " degrees Celsius."
kelvinResult.innerText = kelvinTemp + " degrees Kelvin."

}//end function
  
//calls the function to complete the conversion and display results
convertButton.addEventListener("click", convertTemp);

  





