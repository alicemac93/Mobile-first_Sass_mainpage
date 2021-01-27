// faq
const faqTrigger = document.querySelectorAll(".faq-trigger");
const faqText = document.querySelectorAll(".faq-text");
const fawcontainer = document.querySelectorAll(".fi");


const showFaq = (e) => {
    console.log(e.target)
  
    const triggerParent = e.target.parentNode;
    for (let i = 0; i < faqText.length; i++){
        if (faqText[i].parentNode === triggerParent){
            faqText[i].classList.toggle("active");           
        }
    }
}


for (let i = 0; i < fawcontainer.length; i++){
    fawcontainer[i].addEventListener("click", showFaq);
    // faqTrigger[i].addEventListener("mouseover", showFaq); KEEP? 
}

// features slider
const slides = document.getElementsByClassName("features");
const triggers = document.getElementsByClassName("tab-tigger");

var slideIndex = 1;
showSlides(slideIndex);

function nextSlide(n) {
    showSlides(slideIndex += n);
  }
  
function currentSlide(n) {
    showSlides(slideIndex = n);
  }

function showSlides(n) {
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (let i = 0; i < triggers.length; i++) {
     triggers[i].className = triggers[i].className.replace(" activeTrigger", "");
  }
  if (window.screen.width > 700) {slides[slideIndex-1].style.display = "inline-flex";}
  else {slides[slideIndex-1].style.display = "block";}
    
    triggers[slideIndex-1].className += " activeTrigger";
}

for (let i = 0; i < triggers.length; i++){
    triggers[i].addEventListener("click", showSlides);
}
