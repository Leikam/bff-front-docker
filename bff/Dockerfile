FROM node:24-alpine
WORKDIR /app
RUN npm i -g nodemon
COPY package.json .
RUN npm i
COPY . .
EXPOSE 3000
CMD ["npm", "run", "start"]