
localStorage.clear()
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
            alert1.innerHTML = "<strong>Este campo es obligatorio</strong>";
            alert1.style.color = "Red";

        } else if (contra.value == "") {
            alert("La contraseña es obligatoria");

        } else if (contra.value.length < 6) {
            alert2.innerHTML = "<strong>La contraseña debe tener minimo 6 caracteres</strong>";
            alert2.style.color = "Red";
            alert2.style.fontSize = "14px"
            contra.style.marginLeft = "20%";


        } else {
            estado = "True";
            localStorage.setItem("estadoLog", estado);
            localStorage.setItem("emailUsuario", email.value); //averiguar .value
            this.submit();
        }
    })
    
})
