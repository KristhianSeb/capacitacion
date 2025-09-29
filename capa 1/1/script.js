const mensajes = [];

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;
  const mensaje = document.getElementById("mensaje").value;

  if (nombre && correo && mensaje) {
    // Simula el envío a una API
    mensajes.push({ nombre, correo, mensaje });

    alert("¡Formulario enviado correctamente!");
    console.log("Mensajes guardados:", mensajes);

    document.getElementById("contactForm").reset();
  } else {
    alert("Por favor, completa todos los campos.");
  }
});
