
let calculosEdad = [];


function simularPOST(data) {
  calculosEdad.push(data);
}


function simularGET() {
  return calculosEdad;
}


function calcularEdad(fechaNacimiento) {
  const hoy = new Date();
  const nacimiento = new Date(fechaNacimiento);
  let edad = hoy.getFullYear() - nacimiento.getFullYear();
  const mes = hoy.getMonth() - nacimiento.getMonth();

  if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
    edad--;
  }

  return edad;
}


document.getElementById('edadForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const fecha = document.getElementById('fechaNacimiento').value;
  if (!fecha) return;

  const edad = calcularEdad(fecha);
  const resultado = `Tu edad es: ${edad} años`;

  document.getElementById('resultadoEdad').textContent = resultado;

  simularPOST({ fechaNacimiento: fecha, edad }); 
});
