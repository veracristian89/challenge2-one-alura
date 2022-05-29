const iniciarBtn = document.querySelector("[data-iniciar]");
const agregarBtn = document.querySelector("[data-agregar]");

iniciarBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    window.location = "../iniciar.html"
});

agregarBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    window.location = "../agregar.html"
});