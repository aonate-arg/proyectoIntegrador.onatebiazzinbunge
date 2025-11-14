localStorage.clear();

window.addEventListener("load",function(){
    let formulario = document.querySelector(".register");
    let email = this.document.querySelector("#email");
    let contra = this.document.querySelector("#contrasena");
    

    localStorage.setItem("emailUsuario", email)

    formulario.addEventListener("submit", function(event){
        event.preventDefault();
        if (email.length == 0) {
            alert("El email esta vacio")
        }

        if (contra.length == 0) {
            alert("La contrasena esta vacia")
        } else if (contra.length < 6) {
            alert("La contrasena debe tener minimo 6 caracteres!")
        }
    })

    localStorage.setItem("emailUsuario", email)
})
