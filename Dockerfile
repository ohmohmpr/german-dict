FROM node:14.15.4
ENV NODE_ENV=production

WORKDIR /myapp

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY . .
CMD ["npm", "run", "devStart"]
