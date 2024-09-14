FROM node:22-alpine

WORKDIR /app

ADD package*.json ./

RUN npm install

ADD . .

RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]
