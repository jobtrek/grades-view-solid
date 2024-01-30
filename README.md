# Grades view
> Implemented with [SolidJS](https://www.solidjs.com/)
> 
> [See changelog](./CHANGELOG.md)

## Test it

[Grades view solid demo](https://jobtrek.github.io/grades-view-solid/)

Don't hesitate to report any issue or suggestion on the Github [issues page](https://github.com/jobtrek/grades-view-solid/issues).

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
pnpm build

# Build docker image
docker build -t grades-view-solid .
```

## Use de provided docker image

```
docker run -p 8080:80 -d ghcr.io/jobtrek/grades-view-solid
```
