import js from "@eslint/js"
import solid from "eslint-plugin-solid/configs/typescript.js"
import eslintConfigPrettier from "eslint-config-prettier"
import eslintConfigLove from "eslint-config-love"
import tseslint from "typescript-eslint"
import globals from "globals"

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    ignores: [
      "dist/**",
      "node_modules/**",
      "bin/**",
      "build/**",
      ".output/**",
      ".vinxi/**",
      "src/global.d.ts",
      "eslint.config.mjs",
      "postcss.config.cjs",
      "tailwind.config.cjs",
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.js", "**/*.ts"],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    ...eslintConfigLove,
  },
  {
    files: ["**/*.{ts,tsx}"],
    ...solid,
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: "tsconfig.json",
      },
      globals: {
        ...globals.browser,
      },
    },
  },
  eslintConfigPrettier,
]
