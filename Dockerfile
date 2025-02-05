# https://dzone.com/articles/how-to-dockerize-reactjs-app
FROM alpine

RUN apk update && apk add --no-cache pnpm 

WORKDIR /app

COPY . /app/

RUN pnpm install && pnpm run build

CMD ["pnpm", "run", "start"]
