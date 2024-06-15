FROM node:18-alpine

RUN npm install -g pm2
RUN npm install -g yarn

WORKDIR /app

COPY package*.json ./
RUN yarn install

COPY . .

RUN yarn run build
RUN yarn prune

# 포트 노출
EXPOSE 8080

# 애플리케이션 실행
CMD ["pm2-runtime", "yarn start:prod", "ecosystem.config.js", "--only", "jeomaechoo", "--env", "prod"]