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
# Se expone el puerto 3004 para acceder al servidor de pagos
EXPOSE 3004
# Se ejecuta el comando para iniciar el servidor de pagos
CMD ["node", "server.js"]
