window.onload = init;

function init() {
    // 1. Referencias a elementos
    const campoClave = document.querySelector('.clave');
    const teclas = document.querySelectorAll('.tecla');

    // 2. Agregar event listeners a cada tecla
    teclas.forEach(tecla => {
        tecla.addEventListener('click', function () {
            if (this.value === 'Borrar') {
                // Eliminar último carácter del valor 
                campoClave.value = campoClave.value.slice(0, -1);
            } else {
                // Agregar número al campo de la clave 
                // concatenado con el numero ingresado actualmente
                campoClave.value += this.value;
            }
        });
    });

    console.log("Teclado virtual inicializado correctamente");
    alert("Teclado listo para usar");
}