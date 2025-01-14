# Chọn image Node.js
FROM node:18

# Tạo thư mục làm việc trong container
WORKDIR /app

# Copy package.json và package-lock.json (nếu có)
COPY package*.json ./

# Cài đặt các dependencies
RUN npm install

# Copy toàn bộ mã nguồn của bạn vào trong container
COPY . .

# Cổng sẽ chạy
EXPOSE 3000

# Lệnh để chạy ứng dụng
CMD ["npm", "start"]
