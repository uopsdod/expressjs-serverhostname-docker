FROM node:16
ARG STAGE
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# replace environment variable
RUN sed -i "s|replaced_this_with_stage|${STAGE}|g" ./server.js


EXPOSE 8080
CMD [ "node", "server.js" ]

