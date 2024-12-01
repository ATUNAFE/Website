#!/bin/sh

if [[ -z "$(docker ps -a -q -f name="gatsby")" ]]; then
    docker build -f Dockerfile.prod -t gatsby-prod:1.0 .
    docker run -p 8000:8000 gatsby-prod --name website gatsby:1.0
else
    docker start website
fi