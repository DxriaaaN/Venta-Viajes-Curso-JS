import { barcelona, roma, parís, londres } from "./ciudades.js";

//Obtener elementos del DOM

let enlaces = document.querySelectorAll('a');
let tituloElemento = document.getElementById('titulo');
let subtituloElemento = document.getElementById('subtitulo');
let parrafoElemento = document.getElementById('parrafo');
let precioElemento = document.getElementById('precio');


//Agregar un evento CLICK a cada enlace

enlaces.forEach(function (enlace) {
    enlace.addEventListener('click', function() {
        enlaces.forEach(function (enlace) {
            enlace.classList.remove('active');
        });

        this.classList.add('active');

        let contenido = obtenerContenido(this.textContent);

        tituloElemento.innerHTML = contenido.titulo;
        subtituloElemento.innerHTML = contenido.subtitulo;
        parrafoElemento.innerHTML = contenido.parrafo;
        precioElemento.innerHTML = contenido.precio;
    })
})


function obtenerContenido(enlace) {
    let contenido = {
        'Barcelona' : barcelona,
        'Roma': roma,
        'París': parís,
        'Londres': londres
    };
    return contenido[enlace];
};



const x = 5

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}


for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}


for (const element of object) {
    
}