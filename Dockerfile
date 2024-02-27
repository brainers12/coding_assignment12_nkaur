# Use Node.js as the base image
FROM node:latest AS build

# Set the working directory inside the container
WORKDIR /my-component-library

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies using npm
RUN npm install

# Copy the entire project directory into the container
COPY . .

# Build the React app and Storybook
RUN npm run build-storybook

