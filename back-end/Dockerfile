# Use PHP 8.2 FPM with Alpine Linux
FROM php:8.2-fpm-alpine

# Install system dependencies and PHP extensions
RUN apk add --no-cache \
    freetype \
    libjpeg-turbo \
    libpng \
    libzip \
    unzip \
    curl \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd mysqli pdo pdo_mysql zip

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer \
    && composer --version

# Set the working directory
WORKDIR /var/www

# Copy composer files and install PHP dependencies
COPY composer.json composer.lock ./

# Install PHP dependencies with Composer
RUN composer install --no-interaction --optimize-autoloader || cat /var/www/storage/logs/laravel.log

# Copy the rest of the application code
COPY . .

# Set file permissions for Laravel storage and bootstrap cache
RUN chown -R www-data:www-data /var/www \
    && chmod -R 755 /var/www/storage \
    && chmod -R 755 /var/www/bootstrap/cache

# Expose the PHP-FPM port
EXPOSE 9000

# Start PHP-FPM server
CMD ["php-fpm"]
