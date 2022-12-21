/* Copyright (C) 2022, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. */

import http from 'http'
import Koa from 'koa'
import koaBodyParser from 'koa-bodyparser'
import Router from '@koa/router'
import serve from 'koa-static'

import {
	logger,
} from '@cosmicmind/foundation'

import routes from '@/app/routes'

const app = new Koa()
app.proxy = true

app.use(koaBodyParser())

app.use(serve('dist/public', {
	maxage: 0,
}))

const router = new Router()
app.use(router.routes()).use(router.allowedMethods())

routes(router)

try {
	const server = http.createServer(app.callback())
	server.listen(SERVER_PORT)

	const shutdown = (): void => {
		server.close((error?: Error) => {
			if (error) {
				logger.error(error)
				process.exitCode = 1
			}
			process.exit()
		})
	}

	process.on('SIGINT', () => {
		logger.info('Got SIGINT (aka ctrl-c in docker). Graceful shutdown ', new Date().toISOString())
		shutdown()
	})

	process.on('SIGTERM', () => {
		logger.info('Got SIGTERM (docker container stop). Graceful shutdown ', new Date().toISOString())
		shutdown()
	})
}
catch (error) {
	process.exit(1)
}
