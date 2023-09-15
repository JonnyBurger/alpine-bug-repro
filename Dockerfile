FROM node:16-alpine
RUN apk update
RUN apk add --no-cache \
  libc6-compat \
  chromium \
  ffmpeg \
  dbus \
  openrc \
  git

WORKDIR /app

COPY package.json package*.json yarn.lock* pnpm-lock.yaml* bun.lockb* tsconfig.json* remotion.config.* ./
COPY src ./src

RUN npm i


# Run your application
COPY render.mjs render.mjs
CMD ["node", "render.mjs"]
