### expressjs-serverhostname-docker

### flow

- You modify the server.js as you wish, such as print out server's hostname
- You go to either MacOS or Windows
- You build a Docker image for your OS/Architecture
- You push your image to DockerHub 
- You pull it on either AWS/EKS or GCP/GKE 
- You test it to see the load balancing taking effects
- Done!

### How to build a docker image and push 

```
[Windows]
docker build -t uopsdod/k8s-hostname-buyer-amd64 --no-cache .
docker stop c001 && docker rm c001
docker run -d -p 8080:80 --name c001 uopsdod/k8s-hostname-buyer-amd64
curl http://localhost:8080
docker push uopsdod/k8s-hostname-buyer-amd64
(result: https://hub.docker.com/repository/docker/uopsdod/k8s-hostname-buyer-amd64)
```

```
[MacOS]
docker build -t uopsdod/k8s-hostname-buyer-arm64 --no-cache .
docker stop c001 && docker rm c001
docker run -d -p 8080:80 --name c001 uopsdod/k8s-hostname-buyer-arm64
curl http://localhost:8080
docker push uopsdod/k8s-hostname-buyer-arm64
(result: https://hub.docker.com/repository/docker/uopsdod/k8s-hostname-buyer-arm64)
```

### reference (Nodejs + ExpressJS + Docker)
https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
