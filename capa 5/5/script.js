const API_URL = 'http://localhost:3000/estudiantes';

document.getElementById('formulario').addEventListener('submit', async (e) => {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const edad = parseInt(document.getElementById('edad').value);
  const curso = document.getElementById('curso').value;

  const nuevoEstudiante = { nombre, edad, curso };

  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(nuevoEstudiante)
    });

    if (!res.ok) throw new Error('No se pudo guardar el estudiante');

    alert('Estudiante registrado correctamente');
    e.target.reset();
  } catch (error) {
    console.error('Error al guardar:', error);
    alert('Hubo un problema al guardar el estudiante');
  }
});
