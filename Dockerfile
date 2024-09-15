# Use Node 22-alpine as the base image
FROM node:22-alpine AS base

# Stage for dependencies
FROM base AS deps

# Set working directory in the container
WORKDIR /app

# Copy only the package.json and package-lock.json to the container
ADD package*.json ./

# Install dependencies
RUN npm install

# Stage for building the app
FROM base AS builder

# Set working directory in the container
WORKDIR /app

# Copy everything from the local directory to the container
ADD . .

# Copy the node_modules from the deps stage
COPY --from=deps /app/node_modules ./node_modules

# Build the app
RUN npm run build

# Final stage for running the app
FROM base AS runner

# Set working directory in the container
WORKDIR /app

# Add system users
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Ensure the .next directory exists and set ownership
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Copy the build output, setting ownership to the nextjs user
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./

COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Make sure the public folder exists in the build context
# COPY --from=builder --chown=nextjs:nodejs /app/public ./public

# Set the user to nextjs
USER nextjs

# Expose the port and set environment variables
EXPOSE 3000

ENV PORT=3000

ENV HOSTNAME="0.0.0.0"

# Start the app
CMD ["node", "server.js"]
