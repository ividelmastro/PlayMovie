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

        ///DESPUES DE HACER DETAIL GENEROS VER ESTOOOOOOO
        for (let i = 0; i < info.genres.length; i++) {
            generos +=
                `<p><a href="./detail-generes.html?id=${info.genres[i].id}&name_G_Movie=${info.genres[i].name}&tipo=movies">${info.genres[i].name}.  </a></p>`
        }
        capturo.innerHTML += generos;



})
.catch(function (error) {
    console.log(error);
})
        
        