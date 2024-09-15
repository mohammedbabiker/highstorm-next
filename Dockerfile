FROM node:22-alpine AS base

FROM base AS deps

WORKDIR /app

ADD package*.json ./

RUN npm install

FROM base AS builder

WORKDIR /app

ADD . .

COPY --from=deps /app/node_modules ./node_modules

RUN npm run build

FROM base AS runner

# Labels
LABEL org.opencontainers.image.source https://github.com/mohammedbabiker/highstorm-next
LABEL org.opencontainers.image.authors="Mohammed Babiker"
LABEL org.opencontainers.image.licenses="MIT"

WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

RUN mkdir .next
RUN chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./

COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# COPY --from=builder --chown=nextjs:nodejs /app/public ./public

USER nextjs

EXPOSE 3000

ENV PORT=3000

ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
