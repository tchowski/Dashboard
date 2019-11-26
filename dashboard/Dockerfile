FROM node:latest
COPY . /app
WORKDIR /app
RUN npm install && npm install -g sails
EXPOSE 8080
CMD ["sails", "lift", "--port", "8080"]