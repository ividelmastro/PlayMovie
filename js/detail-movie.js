//DETALLE DE PELICULAS:
//Obtengo la qs

let queryString= location.search

//Construyo objeto literal
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

        
        // Agregar la información de la api y mostrarlo en el html
        titulo.innerText = data.original_title;
        descripcion.innerText += data.results.overview;
        img.src= data.results.backdrop_path;
    
 })

    .catch(function(e){
        console.log(e);
 })