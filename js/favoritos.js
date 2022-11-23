let recuperoStorage = localStorage.getItem('peliculas_favoritas');
let recuperoStorage2 = localStorage.getItem('series_favoritas');
let favoritos = JSON.parse(recuperoStorage);
let favoritos2 = JSON.parse(recuperoStorage2);

console.log(favoritos);
console.log(favoritos2);


// Capturar el contenedor de los elementos a mostrar
let section = document.querySelector('.favoritos-peliculas');
let section2 = document.querySelector('.favoritos-series');
let apiFavs1 = ''
let apiFavs2 = ''

// Si el storage esta vacio indicamos al usuario que no hay favoritos seleccionados (usamos condicionales porque sino aparece null)
if (favoritos == null || favoritos.length == 0) { 
    section.innerHTML = '<p> No hay peliculas favoritas seleccionadas </p>'
    section.style.color = "white"
    section.style.fontWeight = "bold"
    section.style.fontSize = "20px"

}

else {
    for (let i = 0; i < favoritos.length; i++) { 
        buscarYMostrarFavoritos(favoritos[i])
    }
}

if (favoritos2 == null || favoritos2.length == 0) { //el array no toma nulo a menos que NUNCA hayas agregado algo, o que borres el localstorage, trabajo con true y false, por eso evaluamos la segunda condición que es cuando habia favoritos y los sacas todos
    section2.innerHTML = '<p> No hay series favoritas seleccionadas </p>'
    section2.style.color = "white"
    section2.style.fontWeight = "bold"
    section2.style.fontSize = "20px"
}

else {
    for (let i = 0; i < favoritos2.length; i++) { // Hacer un for (bucle) para recorrer el array
        buscarYMostrarFavoritos2(favoritos2[i])
    }
}


// pelis

function buscarYMostrarFavoritos(id) { 

    let url = `https://api.themoviedb.org/3/movie/${id}?api_key=400f43d154bc968e0f7c02f3b9187c48` 

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            apiFavs1 += `<ul class="lista_favoritos">
            <li >
                <h3 class="nombre_favoritos"> ${data.original_title}</h3>
                <a href="./detail-movie.html?id=${data.id}"><img src=https://image.tmdb.org/t/p/w500${data.backdrop_path} alt='Img peliculas'/></a>
                </li>`
            
            section.innerHTML = apiFavs1; 

        })
        .catch(function (error) {
            console.log(error);

        })

}


// series

function buscarYMostrarFavoritos2(id) {

    let url2 = `https://api.themoviedb.org/3/tv/${id}?api_key=400f43d154bc968e0f7c02f3b9187c48`

    fetch(url2)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            apiFavs2 += `
            <ul class="lista_favoritos">
            <li >
                  <h3 class="nombre_favoritos"> ${data.original_name}</h3>
                  <a href="./detail-serie.html?id=${data.id}"><img src=https://image.tmdb.org/t/p/w500${data.backdrop_path} alt='Img series'/></a>
            </li>
            <ul/>`
            
            section2.innerHTML = apiFavs2; 

        })
        .catch(function (error) {
            console.log(error);

        })
}