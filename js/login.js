window.addEventListener("load",function(){
    let contra = this.document.querySelector("contrasena")
    let email = this.document.querySelector("email")
    let logeado = False

    if(email.length < 0) {
        this.alert("El campo de email esta vacio")
    }
    if (contra.length < 6) {
        this.alert("La contraseña debe tener minimo 6 caracteres")
    }
})