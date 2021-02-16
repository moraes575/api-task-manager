FROM node:lts
WORKDIR /usr/src/api-task-manager
COPY . .
RUN npm install pm2 -g && npm install --only=prod
CMD npm run prod