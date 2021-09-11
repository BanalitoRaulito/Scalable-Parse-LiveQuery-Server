FROM node:12-alpine as builder

WORKDIR /usr/src/app
COPY package.json .
RUN npm install
COPY . .

EXPOSE 1337

CMD ["node", "index"]
