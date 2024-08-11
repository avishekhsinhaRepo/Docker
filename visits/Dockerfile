FROM docker.repo1.uhc.com/gov-prog-digital/gpd-node19-alpine:latest

WORKDIR /app

COPY package.json .


RUN npm config set registry http://repo1.uhc.com/artifactory/api/npm/npm-virtual

RUN npm set strict-ssl=false 

RUN npm install

COPY . .

CMD ["npm", "start"]

