/* Copyright (C) 2022, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. */

import Router from '@koa/router'
import serve from 'koa-static'

export default (router: Router): void => {
	router.get([
		'/'
	], (ctx, next) => {
		serve('dist/public')(
			Object.assign(ctx, {
				path: 'index.html',
			}),
			next)
	})
}