# Grades view

> Implemented with [SolidJS](https://www.solidjs.com/)
>
> **v2.0.5** <!-- x-release-please-version -->
>
> [See changelog](./CHANGELOG.md)

## Test it

[Grades view solid demo](https://jobtrek.github.io/grades-view-solid/)

Don't hesitate to report any issue or suggestion on the
Github [issues page](https://github.com/jobtrek/grades-view-solid/issues).

## Start project development

```bash
# clone the repository
# install dependencies
pnpm i # or npm install or yarn

# start dev server
pnpm dev # or npm run dev or yarn dev
```

## Build for production

```bash
# Test build on your computer
pnpm build
npx serve .output/public

# Build and run with docker
docker build -t grades-view-solid -f ./docker/Dockerfile .
docker run -p 8080:80 grades-view-solid
```

## Use de prebuilt docker image

```
# You must connect your docker install to github packages [see documentation](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry)
docker run -p 8080:80 -d ghcr.io/jobtrek/grades-view-solid
```
