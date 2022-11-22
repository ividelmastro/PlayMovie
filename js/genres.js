///GENERO PELICULAS

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
                            <a class = "hipervinculo" href="./detail-generes.html?id=${info[i].id}"> ${info[i].name} </a>
                          </article>`
      }
      console.log(elementosLista);
      lista.innerHTML = elementosLista; 
     
})

.catch(function(error){
  console.log ('el error fue: ' + error);
})


///GENERO SERIES

let url2= `https://api.themoviedb.org/3/genre/tv/list?api_key=400f43d154bc968e0f7c02f3b9187c48&language=en-US`

fetch(url2)


  .then (function(response) {
  return response.json();

}) 

  .then(function(data2){
    console.log (data2)
    let info2=data2.genres
    let elementosLista2= ""
    let lista2 = document.querySelector(".cajapadre2")
    

    for (let i = 0; i < info2.length; i++) {
      elementosLista2 += `<article class="cajahijo">
                            <a class = "hipervinculo" href="./detail-generes.html?id=${info2[i].id}"> ${info2[i].name} </a>
                          </article>`
      }
      console.log(elementosLista2);
      lista2.innerHTML = elementosLista2; 
     
})

.catch(function(error){
  console.log ('el error fue: ' + error);
})
