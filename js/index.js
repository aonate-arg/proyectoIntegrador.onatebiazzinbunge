window.addEventListener("load", function(){
    let api = "https://dummyjson.com/products/categories"

    fecth(api)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
    })
    .catch(function(error){
        console.log("usdha")
    })
})