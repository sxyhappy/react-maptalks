#!/bin/bash
export GIT_USER=sxyhappy
export USE_SSH=false

npm run build
cd ./docs || exit
yarn run deploy
cd - || exit
