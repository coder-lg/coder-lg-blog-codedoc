#!/bin/bash

cd ~

mkdir cli

cd cli

wget "https://github.com/cli/cli/releases/download/v2.0.0/gh_2.0.0_linux_amd64.deb"

sudo dpkg --install gh_2.0.0_linux_amd64.deb

echo "Now that you have GitHub CLI, you must login to your CLI or it is a piece of crap."

echo "Copy the Auth token(8 digit+letter but totally 8-digit), open in browser, and go to github.com/login/device, place your code, authenticate and you are logged in :)"

gh auth login
