window.addEventListener("load", function(){

    let productos = document.querySelector("#products")

    let url = 'https://dummyjson.com/products'

    fetch(url)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        let resultados = data.products
        
        for(let i = 0; i < resultados.length; i++){
            productos.innerHTML += `
            <article>
                <h2>${i[1]}</h2>
                <h3>${i[3]}</h3>
                <h4>${i[0]}</h4>
                <p>${i[2]}</p>
            </article>
            `
        }
    })
    .catch(function(error){
        console.log("error: " + error)
    })
})