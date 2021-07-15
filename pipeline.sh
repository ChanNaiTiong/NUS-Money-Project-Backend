docker build --tag api_server .
docker images
docker run -p 3001:3001 api_server
docker ps
