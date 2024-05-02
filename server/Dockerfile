# Base image for React development with a small footprint
FROM node:20-alpine AS build

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the entire client directory
COPY . .

# Expose the ports
EXPOSE 3000
EXPOSE 6379

# Copy start script
COPY start.sh .

# Make the start script executable
RUN chmod +x start.sh

# Start Redis and then the React development server
CMD ["./start.sh"]
