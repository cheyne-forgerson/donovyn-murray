// var emailIcon = document.getElementById("email");
// var igIcon = document.getElementById("ig");
// var facebookIcon = document.getElementById("facebook");
// var navBtn = document.getElementById("nav-btn");

// -------VIEWPORT HEIGHT-------
// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
});

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
    setTimeout(rightArrowClass, 500);

  }
  else {
    document.getElementById("info").className = "info-off";
    document.getElementById("left-arrow").className = "right-arrow-fade";
    setTimeout(leftArrowClass, 500);
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
