FROM node:16.13.2-alpine3.15 AS development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install glob rimraf

RUN npm i

COPY . .

RUN npm run build
