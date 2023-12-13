FROM ubuntu

RUN apt-get update && apt-get install -y apache2

COPY index.html /var/www/html/index.html

ENTRYPOINT apachectl -D FOREGROUND

# Build the image
# $ docker build -t simple-apache2-app .
