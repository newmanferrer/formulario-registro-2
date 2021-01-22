const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Formulario enviado...');
    formulario.reset();
});
