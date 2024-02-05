FROM node:21-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
COPY . /app
WORKDIR /app

# Prod deps, not ncessare because only static files are served
# FROM base AS deps-no-dev
# RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

# Build stage, with all deps
FROM base AS build
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run build
RUN sh ./rename.bash

# Create a simple nginx image to serve the static files
FROM nginx:stable-alpine
COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf
# Put files in subfolder to reflect the base path of router
# Needed to build for gh pages
COPY --from=build /app/.output/public /usr/share/nginx/html/grades-view-solid
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
