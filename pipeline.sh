docker build --tag api_server1 .
docker images
docker run -p 3001:3001 api_server1
docker ps
