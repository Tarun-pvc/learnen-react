# Base image for React development with a small footprint
FROM node:20-alpine AS build

# Install Redis
RUN apk add --no-cache redis

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the entire client directory
COPY . .

# Expose port 3000 (same as backend)
EXPOSE 3000

# Start Redis
CMD ["redis-server"]

# Start the React development server (adjust command if needed)
CMD ["npm", "start"]
