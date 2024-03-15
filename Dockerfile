FROM node:21.7.1-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY . .
ENV PORT=3000
EXPOSE $PORT
CMD ["npm", "start"]
# CMD ["node", "main.js"]