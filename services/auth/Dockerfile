FROM node:16-alpine as builder

ENV CI=true

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install --silent

COPY ./ ./

RUN yarn build

FROM node:16-alpine as app
WORKDIR /app
COPY --from=builder /app/dist/ ./
COPY --from=builder /app/package.json ./
COPY --from=builder /app/yarn.lock ./
COPY --from=builder /app/ormconfig.json ./
RUN yarn install --silent --production
CMD [ "node", "./index.js" ]