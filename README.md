# CRUD de Alumnos con Backend en Flask y Base de Datos PostgreSQL

Este proyecto es una aplicación CRUD (Crear, Leer, Actualizar y Eliminar) que permite gestionar un listado de alumnos. Está dividido en dos partes independientes: un backend desarrollado con Flask y conectado a una base de datos PostgreSQL, y un frontend simple hecho con HTML, CSS y JavaScript.

## Características del Proyecto

### Backend (API REST con Flask)

- Desarrollado con Flask.
- Conectado a una base de datos PostgreSQL.
- Las credenciales de conexión (host, puerto, usuario, contraseña, nombre de la base de datos) se gestionan mediante variables de entorno para mayor seguridad.
- Expone una API RESTful con las siguientes rutas:
  - GET /alumnos – Listar todos los alumnos.
  - POST /alumnos – Agregar un nuevo alumno.
  - PUT /alumnos/<id> – Modificar un alumno existente.
  - DELETE /alumnos/<id> – Eliminar un alumno por su ID.
  - (opcional) GET /alumnos/<id> – Buscar alumno por ID.

### Frontend (HTML + CSS + JS)

- Aplicación completamente independiente del backend.
- Compuesta por archivos estáticos: index.html, styles.css y app.js.
- Se comunica con la API del backend exclusivamente mediante peticiones HTTP usando fetch().
- Funcionalidades implementadas desde el navegador:
  - Listar alumnos.
  - Agregar nuevos alumnos.
  - Editar alumnos existentes.
  - Eliminar alumnos.

## Instrucciones de Uso

### 1. Clonar el repositorio
```bash
git clone https://github.com/tu_usuario/crud-proyecto.git
```

### 2. Backend

#### a. Crear y activar entorno virtual
```bash
cd backend
python -m venv venv
source venv/bin/activate  # en Windows: venv\Scripts\activate
```

#### b. Instalar dependencias
```bash
pip install -r requirements.txt
```

#### c. Configurar las variables de entorno

Crear un archivo .env con el siguiente contenido (ajusta tus datos):

```
DB_HOST=localhost
DB_PORT=5432
DB_NAME=nombre_basedatos
DB_USER=usuario
DB_PASSWORD=contraseña
```

#### d. Iniciar el servidor
```bash
flask run
```

### 3. Frontend

Abrir el archivo index.html en tu navegador. Asegúrate de que el backend esté corriendo en http://127.0.0.1:5000 (o ajusta app.js con la URL correcta).

## Requisitos

- Python 3.x
- PostgreSQL
- Navegador moderno (Chrome, Firefox, etc.)

## Jéraldyn Roxana Acevedo Jácome
