FROM node:18
WORKDIR /usr/src/sarah-subankingapplication
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000:3000
CMD [ "node", "server.js" ]