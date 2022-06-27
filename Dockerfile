# https://dzone.com/articles/how-to-dockerize-reactjs-app

# Step 1

FROM alpine

RUN mkdir /app

WORKDIR /app

COPY . /app/

RUN apk update && apk add --no-cache npm && npm ci --install && npm run build

CMD ["npm", "run", "start"]
