import {
	URL,
	fileURLToPath,
} from 'node:url'

import {
	LibraryFormats,
	UserConfigExport,
	defineConfig,
} from 'vite'

const formats: LibraryFormats[] = [ 'es' ]
const external = [
	'http',
	'koa',
	'koa-body',
	'koa-static',
	'@koa/router',
	'keygrip',
	'@cosmicmind/foundation'
]
const globals = {}
const srcDir = './src'
const emptyOutDir = false

export default (): UserConfigExport => {
	const config = defineConfig({
		define: {
			__SERVER_PORT__: JSON.stringify(process.env.SERVER_PORT),
		},
		resolve: {
			alias: {
				'@': fileURLToPath(new URL(srcDir, import.meta.url)),
			},
		},
		build: {
			emptyOutDir,
			lib: {
				name: process.env.npm_package_name,
				entry: 'src/app/server.ts',
				formats,
				fileName: 'server',
			},
			rollupOptions: {
				external,
				output: {
					globals,
				},
			},
		},
	})

	return config
}