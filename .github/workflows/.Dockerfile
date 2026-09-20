# Use the official nginx image
FROM nginx:stable-alpine

# Copy the public directory into nginx’s default HTML folder
COPY public /usr/share/nginx/html

# Expose the default HTTP port
EXPOSE 80