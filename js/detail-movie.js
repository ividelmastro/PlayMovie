//DETALLE DE PELICULAS:
//Obtengo la qs

let queryString= location.search

//Construyo objeto literal
let qsObject = new URLSearchParams(location.search)

//Obtengo el id de la propiedad del objeto literal
let id = qsObject.get("id")
console.log(id)

//endpoint con el id de la qs
let url = `https://api.themoviedb.org/3/movie/${id}?api_key=400f43d154bc968e0f7c02f3b9187c48&language=en-US`


//FETCH

fetch(url)
    .then(function(response){
        return response.json();
})

    .then(function(data){
        console.log(data);
        //capturar cada elemento del html que queremos completar
        let img = document.querySelector('.foto_pelicula');
        let titulo = document.querySelector('.titulo_pelicula');
        let calificacion = document.querySelector('.rating');
        let fecha = document.querySelector('.fecha_estreno');
        let duracion = document.querySelector('.duracion');
        let sinopsis = document.querySelector('.pelicula_descripcion');

        
        if (data.poster_path == null){
            img.src = "./img/imagen-no-disponible.jpeg"
        }
        else{
            img.src= `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
        }
        
        // Agregar la información de la api y mostrarlo en el html
        titulo.innerHTML += data.original_title;
        sinopsis.innerHTML += data.overview;
        calificacion.innerHTML += data.vote_average;
        fecha.innerHTML += data.release_date;
        duracion.innerHTML += data.runtime + "min";

        let generos = ""
        let info = data
        let capturo = document.querySelector(".generos")

        if (info.genres == null || info.genres == 0) {
            generos += `<p> No se encontraron generos </p>`
        }

        for (let i = 0; i < info.genres.length; i++) {
            generos +=
                `<p><a href="./detail-generes.html?id=${info.genres[i].id}&name_G_Movie=${info.genres[i].name}&opcion=movies">${info.genres[i].name}.  </a></p>`
        }
        capturo.innerHTML += generos;


        ///PLATAFORMAS HACER
        fetch("https://api.themoviedb.org/3/watch/providers/movie?api_key=400f43d154bc968e0f7c02f3b9187c48&language=en-US")
            .then (function(response) {
            return response.json();
          
          }) 
            .then(function(data2){
              console.log (data2)
              let plataformas = document.querySelector(".plataformas")
              let elementoslista= ""

              if (data2.results == null || data2.results == "") {
                elementoslista += `<p> No se encuentra disponible en ninguna plataforma. </p>`
            }
          
              for (let i = 0; i < data2.results.length; i++){
                elementoslista +=
                                `<li>${data2.results[i].provider_name}.</li>`
            }
            console.log(elementoslista);
            plataformas.innerHTML += elementoslista;
              
          })
          
          .catch(function(error){
            console.log ('el error fue: ' + error);
          })

})
.catch(function (error) {
    console.log(error);
})


// Crear array

let favoritos = [];

// Recuperar storage

let recuperoStorage = localStorage.getItem('favoritosPelis'); // te va a devolver null o los datos

if (recuperoStorage != null) {
    //1ero tenemos que transformarlo de cadena de texto con JSON.parse y despues lo guardamos en favoritos 
    favoritos = JSON.parse(recuperoStorage);
}

// Hacer click en el link. Primero deberemos capturar el elemento
let fav = document.querySelector('.boton2');

// Chequear que id este en el array de favoritos 
if (favoritos.includes(id)) {
    fav.innerText = "Quitar de favoritos"
}

fav.addEventListener('click', function (evento) {
    evento.preventDefault();

    if (favoritos.includes(id)) {
        // Si el id esta en el array
        let indice = favoritos.indexOf(id);

        //Borrar a partir del indice 1 elemento 
        favoritos.splice(indice, 1)
        fav.innerText = "Agregar a favoritos"
    }

    else { // Guardar dato en un array: agregar un dato al array 
        favoritos.push(id);
        fav.innerText = "Quitar de favoritos";
    }

    // Guardar el array en el storage (esto se hace pase lo que pase, no se mete en el else)
    let favsToString = JSON.stringify(favoritos); // Transformamos el array en una cadena de texto

    localStorage.setItem("favoritosPelis", favsToString);

    console.log(localStorage);

})


        