# syntax=docker/dockerfile:1

FROM node:19-alpine3.16 as source

# The nodejs image was taken from the official docker hub repo.
# https://github.com/nodejs/docker-node/blob/66ec7a544dab2f8284e167075938258399a9d458/19/alpine3.16/Dockerfile
ENV NODE_VERSION=19

# Set the default environment to production, which will ignore dev 
# dependencies in the npm package file.
ENV NODE_ENV=production

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

# When launching the container PID 1 process,
# we will want to use `tini` to safely manage
# the SIGTERM and SIGINT signals.
RUN apk update \
    && apk add nginx \
    && apk add nginx-mod-http-headers-more \
    && apk --no-cache add tini

# HEALTHCHECK --interval=15s --timeout=30s --start-period=5s --retries=3 \
#             CMD [ "curl", "-f", "http://localhost:5173/healthz", "|| exit 1" ]

WORKDIR /node/service

# This is needed for the `tini` setup to work correctly.
ENTRYPOINT [ "tini", "--" ]

# dev
FROM source as dev
ENV NODE_ENV=development

# Install some helper tools when developing locally.
# RUN apk add build-base \
#     && apk add util-linux \
#     && apk add procps \
#     && apk add bash \
#     && apk add zsh \
#     && apk add htop \
#     && apk add curl \
#     && apk add git \
#     && apk add jq \
#     && apk add vim

# Connect to the `node` least privileged user provided by the
# nodejs docker image.
WORKDIR /node

# Copy over the package.json and package-lock.json to prepare
# the initial installation.
COPY package*.json .

RUN npm install \
    && npm cache clean --force \
    && chown -R node:node .

WORKDIR /node/service

COPY --chown=node:node . .

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

USER node

CMD nginx; npm run dev;

# prod
FROM source as prod
ENV NODE_ENV=production

# Connect to the `node` least privileged user provided by the
# nodejs docker image.
WORKDIR /node

# Copy over the package.json and package-lock.json to prepare
# the initial installation.
COPY package*.json .

RUN npm install --omit=dev \
    && npm cache clean --force \
    && chown -R node:node .

WORKDIR /node/service

COPY --chown=node:node . .

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

USER node

CMD nginx; npm run service;
