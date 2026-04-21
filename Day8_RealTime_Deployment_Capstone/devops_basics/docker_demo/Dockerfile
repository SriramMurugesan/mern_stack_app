# 1. Base Image
FROM node:18-alpine

# 2. Set Working Directory
WORKDIR /app

# 3. Copy Package Files
COPY package*.json ./

# 4. Install Dependencies
RUN npm install --production

# 5. Copy App Code
COPY . .

# 6. Expose Port
EXPOSE 5000

# 7. Start Command
CMD ["node", "app.js"]
