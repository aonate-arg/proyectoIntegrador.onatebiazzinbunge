window.addEventListener("load", function(){

    let productos = document.querySelector("#products")

    let url = 'https://dummyjson.com/products'

    fetch(url)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        let resultados = data.products

        productos.innerHTML = ""
        console.log(data)

        for(let i = 0; i < resultados.length; i++){
            let producto = resultados[i]
            productos.innerHTML += `
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
            `
        }
    })
    .catch(function(error){
        console.log("error: " + error)
    })
})