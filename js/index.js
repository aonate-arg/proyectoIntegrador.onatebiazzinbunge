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

        for(let i = 0; i < 21; i++){
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
                <a id="vermas" href="./product.html?id=${producto.id}">Ver +</a>
            </article>
            `
        }
    })
    .catch(function(error){
        console.log("error: " + error)
    })

    //Segundo Fetch para la otr parte de los productos//
    let productos2 = this.document.querySelector("#products2")
    let urlRelojes = "https://dummyjson.com/products/category/"
    
    fetch(urlRelojes)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        let resRelojes = data.products
        console.log(resRelojes)

        productos2.innerHTML = ""

        for(let i = 0; i < resRelojes.length; i++){
            let producto2 = resRelojes[i]
            productos2.innerHTML += `
            <article>
                <a href="./product.html?id=${producto2.id}"> <img class="index" src="${producto2.thumbnail}" width="100"> </a>
                <div>    
                    <h2>${producto2.title}</h2>
                    <h3>${producto2.brand}</h3>
                    <h4>${producto2.category}</h4>
                    <p>${producto2.description}</p>
                </div>
                <a id="vermas" href="./product.html?id=${producto2.id}">Ver +</a>
            </article>
            `
        }
    })
    .catch(function(error){
        console.log("error: " + error)
    })

})