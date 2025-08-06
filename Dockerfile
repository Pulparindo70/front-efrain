# Etapa 1: Build de la app
FROM node:18 AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa 2: Servir con NGINX
FROM nginx:alpine

# Copiar archivos de build al contenedor final
COPY --from=build /app/dist /usr/share/nginx/html

# Opcional: si usas Vue Router modo history, puedes descomentar esto:
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
