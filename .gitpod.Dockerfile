# I am adding the VNC edition since if anyone wanted to develop the app rather than the docs, they definetely can do it with noVNC which is used here.
# I am using the latest version since that can help us stay updated with Gitpod+noVNC
FROM gitpod/workspace-full-vnc:latest

# I got this from the GAUDC Project(not implemented yet, as told in #69, but the code is available on the fork.)
# Install custom tools, runtime, etc.
RUN sudo apt-get update \
    # window manager
    && sudo apt-get install -y jwm \
    # electron
    && sudo apt-get install -y libgtk-3-0 libnss3 libasound2 \
    # native-keymap
    && sudo apt-get install -y libx11-dev libxkbfile-dev
RUN sudo apt-get update \
    && sudo apt-get install -y \
        libasound2-dev \
        libgtk-3-dev \
        libnss3-dev

# USER root

# RUN apt-get update && apt update 

# && apt-get upgrade && apt upgrade

# Install Dropbear SSH server
# RUN DEBIAN_FRONTEND=noninteractive apt-get install -yq \
#         dropbear \
#     && apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/*

# # Install Chisel
# RUN curl https://i.jpillora.com/chisel! | bash

# Install custom tools, runtime, etc.

# RUN bash .gitpod/gitpodDockerfile.sh

# RUN sudo apt-get install curl software-properties-common 
# RUN curl -sL https://deb.nodesource.com/setup_16.x | sudo bash - 
# RUN sudo apt-get install nodejs 
# RUN node --version

# RUN npm i -g @codedoc/cli
# RUN echo "Codedoc Installed, now activating Gitpod..."

# RUN codedoc install
# RUN echo "installed, activating served site"
# RUN codedoc s
# # testing code-server --link
# RUN curl -fsSL https://code-server.dev/install.sh | sh
# RUN code-server --link
