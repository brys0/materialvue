import {
	URL,
	fileURLToPath,
} from 'node:url'

import {
	UserConfigExport,
	defineConfig,
} from 'vite'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

const srcDir = './src'
const emptyOutDir = false

export default defineConfig(({
	mode,
}) => {
	const minify = 'production' === mode
	const config: UserConfigExport = {
		define: {
			SERVER_ACCOUNT_ENDPOINT: JSON.stringify(String(process.env.SERVER_ACCOUNT_ENDPOINT)),
		},
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
			vue(),
			vueJsx()
		],
	}

	return config
})