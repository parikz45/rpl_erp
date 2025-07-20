FROM node:24-alpine AS base
RUN apk add --no-cache libc6-compat
RUN corepack enable pnpm

FROM base AS dependencies
WORKDIR /app
COPY . .
RUN --mount=type=cache,target=/pnpm/store \
    pnpm install --frozen-lockfile

FROM base AS builder
WORKDIR /app
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
ENV NEXT_TELEMETRY_DISABLED=1
RUN pnpm --filter @rpl-erp/client-web build

FROM base AS runner 
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
# COPY --from=builder /app/apps/client-web/public ./public
# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/apps/client-web/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/apps/client-web/.next/static ./.next/static
USER nextjs
ENV PORT=3000
# server.js is created by next build from the standalone output
# https://nextjs.org/docs/pages/api-reference/config/next-config-js/output
ENV HOSTNAME="0.0.0.0"
CMD ["node", "apps/client-web/server.js"]
