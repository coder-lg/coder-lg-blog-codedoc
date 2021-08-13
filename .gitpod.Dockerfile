FROM gitpod/workspace-full

# Install custom tools, runtime, etc.
RUN npm i -g @codedoc/cli
RUN codedoc install
RUN echo "installed, activating served site"
RUN codedoc s
# testing code-server --link
RUN curl -fsSL https://code-server.dev/install.sh | sh
RUN code-server --link
