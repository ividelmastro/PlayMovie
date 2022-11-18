let queryString = location.search;
let queryStringObj= new URLSearchParams(queryString);
let queryPeliculas = queryStringObj.get('buscador');
let opcion = queryStringObj.get('media');

if (opcion == "all" || tipo == "peliculas") {
    let url = `https://api.themoviedb.org/3/search/movie?api_key=400f43d154bc968e0f7c02f3b9187c48&language=en-US&page=1&include_adult=false&query=${queryPeliculas}`
   
fetch(url)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
        let info = data.results
        let elementosLista = ''
        if (info.length == 0) {
            let texto = document.querySelector('.texto')
            texto.innerText = `Títulos relacionados con "${queryPeliculas}":`
        } else {
            for (let i = 0; i < info.length; i++) {
                if (info[i].poster_path == null) {
                    elementosLista +=
                                    ` <article class="pelicula">
                                            <a class = "hipervinculo" href="./detail-movie.html?id=${info[i].id}"> 
                                            <img class="imagenPP" src="./img/imagen-no-disponible.jpeg" alt="Portada">
                                            <p class= "titulo"> ${info[i].original_title} </p>
                                            <p class ="estreno"> Estreno: ${info[i].release_date}</p>
                                            </a>
                                      </article>`
                } else {
                    elementosLista +=
                                    ` <article class="pelicula">
                                        <a class = "hipervinculo" href="./detail-movie.html?id=${info[i].id}"> 
                                        <img class ="imagenPP" src= "https://image.tmdb.org/t/p/w500/${info[i].backdrop_path}" alt=''/>
                                        <p class= "titulo"> ${info[i].original_title} </p>
                                        <p class ="estreno"> Estreno: ${info[i].release_date}</p>
                                        </a>
                                    </article>`
              
                                    }
                                }
                            }

            let capturo = document.querySelector('.resultados_peliculas')
            capturo.innerHTML += elementosLista;

             //modifico el h1 segun la palabra que busco el usuario//
             let capturo2 = document.querySelector('.h1_search')
             capturo2.innerText = `Resultados de búsqueda: ${queryPeliculas}`;

        })


        .catch(function (error) {
            console.log("Error: " + error)
        })
} 
