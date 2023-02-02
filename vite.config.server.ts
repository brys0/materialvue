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
	'koa-bodyparser',
	'koa-static',
	'@koa/router',
	'@cosmicmind/foundation'
]

const srcDir = './src'
const emptyOutDir = false

export default defineConfig(({
	mode,
}) => {
	const minify = 'production' === mode
	const config: UserConfigExport = {
		define: {
			SERVER_PORT: JSON.stringify(String(process.env.SERVER_PORT)),
		},
		resolve: {
			alias: {
				'@': fileURLToPath(new URL(srcDir, import.meta.url)),
			},
		},
		publicDir: false,
		build: {
			emptyOutDir,
			lib: {
				name: process.env.npm_package_name,
				entry: `${srcDir}/app/server.ts`,
				formats,
				fileName: 'server',
			},
			rollupOptions: {
				external,
			},
			minify,
		},
	}

	return config
})