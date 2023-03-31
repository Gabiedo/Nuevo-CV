// Obtener los botones de teléfono y correo electrónico
const boton1 = document.getElementById("telefono");
const boton2 = document.getElementById("Mail");

// Agregar un listener de eventos al botón de teléfono
boton1.addEventListener("click", function() {
  // Abrir la aplicación de WhatsApp con el número de teléfono
  window.open("https://wa.me/542364675962");
});

// Agregar un listener de eventos al botón de correo electrónico
boton2.addEventListener("click", function() {
  // Abrir una nueva ventana del correo electrónico
  window.open("mailto:gabrieloviedo2017@outlook.com");
});

//Seleccionamos los elementos del DOM con los que vamos a interactuar
const nav = document.querySelector('nav');
const botonMenu = document.querySelector('#boton-menu');
const secciones = document.querySelectorAll('section');
const botonesProyecto = document.querySelectorAll('.boton-secundario');
const botonInicio = document.querySelector('.boton-primario');

//Añadimos un event listener al botón de menú para mostrar/ocultar el menú de navegación
botonMenu.addEventListener('click', () => {
  nav.classList.toggle('mostrar');
});

//Añadimos un event listener a los botones de proyecto para mostrar detalles al hacer click
botonesProyecto.forEach(boton => {
  boton.addEventListener('click', () => {
    alert('Detalles del proyecto');
  });
});

//Añadimos un event listener al botón de inicio para hacer scroll hasta la sección de presentación
botonInicio.addEventListener('click', () => {
  secciones[0].scrollIntoView({behavior: 'smooth'});
});

//Añadimos un event listener a las secciones para resaltar la sección actual en el menú de navegación
window.addEventListener('scroll', () => {
  let seccionActual = '';

  secciones.forEach(seccion => {
    const seccionTop = seccion.offsetTop;
    const seccionHeight = seccion.clientHeight;

    if (pageYOffset >= seccionTop - seccionHeight / 3) {
      seccionActual = seccion.getAttribute('id');
    }
  });

  const enlaces = document.querySelectorAll('nav a');
  enlaces.forEach(enlace => {
    enlace.classList.remove('activo');
    if (enlace.getAttribute('href').substring(1) === seccionActual) {
      enlace.classList.add('activo');
    }
  });
});

// Obtener los botones de teléfono y correo electrónico
const telefonoBtn = document.getElementById("telefono");
const correoBtn = document.getElementById("Mail");

// Agregar un listener de eventos al botón de teléfono
telefonoBtn.addEventListener("click", function() {
  // Abrir la aplicación de WhatsApp con el número de teléfono
  window.open("https://wa.me/542364675962");
});

// Agregar un listener de eventos al botón de correo electrónico
correoBtn.addEventListener("click", function() {
  // Abrir una nueva ventana del correo electrónico
  window.open("mailto:gabrieloviedo2017@outlook.com");
});


document.getElementById("telefono").onclick = function(){
  document.getElementById("telefono").innerHTML = "Teléfono: (+54) 236-4675962";
  }
  
  document.getElementById("Mail").onclick = function(){
      document.getElementById("Mail").innerHTML = "Mail: gabrieloviedo2017@outlook.com ";
      }
  