window.addEventListener("load", function(){
    let url = "https://dummyjson.com/products/categories"

    this.fetch(url)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        let caja = document.querySelector("#categorias")
        
        
        for (let i = 0; i < data.length ; i++) {
            let categoria = data[i]
            
            let nombre = categoria.name
            caja.innerHTML +=`<a href="./category.html?id=${nombre}"><h3>${nombre}</h3></a>`            
        }
    })
    .catch(function(error){
        console.log("el error es: "+ error);
        
    })

    
        let categoria = location.search;
        let categoriaObj = new URLSearchParams(categoria);
        let categoriaFin = categoriaObj.get("id")
        console.log(categoriaFin);

        let catUrl = `https://dummyjson.com/products/category/${categoriaFin}`

        fetch(catUrl)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);
            let producto = data.products
            console.log(producto);

            let cajax = document.querySelector(".art")
            
            for (let i = 0; i < producto.length; i++) {
                let productoCat = producto[i]

                cajax.innerHTML +=  `
                <article>
                <a href="./product.html?id=${productoCat.id}"> <img class="index" src="${productoCat.thumbnail}" width="100"> </a>
                <div>    
                    <h2>${productoCat.title}</h2>
                    <h3>${productoCat.brand}</h3>
                    <h4>${productoCat.category}</h4>
                    <p>${productoCat.description}</p>
                </div>
                <a id="vermas" href="./product.html?id=${productoCat.id}">Ver +</a>
                </article>
                `
                
                
            }
            
        })
})