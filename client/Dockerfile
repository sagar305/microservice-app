FROM node:18-alpine

ENV CI=true
ENV WDS_SOCKET_PORT=3000

WORKDIR /app
COPY package.json ./
RUN npm install
COPY ./ ./

CMD ["npm", "start"]