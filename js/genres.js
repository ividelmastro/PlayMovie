let url= `https://api.themoviedb.org/3/genre/movie/list?api_key=400f43d154bc968e0f7c02f3b9187c48&language=en-US`

fetch(url)


  .then (function(response) {
  return response.json();

}) 

  .then(function(data){
    console.log (data)
    let info=data.genres
    let elementosLista= ""
    let lista = document.querySelector(".cajapadre")
    

    for (let i = 0; i < info.length; i++) {
      elementosLista += `<article class="cajahijo">
                            <a class = "hipervinculo" href="./detail-generes.html?id=${info[i].name}"> ${info[i].name} </a>
                          </article>`
      }
      console.log(elementosLista);
      lista.innerHTML = elementosLista; 
     
})

.catch(function(error){
  console.log ('el error fue: ' + error);
})


