import {
	URL,
	fileURLToPath,
} from 'node:url'

import {
	defineConfig,
} from 'vite'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

const srcDir = './src'
const emptyOutDir = false

export default defineConfig({
	resolve: {
		alias: {
			'@': fileURLToPath(new URL(srcDir, import.meta.url)),
		},
	},
	build: {
		outDir: 'dist/public',
		emptyOutDir,
	},
	server: {
		strictPort: true,
		port: 80,
		host: '0.0.0.0',
	},
	preview: {
		strictPort: true,
		port: 80,
		host: '0.0.0.0',
	},
	plugins: [
		vue(),
		vueJsx()
	],
})