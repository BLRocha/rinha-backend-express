FROM node
WORKDIR /app
COPY . /app

RUN rm -rf /app/node_modules && cd /app && npm i
ENV PORT=3000 HOST='0.0.0.0'
EXPOSE 3000
ENTRYPOINT node server.js