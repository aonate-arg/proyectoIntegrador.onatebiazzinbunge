window.addEventListener("load", function() {
    let tituloBusqueda = document.querySelector("#tituloBusqueda");
    let resultados = document.querySelector("#resultados");

    let url = `https://dummyjson.com/products`;
    
    fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            let productos = data.products;
            console.log(data);
            resultados.innerHTML = " ";

            //se me ocurre com posible problema que intente buscar algo y que porque este escrito en minusculas o mayusculas no lo encuentre, me gustaria en algunlugar poner .upper como en py//
            let busqueda = location.search;
            let busquedaObj = new URLSearchParams(busqueda);
            let busquedaFin = busquedaObj.get("busqueda");
            let busquedaFinFix = busquedaFin.toLowerCase()

            console.log(busquedaFinFix)
            tituloBusqueda.innerHTML = " "
            tituloBusqueda.innerHTML = `
                <h2 id="tituloBusqueda"> Busqueda: ${busquedaFin}</h2>
            `
           
            for(let i = 0; i < productos.length; i++){
                let nomTitulo = productos[i].title
                let nomTituloFix = nomTitulo.toLowerCase()
                let id = productos[i].id
                console.log(nomTitulo)

                if(busquedaFin == nomTitulo){
                    console.log(id)
                    let posicion = id - 1
                    let arrayProd = productos[posicion]
                    console.log(arrayProd)
                    resultados.innerHTML = `
                        <article>
                            <a href="./product.html?id=${arrayProd.id}"> <img class="index" src="${arrayProd.thumbnail}" width="100"> </a>
                            <div>    
                                <h2>${nomTitulo}</h2>
                                <h3>${arrayProd.brand}</h3>
                                <h4>${arrayProd.category}</h4>
                                <p>${arrayProd.description}</p>
                            </div>
                            <a id="vermas" href="./product.html?id=${arrayProd.id}">Ver +</a>
                        </article>
                    `
                }
            }

            if (busquedaFin === ""){
                tituloBusqueda.innerHTML = `
                    <h2 id="tituloBusqueda">Debes escribir algo en el buscador</h2>
                `
            }

            else if (busquedaFin.length < 3 && busquedaFin.length != ""){
                tituloBusqueda.innerHTML = `
                    <h2 id="tituloBusqueda">El término buscado debe contener al menos 3 caracteres</h2>
                `                       
            }

            else {
                tituloBusqueda.innerHTML = `
                    <h2 id="tituloBusqueda">No hay resultados para el término: ${busquedaFin}</h2>
                `               
            }  

        })
        .catch(function(error){
            console.log("El error es: " + error);
        })
})