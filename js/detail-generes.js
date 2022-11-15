
//DETAIL GENERO DE PELICULAS//


//usar location.search para obtener y almacenar la query string
let qs = location.search;

//transformar la qs en objeto literal

let ol = new URLSearchParams(qs);

//obtener valor de id de la query string//
let id = ol.get('id_G_Movie');

//armar un fetch //
let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=400f43d154bc968e0f7c02f3b9187c48&language=en-US${id}`;

fetch(url)
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        console.log(data);

        let info = data.results

        //capturo el DOM//
        let lista = document.querySelector('.d')

        //variable vacia para luego insertar los articulos//
        let elementosPeliculas = ''

        for (let i = 0; i < info.length; i++) {
            if (info[i].id == null) {
                elementosPeliculas +=
                    `<article class="peliculas">
     <h4>${info[i].name}</h4>
     <a href="./detailmovie.html?movie_id=${info[i].id}"> <img src="./img/noImage.png" alt="Portada">
     </a></article>`
            } else {
                elementosPeliculas +=
                    `<article class="peliculas">
             <h4>${info[i].name}</h4>
             <a href="./detailmovie.html?movie_id=${info[i].id}"> <img src="https://image.tmdb.org/t/p/w500/${info[i].poster_path}" alt="Portada">
             </a></article>`
            }
        }

        //modifico el DOM//
        lista.innerHTML = elementosPeliculas;
    })

    .catch(function (error) {
        console.log("Error: " + error)
    })


