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

import discoverRoutes from '@/app/views/discover/routes'

const router = createRouter({
	routes: [
		...discoverRoutes
	],
	history: createWebHistory(),
})

createApp(MountMain)
	.use(createPinia())
	.use(router)
	.mount('#mount-vue')
