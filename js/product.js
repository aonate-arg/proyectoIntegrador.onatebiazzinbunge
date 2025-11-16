window.addEventListener("load", function(){
    let product = document.querySelector("#seccionProduct")

    let url = 'https://dummyjson.com/products'
    fetch(url)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        let resultados = data.products
        seccionProduct.innerHTML = ""
        console.log(data)

        //Sist. para tomar el id del producto y saber cual es//
        let id = location.search;
        let idObject = new URLSearchParams(id)
        idObject.get("id")
        let idSolo = Number(idObject.get("id"))

        console.log(idSolo)

        const posicion = idSolo - 1
        let dato = resultados[posicion]
        console.log(dato)

        //Sist. de tags//
        let tags = dato.tags
        console.log(tags)
        let printTags = " "
        if(tags.length === 1){
            printTags = ` 
                <li>${dato.tags[0]}</li>
        `
        }
        else if(tags.length === 2){
            printTags = ` 
                <li>${dato.tags[0]}</li>
                <li>${dato.tags[1]}</li>
        `
        }
        else if(tags.length === 3){
            printTags = ` 
                <li>${dato.tags[0]}</li>
                <li>${dato.tags[1]}</li>
                <li>${dato.tags[2]}</li>
        `
        }

        product.innerHTML = " "

        product.innerHTML += `
            <section>
                <h2 class="modelo">${dato.title}</h2>
                <img class="producting" id="foto-product" src="${dato.thumbnail}" alt="Stratocastor vintage 60s">
                <article class="titulModelo">
                    <div class="titulModelo">
                        <h3>${dato.brand}</h3>
                        <h4>${dato.category}</h4>
                    </div>
                    <div class="titulModelo">
                        <h5>${dato.price}</h5>
                    </div>
                    <div class="mapita">
                        <h2>¡¡Veni a probarla!!</h2>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.1875900548607!2d-58.44627502319495!3d-34.54880545460198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb436efe09303%3A0xfb39818e7624ac76!2sDigital%20House!5e0!3m2!1ses!2sar!4v1758315588162!5m2!1ses!2sar" width="250" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                        <h3 class="stock">${dato.availabilityStatus}</h3>
                    <div class="comprar">
                        <a href="pasarelapagos.html">COMPRAR</a>
                    </div>
                </article>
                <p class="descripcion">${dato.description}</p>            
                <ol class="tags">
                    ${printTags}
                </ol>
            </section>
        `

    })
    .catch(function(error){
        console.log(error)
    })

    


})