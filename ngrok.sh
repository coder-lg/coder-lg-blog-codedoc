#!/bin/bash

sudo apt-get update

sudo apt-get -y install wget unzip openssh-server neofetch

neofetch

sudo service ssh start

echo "Set Password for Gitpod as gitpod"

sudo passwd gitpod

echo "Getting ngrok..."

cd ~

mkdir ngrok && cd ngrok

wget "https://bin.equinox.io/c/4VmDzA7iaHb/ngrok-stable-linux-amd64.zip"

unzip "ngrok-stable-linux-amd64.zip"

echo "I need your ngrok auth token. Enter it below."

read -p "ngrok authtoken:" authtoken

./ngrok authtoken "$authtoken"

echo "Authtoken activated, now activating server..."

./ngrok tcp 22