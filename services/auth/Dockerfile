FROM node:16-alpine

ENV CI=true

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install --silent

COPY . .

RUN yarn build

EXPOSE 4242
CMD ["npm", "start"]
