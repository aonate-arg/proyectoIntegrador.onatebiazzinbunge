window.addEventListener("load", function() {
    let tituloBusqueda = document.querySelector(".busqueda");
    let resultados = document.querySelector(".resultados");
    let url = `https://dummyjson.com/products`;
    
    fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            let campoBuscar = document.querySelector(".busqueda");
            if (campoBuscar.value == ""){

            }

            let busqueda = location.search;
            let busquedaObj = new URLSearchParams(busqueda);
            let busquedaFinal = busquedaObj.get('busqueda');
            console.log(busquedaFinal)

            resultados.innerHTML = "";
            
            console.log(data);

            if (productos.length === 0){
                resultados.innerHTML = "No hay resultados para el término: <strong></strong>";
                return;
            } 
            for(let i = 0; i < resultados.length; i++){
            let producto = resultados[i]
            productos.innerHTML += `
                    <h2 class="busqueda">Resultados de la busqueda:${searchTerm}</h2>
            `
            }
        })
        .catch(function(error){
            console.log("El error es: " + error);
        })
})