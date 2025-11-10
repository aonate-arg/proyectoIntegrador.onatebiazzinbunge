window.addEventListener("load", function() {
    let tituloBusqueda = document.querySelector(".busqueda");
    let resultados = document.querySelector(".resultados");
    let queryString = location.search;
    let queryStringObj = new URLSearchParams(queryString);
    let searchTerm = queryStringObj.get('buscador');
    tituloBusqueda.innerHTML = `Resultados de búsqueda para: <strong>${searchTerm}</strong>`;
    let url = `https://dummyjson.com/products/search?q=${searchTerm}`;

    fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            let productos = data.products;

            if (productos.length === 0){
                resultados.innerHTML = "No hay resultados para el término: <strong>${searchTerm}</strong>";
                return;
            } 
            resultados.innerHTML = "";
            
            console.log(data);
        })
        .catch(function(error){
            console.log("El error es: " + error);
        })
})