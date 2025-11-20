window.addEventListener("load", function() {
    let tituloBusqueda = document.querySelector("#titulo-busqueda");
    let resultados = document.querySelector(".resultados");

    let url = `https://dummyjson.com/products`;
    
    fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            let productos = data.products;
            console.log(data);
            resultados.innerHTML = "";

            let queryString = location.search;
            let queryStringObj = new URLSearchParams(queryString);
            let searchTerm = queryStringObj.get("busqueda");
            tituloBusqueda.innerHTML = ' '
            tituloBusqueda.innerHTML = 'Resultados de búsqueda para: <strong>${searchTerm}</strong>';

            if (productos.length === 0){
                resultados.innerHTML = `
                    No hay resultados para el término: 
                    <strong>${searchTerm}</strong>
                `;
            }
        })
        .catch(function(error){
            console.log("El error es: " + error);
        })
})