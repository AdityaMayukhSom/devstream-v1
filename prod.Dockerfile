FROM node:20-slim AS build
ENV HOST=0.0.0.0
WORKDIR /app
COPY package*.json .
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:1.25.5-alpine AS prod
COPY --from=build /app/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/ /usr/share/nginx/html/