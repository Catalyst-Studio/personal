const textArray = ["Full Stack Developer","Front-End Specialist","Java Developer","Designer","Editor","15 year old kid!"];
const typingDelay = 100;
const erasingDelay = 100;
const newTextDelay = 1000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!document.querySelector(".cursor-text").classList.contains("typing")) document.querySelector(".cursor-text").classList.add("typing");
    document.querySelector(".typed-text").textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    document.querySelector(".cursor-text").classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!document.querySelector(".cursor-text").classList.contains("typing")) document.querySelector(".cursor-text").classList.add("typing");
    document.querySelector(".typed-text").textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    document.querySelector(".cursor-text").classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});