//DETAIL GENERO DE PELICULAS//


//usar location.search para obtener y almacenar la query string
let queryString = location.search;

//transformar la qs en objeto literal

let qsObject = new URLSearchParams(queryString);

//obtener valor de id de la query string//
let id = queryString.get('id');

//armar un fetch //
let url = `https://api.themoviedb.org/3/genre/movie/${id}?api_key=400f43d154bc968e0f7c02f3b9187c48&language=en-US`;

fetch(url)
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        console.log(data);

        let info = data.results

        //capturo el DOM//
        let lista = document.querySelector('.peliculas_populares')

        //variable vacia para luego insertar los articulos//
        let elementosPeliculas = ''

        for (let i = 0; i < info.length; i++) {
            if (info[i].poster_path == null) {
                elementosPeliculas +=
                                    `<h1 class= "titulocomedia">${info[i].original_title}</h1>
                                    <article class="pelicula">
                                        <h4></h4>
                                        <a href="./detail-movie.html?movie_id=${info[i].id}"> <img src="./img/imagen-no-disponible.jpeg" alt="Portada">
                                        </a>   
                                    </article>`
            } else {
                elementosPeliculas +=
                                    `<article class="peliculas">
                                        <h4>${info[i].original_title}</h4>
                                        <a href="./detail-movie.html?movie_id=${info[i].id}"> <img src="https://image.tmdb.org/t/p/w500/${info[i].poster_path}" alt="Portada">
                                        </a>
                                    </article>`
            }
        }
        //modifico el DOM//
        lista.innerHTML = elementosPeliculas;
    })

    .catch(function (error) {
        console.log("Error: " + error)
    })


//PELICULAS POPULARES dps borrar:

fetch ('https://api.themoviedb.org/3/movie/popular?api_key=400f43d154bc968e0f7c02f3b9187c48&language=en-US&page=1') 
  .then (function(response) {
  return response.json();

}) 

  .then(function(data){
    console.log (data)
    let lista = document.querySelector(".peliculas_populares")
    let elementoslista= ""

    for (let i = 0; i < data.results.length; i++) {
      elementoslista += `<article class = "pelicula">
                          <a class = "hipervinculo" href="./detail-movie.html?id=${data.results[i].id}"> 
                            <img class ="imagenPP" src= "https://image.tmdb.org/t/p/w500/${data.results[i].backdrop_path}" alt=''/>
                            <p class= "titulo"> ${data.results[i].title} </p>
                            <p class ="estreno"> Estreno: ${data.results[i].release_date}</p>
                          <a/>
                          </article>`
      }
      console.log(elementoslista);
      lista.innerHTML = elementoslista; 
     
})

.catch(function(error){
  console.log ('el error fue: ' + error);
})