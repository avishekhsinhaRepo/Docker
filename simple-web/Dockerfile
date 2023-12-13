FROM docker.repo1.uhc.com/gov-prog-digital/gpd-node19-alpine:latest

WORKDIR /usr/src/app

COPY . /usr/src/app

#RUN rm -f package-lock.json yarn.lock


RUN npm install

CMD [ "npm","start" ]