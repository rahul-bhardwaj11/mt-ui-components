# extend official node image
FROM node:8.6-alpine

# ensure installation
RUN node -v; npm -v

