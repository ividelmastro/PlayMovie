
///api key: 400f43d154bc968e0f7c02f3b9187c48

//PELICULAS POPULARES

fetch ('https://api.themoviedb.org/3/movie/popular?api_key=400f43d154bc968e0f7c02f3b9187c48&language=en-US&page=1') 
  .then (function(response) {
  return response.json();

}) 

  .then(function(data){
    console.log (data)
    let info_api = data.results
    let lista = document.querySelector(".peliculas_populares")
    let elementoslista= ""

    for (let i = 0; i < info_api.length; i++) {
      elementoslista += `<article class = "pelicula">
                          <a class = "hipervinculo" href="./detail-movie.html?id=${info_api[i].id}"> 
                            <img class ="imagenPP" src= "https://image.tmdb.org/t/p/w500/${info_api[i].backdrop_path}" alt=''/>
                            <p class= "titulo"> ${info_api[i].original_title} </p>
                            <p class ="estreno"> Estreno: ${info_api[i].release_date}</p>
                          <a/>
                          </article>`
      }
      console.log(elementoslista);
      lista.innerHTML = elementoslista; 
     
})

.catch(function(error){
  console.log ('el error fue: ' + error);
})

//SERIES POPULARES
fetch ('https://api.themoviedb.org/3/tv/popular?api_key=400f43d154bc968e0f7c02f3b9187c48&language=en-US&page=1') 
  .then (function(response) {
  return response.json();

}) 

  .then(function(data){
    console.log (data)
    let info_api = data.results
    let lista = document.querySelector(".series_populares")
    let elementoslista= ""

    for (let i = 0; i < info_api.length; i++) {
      elementoslista += `<article class = "serie">
                          <a class = "hipervinculo" href="detail-serie.html?id=${info_api[i].id}"> 
                            <img class ="imagenPP" src= "https://image.tmdb.org/t/p/w500/${info_api[i].backdrop_path}" alt=''/>
                            <p class= "titulo"> ${info_api[i].name} </p>
                            <p class ="estreno"> Estreno: ${info_api[i].first_air_date}</p>
                          <a/>
                          </article>`
      }
      console.log(elementoslista);
      lista.innerHTML = elementoslista; 
     
})

.catch(function(error){
  console.log ('el error fue: ' + error);
})

//NUEVOS LANZAMIENTOS
fetch ('https://api.themoviedb.org/3/movie/top_rated?api_key=400f43d154bc968e0f7c02f3b9187c48&language=en-US&page=1') 
  .then (function(response) {
  return response.json();

}) 

  .then(function(data){
    console.log (data)
    let info_api = data.results
    let lista = document.querySelector(".peliculas_infantiles")
    let elementoslista= ""

    for (let i = 0; i < info_api.length; i++) {
      elementoslista += `<article class = "peliculas_lanzadas">
                          <a class = "hipervinculo" href="./detail-movie.html"> 
                            <img class ="imagenPP" src= "https://image.tmdb.org/t/p/w500/${info_api[i].backdrop_path}" alt=''/>
                            <p class= "titulo"> ${info_api[i].title} </p>
                            <p class ="estreno"> Estreno: ${info_api[i].release_date}</p>
                          <a/>
                          </article>`
      }
      console.log(elementoslista);
      lista.innerHTML = elementoslista; 
     
})

.catch(function(error){
  console.log ('el error fue: ' + error);
})