window.addEventListener("load", function(){
    let product = document.querySelector("#seccionProduct")
    let reviewsGeneral = document.querySelector("#pruebajs")
        let id = location.search
        let idObject = new URLSearchParams(id)
        idObject.get("id")
        let idSolo = Number(idObject.get("id"))
        console.log(idSolo)

    let url = `https://dummyjson.com/products/${idSolo}`

    fetch(url)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        let resultados = data
        seccionProduct.innerHTML = " "

        product.innerHTML = " "

        //Sist. de tags//
        let tag = resultados.tags
        console.log(tag)
        let printTag = " "

        for (let j = 0; j < tag.length; j++){
                printTag += ` 
                <li>${tag[j]}</li>
            `
        }

        product.innerHTML += `
            <section>
                <h2 class="modelo">${resultados.title}</h2>
                <img class="producting" id="foto-product" src="${resultados.thumbnail}" alt="Stratocastor vintage 60s">
                <article class="titulModelo">
                    <div class="titulModelo">
                        <h3>${resultados.brand}</h3>
                        <h4>${resultados.category}</h4>
                    </div>
                    <div class="titulModelo">
                        <h5>$${resultados.price}</h5>
                    </div>
                    <div class="mapita">
                        <h2>¡¡Veni a probarla!!</h2>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.1875900548607!2d-58.44627502319495!3d-34.54880545460198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb436efe09303%3A0xfb39818e7624ac76!2sDigital%20House!5e0!3m2!1ses!2sar!4v1758315588162!5m2!1ses!2sar" width="250" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                        <h3 class="stock">${resultados.availabilityStatus}</h3>
                    <div class="comprar">
                        <a href="pasarelapagos.html">COMPRAR</a>
                    </div>
                </article>
                <p class="descripcion">${resultados.description}</p>            
                <ol class="tags">
                    ${printTag}
                </ol>
            </section>
        `

        let reviews = resultados.reviews
        for(let i = 0; i < reviews.length; i++){
            let review = reviews[i]

            //StratoRating para las Reviews (revisar porque no aparecen las imagenes)//
            let stratoraiting = " "
            for (let j = 0; j < review.rating; j++) {
            stratoraiting += `<img src="./img/stratoratingmarcado.png" style="width:30px; height:30px; display:inline-block;">`
            }
            
            reviewsGeneral.innerHTML += `
            <article style="margin-left:15px;">
                <div id="cajasResenas">
                    <h3>${review.reviewerName}</h3>
                    <div>${stratoraiting}</div>
                    <h2>${review.comment}</h2>
                    <p>${review.reviewerEmail}</p>
                    <h5>${review.date}</h5>
                </div>
            </article>
            `
        }
    })
    .catch(function(error){
        console.log(error)
    })
})