FROM node:24-alpine
WORKDIR /app
COPY package.json .
RUN npm i --verbose
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev", "--", "--host"]