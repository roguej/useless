FROM node:lts-buster-slim
COPY src/ /usr/app/src/
COPY public/ /usr/app/public/
CMD npm start