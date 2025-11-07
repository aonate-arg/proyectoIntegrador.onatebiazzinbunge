window.addEventListener("load", function(){
    let url = "https://dummyjson.com/products"

    fecth(url)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data);
    })
    .catch(function(error){
        console.log("error: " + error)
    })
})