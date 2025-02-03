FROM node:20-slim AS build
RUN corepack enable
ENV HOST=0.0.0.0
WORKDIR /app
ADD package*.json .
RUN pnpm i
COPY . .
CMD [ "pnpm", "run", "dev" ]