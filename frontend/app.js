// URL de la API de alumnos.
const API_URL = 'http://127.0.0.1:5000/alumnos';

// Cuando cargue la página, mostrar los alumnos
document.addEventListener('DOMContentLoaded', obtenerAlumnos);

// Cuando se envíe el formulario, agregar alumno
document.getElementById('form-alumno').addEventListener('submit', e => {
  e.preventDefault(); // Evita que la página se recargue
  agregarAlumno();
});

// Listar alumnos
function obtenerAlumnos() {
  fetch(API_URL) // Hacer petición GET a la API
    .then(res => res.json()) // Convertir respuesta a JSON
    .then(data => {
      const tabla = document.getElementById('tabla-alumnos');
      tabla.innerHTML = ''; // Limpiar tabla antes de mostrar
      data.forEach(alumno => {
        const fila = document.createElement('tr'); // Crear fila
        fila.innerHTML = `
          <td>${alumno.id}</td>
          <td>${alumno.nombre}</td>
          <td>${alumno.apellido}</td>
          <td>${alumno.edad}</td>
          <td>
            <button class="action-btn edit" onclick="editarAlumno(${alumno.id})">Editar</button>
            <button class="action-btn delete" onclick="eliminarAlumno(${alumno.id})">Eliminar</button>
          </td>`;
        tabla.appendChild(fila); // Agregar fila a la tabla
      });
    });
}

// Agregar alumno
function agregarAlumno() {
  // Obtener datos del formulario
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const edad = document.getElementById('edad').value;

  // Enviar datos a la API (POST)
  fetch(API_URL, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ nombre, apellido, edad })
  })
  .then(res => res.json())
  .then(() => {
    document.getElementById('form-alumno').reset(); // Limpiar formulario
    obtenerAlumnos(); // Actualizar lista
  });
}

// Eliminar alumno
function eliminarAlumno(id) {
  if (!confirm(`¿Estás seguro de eliminar al alumno con ID ${id}?`)) return;
  fetch(`${API_URL}/${id}`, { method: 'DELETE' }) // Petición DELETE
    .then(() => obtenerAlumnos()); // Actualizar lista
}

// Editar alumno
function editarAlumno(id) {
  // Pedir nuevos datos al usuario
  const nombre = prompt('Nuevo nombre:');
  const apellido = prompt('Nuevo apellido:');
  const edad = prompt('Nueva edad:');
  if (!nombre || !apellido || !edad) return; // Validar datos

  // Enviar datos actualizados a la API (PUT)
  fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ nombre, apellido, edad })
  })
  .then(() => obtenerAlumnos()); // Actualizar lista
}
