const faqTrigger = document.querySelectorAll(".faq-trigger");
const faqText = document.querySelectorAll(".faq-text");

const showFaq = (e) => {
    const triggerParent = e.target.parentNode;
    for (let i = 0; i < faqText.length; i++){
        if (faqText[i].parentNode === triggerParent){
            faqText[i].classList.toggle("active");
            
        }
    }
}

for (let i = 0; i < faqTrigger.length; i++){
    faqTrigger[i].addEventListener("click", showFaq);
    // faqTrigger[i].addEventListener("mouseover", showFaq); KEEP? 
}