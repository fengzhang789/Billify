ARG NODE_VERSION=20.10.0
FROM node:${NODE_VERSION}-alpine
ENV NODE_ENV production

# SERVER
WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD npm start
