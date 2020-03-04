const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");
const links = document.querySelectorAll(".nav-links li");
let vh = window.innerHeight * 0.01;
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  navLinks.style.setProperty('--vh1',`${vh}px`);
  hamburger.classList.toggle("crossed");
  line1.classList.toggle("open");
  line2.classList.toggle("open");
  line3.classList.toggle("open");

});






const myUrl = new URL(window.location.href);
const statustemp = myUrl.searchParams.get("mail");
const status = statustemp.toString();
if(status.localeCompare("invalid") == 0){
  document.getElementById("errorMessage").innerHTML = "Invalid E-mail!"
  setTimeout(function(){
    var newURL = location.href.split("?")[0];
    window.history.pushState('object', document.title, newURL);
  },2000);
}
if(status.localeCompare("sent") == 0){
  document.getElementById("errorMessage").innerHTML = "E-mail sent!"
  setTimeout(function(){
    var newURL = location.href.split("?")[0];
    window.history.pushState('object', document.title, newURL);
  },2000);
}