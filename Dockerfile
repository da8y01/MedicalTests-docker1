FROM node:14

WORKDIR /webapp1

COPY package.json .
RUN npm install

COPY . .

CMD ["node", "app.js"]
