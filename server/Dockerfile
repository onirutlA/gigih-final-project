FROM node:lts-alpine

WORKDIR /home/app

COPY package.json /home/app
RUN yarn install && yarn cache clean
COPY . /home/app
EXPOSE 3000
CMD [ "node", "./src/index.js" ]
