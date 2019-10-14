FROM node:10.15-alpine
WORKDIR /
RUN apk update && apk add bash
COPY . /
RUN npm ci

ENTRYPOINT [ "npm", "start" ]