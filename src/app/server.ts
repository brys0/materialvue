/* Copyright (C) 2022, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. */

import http from 'http'

import Koa from 'koa'
import Router from '@koa/router'
import KeyGrip from 'keygrip'
import serve from 'koa-static'

import {
	logger,
} from '@cosmicmind/foundation'

import {
	koaBody,
} from 'koa-body'

import routes from '@/app/routes'

export const keygrip = {
	keys: [
		'keygrip key a',
		'keygrip key b'
	],
	hash: 'sha256',
}

const koa = new Koa()
koa.proxy = false
koa.keys = new KeyGrip(keygrip.keys, keygrip.hash)

koa.use(koaBody())

koa.use(serve('dist/public', {
	maxage: 0,
}))

const router = new Router()
koa.use(router.routes()).use(router.allowedMethods())

routes(router)

try {
	const server = http.createServer(koa.callback())
	server.listen(__SERVER_PORT__ || 3000)

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
