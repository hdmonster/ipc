# Use an official Node.js runtime as the base image
FROM node:alpine

WORKDIR /frontend

COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the entire application to the container

COPY . .

RUN npm run build

EXPOSE 1604

CMD [ "npm", "run", "dev"]