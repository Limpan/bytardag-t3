FROM ubuntu:22.04
LABEL maintainer="linus@etnolit.se"

ARG USERNAME=vscode
ARG USER_UID=1000
ARG USER_GID=$USER_UID

ARG HOME=/home/vscode
ARG WORKSPACE=/workspaces/bytardag
ARG NODE_MODULES="tslint-to-eslint-config typescript"
ARG NVM_VERSION="0.39.3"

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && \
  apt-get -y upgrade && \
  apt-get -y install --no-install-recommends ca-certificates curl git less nano sudo zsh tree && \
  apt-get clean

RUN groupadd --gid $USER_GID $USERNAME && \
  useradd --uid $USER_UID --gid $USER_GID --create-home --shell /usr/bin/zsh --groups sudo $USERNAME && \
  curl -sfL git.io/antibody | sh -s - -b /usr/local/bin && \
  echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME && \
  chmod 0440 /etc/sudoers.d/$USERNAME && \
  mkdir -p $WORKSPACE && chown $USERNAME:$USERNAME $WORKSPACE

USER $USERNAME

COPY .zsh_plugins.txt $HOME

# Build static bundle of antigen plugins
RUN antibody bundle < ~/.zsh_plugins.txt > ~/.zsh_plugins.sh && echo 'source <(antibody init)\nantibody bundle < ~/.zsh_plugins.txt\n\nSPACESHIP_PROMPT_ASYNC=false' > ~/.zshrc

# Install LTS version of Node
RUN zsh ${HOME}/.zshrc && zsh -i -c 'nvm install --lts'
