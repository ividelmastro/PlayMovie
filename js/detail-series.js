let queryString= location.search


let qsObject = new URLSearchParams(location.search)

let id = qsObject.get("id")
console.log(id)

let url = `https://api.themoviedb.org/3/tv/${id}?api_key=400f43d154bc968e0f7c02f3b9187c48&language=en-US`



//FETCH
fetch(url)
    .then(function(response){
        return response.json();
})

    .then(function(data){
        console.log(data);
        let img = document.querySelector('.foto_pelicula');
        let titulo = document.querySelector('.titulo_pelicula');
        let calificacion = document.querySelector('.rating');
        let fecha = document.querySelector('.fecha_estreno');
        let sinopsis = document.querySelector('.pelicula_descripcion');

        
        if (data.poster_path == null){
            img.src = "./img/imagen-no-disponible.jpeg"
        }
        else{
            img.src= `https://image.tmdb.org/t/p/w500/${data.poster_path}`; //chequear
        }
        
        titulo.innerHTML += data.original_name;
        sinopsis.innerHTML += data.overview;
        calificacion.innerHTML += data.vote_average;
        fecha.innerHTML += data.next_episode_to_air.air_date;

        let generos = ""
        let info = data
        let query = document.querySelector(".generos")

        if (info.genres == null || info.genres == 0) {
            generos += `<p> No hay generos </p>`
        }

        ///DESPUES DE HACER DETAIL GENEROS VER ESTOOOOOOO
        for (let i = 0; i < info.genres.length; i++) {
            generos +=
                `<p><a href="./detail-generes.html?id=${info.genres[i].id}&name_G_Movie=${info.genres[i].name}&tipo=movies">${info.genres[i].name}. </a></p>`
        }
        query.innerHTML += generos



})
.catch(function (error) {
    console.log(error);
})

//FAVS
let favoritos = [];
let recuperoStorage = localStorage.getItem('series_favoritas'); 

if (recuperoStorage != null) {
    favoritos = JSON.parse(recuperoStorage);
}

let favss = document.querySelector('.boton2');

if (favoritos.includes(id)) {
    favss.innerText = "Quitar de favoritos"
}

favss.addEventListener('click', function (evento) {
    evento.preventDefault();

    if (favoritos.includes(id)) {
        let indice = favoritos.indexOf(id);

        favoritos.splice(indice, 1)
        favss.innerText = "Agregar a favoritos"
    }

    else { 
        favoritos.push(id);
        favss.innerText = "Quitar de favoritos";
    }

    let favsToString = JSON.stringify(favoritos); 

    localStorage.setItem("series_favoritas", favsToString);

    console.log(localStorage);

})

