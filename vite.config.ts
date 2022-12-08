import {
	URL,
	fileURLToPath,
} from 'node:url'

import {
	defineConfig,
	LibraryFormats,
} from 'vite'

import dts from 'vite-plugin-dts'
import vue from '@vitejs/plugin-vue'

const external = [
	'vue',
	'@cosmicmind/foundation'
]
const globals = {}
const srcDir = './src'
const emptyOutDir = false
const formats: LibraryFormats[] = [ 'es' ]

export default defineConfig(() => {
	return {
		resolve: {
			alias: {
				'@': fileURLToPath(new URL(srcDir, import.meta.url)),
			},
		},
		plugins: [
			vue(),
			dts()
		],
		build: {
			emptyOutDir,
			lib: {
				name: process.env.npm_package_name,
				entry: `${srcDir}/index.ts`,
				formats,
				fileName: 'lib.es',
			},
			rollupOptions: {
				external,
				output: {
					globals,
				},
			},
		},
	}
})