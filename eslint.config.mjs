import { defineConfig, globalIgnores } from 'eslint/config';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';

export default defineConfig([
	globalIgnores(['.next/**', 'node_modules/**']),
	{
		files: ['**/*.{ts,tsx}'],
		languageOptions: { parser: tsParser },
		plugins: { '@typescript-eslint': tsPlugin },
		rules: { '@typescript-eslint/no-unused-vars': 'warn' },
	},
]);