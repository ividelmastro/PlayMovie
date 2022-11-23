let campo = document.querySelector('.search');
let texto = document.querySelector('.texto-usuario');

let formulario = document.querySelector('.busqueda');
   formulario.addEventListener('submit', function (evento) {
    evento.preventDefault()


    if (campo.value == "") {
        texto.innerText = "El campo es obligatorio.";
        campo.style.outline = "2px solid red"
        texto.style.fontWeight = "bold" 
        texto.style.color = "red" 
    }

    else if (campo.value.length <= 2) {
        texto.innerText = "Debe escribir al menos 3 caracteres."
        texto.style.color = "red";
        campo.style.outline = "2px solid red"
    }

    else {
        this.submit()
    }

})