# Use the official Node.js image as a base image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port (can be overridden via ENV variable)
EXPOSE 3000

# Command to start the application with dynamic port support
CMD ["sh", "-c", "PORT=${PORT:-3000} npm start"]