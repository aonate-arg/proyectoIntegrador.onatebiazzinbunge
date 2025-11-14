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

            resultados.innerHTML = "";
            
            console.log(data);

            if (productos.length === 0){
                resultados.innerHTML = "No hay resultados para el término: <strong>${searchTerm}</strong>";
                return;
            } 
            for(let i = 0; i < resultados.length; i++){
            let producto = resultados[i]
            productos.innerHTML += `
            <article>
                <a href="./product.html"> <img class="index" src="${producto.thumbnail}" width="100"> </a>
                <div>    
                    <h2>${producto.title}</h2>
                    <h3>${producto.brand}</h3>
                    <h4>${producto.category}</h4>
                    <p>${producto.description}</p>
                </div>
                <a id="vermas" href="product.html">Ver +</a>
            </article>
            `
            }
        })
        .catch(function(error){
            console.log("El error es: " + error);
        })
})