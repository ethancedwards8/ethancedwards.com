# https://dzone.com/articles/how-to-dockerize-reactjs-app

# Step 1

FROM alpine

RUN apk update && apk install node

RUN mkdir /app

WORKDIR /app

COPY package* /app/

RUN npm ci --install

COPY . /app/

RUN npm run build

CMD ["npm", "run", "start"]
