FROM nginx:alpine

COPY k.html /usr/share/nginx/html/index.html
COPY k.css /usr/share/nginx/html/k.css
COPY k.js /usr/share/nginx/html/k.js
COPY icon.png /usr/share/nginx/html/icon.png
COPY mic.svg /usr/share/nginx/html/mic.svg
COPY voice.webp /usr/share/nginx/html/voice.webp

EXPOSE 80