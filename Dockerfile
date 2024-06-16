FROM node:lts

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 3000

RUN npm run build
RUN npm install --global serve
CMD ["npx", "serve", "-s", "build"]


