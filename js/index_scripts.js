// var emailIcon = document.getElementById("email");
// var igIcon = document.getElementById("ig");
// var facebookIcon = document.getElementById("facebook");
// var navBtn = document.getElementById("nav-btn");


document.getElementById("nav-btn").onclick = function() {navOpen()};

function navOpen() {
  document.getElementById("email").className = "email-on";
  document.getElementById("ig").className = "ig-on";
  document.getElementById("facebook").className = "facebook-on";
}

document.getElementById("left-arrow").onclick = function() {infoOpenClose()};

function infoOpenClose() {
  if (document.getElementById("left-arrow").className == "left-arrow"){
    document.getElementById("info").className = "info-on";
    document.getElementById("left-arrow").className = "left-arrow-fade";
    setTimeout(rightArrowClass, 750);

  }
  else {
    document.getElementById("info").className = "info-off";
    document.getElementById("left-arrow").className = "right-arrow-fade";
    setTimeout(leftArrowClass, 750);
  }
}

function leftArrowClass() {
  document.getElementById("left-arrow").className = "left-arrow";
}

function rightArrowClass () {
  document.getElementById("left-arrow").className = "right-arrow";
}





// navBtn.onclick = function() {toggleOff()};
//   function toggleOff(){
//     emailIcon.classList.toggle("hidden");
//     igIcon.classList.toggle("hidden");
//     facebookIcon.classList.toggle("hidden");
//   }
