# Use an official Node.js runtime as the base image
FROM node:18-slim AS builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application (if necessary)
# If you have a build step, uncomment the line below
# RUN npm run build

# Use a smaller image for production
FROM node:18-slim

# Set the working directory in the container
WORKDIR /app

# Copy only the necessary files from the builder stage
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/src ./src
COPY --from=builder /app/index.html ./

# Expose the port the app runs on
EXPOSE 5173

# Define the command to run the application
CMD ["npm", "run", "dev"]
