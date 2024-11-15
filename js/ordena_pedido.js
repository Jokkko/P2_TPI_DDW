document.addEventListener('DOMContentLoaded', function() {
    // Mover todas las funciones dentro del DOMContentLoaded
    function decrementarCantidad(btn) {
        const input = btn.parentElement.querySelector('.cantidad-input');
        const card = btn.closest('.hamburguesa-card');
        if (parseInt(input.value) > 0) {
            input.value = parseInt(input.value) - 1;
            actualizarTotal();
            actualizarEstiloCard(card, input.value);
        }
    }

    function incrementarCantidad(btn) {
        const input = btn.parentElement.querySelector('.cantidad-input');
        const card = btn.closest('.hamburguesa-card');
        input.value = parseInt(input.value) + 1;
        actualizarTotal();
        actualizarEstiloCard(card, input.value);
    }

    function actualizarEstiloCard(card, value) {
        if (parseInt(value) > 0) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    }

    function actualizarTotal() {
        let total = 0;
        const precioSpan = document.querySelector('#precio span');
        const hamburguesaSpan = document.getElementById('hamburguesa');
        const sideSpan = document.getElementById('side');
        const bebidaSpan = document.getElementById('bebida');

        // Limpiar resúmenes anteriores
        hamburguesaSpan.textContent = '';
        sideSpan.textContent = '';
        bebidaSpan.textContent = '';

        // Buscar por los títulos de las secciones (h3 con clase hamburguesas-title)
        document.querySelectorAll('.hamburguesas-title').forEach(title => {
            const section = title.closest('section');
            
            if (title.textContent === 'Hamburguesas') {
                section.querySelectorAll('.hamburguesa-card').forEach(card => {
                    const input = card.querySelector('.cantidad-input');
                    if (input) {
                        const cantidad = parseInt(input.value);
                        if (cantidad > 0) {
                            const precio = parseInt(input.dataset.precio);
                            const nombre = card.querySelector('h3').textContent;
                            total += cantidad * precio;
                            hamburguesaSpan.textContent += `${nombre} x${cantidad}, `;
                        }
                    }
                });
            }
            else if (title.textContent === 'Sides/Acompañamientos') {
                section.querySelectorAll('.hamburguesa-card').forEach(card => {
                    const input = card.querySelector('.cantidad-input');
                    if (input) {
                        const cantidad = parseInt(input.value);
                        if (cantidad > 0) {
                            const precio = parseInt(input.dataset.precio);
                            const nombre = card.querySelector('h3').textContent;
                            total += cantidad * precio;
                            sideSpan.textContent += `${nombre} x${cantidad}, `;
                        }
                    }
                });
            }
            else if (title.textContent === 'Bebidas') {
                section.querySelectorAll('.hamburguesa-card').forEach(card => {
                    const input = card.querySelector('.cantidad-input');
                    if (input) {
                        const cantidad = parseInt(input.value);
                        if (cantidad > 0) {
                            const precio = parseInt(input.dataset.precio);
                            const nombre = card.querySelector('h3').textContent;
                            total += cantidad * precio;
                            bebidaSpan.textContent += `${nombre} x${cantidad}, `;
                        }
                    }
                });
            }
        });

        // Eliminar la última coma y espacio de cada lista
        hamburguesaSpan.textContent = hamburguesaSpan.textContent.replace(/, $/, '');
        sideSpan.textContent = sideSpan.textContent.replace(/, $/, '');
        bebidaSpan.textContent = bebidaSpan.textContent.replace(/, $/, '');

        // Actualizar el precio total
        precioSpan.textContent = `$${total.toLocaleString()}`;
        precioSpan.className = 'horario';
    }

    // Manejador separado para sucursales
    document.querySelectorAll('.sucursal-radio').forEach(radio => {
        radio.addEventListener('change', function() {
            const sucursalSpan = document.getElementById('sucursal');
            const direccionSpan = document.getElementById('direccion');
            
            if (this.checked) {
                sucursalSpan.textContent = this.value;
                direccionSpan.textContent = this.dataset.direccion;
            }
        });
    });

    // Manejador para tipo de entrega
    document.querySelectorAll('.entrega-radio').forEach(radio => {
        radio.addEventListener('change', function() {
            const entregaSpan = document.getElementById('entrega');
            if (this.checked) {
                entregaSpan.textContent = this.value;
            }
        });
    });

    // Manejador para medio de pago
    document.querySelectorAll('.pago-radio').forEach(radio => {
        radio.addEventListener('change', function() {
            const pagoSpan = document.getElementById('pago');
            if (this.checked) {
                pagoSpan.textContent = this.value;
            }
        });
    });

    // Hacer las funciones disponibles globalmente
    window.decrementarCantidad = decrementarCantidad;
    window.incrementarCantidad = incrementarCantidad;
    window.actualizarTotal = actualizarTotal;

    // Agregar el event listener para el formulario
    document.querySelector('form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('¡Pedido enviado!');
        location.reload();
    });
});