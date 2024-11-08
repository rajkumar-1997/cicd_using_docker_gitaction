FROM node:lts-alpine

WORKDIR /app

COPY package*.json  ./

RUN npm install

COPY  ./ ./

RUN npx prisma generate

CMD ["npm","run","start"]