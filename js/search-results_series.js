let queryString2 = location.search;
let queryStringObj2= new URLSearchParams(queryString2);
let opcion2 = queryStringObj.get('media');
let querySeries = queryStringObj2.get('buscador');


if (opcion2 == "series" || opcion2 == "all") {

    let url2 = `https://api.themoviedb.org/3/search/tv?api_key=400f43d154bc968e0f7c02f3b9187c48&language=en-US&page=1&include_adult=false&query=${querySeries}`;

   
fetch(url2)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
        let info_api = data.results
        let elementosLista = ''
        if (info_api.length == 0) {
            let texto = document.querySelector('.texto')
            texto.innerText = `No hay resultado para su búsqueda":`
        } else {
            for (let i = 0; i < info_api.length; i++) {
                console.log(info_api[i]);
                if (info_api[i].poster_path == null) {
                    elementosLista +=
                                    ` <article class="pelicula">
                                            <a class = "hipervinculo" href="./detail-serie.html?id=${info_api[i].id}"> 
                                            <img class="imagenPP" src="./img/imagen-no-disponible.jpeg" alt=" ">
                                            <p class= "titulo"> ${info_api[i].original_name} </p>
                                            <p class ="estreno"> Estreno: ${info_api[i].first_air_date}</p>
                                            </a>
                                      </article>`
                } else {
                    elementosLista +=
                                    ` <article class="pelicula">
                                        <a class = "hipervinculo" href="./detail-serie.html?id=${info_api[i].id}"> 
                                        <img class ="imagenPP" src= "https://image.tmdb.org/t/p/w500/${info_api[i].backdrop_path}" alt=''/>
                                        <p class= "titulo"> ${info_api[i].original_name} </p>
                                        <p class ="estreno"> Estreno: ${info_api[i].first_air_date}</p>
                                        
                                        </a>
                                    </article>`
              
                                    }
                                }
                            }

            let capturar_pelis = document.querySelector('.resultados_peliculas')
            console.log(capturar_pelis);
            capturar_pelis.innerHTML += elementosLista;

             let capturar_pelis_1 = document.querySelector('.h1_search')
             capturar_pelis_1.innerText = `Resultados de busqueda: ${querySeries}`;

        })


        .catch(function (error) {
            console.log("Error: " + error)
        })
}