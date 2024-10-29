FROM php:8.1-fpm-alpine

# Cài đặt các phần mở rộng PHP cần thiết
RUN docker-php-ext-install pdo_mysql mysqli

# Cài đặt Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Tạo thư mục làm việc và copy code
WORKDIR /var/www/html
COPY backend .

# Cài đặt các dependencies
RUN composer install --no-dev --optimize-autoloader

# Phần cho ReactJS
WORKDIR /var/www/html/public
COPY frontend/build .

# Copy file .env
COPY .env .env.production

# Chạy Nginx
COPY docker/nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]