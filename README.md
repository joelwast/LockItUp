# LockItUp

LockItUp es una aplicación desarrollada en React que genera contraseñas seguras de manera rápida y sencilla. Diseñada para ejecutarse en GitHub Pages, ofrece una interfaz intuitiva y opciones personalizables para adaptarse a las necesidades del usuario.

## Características
- **Generación de contraseñas seguras** con diferentes niveles de complejidad.
- **Opciones personalizables**: longitud, uso de números, letras mayúsculas, minúsculas y caracteres especiales.
- **Interfaz sencilla y responsiva**, optimizada para dispositivos móviles y de escritorio.
- **Funciona en GitHub Pages**, sin necesidad de instalaciones adicionales.

## Requisitos
- Un navegador web compatible.

## Uso
1. Accede a la aplicación en GitHub Pages: [Enlace a la app](https://joelwast.github.io/LockItUp/)
2. Configura las opciones de la contraseña según tus preferencias.
3. Genera una contraseña segura con un solo clic.
4. Copia y usa tu nueva contraseña de manera segura.

## Instalación y Desarrollo
Si deseas ejecutar la aplicación localmente:
1. Clona el repositorio:
   ```bash
   git clone https://github.com/joelwast/LockItUp.git
   cd LockItUp
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia el entorno de desarrollo:
   ```bash
   npm start
   ```

## Despliegue en GitHub Pages
Para desplegar la aplicación en GitHub Pages:
1. Asegúrate de tener instalado `gh-pages`:
   ```bash
   npm install gh-pages --save-dev
   ```
2. Agrega las siguientes líneas en `package.json`:
   ```json
   "homepage": "https://tu-usuario.github.io/LockItUp/",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Ejecuta el comando de despliegue:
   ```bash
   npm run deploy
   ```

## Contribución
Si quieres contribuir, realiza un fork del repositorio y envía un pull request con tus mejoras.

## Licencia
Este proyecto está bajo la licencia MIT.

---
Desarrollado por joelwast.

