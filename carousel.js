var btn_prev = document.getElementById("btn_prev");
var btn_next = document.getElementById("btn_next");
var slides = document.querySelectorAll(".slide");
var n_index = [...slides].indexOf(document.querySelector("[data-active]"));

console.log(n_index);

const removeAttributes = () => {
    slides.forEach(element => {
        element.removeAttribute("data-active");
    });
}

btn_prev.addEventListener("click", ()=>{
    removeAttributes();

    n_index --;
    if(n_index < 0) n_index = slides.length-1;          
    slides[n_index].setAttribute("data-active", "true");    

    console.log(n_index);
});

btn_next.addEventListener("click", ()=>{
    removeAttributes();

    n_index++;
    if(n_index > slides.length-1) n_index = 0; 
    slides[n_index].setAttribute("data-active", "true");

    console.log(n_index);
});