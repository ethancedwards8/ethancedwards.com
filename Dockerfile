FROM httpd:alpine

WORKDIR /usr/local/apache2/htdocs/

RUN apk update \
	&& apk add --no-cache git \
	&& rm -rf /var/cache/apk/* \
	&& rm -f index.html \
	&& git clone https://github.com/ethancedwards8/ethancedwards.com .

VOLUME ["/usr/local/apache2/htdocs"]
EXPOSE 80 443
