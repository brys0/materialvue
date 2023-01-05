/* Copyright (C) 2022, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. */

import {
	RouteRecordRaw,
} from 'vue-router'

import DiscoverMainVue from '@/app/views/discover/components/DiscoverMain.vue'

const routes: RouteRecordRaw[] = [
	{
		name: 'discover',
		path: '/',
		components: {
			main: DiscoverMainVue,
		},
	}
]

export default routes
