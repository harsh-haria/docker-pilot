FROM node:19-alpine

COPY package.json /app/
COPY src /app/

WORKDIR /app

RUN 'DOCKER STARTING'
RUN npm install
RUN 'DOCKER NOW RUNNING'

CMD [ "node", "server.js" ]