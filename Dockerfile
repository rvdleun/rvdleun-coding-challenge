# Build the Angular application
FROM node:alpine AS builder
WORKDIR /app
COPY . .
RUN npm ci && npm run build:prod

# Setup nginx
FROM nginx:alpine
COPY --from=builder /app/dist/coding-challenge /usr/share/nginx/html
EXPOSE 80
