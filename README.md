# PawTrip - Backend
PawTrip es una aplicación web Full Stack orientada a personas que viajan con mascotas y buscan lugares pet-friendly para explorar. La plataforma permite a los usuarios descubrir y consultar distintos destinos adaptados para animales, gestionar su perfil personal y el de su mascota, realizar reservas, y más

## Tecnologías
- Node.js, Express.js
- MongoDB + Mongoose
- JWT, Bcrypt
- Nodemailer, Node-cron, etc.

## Instalación y Ejecución
1. Clonar repo
2. Instalar dependencias: `npm install`
3. Ejecutar:
 `npm start`

## Licencia
Este proyecto está bajo la licencia ISC License

## Endpoints 

userRouter:
- `GET /user/` Obtener todos los usuarios
- `GET /user/:id` Obtener un usuario por su ID

- `POST /user/login` Iniciar sesión, login 
- `POST /user/register` Registrar nuevo usuario
- `POST /user/register/admin` Registrar un usuario con role "admin"

- `PATCH /user/modify/:id` Modificar usuario existente

- `PUT /user/addBooking` Añadir reserva al usuario (requiere token)
- `PUT /user/RemoveBooking` Eliminar reserva del usuario (require token)

- `DELETE /user/delete` Eliminar un usuario 

placesRouter:
- `GET /places/` Obtener todos los lugares 
- `GET /places/detail/:id` Obtener detalle del lugar por ID

- `POST /places/create` Crear nuevo lugar (solo admin, requiere token de administrador)

- `DELETE /places/delete/:id` Eliminar lugar por ID (solo admin, requiere token de administrador)

## Autor
María de Yllescas
GitHub: https://github.com/Mariaady