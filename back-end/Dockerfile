FROM richarvey/nginx-php-fpm:latest

# Cài đặt Composer
RUN curl -sS https://getcomposer.org/installer > composer-install.php && php composer-install.php --install-dir=/usr/local/bin --filename=composer && rm composer-install.php

# Copy các file dự án
COPY . .

# Thiết lập biến môi trường
ENV APP_ENV production
# Thêm các biến môi trường khác

# Cài đặt dependencies
RUN composer install --no-dev --optimize-autoloader

# Expose port
EXPOSE 80

# Khởi động ứng dụng
CMD ["php", "artisan", "serve"]