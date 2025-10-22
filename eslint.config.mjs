import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import { defineConfig } from 'eslint/config'
import prettierPlugin from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'

export default defineConfig([
   {
    // Игнорируемые файлы и папки
    ignores: [
      "**/node_modules/**",
      "**/dist/**",
      "build/**",
      "**/.next/**",
      "**/out/**",
      "**/coverage/**",
      "**/*.min.js",
      "**/package-lock.json",
      "**/yarn.lock"
    ]
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    plugins: { 
      js,
      prettier: prettierPlugin
     },
    extends: ['js/recommended', prettierConfig],
    languageOptions: { globals: globals.browser },
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    files: ['**/*.{jsx,tsx,ts}'],
    settings: {
      react: {
        version: '17.0.2',
      },
    },
    rules: {
      ...prettierPlugin.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off', 
      'no-unused-vars': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      'react/button-has-type': 'error',
      '@typescript-eslint/ban-ts-comment': 'warn'
    },
  },
])
