import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores([
    "**/*.next",
    "dist/**",
    "apps/**/eslint.config.mjs",
    "apps/**/postcss.config.mjs",
    "**/*.config.mjs",
    "**/*.js",
  ]),
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  tseslint.configs.recommendedTypeChecked,
]);
