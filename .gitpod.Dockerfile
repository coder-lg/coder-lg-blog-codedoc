FROM gitpod/workspace-full

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

RUN sudo apt-get install curl software-properties-common 
RUN curl -sL https://deb.nodesource.com/setup_16.x | sudo bash - 
RUN sudo apt-get install nodejs 
RUN node --version

# RUN npm i -g @codedoc/cli
# RUN echo "Codedoc Installed, now activating Gitpod..."

# RUN codedoc install
# RUN echo "installed, activating served site"
# RUN codedoc s
# # testing code-server --link
# RUN curl -fsSL https://code-server.dev/install.sh | sh
# RUN code-server --link
