# Estágio 1: Build
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install

# Estágio 2: Execução (Imagem Final)
FROM node:18-alpine
WORKDIR /app

RUN addgroup -S nodegroup && adduser -S nodeuser -G nodegroup
USER nodeuser

COPY --from=builder /app/node_modules ./node_modules
COPY . .

EXPOSE 3000

CMD ["npm", "start"]