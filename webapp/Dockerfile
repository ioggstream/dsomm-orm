FROM node:latest

COPY . /app
WORKDIR /app
RUN npm install

ENTRYPOINT npm run start:prod
