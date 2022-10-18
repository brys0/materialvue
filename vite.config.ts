import {
	URL,
	fileURLToPath,
} from 'node:url'

import {
	defineConfig,
	LibraryFormats,
	HmrContext,
	Plugin,
} from 'vite'

import dts from 'vite-plugin-dts'

const packageName = process.env.npm_package_name
const packageVersion = JSON.stringify(process.env.npm_package_version)

const external = [
	'@cosmicmind/foundation'
]
const globals = {}
const emptyOutDir = true
const formats: LibraryFormats[] = [ 'es' ]

function CustomHmr(): Plugin {
	return {
		name: 'custom-hmr',
		enforce: 'post',
		handleHotUpdate: (ctx: HmrContext): void => {
			if (ctx.file.endsWith('.sass') || ctx.file.endsWith('.scss')) {
				ctx.server.ws.send({
					type: 'full-reload',
					path: '*',
				})
			}
		},
	}
}

export default defineConfig(({
	mode,
}) => {
	const watch = 'watch' === mode ? {
		include: [
			'./src/**/*',
			'./public/**/*'
		],
	}: undefined

	return {
		define: {
			'__PACKAGE_NAME__': packageVersion,
			'__PACKAGE_VERSION__': packageVersion,
		},
		resolve: {
			alias: {
				'@': fileURLToPath(new URL('./src', import.meta.url)),
			},
		},
		plugins: [
			CustomHmr(),
			dts()
		],
		build: {
			emptyOutDir,
			lib: {
				name: packageName,
				entry: './src/index.ts',
				formats,
				fileName: 'lib.es',
			},
			rollupOptions: {
				external,
				output: {
					globals,
				},
			},
			watch,
		},
	}
})