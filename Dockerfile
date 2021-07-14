FROM alpine

WORKDIR /code

COPY . /code

RUN npm install --save mysql express cors body-parser

CMD ["sh", "/code/start.sh"]