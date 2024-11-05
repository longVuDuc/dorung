# Use the official PHP image with FPM support
FROM php:8.1-fpm-alpine

# Install system dependencies
RUN apk add --no-cache nginx curl git zip unzip

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Set the working directory
WORKDIR /var/www/html

# Copy the application files
COPY . .

# Install PHP dependencies
RUN composer install --no-dev --optimize-autoloader

# Expose port 80
EXPOSE 80

# Copy Nginx configuration
COPY .render/nginx.conf /etc/nginx/nginx.conf

# Start Nginx and PHP-FPM
CMD ["sh", "-c", "php-fpm -D && nginx -g 'daemon off;'"]
