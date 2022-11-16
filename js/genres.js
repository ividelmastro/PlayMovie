
fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=400f43d154bc968e0f7c02f3b9187c48&language=en-US')


  .then (function(response) {
  return response.json();

}) 

  .then(function(data){
    console.log (data)
    let lista = document.querySelector(".cajapadre")
    let elementoslista= ""

    for (let i = 0; i < data.genres.length; i++) {
      elementoslista += `<article class="cajahijo">
                            <a class = "hipervinculo" href="./detail-generes.html?id=${data.genres[i].name}"> ${data.genres[i].name} </a>
                          </article>`
      }
      console.log(elementoslista);
      lista.innerHTML = elementoslista; 
     
})

.catch(function(error){
  console.log ('el error fue: ' + error);
})

