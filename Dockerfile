# syntax=docker/dockerfile:1.3

FROM node:20.18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3131

CMD [ "npm", "start"]
