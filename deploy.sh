#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
echo 'www.paulpoinet.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:paulpoinet/paulpoinet.github.io.git HEAD:master

cd ..

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:paulpoinet/paulpoinet.github.io.git HEAD:gh-pages

cd -