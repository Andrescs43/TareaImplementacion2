# Se utiliza la imagen de node 14
FROM node:14
# Se crea un directorio de trabajo
WORKDIR /usr/src/app
# Se copian los archivos
COPY package*.json ./
# Se instalan las dependencias
RUN npm install
# Se copian los archivos
COPY . .
# Se expone el puerto 3001 para acceder al servidor de clientes
EXPOSE 3001
# Se ejecuta el comando para iniciar el servidor de clientes
CMD ["node", "server.js"]
