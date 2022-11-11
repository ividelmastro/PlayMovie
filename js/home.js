//FALTA LO DEL BUSCADOR

//PELICULAS POPULARES

let section = document.querySelector('.peliculas');


fetch ('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/tracks')
   .then (function(datos) {
   return datos.json();

}) 
   .then(function(info){
      console.log (info)

         let section2 = ''
         for (let i = 0; i < 5; i++){ 

       section2 += ` <article class="cajas-canciones">
        <img src=${info.data[i].artist.picture} alt="" class="imagenC bohemian"> 
        <br> <br>
        <a 
          href="./detail-track.html?id=${info.data[i].id}"
          class="linkcancion"> ${info.data[i].title}
        </a>
        </article> `
        }

section.innerHTML = section2; 


})

.catch(function(error){
  console.log ('el error fue: ' + error);
})
