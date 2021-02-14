FROM node:lts
WORKDIR /usr/src/api-task-manager
COPY . .
RUN npm install pm2 -g
RUN npm install --only-prod
EXPOSE 5000
CMD npm run prod