#!/bin/bash
export GIT_USER=sxyhappy
export USE_SSH=false

npm run build
cd ./packages/docs || exit
npm run deploy
