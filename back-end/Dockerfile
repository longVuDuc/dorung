# Base image with PHP-FPM
FROM php:8.1-fpm-alpine

# Install Nginx
RUN apk add --no-cache nginx

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Set working directory
WORKDIR /var/www/html

# Copy project files
COPY . .

# Install dependencies with Composer
RUN composer install --no-dev --optimize-autoloader

# Copy Nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Expose HTTP port
EXPOSE 80

# Start both Nginx and PHP-FPM
CMD ["sh", "-c", "php-fpm -D && nginx -g 'daemon off;'"]
