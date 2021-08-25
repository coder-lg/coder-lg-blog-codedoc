#!/bin/bash
sudo apt-get -y install curl software-properties-common 
curl -sL https://deb.nodesource.com/setup_16.x | sudo bash - 
sudo apt-get -y install nodejs 
echo "NodeJS 16 installed, check the version"
npm i -g @codedoc/cli
npm i -g @codedoc/core
codedoc update
echo "Updated, starting served site..."