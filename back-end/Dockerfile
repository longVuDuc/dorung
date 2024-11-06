# Use an official PHP-FPM runtime with Nginx support
FROM php:8.2-fpm

# Install system dependencies and PHP extensions
RUN apt-get update && apt-get install -y \
    nginx \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    zip \
    unzip \
    && docker-php-ext-install pdo pdo_mysql gd

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Set working directory
WORKDIR /var/www/html

# Copy Laravel project files
COPY . .

# Install Laravel dependencies
RUN composer install --optimize-autoloader --no-dev

# Copy Nginx configuration file
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

# Set permissions for Laravel
RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 755 /var/www/html/storage \
    && chmod -R 755 /var/www/html/bootstrap/cache

# Expose port 80
EXPOSE 80

# Run both Nginx and PHP-FPM in the foreground
CMD ["sh", "-c", "php-fpm -D && nginx -g 'daemon off;'"]
