//DETAIL GENERO PELICULAS//
let queryString = location.search;
let qsObject = new URLSearchParams(queryString);
let id = qsObject.get('id');
let url = `https://api.themoviedb.org/3/discover/movie?api_key=400f43d154bc968e0f7c02f3b9187c48&language=en-US&with_genres=${id}`

fetch(url)
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        console.log(data);

        let info = data.results
        let lista = document.querySelector('.detalles_peliculas_genero') 
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
                                  <img class = "imagenPP" src="https://image.tmdb.org/t/p/w500/${info[i].backdrop_path}" alt="Portada">
                                  <p class= "titulo"> ${info[i].original_title} </p>
                                  <p class ="estreno"> Estreno: ${info[i].release_date}</p>
                                  </a>
                                  </article>`
          }
      }

        lista.innerHTML += elementosPeliculas; 
    })

    .catch(function (error) {
        console.log("Error: " + error)
    })



//DETAIL GENERO SERIES//

let queryString2 = location.search;
let qsObject2 = new URLSearchParams(queryString2);
let id2 = qsObject2.get('id');

let url2 = `https://api.themoviedb.org/3/discover/tv?api_key=400f43d154bc968e0f7c02f3b9187c48&language=en-US&with_genres=${id2}`
fetch(url2)
    .then(function (response) {
        return response.json();
    })

    .then(function (data2) {
        console.log(data2);

        let info2 = data2.results
        let lista2 = document.querySelector('.detalles_series_genero') 
        let elementosSeries = ''
        let i = 0;

        for (let i = 0; i < info2.length; i++) {
          if (info2[i].poster_path == null) {
              elementosSeries +=
                                    `<article class="serie">
                                    <a class = "hipervinculo" href="./detail-serie.html?id=${info2[i].id2}">
                                    <img class = "imagenPP" src="./img/imagen-no-disponible.jpeg" alt="Portada">
                                    <p class= "titulo"> ${info2[i].original_name} </p>
                                    <p class ="estreno"> Estreno: ${info2[i].first_air_date}</p>
                                    </a>
                                    </article>`
          } else {
              elementosSeries +=
                                  `<article class="serie">
                                  <a class = "hipervinculo" href="./detail-serie.html?id=${info2[i].id2}">
                                  <img class = "imagenPP" src="https://image.tmdb.org/t/p/w500/${info2[i].backdrop_path}" alt="Portada">
                                  <p class= "titulo"> ${info2[i].original_name} </p>
                                  <p class ="estreno"> Estreno: ${info2[i].first_air_date}</p>
                                  </a>
                                  </article>`
          }
      }

        lista2.innerHTML += elementosSeries; 
    })

    .catch(function (error) {
        console.log("Error: " + error)
    })