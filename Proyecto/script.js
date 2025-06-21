document.addEventListener('DOMContentLoaded', () => {
  const enlaces = document.querySelectorAll('.menu a[data-section]');
  const secciones = document.querySelectorAll('main section');

  function mostrarSeccion(id) {
    secciones.forEach(seccion => {
      if (seccion.id === id) {
        seccion.classList.add('activa');
      } else {
        seccion.classList.remove('activa');
      }
    });
  }

  // Evento para cambiar de sección
  enlaces.forEach(enlace => {
    enlace.addEventListener('click', e => {
      e.preventDefault();
      const seccion = enlace.getAttribute('data-section');
      mostrarSeccion(seccion);
      localStorage.setItem('seccionActiva', seccion);
    });
  });

  // Mostrar la sección guardada (o la primera)
  const guardada = localStorage.getItem('seccionActiva') || 'resumen';
  mostrarSeccion(guardada);
});
