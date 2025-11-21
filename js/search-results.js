window.addEventListener("load", function() {
    let tituloBusqueda = document.querySelector("#tituloBusqueda");
    let resultados = document.querySelector(".resultados");

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
                console.log(nomTitulo)

                if(busquedaFinFix == nomTituloFix){
                    resultados.innerHTML = " "
                    resultados.innerHTML = `
                    <div class="resultados">
                        <article>
                            <a href="./product.html?id=${producto.id}"> <img class="index" src="${producto.thumbnail}" width="100"> </a>
                            <div>    
                                <h2>${producto.title}</h2>
                                <h3>${producto.brand}</h3>
                                <h4>${producto.category}</h4>
                                <p>${producto.description}</p>
                            </div>
                            <a id="vermas" href="product.html">Ver +</a>
                        </article>
                    </div>
                    `
                }
            }
            
            //Solo si no se escribe ningun caracter lo muestra//
            if (busquedaFin === ""){
                tituloBusqueda.innerHTML = `
                    <h2 id="tituloBusqueda">Debes escribir algo en el buscador</h2>
                `
            }

        })
        .catch(function(error){
            console.log("El error es: " + error);
        })
})