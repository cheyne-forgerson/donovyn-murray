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

document.getElementById("left-arrow").onclick = function() {infoOpenClose()};

function infoOpenClose() {
  if (document.getElementById("left-arrow").className == "left-arrow"){
    document.getElementById("info").className = "info-on";
    document.getElementById("info-grid").className = "info-grid";
    document.getElementById("left-arrow").className = "left-arrow-fade";
    document.getElementById("nav-btn-img").className = "nav-btn-img-off";
    setTimeout(rightArrowClass, 500);

  }
  else {
    document.getElementById("info").className = "info-off";
    document.getElementById("left-arrow").className = "right-arrow-fade";
    document.getElementById("nav-btn-img").className = "nav-btn-img";
    setTimeout(leftArrowClass, 500);
    setTimeout(infoGridOff, 1000);
  }
}

function infoGridOff() {
  document.getElementById("info-grid").className = "info-grid-off";
}

function leftArrowClass() {
  document.getElementById("left-arrow").className = "left-arrow";
}

function rightArrowClass () {
  document.getElementById("left-arrow").className = "right-arrow";
}

document.getElementById("nav-btn").onclick = function() {socialOpenClose()};

function socialOpenClose() {
  if (document.getElementById("social").className == "social-off") {
    document.getElementById("social").className = "social-on";
    document.getElementById("nav-btn-img").className = "nav-btn-img-rotate";
    document.getElementById("left-arrow").className = "left-arrow-fade";
  }
  else {
    document.getElementById("social").className = "social-off";
    document.getElementById("nav-btn-img").className = "nav-btn-img";
    document.getElementById("left-arrow").className = "left-arrow";
  }
}

// Clicked Email Button
document.getElementById("email").onclick = function() {clickedEmail()};

function clickedEmail() {
  setTimeout(emailRed, 0);
  setTimeout(emailGray, 750);
}

function emailRed() {
  document.getElementById("email-img").className = "email-img-red";
}

function emailGray() {
  document.getElementById("email-img").className = "email-img";
}

// Clicked IG Button
document.getElementById("ig").onclick = function() {clickedIG()};

function clickedIG() {
  setTimeout(igRed, 0);
  setTimeout(igGray, 750);
}

function igRed() {
  document.getElementById("ig-img").className = "ig-img-red";
}

function igGray() {
  document.getElementById("ig-img").className = "ig-img";
}

// Clicked Facebook Button
document.getElementById("facebook").onclick = function() {clickedFacebook()};

function clickedFacebook() {
  setTimeout(facebookRed, 0);
  setTimeout(facebookGray, 750);
}

function facebookRed() {
  document.getElementById("facebook-img").className = "facebook-img-red";
}

function facebookGray() {
  document.getElementById("facebook-img").className = "facebook-img";
}

// Clicked LinkedIn Button
document.getElementById("linkedin").onclick = function() {clickedLinkedin()};

function clickedLinkedin() {
  setTimeout(linkedinRed, 0);
  setTimeout(linkedinGray, 750);
}

function linkedinRed() {
  document.getElementById("linkedin-img").className = "linkedin-img-red";
}

function linkedinGray() {
  document.getElementById("linkedin-img").className = "linkedin-img";
}
