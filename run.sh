#!/bin/sh

if [[ -z "$(docker ps -a -q -f name="gatsby")" ]]; then
    docker build . -t gatsby:1.0
    docker run -d -p 8000:8000 --name website gatsby:1.0
else
    docker start website
fi