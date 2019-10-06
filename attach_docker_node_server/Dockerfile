FROM node:10.16.3-alpine
RUN apk update && apk add bash
WORKDIR /
COPY . /
RUN npm ci
EXPOSE 1357

ENTRYPOINT [ "npm", "start" ]