let recuperoStorage = localStorage.getItem('favoritosPelis');
//let recuperoStorage2 = localStorage.getItem('favoritosSeries');
let favoritos = JSON.parse(recuperoStorage);
//let favoritos2 = JSON.parse(recuperoStorage2);

console.log(favoritos);
//console.log(favoritos2);


// Capturar el contenedor de los elementos a mostrar
let section = document.querySelector('.mis-favoritos-peliculas');
let apiFavoritos1 = ''
//let section2 = document.querySelector('.mis-favoritos-series');
//let tmdbFavoritos2 = ''

// Si el storage esta vacio indicamos al usuario que no hay favoritos seleccionados (usamos condicionales porque sino aparece null)
if (favoritos == null || favoritos.length == 0) { //el array no toma nulo a menos que NUNCA hayas agregado algo, o que borres el localstorage, trabajo con true y false, por eso evaluamos la segunda condición que es cuando habia favoritos y los sacas todos
    section.innerHTML = '<p> No hay peliculas favoritas seleccionadas </p>'
    section.style.color = "white"
    section.style.fontWeight = "bold"
    section.style.fontSize = "20px"

}

else {
    for (let i = 0; i < favoritos.length; i++) { // Hacer un for (bucle) para recorrer el array
        buscarYMostrarFavoritos(favoritos[i])
    }
}


// PARTE DE PELICULAS

function buscarYMostrarFavoritos(id) { // no importa donde la crees, primero que lee JS es funciones y despues ejecuta el código

    // Adentro del for, buscar cada elemento del array (te lo da la API con un fetch)

    let url = `https://api.themoviedb.org/3/movie/${id}?api_key=400f43d154bc968e0f7c02f3b9187c48` // En cada posición del array, guardamos el id de cada personaje que se haya agregado a favoritos

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            apiFavoritos1 += `<ul class="ul-favoritos">
            <li class="favscuadrado">
                <h3 class="h3favs"> ${data.original_title}</h3>
                <a href="./detail-movie.html?movie_id=${data.id}"><img class="imgfavs" src=https://image.tmdb.org/t/p/w342${data.poster_path} alt='Imagen pelicula/serie'/></a>
                </li>`


            // mostrarlo al usuario

            section.innerHTML = apiFavoritos1; // dejar acá porque afuera no funciona

        })
        .catch(function (error) {
            console.log(error);

        })

}