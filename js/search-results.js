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

let cargador = document.querySelector ('.peli')

let urlTrack = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/track?q=' + idBuscador;

fetch(urlTrack)
  .then (function(response){
    return response.json();
  })
  .then (function(datos) {
    console.log(datos)

  let section = document.querySelector ('.peliculas_buscadas')

for (let i = 0; i<datos.data.length; i++){

  section.innerHTML += ` 
  
  <article class="texto-de-busqueda">
  <h1 class= "titulo"></h1>
  <h3 class="nombre"><br> <a href="./detail-track.html?id=${datos.data[i].id}"> ${datos.data[i].title} </a> <br> <a href="./detail-artist.html?id=${datos.data[i].artist.id}"> ${datos.data[i].artist.name} </a> <br> <a href="./detail-album.html?id=${datos.data[i].album.id}"> ${datos.data[i].album.title}</a> <h3>
  <img src="${datos.data[i].album.cover_medium}" alt="" class="foto">
  <br>
</article>
  
  `
}


  })

// 
  window.onload = function() {
    cargador.style.display = 'none';
  }