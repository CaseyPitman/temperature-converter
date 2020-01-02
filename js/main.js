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



