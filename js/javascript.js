// Creacion de evento copiar smart contract en el boton copiar


const button = document.querySelector(".boton-copiar");

button.addEventListener("click", mensaje );

function mensaje(){
    alert("El contrato ha sido copiado con exito");
    div.innerHTML = " El contrato se copio correctamente, ya podés comprar en los exchanges autorizados";
}

