let queryString = location.search;
let queryStringObj= new URLSearchParams(queryString);
let queryPeliculas = queryStringObj.get("buscador")
let tipo = queryStringObj.get("media")


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
                texto.innerText = `No hay coincidencias con "${queryPeliculas}"`
            } else {

                for (let i = 0; i < info.length; i++) {
                    if (info[i].poster_path == null) {
                        elementosLista +=
                                        ` <article class="articulo-peli-resultados">
                                                <a href="./detailmovie.html?movie_id=${info[i].id}"> 
                                                <img class="imgpeli-resultados" src="./img/noImage.png" alt="Portada">
                                                </a>
                                                <div class="padre-info-resultados">
                                                <a href="detailmovie.html">
                                                <h2 class="Titulo-de-peli-resultados">${info[i].title}</h2>
                                                </a>
                                                <h3 class="Fecha-estreno-resultados">${info[i].release_date}</h3>
                                                <p class="sinopsis-resultados">${info[i].overview}</p>
                                                </div>
                                          </article>`
                    } else {
                        elementosLista +=
                            ` <article class="articulo-peli-resultados">
                    <a href="./detailmovie.html?movie_id=${info[i].id}"> 
                    <img class="imgpeli-resultados" src="https://image.tmdb.org/t/p/w500/${info[i].poster_path}" alt="Portada">
                    </a>
                    <div class="padre-info-resultados">
                    <a href="detailmovie.html">
                    <h2 class="Titulo-de-peli-resultados">${info[i].title}</h2>
                    </a>
                    <h3 class="Fecha-estreno-resultados"> Fecha de estreno: ${info[i].release_date}</h3>
                    <p class="sinopsis-resultados">${info[i].overview}</p>
                    </div>
                    </article>`
                    }
                }
            }


            let capturo = document.querySelector('.padre-peli-resultados')
            capturo.innerHTML = elementosLista;

            //modifico el h1 segun la palabra que busco el usuario//
            let capturo2 = document.querySelector('h1')
            capturo2.innerText = `Resultados de búsqueda: ${queryPeliculas}`;

        })


        .catch(function (error) {
            console.log("Error: " + error)
        })



// puntos extra
window.addEventListener('load', function (e) {
    let gif = document.querySelector(".gif")
    gif.style.display = "none";

})
