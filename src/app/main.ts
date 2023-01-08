/* Copyright (C) 2022, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. */

import {
	createApp,
} from 'vue'

import {
	createPinia,
} from 'pinia'

import {
	createRouter,
	createWebHistory,
} from 'vue-router'

import '@/app/main.sass'
import MountMain from '@/app/MountMain.vue'

import samplesRoutes from '@/app/views/samples/routes'

const router = createRouter({
	routes: [
		...samplesRoutes
	],
	history: createWebHistory(),
})

createApp(MountMain)
	.use(createPinia())
	.use(router)
	.mount('#mount-vue')
