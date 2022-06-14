FROM node:latest

CMD yarn dev

# App setup
RUN mkdir -p /usr/app
WORKDIR /usr/app
COPY . /usr/app
RUN yarn install
EXPOSE 3333

# App entrypoint
ENTRYPOINT [ "yarn", "start" ]