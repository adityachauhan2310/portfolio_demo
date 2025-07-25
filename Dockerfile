FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . . 

RUN npm run build

CMD ["cp", "-r", "dist", "/output"]

