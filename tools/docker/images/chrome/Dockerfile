FROM node:12.4.0
WORKDIR /app

ENTRYPOINT ["/usr/local/bin/dumb-init", "--"]
CMD ["bash"]

RUN apt-get update -y
RUN apt-get -y install wget nano curl git mc openssl htop rsync dos2unix


# OPTIONAL: Install dumb-init
RUN wget -q -O /usr/local/bin/dumb-init https://github.com/Yelp/dumb-init/releases/download/v1.2.1/dumb-init_1.2.1_amd64 \
	&& chmod +x /usr/local/bin/dumb-init


# Install Google Chrome
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
RUN apt-get update && apt-get install -y google-chrome-stable


# VOLUME /app

