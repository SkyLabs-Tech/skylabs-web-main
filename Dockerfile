# ── Build Stage ────────────────────────────────────────────────
FROM node:20-slim AS builder
WORKDIR /app

# Install dependencies (clean, reproducible & cache‑friendly)
COPY package*.json ./
RUN npm ci

# Copy source & build
COPY . .
RUN npm run build \
    && npm prune --omit=dev   # drop dev‑deps from final image

# ── Runtime Stage ──────────────────────────────────────────────
FROM node:20-slim
WORKDIR /app

# Copy only production artefacts
COPY --from=builder /app/dist          ./dist
COPY --from=builder /app/node_modules  ./node_modules

# Environment
ENV NODE_ENV=production
ENV PORT=8080
EXPOSE 8080

# Run as non‑root for security
USER node

# Start server (Cloud Run passes $PORT)
CMD ["npm","run","start"]
