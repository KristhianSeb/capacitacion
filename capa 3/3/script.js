
let opiniones = [];


function simularPOST(opinionData) {
  opiniones.push(opinionData);
}


function simularGET() {
  return opiniones;
}


function mostrarOpiniones() {
  const tbody = document.querySelector('#tablaOpiniones tbody');
  tbody.innerHTML = ''; 

  const datos = simularGET(); 

  datos.forEach((item, index) => {
    const fila = document.createElement('tr');
    fila.innerHTML = `
      <td>${index + 1}</td>
      <td>${item.nombre}</td>
      <td>${item.opinion}</td>
    `;
    tbody.appendChild(fila);
  });
}


function limpiarFormulario() {
  document.getElementById('nombre').value = '';
  document.getElementById('opinion').value = '';
}


document.getElementById('opinionForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value.trim();
  const opinion = document.getElementById('opinion').value.trim();

  if (nombre && opinion) {
    const nuevaOpinion = { nombre, opinion }; 
    simularPOST(nuevaOpinion);               
    mostrarOpiniones();                      
    limpiarFormulario();                     
  }
});
