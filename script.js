
// Espera a que el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  // Escuchamos el clic del botón
  const boton = document.getElementById('calcular');

  boton.addEventListener('click', () => {
    const tipoMueble = parseFloat(document.getElementById('tipoMueble').value) || 0;
    const medidas = parseFloat(document.getElementById('medidas').value) || 1;
    const material = parseFloat(document.getElementById('material').value) || 1;
    const envio = document.getElementById('envio').checked ? 50000 : 0;

    const total = (tipoMueble * medidas * material) + envio;
    const valorFormateado = total.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });

    document.getElementById('valorTotal').textContent = valorFormateado;
  });
});
