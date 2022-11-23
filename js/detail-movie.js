let queryString= location.search

let qsObject = new URLSearchParams(location.search)

let id = qsObject.get("id")
console.log(id)

let url = `https://api.themoviedb.org/3/movie/${id}?api_key=400f43d154bc968e0f7c02f3b9187c48&language=en-US`


//FETCH

fetch(url)
    .then(function(response){
        return response.json();
})

    .then(function(data){
        console.log(data);

        let img = document.querySelector('.foto_pelicula');
        let titulo = document.querySelector('.titulo_pelicula');
        let calificacion = document.querySelector('.rating');
        let fecha = document.querySelector('.fecha_estreno');
        let duracion = document.querySelector('.duracion');
        let sinopsis = document.querySelector('.pelicula_descripcion');

        
        if (data.poster_path == null){
            img.src = "./img/imagen-no-disponible.jpeg"
        }
        else{
            img.src= `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
        }

        titulo.innerHTML += data.original_title;
        sinopsis.innerHTML += data.overview;
        calificacion.innerHTML += data.vote_average;
        fecha.innerHTML += data.release_date;
        duracion.innerHTML += data.runtime + "min";

        let generos = ""
        let info = data
        let capturo = document.querySelector(".generos")

        if (info.genres == null || info.genres == 0) {
            generos += `<p> No se encontraron géneros </p>`
        }

        for (let i = 0; i < info.genres.length; i++) {
            generos +=
                `<p><a class= "hipervinculo" href="./detail-generes.html?id=${info.genres[i].id}&name_G_Movie=${info.genres[i].name}&opcion=movies">${info.genres[i].name}.</a></p>`
        }
        capturo.innerHTML += generos;


        ///PLATAFORMAS 
        fetch(`https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=400f43d154bc968e0f7c02f3b9187c48`)
            .then (function(response) {
            return response.json();
          }) 

            .then(function(data2){
              console.log (data2)
              let info2= data2.results
              let plataformas = document.querySelector(".plataformas")
              if (info2.US !== undefined){
                plataformas.innerHTML+= `${info2.US.flatrate[0].provider_name}`
              } else{
                plataformas.innerHTML+= "Este título no se encuentra disponible en Estados Unidos."
              }   
          })  
            .catch(function(error){
              console.log ('el error fue: ' + error);
            })

})
.catch(function (error) {
    console.log(error);
})



// FAVS
let favoritos = [];

let recuperoStorage = localStorage.getItem('peliculas_favoritas'); // te va a devolver null o los datos

if (recuperoStorage != null) {
    //1ero tenemos que transformarlo de cadena de texto con JSON.parse y despues lo guardamos en favoritos 
    favoritos = JSON.parse(recuperoStorage);
}

// Hacer click en el link. Primero deberemos capturar el elemento
let fav = document.querySelector('.boton2');

// Chequear que id este en el array de favoritos 
if (favoritos.includes(id)) {
    fav.innerText = "Quitar de favoritos"
}

fav.addEventListener('click', function (evento) {
    evento.preventDefault();

    if (favoritos.includes(id)) {
        // Si el id esta en el array
        let indice = favoritos.indexOf(id);

        //Borrar a partir del indice 1 elemento 
        favoritos.splice(indice, 1)
        fav.innerText = "Agregar a favoritos"
    }

    else { // Guardar dato en un array: agregar un dato al array 
        favoritos.push(id);
        fav.innerText = "Quitar de favoritos";
    }

    // Guardar el array en el storage (esto se hace pase lo que pase, no se mete en el else)
    let favsToString = JSON.stringify(favoritos); // Transformamos el array en una cadena de texto

    localStorage.setItem("peliculas_favoritas", favsToString);

    console.log(localStorage);

})

///RECOMENDACIONES:


let url2= `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=400f43d154bc968e0f7c02f3b9187c48&language=en-US&page=1`

let activo = true

fetch(url2)
          .then (function(response) {
            return response.json();
          }) 

          .then(function(data3){
            let info2 = data3.results
            console.log (data3)
            let getRecom = document.querySelector("#getRecom")
            let recomendadas = " "
            
            for (let i = 0; i < 3; i++) {
              recomendaciones +=`<a class = "hipervinculo" href="detail-movie.html?id=${info2[i].id}"> 
                                    <article class = "pelicula">
                                    <img class ="imagenPP" src= "https://image.tmdb.org/t/p/w500/${info2[i].backdrop_path}" alt=''/>
                                    <p class= "titulo"> ${info2[i].original_title} </p>
                                    <p class ="estreno"> Estreno: ${info2[i].release_date}</p>
                                    <a href ="./detail-movie.html?id=${info2[i].id}" class="detalle"></a>
                                    </article>
                                  <a/>`
            }
            getRecom.innerHTML = recomendadas
          })

let botonrec = document.querySelector(".botonrec")

if (activo){
    botonrec.innerText = "Ver Recomendaciones";
    getRecom.style.display = "none";

  }
botonrec.addEventListener("click", function(evento) {
    evento.preventDefault();
    if (activo){
      botonrec.innerText = "Ver Recomendadas";
      getRecom.style.display = "none";
      activo = false;
    }
    else{
      botonrec.innerText = "Ocultar Recomendadas";
      getRecom.style.display = "flex";
      activo = true;

    }
  })

.catch(function(error){
console.log ('el error fue: ' + error);
})


