
let buscador= document.querySelector(".busqueda")
let campo= document.querySelector(".buscador-texto")

buscador.addEventListener("submit", function(evento){
evento.preventDefault();
console.log("error")


    if(campo.value==""){
        alert("El campo de búsqueda se encuentra vacío.")
}


    else if(campo.value.length<=2){
        alert("Escriba mínimo 3 caracteres.")
    }

    else{
        this.submit()
    }
})

let queryString = location.search;
let queryStringObj= new URLSearchParams(queryString);
let id =queryStringObj.get("buscar")

