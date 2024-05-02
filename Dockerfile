# Utiliza una imagen base de Node.js con Alpine
FROM node:alpine

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json (si está disponible)
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el código fuente del proyecto al contenedor
COPY . .

# Expone el puerto que tu aplicación utilizará
EXPOSE 5174

# Comando para iniciar tu aplicación
CMD [ "npm", "run", "dev" ]