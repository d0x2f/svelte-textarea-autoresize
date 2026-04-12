import sveltePlugin from 'eslint-plugin-svelte'
import prettierRecommended from 'eslint-plugin-prettier/recommended'
import htmlPlugin from 'eslint-plugin-html'
import globals from 'globals'

export default [
  ...sveltePlugin.configs['flat/recommended'],
  prettierRecommended,
  {
    files: ['**/*.html'],
    plugins: { html: htmlPlugin },
  },
  {
    languageOptions: {
      ecmaVersion: 2019,
      sourceType: 'module',
      globals: {
        ...globals.es2017,
        ...globals.browser,
        ...globals.commonjs,
        ...globals.mocha,
        ...globals.node,
      },
    },
    rules: {
      'comma-dangle': ['error', 'always-multiline'],
    },
  },
  {
    ignores: ['public/components.js', 'package-lock.json', 'node_modules/'],
  },
]
