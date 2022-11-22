let queryString2= location.search


let qsObject2 = new URLSearchParams(location.search)

let id2 = qsObject2.get("id")
console.log(id2)

let url2 = `https://api.themoviedb.org/3/tv/${id2}?api_key=400f43d154bc968e0f7c02f3b9187c48&language=en-US`



//FETCH
fetch(url2)
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
        fecha.innerHTML += data.first_air_date;

        let generos = ""
        let info = data
        let query = document.querySelector(".generos")

        if (info.genres == null || info.genres == 0) {
            generos += `<p> No hay generos </p>`
        }

        for (let i = 0; i < info.genres.length; i++) {
            generos +=
                `<p><a href="./detail-generes.html?id=${info.genres[i].id}">${info.genres[i].name}. </a></p>`
        }
        query.innerHTML += generos

        ///PLATAFORMAS 
        fetch(`https://api.themoviedb.org/3/tv/${id2}/watch/providers?api_key=400f43d154bc968e0f7c02f3b9187c48`)
            .then (function(response) {
            return response.json();
          }) 

            .then(function(data2){
              console.log (data2)
              let info2= data2.results
              let plataformas = document.querySelector(".plataformas")
              if (info2.US !== undefined){
                plataformas.innerHTML+= `${info2.US.flatrate[0].provider_name}`
              } 
              else if (info2.US !== undefined){
                plataformas.innerHTML+= `${info2.US.buy[0].provider_name}`
              }
              else{
                plataformas.innerHTML+= "Este título no se encuentra disponible en Estados Unidos."
              }   
          })  
            .catch(function(error){
              console.log ('el error fue: ' + error);
            })

})
.catch(function (error) {
    console.log(error);
})

//FAVS
let favoritos2 = [];
let recuperoStorage = localStorage.getItem('series_favoritas'); 

if (recuperoStorage != null) {
    favoritos2 = JSON.parse(recuperoStorage);
}

let favss = document.querySelector('.boton2');

if (favoritos2.includes(id2)) {
    favss.innerText = "Quitar de favoritos"
}

favss.addEventListener('click', function (evento) {
    evento.preventDefault();

    if (favoritos2.includes(id2)) {
        let indice = favoritos2.indexOf(id2);

        favoritos2.splice(indice, 1)
        favss.innerText = "Agregar a favoritos"
    }

    else { 
        favoritos2.push(id2);
        favss.innerText = "Quitar de favoritos";
    }

    let favsToString = JSON.stringify(favoritos2); 

    localStorage.setItem("series_favoritas", favsToString);

    console.log(localStorage);

})

