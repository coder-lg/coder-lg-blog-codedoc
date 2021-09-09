#!/bin/sh
# This is for a Vercel deployment.
codedoc install
codedoc build
# Makes directory
mkdir build

cp -r ./styles/. ./build
# And repeat
# cd ..
# Copies the three files to build
cp -r ./bundle/. ./build 

cp -r ./dist/. ./build