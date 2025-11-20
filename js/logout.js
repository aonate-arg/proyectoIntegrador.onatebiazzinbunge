window.addEventListener("load", function () {
    let estado = this.localStorage.getItem("estadoLog");
    
    if(estado == "True"){
        let caja = document.querySelector(".logeado");
        caja.addEventListener("click", function(){
            localStorage.clear()
            caja.innerHTML = "<li><a href='./login.html'>LOGIN</a></li><li><a href='./register.html'>REGISTRARSE</a></li>";
            caja.style.listStyleType = "none"
            caja.style.paddingBottom = "1%"
    })
    this.localStorage.setItem("estadoLog", estado)
    }
})