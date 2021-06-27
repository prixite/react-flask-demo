FROM node:16
WORKDIR /opt/source/
RUN npm install --global standard
COPY . ./
