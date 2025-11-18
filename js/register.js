window.addEventListener("load", function(){
    let formulario = document.querySelector(".register");
    let email = this.document.querySelector("#email");
    let contra = this.document.querySelector("#passs");
    let contra2 = this.document.querySelector("#pass")
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

        } else if(contra.value != contra2.value) {
            alert("Las contraseñas debe ser iguales")
            
        } else {
            this.submit()
        }
    })
})