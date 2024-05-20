FROM node:18
WORKDIR /sarah-subankingapplication
COPY public/ /sarah-subankingapplication/
COPY src/ /sarah-subankingapplication/
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000:3000
CMD [ "npm", "start" ]