let queryString = location.search;
let queryStringObj= new URLSearchParams(queryString);
let opcion = queryStringObj.get('media');
let queryPeliculas = queryStringObj.get('buscador');


if (opcion == "peliculas" || opcion == "all") {

    
    let url = `https://api.themoviedb.org/3/search/movie?api_key=400f43d154bc968e0f7c02f3b9187c48&language=en-US&page=1&include_adult=false&query=${queryPeliculas}`;

   
fetch(url)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
        let info_api = data.results
        let elementosLista = ''
        if (info_api.length == 0) {
            let texto = document.querySelector('.texto')
            texto.innerText = `No hay resultado para su búsqueda`
            texto.style.color = "white"
            
        } else {
            for (let i = 0; i < info_api.length; i++) {
                if (info_api[i].poster_path == null) {
                    elementosLista +=
                                    ` <article class="pelicula">
                                            <a class = "hipervinculo" href="./detail-movie.html?id=${info_api[i].id}"> 
                                            <img class="imagenPP" src="./img/imagen-no-disponible.jpeg" alt=" ">
                                            <p class= "titulo"> ${info_api[i].original_title} </p>
                                            <p class ="estreno"> Estreno: ${info_api[i].release_date}</p>
                                            </a>
                                      </article>`
                } else {
                    elementosLista +=
                                    ` <article class="pelicula">
                                        <a class = "hipervinculo" href="./detail-movie.html?id=${info_api[i].id}"> 
                                        <img class ="imagenPP" src= "https://image.tmdb.org/t/p/w500/${info_api[i].backdrop_path}" alt=''/>
                                        <p class= "titulo"> ${info_api[i].original_title} </p>
                                        <p class ="estreno"> Estreno: ${info_api[i].release_date}</p>
                                        </a>
                                    </article>`
              
                                    }
                                }
                            }

            let capturo = document.querySelector('.resultados_peliculas')
            capturo.innerHTML += elementosLista;

             //modifico el h1 segun la palabra que busco el usuario//
             let capturo2 = document.querySelector('.h1_search')
             capturo2.innerText = `Resultados de busqueda: ${queryPeliculas}`;

        })


        .catch(function (error) {
            console.log("Error: " + error)
        })

}window.addEventListener('load', function (evento) {
    let gif = document.querySelector(".gif")
    gif.style.display = "none";

})