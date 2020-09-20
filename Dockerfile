# stage 1
FROM node:alpine AS builder
WORKDIR /app
COPY . .
RUN npm ci && npm run build:prod

# stage 2
FROM nginx:alpine
COPY --from=builder /app/dist/coding-challenge /usr/share/nginx/html
EXPOSE 80
