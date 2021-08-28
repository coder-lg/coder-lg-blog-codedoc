#!/bin/bash

sudo apt-get -y update
sudo apt-get -y install curl software-properties-common 
curl -sL https://deb.nodesource.com/setup_16.x | sudo bash - 
sudo apt-get -y install nodejs 
node --version
npm --version