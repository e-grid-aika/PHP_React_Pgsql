FROM node:latest

# WORKDIR /app
# コンテナ内で作業するディレクトリを指定
WORKDIR /app/frontend

# ファイルを全部作業用ディレクトリにコピー
COPY ./frontend .

# パッケージをインストール
RUN npm install

# コンテナを起動する際に実行するコマンド
CMD [ "npm", "start" ]

# ポートを公開
EXPOSE 3000