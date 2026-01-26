window.onload = init;

function init() {
    const campoClave = document.querySelector('.clave');
    const teclado = document.getElementById('teclado');
    const teclas = Array.from(document.querySelectorAll('.tecla'));
    const mensaje = document.getElementById('mensaje');

    const CLAVE_CORRECTA = "1456";

    const teclasNumeros = teclas.filter(t =>
        t.value !== 'Borrar' && t.value !== 'Aceptar'
    );
    const teclaBorrar = teclas.find(t => t.value === 'Borrar');
    const teclaAceptar = teclas.find(t => t.value === 'Aceptar');

    let numeros = teclasNumeros.map(t => t.value);

    reasignarNumeros();

    // HOVER SOBRE TODO EL TECLADO
    teclado.addEventListener('mouseenter', () => {
        teclasNumeros.forEach(tecla => tecla.value = '*');
        teclaBorrar.value = '*';
        // Aceptar NO se oculta
    });

    teclado.addEventListener('mouseleave', () => {
        teclasNumeros.forEach(tecla => {
            tecla.value = tecla.dataset.valorReal;
        });
        teclaBorrar.value = 'Borrar';
        teclaAceptar.value = 'Aceptar';
    });

    // CLICK
    teclas.forEach(tecla => {
        tecla.addEventListener('click', () => {

            if (tecla === teclaBorrar) {
                campoClave.value = campoClave.value.slice(0, -1);
            }
            else if (tecla === teclaAceptar) {
                validarClave();
            }
            else {
                if (campoClave.value.length < 4) {
                    campoClave.value += tecla.dataset.valorReal;
                }
            }

            reasignarNumeros();
        });
    });

    function validarClave() {
        if (campoClave.value === CLAVE_CORRECTA) {
            mensaje.textContent = "✅ Acceso concedido";
            mensaje.style.color = "green";
        } else {
            mensaje.textContent = "❌ Clave incorrecta";
            mensaje.style.color = "red";
        }

        campoClave.value = "";
    }

    function reasignarNumeros() {
        let mezcla = [...numeros];

        for (let i = mezcla.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [mezcla[i], mezcla[j]] = [mezcla[j], mezcla[i]];
        }

        teclasNumeros.forEach((tecla, index) => {
            tecla.dataset.valorReal = mezcla[index];
            tecla.value = mezcla[index];
        });

        teclaBorrar.value = 'Borrar';
        teclaAceptar.value = 'Aceptar';
    }
}
