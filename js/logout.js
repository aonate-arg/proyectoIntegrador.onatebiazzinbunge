window.addEventListener("load", function () {
    let estado = this.localStorage.getItem("estadoLog");
    
    if(estado == "True"){
        let caja = document.querySelector(".logeado");
        caja.addEventListener("click", function(){
        localStorage.clear()
        let estado = "False"
    })
    this.localStorage.setItem("estadoLog", estado)
    }
})