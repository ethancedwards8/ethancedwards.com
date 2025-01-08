# https://dzone.com/articles/how-to-dockerize-reactjs-app

# Step 1

FROM alpine

RUN apk update && apk add --no-cache npm 

WORKDIR /app

COPY . /app/

RUN npm ci --install && npm run build

CMD ["npm", "run", "start"]
