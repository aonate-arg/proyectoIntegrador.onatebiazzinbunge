window.addEventListener("load", function() {
    let tituloBusqueda = document.querySelector(".busqueda");
    let resultados = document.querySelector(".resultados");
    let queryString = location.search;
    let queryStringObj = new URLSearchParams(queryString);
    let searchTerm = queryStringObj.get('buscador');
    tituloBusqueda.innerHTML = `Resultados de búsqueda para: <strong>${searchTerm}</strong>`;
    let url = `https://dummyjson.com/products/search?q=${searchTerm}`;
})