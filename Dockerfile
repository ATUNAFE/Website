FROM node:18.17.0

WORKDIR /app

RUN yarn global add gatsby-cli && \
    yarn global add prettier

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 8000

CMD ["gatsby", "develop", "-H", "0.0.0.0"]