# ベースイメージ
FROM php:8.2-apache

# 必要なPHP拡張をインストール
RUN apt-get update && apt-get install -y \
    libpq-dev \
    && docker-php-ext-install pdo pdo_pgsql iputils-ping

# RUN docker-php-ext-install pdp pdo_pgsql

# Apacheのドキュメントルートを設定
WORKDIR /var/www/html
