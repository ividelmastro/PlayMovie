//DETALLE DE PELICULAS:

let queryString= location.search // aca obtenemos la query string desde la url

//Transformamos query en objeto literal
let qsObject = new URLSearchParams(location.search)

//Obtengo el id de la propiedad del objeto literal
let id = qsObject.get("id")

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
        let titulo = document.querySelector('.titulo_pelicula');
        let descripcion = document.querySelector('.pelicula_descripcion');
        let img = document.querySelector('.foto_pelicula');
        let estreno = document.querySelector('.estreno');
        let sinopsis = document.querySelector('.pelicula_descripcion');
        let trailer = document.querySelector('.trailer');

        if (data.poster_path == null) {
            imagen.src = "./img/noImage.png" //cambiar
        } else {
            imagen.src = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
        }

        
        // Agregar la información de la api y mostrarlo en el html
        titulo.innerText = data.original_title;
        descripcion.innerText = data.overview;
        estreno.innerText = data.release_date;
        sinopsis.innerText = data.overview;
        trailer.innerText = null

        let generos = ""
        let info = data
        let capturo = document.querySelector(".generos")

        if (info.genre_ids == null || info.genre.ids == 0) {
            generos += `<p> No se encontraron generos </p>`
        }

        for (let i = 0; i < info.genre_ids.length; i++) {
            generos +=
                `<p><a href="./detail-genres.html?id_G_Movie=${info.genre_ids[i].id}&name_G_Movie=${info.genre_ids[i].name}&tipo=movies">${info.genre_ids[i].name}.  </a></p>`
        }
        capturo.innerHTML += generos;


    
 })

    .catch(function(e){
        console.log(e);
 })

 