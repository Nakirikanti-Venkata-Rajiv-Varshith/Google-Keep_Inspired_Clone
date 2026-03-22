FROM node:22-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

COPY . .

# Build Vite app using this command
RUN npm run build

#  Stage 2: Serve 
FROM nginx:alpine

# Remove default nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy build output from builder
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
