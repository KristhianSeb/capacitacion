const formulario = document.getElementById('formulario');
const listaMensajes = document.getElementById('lista-mensajes');

const API_URL = 'http://localhost:3000/mensajes';

formulario.addEventListener('submit', async (e) => {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const mensaje = document.getElementById('mensaje').value;

  const nuevoMensaje = { nombre, mensaje };

  await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(nuevoMensaje)
  });

  formulario.reset();
  cargarMensajes();
});

async function cargarMensajes() {
  const res = await fetch(API_URL);
  const mensajes = await res.json();

  listaMensajes.innerHTML = '';
  mensajes.forEach(msg => {
    const li = document.createElement('li');
    li.textContent = `${msg.nombre}: ${msg.mensaje}`;
    listaMensajes.appendChild(li);
  });
}

cargarMensajes();
