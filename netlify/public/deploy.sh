#!/usr/bin/env bash

set =e

echo ">> 빌드를 시작합니다 <<"
npm run build

echo ">> 빌드 Directory로 이동 <<"
cd dist

echo ">> git init <<"
git init
git add -A
git commit -m "Deploy"

echo ">> git push <<"
git push -f https://github.com/JiinSeok/7-Sprint-Mission

cd ..