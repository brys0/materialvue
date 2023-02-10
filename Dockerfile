# syntax=docker/dockerfile:1

FROM node:19-alpine3.17 as source

# The nodejs image was taken from the official docker hub repo.
# https://github.com/nodejs/docker-node/blob/f996e97a2e6d2aae2de3b869e083a253733f07a8/19/alpine3.17/Dockerfile
ENV NODE_VERSION=19

# obtain private packages, ensure that biuld runs --squash for security and
# make sure to delete the .npmrc file immediately once done the installation
ARG CREATED_DATE=not-set
ARG SOURCE_COMMIT=not-set

LABEL org.opencontainers.image.authors=daniel@cosmicverse.org
LABEL org.opencontainers.image.createdAt=${CREATED_DATE}
LABEL org.opencontainers.image.revision=${SOURCE_COMMIT}
LABEL org.opencontainers.image.title="Domain Template Dockerfile"
LABEL org.opencontainers.image.url=not-set_use_docker-hub-url
LABEL org.opencontainers.image.source=not-github-url
LABEL org.opencontainers.image.licenses=UNLICENSED
LABEL org.cosmicverse.nodeversion=${NODE_VERSION}

RUN apk update \
    && apk add nginx \
    && apk add nginx-mod-http-headers-more \
    && apk --no-cache add tini

# When launching the container PID 1 process,
# we will want to use `tini` to safely manage
# the SIGTERM and SIGINT signals.
ENTRYPOINT [ "tini", "--" ]

WORKDIR /node

COPY package*.json .

RUN mkdir -p /node/logs \
    && mkdir -p /node/cache \
    && mkdir -p /etc/nginx/inc.d \
    && rm /etc/nginx/http.d/default.conf

COPY ./config/nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./config/nginx/http.d/* /etc/nginx/http.d
COPY ./config/nginx/inc.d/* /etc/nginx/inc.d

RUN chown -R node:node /etc/nginx/http.d \
    && chown -R node:node /etc/nginx/inc.d \
    && touch /var/run/nginx.pid \
    && chown -R node:node /var/run/nginx.pid \
    && touch /node/logs/error.log \
    && chown -R node:node /node \
    && mkdir -p /var/lib/nginx/tmp /var/log/nginx \
    && chown -R node:node /var/lib/nginx /var/log/nginx \
    && chmod -R 755 /var/lib/nginx /var/log/nginx

# dev
FROM source as dev
ENV NODE_ENV=development

# Install some helper tools when developing locally.
#RUN apk add build-base \
#    && apk add util-linux \
#    && apk add procps \
#    && apk add bash \
#    && apk add zsh \
#    && apk add htop \
#    && apk add curl \
#    && apk add git \
#    && apk add jq \
#    && apk add vim

RUN npm install \
    && npm cache clean --force \
    && chown -R node:node .

WORKDIR /node/service

COPY --chown=node:node . .

USER node

CMD ./entrypoint-dev.sh

# test
FROM source as test
ENV NODE_ENV=development

RUN npm install \
    && npm cache clean --force \
    && chown -R node:node .

WORKDIR /node/service

COPY --chown=node:node . .

CMD ./entrypoint-test.sh

# release
FROM source as release
ENV NODE_ENV=production

RUN npm install --omit=dev \
    && npm cache clean --force \
    && chown -R node:node .

WORKDIR /node/service

COPY --chown=node:node . .

USER node

CMD ./entrypoint-release.sh