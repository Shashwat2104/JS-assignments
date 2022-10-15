const containerEl = document.querySelector(".container");
const popupcontainerEl = document.querySelector(".popup-container");
const inputEl = document.querySelector(".input");
const closeiconEl = document.querySelector(".close-icon");
const btnEl = document.querySelector(".btn");


btnEl.addEventListener("click",()=>{
    containerEl.classList.add("active");popupcontainerEl.classList.remove("active")


});
closeiconEl.addEventListener("click",()=>{
    containerEl.classList.add("active");popupcontainerEl.classList.remove("active")

});
popupcontainerEl.addEventListener("click",()=>{
    containerEl.classList.add("active");popupcontainerEl.classList.remove("active")
    
});