let formulario = document.querySelector('.busqueda');
let campo = document.querySelector('.search');
let texto = document.querySelector('.texto-usuario');

///    
formulario.addEventListener('submit', function (evento) {
    evento.preventDefault()
    console.log("Error. Sin enviar");

    if (campo.value == " ") {
        texto.innerText = "El campo es obligatorio";
        campo.style.outline = "2px solid red"
        texto.style.fontWeight = "bold" // aplica para el else if de abajo tambien ya que se usa "message" en ambos casos
        texto.style.color = "red" // aplica para el else if de abajo tambien ya que se usa "message" en ambos casos
    }

    else if (campo.value.length <= 2) {
        texto.innerText = "Debe escribir al menos 3 caracteres."
        campo.style.outline = "2px solid red"
    }

    else {
        this.submit()
    }

})

campo.addEventListener('focus', function () {
    texto.innerText = '';
    campo.style.outline = "auto"
})

