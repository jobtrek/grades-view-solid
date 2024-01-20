# Changelog


## v1.0.0

[compare changes](https://github.com/jobtrek/grades-view-solid/compare/v1.0.0-rc.2...v1.0.0)

### 📖 Documentation

- Fix typos ([a7cad32](https://github.com/jobtrek/grades-view-solid/commit/a7cad32))

### ❤️ Contributors

- Fuzoh <info@bastiennicoud.ch>

## v1.0.0-rc.2

[compare changes](https://github.com/jobtrek/grades-view-solid/compare/v1.0.0-rc.1...v1.0.0-rc.2)

### 🚀 Enhancements

- **import-export:** Add buttons in navbar with icons ([7888bc6](https://github.com/jobtrek/grades-view-solid/commit/7888bc6))
- **import-export:** Add util to export and download JS object in json ([01e3e43](https://github.com/jobtrek/grades-view-solid/commit/01e3e43))
- **import-export:** Create a dedicated component for file import ([6bbbb7c](https://github.com/jobtrek/grades-view-solid/commit/6bbbb7c))
- **import-export:** Json grades can now be imported in calculator ([4568698](https://github.com/jobtrek/grades-view-solid/commit/4568698))
- **import-export:** File button can now import grades ([8daa5e0](https://github.com/jobtrek/grades-view-solid/commit/8daa5e0))

### 🩹 Fixes

- **import-export:** File button placed in client only ([c593826](https://github.com/jobtrek/grades-view-solid/commit/c593826))

### 💅 Refactors

- **navigation:** Extract reset button in dedicated component ([5e266b8](https://github.com/jobtrek/grades-view-solid/commit/5e266b8))
- **navigation:** Generalise Nav button for reuse ([11fa2f3](https://github.com/jobtrek/grades-view-solid/commit/11fa2f3))
- **grades-store:** Renovate store to use valibod schemas ([d1dabc9](https://github.com/jobtrek/grades-view-solid/commit/d1dabc9))
- **grades-store:** Complete gradeStore schema conversion to valibot ([b102ce9](https://github.com/jobtrek/grades-view-solid/commit/b102ce9))
- **grades-store:** Update project to support valibot schemas store ([34bc7ae](https://github.com/jobtrek/grades-view-solid/commit/34bc7ae))
- Alert component now support multiple colors ([30dcc11](https://github.com/jobtrek/grades-view-solid/commit/30dcc11))

### ❤️ Contributors

- Fuzoh <info@bastiennicoud.ch>

## v1.0.0-rc.1

[compare changes](https://github.com/jobtrek/grades-view-solid/compare/v1.0.0-rc.0...v1.0.0-rc.1)

### 🩹 Fixes

- Name form now client only to avoid pre-rendering hydration mismatch ([688d20e](https://github.com/jobtrek/grades-view-solid/commit/688d20e))

### 💅 Refactors

- **forms:** Extract name form schema to dedicated file ([ae28b5c](https://github.com/jobtrek/grades-view-solid/commit/ae28b5c))
- **forms:** Export consistency on grades form schema ([29c0e27](https://github.com/jobtrek/grades-view-solid/commit/29c0e27))
- **forms:** Extract modules form schema to dedicated file ([c77db72](https://github.com/jobtrek/grades-view-solid/commit/c77db72))

### ❤️ Contributors

- Fuzoh <info@bastiennicoud.ch>

## v1.0.0-rc.0

[compare changes](https://github.com/jobtrek/grades-view-solid/compare/v0.0.7...v1.0.0-rc.0)

### 🩹 Fixes

- Routes missing nodes on 404 and index template ([f356612](https://github.com/jobtrek/grades-view-solid/commit/f356612))
- Hydration mismatches, fixes #2 ([#2](https://github.com/jobtrek/grades-view-solid/issues/2))

### 💅 Refactors

- **style:** Change from sky to blue to be consistent ([e66b534](https://github.com/jobtrek/grades-view-solid/commit/e66b534))

### 📖 Documentation

- Add github pages link to readme ([73a2cb0](https://github.com/jobtrek/grades-view-solid/commit/73a2cb0))
- Add link to changelog ([b3e7950](https://github.com/jobtrek/grades-view-solid/commit/b3e7950))

### ❤️ Contributors

- Fuzoh <info@bastiennicoud.ch>

## v0.0.7

[compare changes](https://github.com/jobtrek/grades-view-solid/compare/v0.0.6...v0.0.7)

### 🚀 Enhancements

- **grades-context:** Create new context provider for grades ([b18b985](https://github.com/jobtrek/grades-view-solid/commit/b18b985))
- **grades-context:** Use gradesContext for name ([506399d](https://github.com/jobtrek/grades-view-solid/commit/506399d))
- **grades-context:** Move store functions to context ([d543795](https://github.com/jobtrek/grades-view-solid/commit/d543795))
- **grades-context:** Move store memos to context ([c0e70d9](https://github.com/jobtrek/grades-view-solid/commit/c0e70d9))
- **grades-context:** Access new context on technical module page ([9ecc17e](https://github.com/jobtrek/grades-view-solid/commit/9ecc17e))
- **grades-context:** Convert pages from store to context access ([dd82252](https://github.com/jobtrek/grades-view-solid/commit/dd82252))
- **forms:** System to get translated labels for forms ([413c22a](https://github.com/jobtrek/grades-view-solid/commit/413c22a))
- **forms:** Add labels map to each forms ([5d132c2](https://github.com/jobtrek/grades-view-solid/commit/5d132c2))

### 🩹 Fixes

- Github workflow branch name ([0234439](https://github.com/jobtrek/grades-view-solid/commit/0234439))
- Create working 404 page ([2b597ae](https://github.com/jobtrek/grades-view-solid/commit/2b597ae))
- **grades-context:** Fix context create memo parameters mismatch ([8c91dc0](https://github.com/jobtrek/grades-view-solid/commit/8c91dc0))
- **reactivity:** Client only notifications ([5d90419](https://github.com/jobtrek/grades-view-solid/commit/5d90419))

### 💅 Refactors

- Reorganise components in folders ([d3a3bdf](https://github.com/jobtrek/grades-view-solid/commit/d3a3bdf))
- Create more lightweight tooltip, to avoid using ark-ui ([3d6b5f4](https://github.com/jobtrek/grades-view-solid/commit/3d6b5f4))
- Remove ark ui dependency ([7c6afdc](https://github.com/jobtrek/grades-view-solid/commit/7c6afdc))
- Add labels translation ([d95c175](https://github.com/jobtrek/grades-view-solid/commit/d95c175))

### 📦 Build

- Configure to static generation with base url for github pages ([456e186](https://github.com/jobtrek/grades-view-solid/commit/456e186))
- Add github action to build and deploy to pages ([5ad4c3b](https://github.com/jobtrek/grades-view-solid/commit/5ad4c3b))
- Configure prerenderer to generate all pages at build time ([8d69436](https://github.com/jobtrek/grades-view-solid/commit/8d69436))
- Run build only on new git tags (will deploy only on new version) ([a592668](https://github.com/jobtrek/grades-view-solid/commit/a592668))

### ❤️ Contributors

- Fuzoh <info@bastiennicoud.ch>

## v0.0.6

[compare changes](https://github.com/jobtrek/grades-view-solid/compare/v0.0.5...v0.0.6)

### 🚀 Enhancements

- **module-autocomplete:** Use createSelector to avoid unneeded signal update on For loop ([59b47b8](https://github.com/jobtrek/grades-view-solid/commit/59b47b8))

### 🏡 Chore

- Formatting ([35d2eaa](https://github.com/jobtrek/grades-view-solid/commit/35d2eaa))

### ❤️ Contributors

- Fuzoh <info@bastiennicoud.ch>

## v0.0.5

[compare changes](https://github.com/jobtrek/grades-view-solid/compare/v0.0.4...v0.0.5)

### 🚀 Enhancements

- **home-page:** Add welcome message ([a6f47bc](https://github.com/jobtrek/grades-view-solid/commit/a6f47bc))
- **tooltips:** Change tooltip default delays ([4ddbe8a](https://github.com/jobtrek/grades-view-solid/commit/4ddbe8a))
- **module-autocomplete:** Add zag js state machine ([800e2aa](https://github.com/jobtrek/grades-view-solid/commit/800e2aa))
- **module-autocomplete:** First combobox experiments ([6f7ed42](https://github.com/jobtrek/grades-view-solid/commit/6f7ed42))
- **module-autocomplete:** Experimentation's with custom combobox ([a935e57](https://github.com/jobtrek/grades-view-solid/commit/a935e57))
- **module-autocomplete:** Fine-tune combobox behaviour. ([e43be4d](https://github.com/jobtrek/grades-view-solid/commit/e43be4d))
- **module-autocomplete:** Fix selection behaviour ([24fdb3a](https://github.com/jobtrek/grades-view-solid/commit/24fdb3a))
- **module-autocomplete:** Fix value transfers between combobox and form ([d59f006](https://github.com/jobtrek/grades-view-solid/commit/d59f006))
- **averages-view:** Change sub averages width ([dc94117](https://github.com/jobtrek/grades-view-solid/commit/dc94117))

### 🩹 Fixes

- **grades-store:** Module averages now calculated with same rounding ([9739cc3](https://github.com/jobtrek/grades-view-solid/commit/9739cc3))

### 🏡 Chore

- **tooling:** Install prettier with eslint integration ([312cd5b](https://github.com/jobtrek/grades-view-solid/commit/312cd5b))

### ❤️ Contributors

- Fuzoh <info@bastiennicoud.ch>

## v0.0.4

[compare changes](https://github.com/jobtrek/grades-view-solid/compare/v0.0.3...v0.0.4)

### 🚀 Enhancements

- **module-autocomplete:** Add combobox component ([ddbdb30](https://github.com/jobtrek/grades-view-solid/commit/ddbdb30))
- **grades:** Add tooltip component ([fc118dc](https://github.com/jobtrek/grades-view-solid/commit/fc118dc))
- **grades:** Add button to remove grade ([4e8207c](https://github.com/jobtrek/grades-view-solid/commit/4e8207c))
- **grades:** Add tooltip to module grades ([b511089](https://github.com/jobtrek/grades-view-solid/commit/b511089))
- **grades:** Add delete action on module grades ([7889aa6](https://github.com/jobtrek/grades-view-solid/commit/7889aa6))

### 🩹 Fixes

- **tooling:** Add eslint ignore file ([e113ba4](https://github.com/jobtrek/grades-view-solid/commit/e113ba4))

### 💅 Refactors

- **reactivity:** Move averages computations to individual memos ([85d183a](https://github.com/jobtrek/grades-view-solid/commit/85d183a))

### ❤️ Contributors

- Fuzoh <info@bastiennicoud.ch>

## v0.0.3

[compare changes](https://github.com/jobtrek/grades-view-solid/compare/v0.0.2...v0.0.3)

### 🚀 Enhancements

- **tpi-grade:** Add input to update tpi grade ([2140258](https://github.com/jobtrek/grades-view-solid/commit/2140258))
- **grades-store:** Add possibility to reset the store ([d740648](https://github.com/jobtrek/grades-view-solid/commit/d740648))

### ❤️ Contributors

- Fuzoh <info@bastiennicoud.ch>

## v0.0.2

[compare changes](https://github.com/jobtrek/grades-view-solid/compare/v0.0.1...v0.0.2)

### 🚀 Enhancements

- **grades-store:** Add types for new global grade store ([31beadb](https://github.com/jobtrek/grades-view-solid/commit/31beadb))
- **grades-store:** Change user name type to avoid null ([36006af](https://github.com/jobtrek/grades-view-solid/commit/36006af))
- **grades-store:** Form to update student name ([56825a5](https://github.com/jobtrek/grades-view-solid/commit/56825a5))
- **grades-store:** Module grades now stored in gradesStore ([e62d1ae](https://github.com/jobtrek/grades-view-solid/commit/e62d1ae))
- **grades-store:** General branch semester now stored in gradesStore ([ee5a7e5](https://github.com/jobtrek/grades-view-solid/commit/ee5a7e5))
- **grades-store:** All averages are now calculated from grades store ([d631662](https://github.com/jobtrek/grades-view-solid/commit/d631662))

### 🏡 Chore

- **grades-store:** Add solid primitive time ([b30e956](https://github.com/jobtrek/grades-view-solid/commit/b30e956))

### 🎨 Styles

- **grades:** Add minus prefix to negative notes ([32b8750](https://github.com/jobtrek/grades-view-solid/commit/32b8750))

### ❤️ Contributors

- Fuzoh <info@bastiennicoud.ch>

## v0.0.1

[compare changes](https://github.com/jobtrek/grades-view-solid/compare/v0.0.0...v0.0.1)

### 🩹 Fixes

- Missing round, and average style ([10d5430](https://github.com/jobtrek/grades-view-solid/commit/10d5430))
- Type mismatch on modules add function ([15eda64](https://github.com/jobtrek/grades-view-solid/commit/15eda64))
- Replace createEffect with a computed property in grades section. ([f652917](https://github.com/jobtrek/grades-view-solid/commit/f652917))
- Index loop for better performances ([66312f6](https://github.com/jobtrek/grades-view-solid/commit/66312f6))
- Little style improvements ([786e282](https://github.com/jobtrek/grades-view-solid/commit/786e282))
- Color on modules form ([453e1a7](https://github.com/jobtrek/grades-view-solid/commit/453e1a7))
- Form reset on submission ([594fb2f](https://github.com/jobtrek/grades-view-solid/commit/594fb2f))

### 💅 Refactors

- Extract component props to dedicated interface ([56edc57](https://github.com/jobtrek/grades-view-solid/commit/56edc57))

### ❤️ Contributors

- Fuzoh <info@bastiennicoud.ch>

