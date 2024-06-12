# Use the official Node.js 18 image as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Copy the rest of the application code to the working directory
COPY . .

# Expose port 4200 to the outside world
EXPOSE 4200

# Command to run the application
CMD ["ng", "serve", "--host", "0.0.0.0"]

