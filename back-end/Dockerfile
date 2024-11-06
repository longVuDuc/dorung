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
    && docker-php-ext-install mysqli pdo pdo_mysql

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Set the working directory
WORKDIR /var/www

# Copy composer files and install PHP dependencies
COPY composer.json composer.lock ./
RUN composer install --no-interaction --optimize-autoloader

# Copy the rest of the application code
COPY . .

# Set file permissions (if necessary)
RUN chown -R www-data:www-data /var/www \
    && chmod -R 755 /var/www/storage

# Expose the PHP-FPM port
EXPOSE 9000

# Start PHP-FPM server
CMD ["php-fpm"]
