window.addEventListener("load", function(){
    let url = "https://dummyjson.com/products/categories"

    this.fetch(url)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data);
        let caja = document.querySelector("#categorias")
        
        
        for (let i = 0; i < data.length ; i++) {
            let categoria = data[i]
            
            let nombre = categoria.name
            caja.innerHTML +=`<a href="./category.html?id=${nombre}"><h3>${nombre}</h3></a>`            
        }

        let categoria = location.search;
        let categoriaObj = new URLSearchParams(categoria);
        let categoriaFin = categoriaObj.get("id")
        localStorage.setItem("categoria", categoriaFin)        
        

        
    })
    .catch(function(error){
        console.log("el error es: "+ error);
        
    })
    let cate = this.localStorage.getItem("categoria")
    console.log(cate)
})