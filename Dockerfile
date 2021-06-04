FROM httpd:alpine

COPY . /usr/local/apache2/htdocs/
RUN sed -i 's/AllowOverride None/AllowOverride All/g' conf/httpd.conf

EXPOSE 80 443
