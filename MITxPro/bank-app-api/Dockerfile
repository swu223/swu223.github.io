FROM node:18
WORKDIR /usr/src/bank-app-api
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3001:3001
CMD [ "node", "server.mjs" ]