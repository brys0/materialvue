#!/bin/sh

mkdir -p dist
touch dist/server.js

nginx
npm run watch