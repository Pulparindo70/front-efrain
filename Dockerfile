FROM node:18 AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa 2: Producción con NGINX
FROM nginx:alpine

# Copiar archivos de construcción al contenedor final
COPY --from=build /app/build /usr/share/nginx/html

# Opcional: reemplazar configuración por defecto de NGINX si usas React o Vue Router
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "npm", "run",]