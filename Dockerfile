

# Step 1: Build the React app
FROM node:16 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the code
COPY . .

# Build the React app for production
RUN npm run build

# Step 2: Serve the React app using Node.js (no Nginx)
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy the build folder from the build stage to the app directory
COPY --from=build /app/build /app/build

# Install the serve package globally to serve the built app
RUN npm install -g serve

# Expose the port that the app will run on
EXPOSE 3000

# Start the React app with serve
CMD ["serve", "-s", "build", "-l", "3000"]
