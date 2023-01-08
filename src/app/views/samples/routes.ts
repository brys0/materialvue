/* Copyright (C) 2022, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. */

import {
	RouteRecordRaw,
} from 'vue-router'

import SamplesMainVue from '@/app/views/samples/components/SamplesMain.vue'

const routes: RouteRecordRaw[] = [
	{
		name: 'samples',
		path: '/',
		components: {
			main: SamplesMainVue,
		},
	}
]

export default routes
