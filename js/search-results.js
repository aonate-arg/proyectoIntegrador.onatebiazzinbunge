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
                console.log(nomTitulo)

                if(busquedaFin == nomTitulo){
                    resultados.innerHTML = `
                        <article>
                            <a href="./product.html?id=${productos.id}"> <img class="index" src="${productos.thumbnail}" width="100"> </a>
                            <div>    
                                <h2>${productos.title}</h2>
                                <h3>${productos.brand}</h3>
                                <h4>${productos.category}</h4>
                                <p>${productos.description}</p>
                            </div>
                            <a id="vermas" href="./product.html?id=${productos.id}">Ver +</a>
                        </article>
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