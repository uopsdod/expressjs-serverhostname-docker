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
[Windows, MacOS, Linux][amd][beta]
docker build --build-arg STAGE=beta -t uopsdod/k8s-hostname-amd64-beta --no-cache .
docker stop c001 && docker rm c001
docker run -d -p 80:80 --name c001 uopsdod/k8s-hostname-amd64-beta
curl http://localhost:80
curl http://localhost:80?process_ms=3000
./loadtesting.sh "localhost:80?process_ms=2000" 3
docker push uopsdod/k8s-hostname-amd64-beta
```

```
[Windows, MacOS, Linux][amd][prod]
docker build --build-arg STAGE=prod -t uopsdod/k8s-hostname-amd64-prod --no-cache .
docker stop c001 && docker rm c001
docker run -d -p 80:80 --name c001 uopsdod/k8s-hostname-amd64-prod
curl http://localhost:80
curl http://localhost:80?process_ms=3000
./loadtesting.sh "localhost:80?process_ms=2000" 3
docker push uopsdod/k8s-hostname-amd64-prod
```

### reference (Nodejs + ExpressJS + Docker)
https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
