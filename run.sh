#!/bin/sh

if [[ -z "$(docker ps -a -q -f name="gatsby")" ]]; then
    echo "here"
    docker build . -t gatsby:1.0
    docker run -d -p 8000:8000 --name website gatsby:1.0
else
    echo "here2"
    docker start website
fi