
# Lấy image từ docker hub
FROM mongo:latest

# Copy file storage.sql trong đây và chép vào container
COPY mongo.js /docker-entrypoint-initdb.d/

# Cổng sẽ chạy
EXPOSE 27017

# Tạo volume ở trên docker
VOLUME /data/db
