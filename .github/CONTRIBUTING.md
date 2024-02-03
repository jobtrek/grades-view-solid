# Contributing

1. Always use [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/#specification).
    - Option 1, use [commitizen](https://github.com/commitizen/cz-cli) configured in this repo
      with `pnpm cz` and follow tutorial.
    - Option 2,
      use [Conventional commit](https://github.com/lppedd/idea-conventional-commit/tree/master)
      plugin for jetbrains ide with `build commit message` action.
2. Reference closed and/or fixed issues in your commit footer. With `Fixes` and `Closes` keywords.
3. This repo
   follows [GitLab Flow](https://gdevops.gitlab.io/tuto_git/formations/flows/gitlab/gitlab.html#)
   style :
    - `main` branch is the default branch, for development.
    - `staging` branch is for staging.
    - `production` branch is for production.
    - Always use feature branches on your forks and submit a pull request to main branch.
    - Don't forget to update your branches before submitting pull requests.
4. Squash merge is the preferred way to merge pull requests. As it keeps the history clean.
5. Releases are automatically prepared by the CI/CD pipeline. Don't create tags manually.
