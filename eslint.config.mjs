// Flat config ESLint 9 dla Astro + TypeScript
import js from '@eslint/js';
import * as tseslint from 'typescript-eslint';
import astro from 'eslint-plugin-astro';
import parserAstro from 'astro-eslint-parser';

export default [
  {
    ignores: [
      'dist',
      '.astro',
      'node_modules',
      '**/*.config.cjs',
      '**/*.config.mjs',
      '.eslintrc.cjs',
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs['flat/recommended'],
  {
    files: ['**/*.cjs'],
    languageOptions: {
      sourceType: 'script',
      ecmaVersion: 'latest',
    },
  },
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: parserAstro,
      parserOptions: {
        parser: tseslint.parser,
        extraFileExtensions: ['.astro'],
      },
    },
    rules: {
      // Astro nie używa className — wyłączamy ewentualne reguły z presetów reactowych
      'react/no-unknown-property': 'off',
    },
  },
];
