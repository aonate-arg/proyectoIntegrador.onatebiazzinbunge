
window.addEventListener("load",function(){
    let estado = "False"
    let formulario = document.querySelector(".register");
    let email = this.document.querySelector("#email");
    let contra = this.document.querySelector("#contrasena");
    let alert1 = this.document.querySelector("#alert1");
    let alert2 = this.document.querySelector("#alert2");
    
   

    formulario.addEventListener("submit", function(event){
        event.preventDefault();
        if (email.value == ""){
            alert1.innerHTML = "<strong>Este campo es obligatorio</strong>"
            alert1.style.color = "Red"

        } else if (contra.value == "") {
            alert2.innerHTML = "<strong>Este campo es obligatorio</strong>"
            alert2.style.color = "Red"

        } else if (contra.length < 6) {
            alert2.innerHTML = "<strong>La contraseña debe tener minimo 6 caracteres</strong>"
            alert2.style.color = "Red"

        } else if (contra.length > 6 && email.value != "") {
            estado = "True"
            localStorage.setItem("estadoLog", JSON.stringify(estado))
            localStorages.setItem("emailUsuario", JSON.stringify(email))
            this.submit()
        }
    })
    
})
