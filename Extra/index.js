const bigimgEl = document.getElementById("big-img");



window.addEventListener("scroll",()=>{
    updateImage();
});
function updateImage (){
    bigimgEl.style.opacity = 1 - window.pageYOffset /900;
    bigimgEl.style.backgroundSize = 160 -window.pageYOffset/12 + "%"
}