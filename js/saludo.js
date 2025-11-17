window.addEventListener("load", function() {
    let mail = localStorage.getItem("emailUsuario");
    let caja = document.querySelector(".logeado");
    let logou = document.querySelector(".chau");
    let estado = localStorage.getItem("estadoLog");

    if (estado == "true") {
        caja.innerHTML = "<a> LOGOUT </a> <h3> Bienvenido: "+ mail;
        caja.style.paddingTop = "1%";
        logou.innerHTML = " ";
    }
})