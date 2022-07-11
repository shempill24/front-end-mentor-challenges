// changing page

const submit = document.querySelector("#submit");
const landing = document.querySelector(".wrapper")
const final = document.querySelector(".thanks_wrapper")


submit.addEventListener("click", () => {
    if(landing.classList.contains("wrapper")){
        landing.classList.add("none");
        final.classList.remove("none");
    }
});

const rate = document.querySelectorAll(".rate");
const userRate = document.querySelector("#userrate");

rate.forEach((rate, idx) => {
    rate.addEventListener("click", ()=> {
        userRate.innerText = (`${idx + 1}`);
        rate.classList.add("active");
        rate.classList.remove("hov");
    })
});
