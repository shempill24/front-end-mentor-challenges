const slides = document.querySelectorAll(".step_card");
const circle = document.getElementsByClassName(".circle_element")



slides.forEach((slide, indx) =>{
    slide.style.transform = `translateX(${indx * 200}%)`;
});
let curSlide = 0
let maxSlide = 3
let minSlide = 0
const conFirm =document.querySelector("#confirm")
const nextSlide = document.querySelector(".next");
const prevSlide = document.querySelector(".back");
nextSlide.addEventListener("click", function(){
    slides.forEach((slide, indx) =>{
        slide.style.transform = `translateX(${200 * (indx -curSlide)}%)`;
        
    });
    
   if (curSlide === maxSlide){
        nextSlide.style.display = "none";
        conFirm.style.display = "unset";
        curSlide++
    }    else{
     curSlide++;
    }
});

prevSlide.addEventListener("click", function(){
    if (curSlide === 1){
        prevSlide.style.display= "contents";
    } else{
    curSlide--;
}
    slides.forEach((slide, indx) =>{
        slide.style.transform = `translateX(${200 * (indx -curSlide)}%)`;
    });

});
conFirm.addEventListener("click", function(){
    slides.forEach((slide, indx) =>{
        slide.style.transform = `translateX(${200 * (indx -curSlide)}%)`;
        conFirm.style.display = "none"
    });

});

