FROM node:lts-buster-slim
COPY package.json /usr/app/
COPY package-lock.json /usr/app/
COPY src/ /usr/app/src/
COPY public/ /usr/app/public/
WORKDIR /usr/app/
RUN npm install
CMD npm start
