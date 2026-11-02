FROM node:24

WORKDIR /app

ENTRYPOINT [ "node", "/app/server.js" ]