FROM php:8.2-fpm-alpine

# Install dependencies
RUN apk add --no-cache \
    freetype \
    libjpeg-turbo \
    libpng \
    libzip \
    && docker-php-ext-install mysqli pdo pdo_mysql

# Copy composer.json and composer.lock
COPY composer.json composer.lock ./

# Install dependencies
RUN composer install --no-interaction --optimize-autoloader

# Copy the rest of the application
COPY . .

# Expose the PHP-FPM port
EXPOSE 9000

# Start the application
CMD php artisan serve --host 0.0.0.0