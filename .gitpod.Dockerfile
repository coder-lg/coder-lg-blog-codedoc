FROM gitpod/workspace-full

# Install custom tools, runtime, etc.

# RUN bash .gitpod/gitpodDockerfile.sh

# RUN sudo apt-get install curl software-properties-common 
# RUN curl -sL https://deb.nodesource.com/setup_16.x | sudo bash - 
# RUN sudo apt-get install nodejs 
RUN node --version

RUN npm i -g @codedoc/cli
# RUN codedoc install
# RUN echo "installed, activating served site"
# RUN codedoc s
# # testing code-server --link
# RUN curl -fsSL https://code-server.dev/install.sh | sh
# RUN code-server --link
