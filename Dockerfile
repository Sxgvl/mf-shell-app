# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Installer pnpm
RUN npm install -g pnpm

# Copier les fichiers de configuration
COPY package.json pnpm-lock.yaml* ./

# Installer les dépendances
RUN pnpm install --frozen-lockfile

# Copier le code source
COPY . .

# Build de l'application
RUN pnpm run build

# Production stage
FROM nginx:stable-alpine

# Copier les fichiers buildés
COPY --from=builder /app/dist /usr/share/nginx/html

# Configuration nginx personnalisée pour SPA avec routing
COPY <<EOF /etc/nginx/conf.d/default.conf
server {
    listen 80;
    server_name localhost;
    location / {
        root /usr/share/nginx/html;
        index index.html index.htm;
        try_files \$uri \$uri/ /index.html;
    }
    # Headers pour CORS (nécessaire pour Module Federation)
    add_header Access-Control-Allow-Origin *;
    add_header Access-Control-Allow-Methods "GET, POST, OPTIONS";
    add_header Access-Control-Allow-Headers "DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range";
}
EOF

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]