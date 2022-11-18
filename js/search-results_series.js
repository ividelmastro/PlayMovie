let queryString2 = location.search;
let queryStringObj2= new URLSearchParams(queryString2);
let querySeries = queryStringObj2.get('buscador');
let opcion2 = queryStringObj.get('media');

if (opcion2 == "all" || opcion2 == "series") {

    let url2 = `https://api.themoviedb.org/3/search/tv?api_key=400f43d154bc968e0f7c02f3b9187c48&language=en-US&page=1&include_adult=false&query=${querySeries}`;

   
fetch(url2)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
        let info = data.results
        let elementosLista = ''
        if (info.length == 0) {
            let texto = document.querySelector('.texto')
            texto.innerText = `Títulos relacionados con "${querySeries}":`
        } else {
            for (let i = 0; i < info.length; i++) {
                console.log(info[i]);
                if (info[i].poster_path == null) {
                    elementosLista +=
                                    ` <article class="pelicula">
                                            <a class = "hipervinculo" href="./detail-serie.html?id=${info[i].id}"> 
                                            <img class="imagenPP" src="./img/imagen-no-disponible.jpeg" alt="Portada">
                                            <p class= "titulo"> ${info[i].original_name} </p>
                                            <p class ="estreno"> Estreno: ${info[i].first_air_date}</p>
                                            </a>
                                      </article>`
                } else {
                    elementosLista +=
                                    ` <article class="pelicula">
                                        <a class = "hipervinculo" href="./detail-serie.html?id=${info[i].id}"> 
                                        <img class ="imagenPP" src= "https://image.tmdb.org/t/p/w500/${info[i].backdrop_path}" alt=''/>
                                        <p class= "titulo"> ${info[i].original_name} </p>
                                        <p class ="estreno"> Estreno: ${info[i].first_air_date}</p>
                                        
                                        </a>
                                    </article>`
              
                                    }
                                }
                            }

            let capturo3 = document.querySelector('.resultados_peliculas')
            console.log(capturo3);
            capturo3.innerHTML += elementosLista;

             //modifico el h1 segun la palabra que busco el usuario//
             let capturo4 = document.querySelector('.h1_search')
             capturo4.innerText = `Resultados de búsqueda: ${querySeries}`;

        })


        .catch(function (error) {
            console.log("Error: " + error)
        })
}