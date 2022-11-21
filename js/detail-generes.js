//DETAIL GENERO DE PELICULAS//


//usar location.search para obtener y almacenar la query string
let queryString = location.search;

//transformar la qs en objeto literal

let qsObject = new URLSearchParams(queryString);

//obtener valor de id de la query string//
let id = qsObject.get('id');

//armar un fetch //

let url = `https://api.themoviedb.org/3/discover/movie?api_key=400f43d154bc968e0f7c02f3b9187c48&language=en-US&with_genres=${id}`


fetch(url)
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        console.log(data);

        let info = data.results

        //capturo el DOM//
        let lista = document.querySelector('.detalles_peliculas_genero') 

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
                                  <img class = "imagenPP" src="https://image.tmdb.org/t/p/w500/${info[i].backdrop_path}" alt="Portada">
                                  <p class= "titulo"> ${info[i].original_title} </p>
                                  <p class ="estreno"> Estreno: ${info[i].release_date}</p>
                                  </a>
                                  </article>`
          }g
      }

    
        //modifico el DOM//
        lista.innerHTML += elementosPeliculas; 
    })

    .catch(function (error) {
        console.log("Error: " + error)
    })



//DETAIL GENERO DE SERIES//

//usar location.search para obtener y almacenar la query string
let queryString2 = location.search;

//transformar la qs en objeto literal

let qsObject2 = new URLSearchParams(queryString2);

//obtener valor de id de la query string//
let id2 = qsObject2.get('id');

//armar un fetch //

let url2 = `https://api.themoviedb.org/3/discover/tv?api_key=400f43d154bc968e0f7c02f3b9187c48&language=en-US&with_genres=${id2}`




fetch(url2)
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        console.log(data);

        let info2 = data.results

        //capturo el DOM//
        let lista2 = document.querySelector('.detalles_peliculas_genero') 

        //variable vacia para luego insertar los articulos//
        let elementosSeries = ''

        let i = 0;

        for (let i = 0; i < info2.length; i++) {
          if (info2[i].poster_path == null) {
              elementosSeries +=
                                    `<article class="pelicula">
                                    <a class = "hipervinculo" href="./detail-serie.html?id2=${info2[i].id}">
                                    <img class = "imagenPP" src="./img/imagen-no-disponible.jpeg" alt="Portada">
                                    <p class= "titulo"> ${info2[i].original_name} </p>
                                    <p class ="estreno"> Estreno: ${info2[i].first_air_date}</p>
                                    </a>
                                    </article>`
          } else {
              elementosSeries +=
                                  `<article class="pelicula">
                                  <a class = "hipervinculo" href="./detail-serie.html?id2=${info2[i].id}">
                                  <img class = "imagenPP" src="https://image.tmdb.org/t/p/w500/${info2[i].backdrop_path}" alt="Portada">
                                  <p class= "titulo"> ${info2[i].original_name} </p>
                                  <p class ="estreno"> Estreno: ${info2[i].first_air_date}</p>
                                  </a>
                                  </article>`
          }
      }

    
        //modifico el DOM//
        lista2.innerHTML += elementosSeries; 
    })

    .catch(function (error) {
        console.log("Error: " + error)
    })
