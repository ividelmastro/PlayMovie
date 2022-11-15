fetch ('https://api.themoviedb.org/3/genre/movie/list?api_key=400f43d154bc968e0f7c02f3b9187c48&language=en-US') 
  .then (function(response) {
  return response.json();

}) 
``
  .then(function(data){
    console.log (data)
    let lista = document.querySelector(".peliculas_populares")
    let elementoslista= ""

    for (let i = 0; i < data.results.length; i++) {
      elementoslista += `<h1 class="titulocomedia">Comedia</h1>
    
      <h2 class = "titulo_ppl"> Películas de comedia </h2>
      <section class="peliculas_populares">
      
          <article class="pelicula">
              <a class = "hipervinculo" href="./detail_movie.html">
                  <img class="imagenPP" src="img/niñera.jpeg" alt="Top Gun"> 
                  <p class = 'titulo'> Niñera a prueba de balas</p>
                  <p class = 'estreno'> 21-10-2014</p> 
              </a>
          </article>`
  
      
    }
      console.log(elementoslista);
      lista.innerHTML = elementoslista; 
     
})

.catch(function(error){
  console.log ('el error fue: ' + error);
})



<h1 class="titulocomedia">Comedia</h1>
    
    <h2 class = "titulo_ppl"> Películas de comedia </h2>
    <section class="peliculas_populares">
    
        <article class="pelicula">
            <a class = "hipervinculo" href="./detail_movie.html">
                <img class="imagenPP" src="img/niñera.jpeg" alt="Top Gun"> 
                <p class = 'titulo'> Niñera a prueba de balas</p>
                <p class = 'estreno'> 21-10-2014</p> 
            </a>
        </article>
