//DETALLE DE PELICULAS:
//Obtengo la qs

let queryString= location.search

//Construyo objeto literal
let qsObject = new URLSearchParams(location.search)

//Obtengo el id de la propiedad del objeto literal
let id = qsObject.get("id")

//endpoint con el id de la qs
let url = `https://api.themoviedb.org/3/search/movie?query=${id}&api_key=400f43d154bc968e0f7c02f3b9187c48&language=en-US&page=1&include_adult=false`


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
        titulo.innerText = data.results.original_title;
        descripcion.innerText += data.results.overview;
        img.src= data.results.backdrop_path;
    
 })

    .catch(function(e){
        console.log(e);
 })