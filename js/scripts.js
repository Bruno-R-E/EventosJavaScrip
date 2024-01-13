//querySelector
const heading = document.querySelector('.header__texto h2') // 0 o 1 Elementos
console.log(heading);

//querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a');
enlaces[0].textContent = 'Nuevo Teti para Enlance';
enlaces[0].href = 'http://google.com';
enlaces[0].classList.add('nueva-clase');
//enlaces[0].classList.remove('navegacion__enlace');

// Generar un nuevo enlace
const nuevoEnlace = document.createElement('A');

// Agregar el href
nuevoEnlace.href = 'nuevo-enlace.html';

// Agregar el texto
nuevoEnlace.textContent = 'Un Nuevo enlace';

//Agregar una clase
nuevoEnlace.classList.add('navegacion__enlace');

// Agregarlo al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);


console.log(nuevoEnlace);



// // Eventos

// console.log(1);

// window.addEventListener('load', function(){ //load espera a que el JS y los archivos que dependen del HTML esten listos
//     console.log(2);
// });

// window.onload = function(){
//     console.log(3);
// }

// document.addEventListener('DOMContentLoaded', function(){ //Solo espera por el HTML, pero no espera CSS o imagenes
//     console.log(4);
// });

// console.log(5);

// window.onscroll = function () {
//     console.log('scrolling...');
// } 


// Seleccionar elementos y asociarles un evento
// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function(evento){
//     console.group(evento)
//     evento.preventDefault(); // Validar un formulario
//     console.log('enviando formulario');
// })






// eventos de los imput o textarea

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario')

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

//el Evento de Submit
formulario.addEventListener('submit', function(e){
    e.preventDefault();

    // Validar el formulario

    const { nombre, email, mensaje} = datos;

    if(nombre === '' || email === '' || mensaje === ''){
        mostrarAlerta('Todo los campos son Obligatorios', 'error');

        return; // corta la ejecucion del codigo
    }

    // crear la alerta de Enviar correctamente
    mostrarAlerta('Mensaje Enviado correctamente')
})

function leerTexto(e){
    // console.log(e.target.value);
    datos[e.target.id] = e.target.value

    // console.log(datos);
}

function mostrarAlerta(mensaje, error = null){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    
    if(error) {
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);

    // desaparezca despues de 5 segundo
    setTimeout(() => {
        alerta.remove();
    }, 5000);
}
