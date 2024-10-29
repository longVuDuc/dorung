FROM richarvey/nginx-php-fpm:latest

# Cài đặt Composer
RUN apt-get update && apt-get install -y curl && curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer   


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
CMD ["php", "artisan", "serve", "--public", "public"]