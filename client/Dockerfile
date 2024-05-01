# Base image for React development with a small footprint
FROM node:20-alpine AS build

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the entire client directory
COPY . .

# mUST BE THE SAME AS FRONTEND
EXPOSE 5173

# Start the React development server (adjust command if needed)
CMD [ "npm", "run", "dev" ]