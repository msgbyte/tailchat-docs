FROM node:lts-alpine

# Working directory
WORKDIR /app

# Install dependencies
RUN npm install -g pnpm
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

# Install plugins and sdk dependency
COPY ./pnpm-workspace.yaml ./
COPY ./plugins ./plugins
RUN pnpm install

# Copy source
COPY . .
RUN pnpm install

# Build and cleanup
ENV NODE_ENV=production

# Install plugins(whitelist)
RUN cd plugins/com.msgbyte.docs && npm run build:web && cd -

# web static service port
EXPOSE 22010

# Start server
CMD ["pnpm", "serve"]
