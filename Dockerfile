# Stage 1: Build the React app with Vite
FROM node:alpine as builder

# Set environment variables
ENV NODE_ENV=production
# Incrementar el límite de memoria de heap
ENV NODE_OPTIONS="--max-old-space-size=4096"

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application files
COPY . .

# Build the app (this will generate the static files in /dist)
RUN npm run build

# Stage 2: Serve the built files using nginx
FROM nginx:alpine

# Copy the built files from the previous stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose the port that nginx will use
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]
