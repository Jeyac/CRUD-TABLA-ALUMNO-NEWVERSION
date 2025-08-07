# Frontend del sistema CRUD de alumnos

Este proyecto representa la parte del frontend de un sistema CRUD para gestionar alumnos. Está desarrollado con tecnologías web como HTML, CSS y JavaScript, y se comunica con el backend a través de una API REST construida con Flask.

## Estructura del proyecto

- **templates/index.html**: interfaz principal de usuario donde se muestran y gestionan los alumnos.
- **static/css/estilos.css**: estilos personalizados para la presentación visual del sitio.
- **static/js/funciones.js**: contiene la lógica del lado del cliente, incluyendo las llamadas a la API para realizar operaciones CRUD.

## Características

- Interfaz moderna y responsiva.
- Comunicación con el backend a través de `fetch` y JSON.
- CRUD completo: agregar, visualizar, editar y eliminar alumnos.
- Código organizado por funcionalidad (estructura, estilo y lógica separados).

## Requisitos

- Tener el backend corriendo localmente en `http://127.0.0.1:5000` o la URL correspondiente.
- Un navegador web actualizado (Chrome, Firefox, Edge, etc.).

## Cómo usarlo

1. Abre el archivo `index.html` directamente desde tu navegador (doble clic o botón derecho → abrir con...).
2. La página cargará y mostrará automáticamente los datos si el backend está activo.
3. Usa la interfaz para agregar, editar o eliminar registros, que se reflejarán en la base de datos a través de la API.

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript (vanilla)
- API REST (comunicación con Flask)
