/* Copyright (C) 2022, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. */

import http from 'http'
import Koa from 'koa'
import Router from '@koa/router'
import serve from 'koa-static'

import {
	koaBody,
} from 'koa-body'

import {
	logger,
} from '@cosmicmind/foundation'

import routes from '@/app/routes'

const app = new Koa()
app.proxy = true

app.use(koaBody())

app.use(serve('dist/public', {
	maxage: 0,
}))

const router = new Router()
app.use(router.routes()).use(router.allowedMethods())

routes(router)

try {
	const server = http.createServer(app.callback())
	server.listen(SERVER_PORT || 3000)

	// shut down server
	const shutdown = (): void => {
		// NOTE: server.close is for express based apps
		// If using hapi, use `server.stop`
		server.close((error?: Error) => {
			if (error) {
				logger.error(error)
				process.exitCode = 1
			}
			process.exit()
		})
	}

	// quit on ctrl-c when running docker in terminal
	process.on('SIGINT', () => {
		logger.info('Got SIGINT (aka ctrl-c in docker). Graceful shutdown ', new Date().toISOString())
		shutdown()
	})

	// quit properly on docker stop
	process.on('SIGTERM', () => {
		logger.info('Got SIGTERM (docker container stop). Graceful shutdown ', new Date().toISOString())
		shutdown()
	})
}
catch (error) {
	process.exit(1)
}
