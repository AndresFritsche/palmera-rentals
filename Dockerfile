FROM node:20

EXPOSE 8080

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx prisma generate


CMD ["npm", "run", "dev"]

