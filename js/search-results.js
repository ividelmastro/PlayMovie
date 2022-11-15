let buscador= document.querySelector(".busqueda")
let campo= document.querySelector(".buscador-texto")

buscador.addEventListener("submit", function(evento){
evento.preventDefault();
console.log("error")


    if(campo.value==""){
        alert("El campo de búsqueda se encuentra vacío.")
}


    else if(campo.value.length<=2){
        alert("Escriba mínimo 3 caracteres.")
    }

    else{
        this.submit()
    }
})

let queryString = location.search;
let queryStringObj= new URLSearchParams(queryString);
let id =queryStringObj.get("buscar")

//falta funcionalidad extra


//let url = `https://api.themoviedb.org/3/movie/${id}?api_key=<<api_key>>&language=en-US`

let url = `https://api.themoviedb.org/3/search/movie?query=BUSQUEDA&api_key=<<api_key>>&language=en-US&page=1&include_adult=false`

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then (function(data){
        console.log(data);
 
    let section = document.querySelector ('.peliculas_buscadas')


            
})

//
let nombre = document.querySelector('h1');
let status = document.querySelector('.status');
let especie = document.querySelector('.especie');
let imagen = document.querySelector('img');

// Agregar la información de la api y mostrarlo en el html
nombre.innerText = data.name;
status.innerText += data.status;
especie.innerText += data.species;
img.src=data.image;


})
.catch(function(e){
console.log(e);
})
