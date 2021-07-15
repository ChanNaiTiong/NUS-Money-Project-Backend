FROM ubuntu:18.04

EXPOSE 3001

RUN apt-get update

RUN apt-get install -y nodejs npm

WORKDIR /code

COPY package.json /code/package.json

RUN npm install --save mysql express cors body-parser

COPY . /code

CMD ["sh", "/code/start.sh"]