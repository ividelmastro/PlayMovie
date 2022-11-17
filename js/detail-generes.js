//DETAIL GENERO DE PELICULAS//


//usar location.search para obtener y almacenar la query string
let queryString = location.search;

//transformar la qs en objeto literal

let qsObject = new URLSearchParams(queryString);

//obtener valor de id de la query string//
let id = queryString.get('id');

//armar un fetch //
//let url = `https://api.themoviedb.org/3/genre/movie/${id}?api_key=400f43d154bc968e0f7c02f3b9187c48&language=en-US`;

let url = `https://api.themoviedb.org/3/genre/movie/${id}?api_key=400f43d154bc968e0f7c02f3b9187c48&language=en-US`

fetch(url)
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        console.log(data);

        let info = data.results

        //capturo el DOM//
        let lista = document.querySelector('.peliculas_populares') //es la section

        //variable vacia para luego insertar los articulos//
        let elementosPeliculas = ''

        for (let i = 0; i < info.length; i++) {
          if (info[i].poster_path == null) {
              elementosPeliculas +=
                                    `<article class="pelicula">
                                    <a class = "hipervinculo" href="./detail-movie.html?id=${info[i].id}">
                                    <img class = "imagenPP" src="./img/imagen-no-disponible.jpeg" alt="Portada">
                                    <p class= "titulo"> ${info[i].original_title} </p>
                                    <p class ="estreno"> Estreno: ${info[i].release_date}</p>
                                    </a>
                                    </article>`
          } else {
              elementosPeliculas +=
                                  `<article class="pelicula">
                                  <a class = "hipervinculo" href="./detail-movie.html?id=${info[i].id}">
                                  <img class = "imagenPP" src="https://image.tmdb.org/t/p/w500/${info[i].poster_path}" alt="Portada">
                                  <p class= "titulo"> ${info[i].original_title} </p>
                                  <p class ="estreno"> Estreno: ${info[i].release_date}</p>
                                  </a>
                                  </article>`
          }
      }
        //modifico el DOM//
        lista.innerHTML += elementosPeliculas;  //agregue un + nose si esta bien
    })

    .catch(function (error) {
        console.log("Error: " + error)
    })

