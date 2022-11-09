const left = document.querySelector(".left")
const right = document.querySelector(".right")
const slider = document.querySelector(".slider")
const images = document.querySelectorAll(".image")
const bottom  = document.querySelector(".bottom")



let slideNumber = 1;
const length = images.length;


//small circle 
for (let i = 0; i < length; i++) {
  const article = document.createElement("article");
  article.className = "button";
  bottom.appendChild(article);
}


const buttons = document.querySelectorAll(".button");
buttons[0].style.backgroundColor = "#000"

const resetBg = () => {
  buttons.forEach((button)=>{
    button.style.backgroundColor = "transparent";
  })
}


buttons.forEach((button,i) => {
  button.addEventListener("click", () => {
    resetBg();
    slider.style.transform = `translateX(-${i*800}px)`
    slideNumber = i + 1;
    button.style.backgroundColor = "#000"
  })
})




//Right arrow
const nextSlide = () => {
  slider.style.transform = `translateX(-${slideNumber*800}px)`
  slideNumber++;
}

const getFirstSlide = () => {
  slider.style.transform = `translateX(0px)`
    slideNumber=1;
}



//Left arrow
const prevSlide = () => {
  slider.style.transform = `translateX(-${(slideNumber-2)*800}px)`
  slideNumber--;
}

const getLastSlide = () => {
  slider.style.transform = `translateX(-${(length-1)*800}px)`
    slideNumber=length;
}


//background color change of small circle
const changeColorOfSmallCircle = () =>{
  buttons[slideNumber-1].style.backgroundColor = "#000"
}


right.addEventListener("click" , () => {
  (slideNumber < length ) ?  nextSlide() : getFirstSlide();  
  resetBg();
  changeColorOfSmallCircle();
})

left.addEventListener("click" , () => {
   (slideNumber > 1 ) ?  prevSlide() : getLastSlide();  
   resetBg();
   changeColorOfSmallCircle();
})






