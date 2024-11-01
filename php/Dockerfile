# ベースイメージ
FROM php:8.1-fpm

# 必要なPHP拡張をインストール
RUN docker-php-ext-install pdo pdo_pgsql

# Nginxのインストール
RUN apt-get update && apt-get install -y nginx

# Nginxの設定ファイルをコピー
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

# PHP-FPMの設定
COPY ./php.ini /usr/local/etc/php/conf.d/

# コンテナの起動時にNginxとPHP-FPMを起動する
CMD service nginx start && php-fpm
