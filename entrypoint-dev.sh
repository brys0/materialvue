#!/bin/sh

nginx

if [ "$VITE_MODE" = "development" ]; then
    npm run watch
elif [ "$VITE_MODE" = "test" ]; then
    npm run dev
fi