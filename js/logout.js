window.addEventListener("load", function () {
    let caja = document.querySelector(".logeado");
    caja.addEventListener("click", function(){
        localStorage.clear()
    })
})