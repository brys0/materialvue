import {
	URL,
	fileURLToPath,
} from 'node:url'

import {
	UserConfigExport,
	defineConfig,
} from 'vite'

import vue from '@vitejs/plugin-vue'

const srcDir = './src'
const emptyOutDir = false

export default defineConfig(({ mode }) => {
	const minify = 'production' === mode
	const config: UserConfigExport = {
		resolve: {
			alias: {
				'@': fileURLToPath(new URL(srcDir, import.meta.url)),
			},
		},
		publicDir: 'public',
		build: {
			assetsDir: 'assets',
			outDir: 'dist/public',
			emptyOutDir,
			minify,
		},
		plugins: [
			vue()
		],
	}

	return config
})