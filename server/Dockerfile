# Base image for React development with a small footprint
FROM node:20-alpine AS build

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the entire client directory
COPY . .

# mUST BE THE SAME AS BACKEND
EXPOSE 3000

# Start Redis
CMD ["npm", "run", "redis"]

# Start the React development server (adjust command if needed)
CMD [ "node", "server.js" ]
