/* Copyright (C) 2022, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. */

import {
	RouteRecordRaw,
} from 'vue-router'

// import DiscoverNavigationDrawerVue from '@/app/views/discover/components/DiscoverNavigationDrawer.vue'
// import DiscoverNavigationBarVue from '@/app/views/discover/components/DiscoverNavigationBar.vue'
import DiscoverMainVue from '@/app/views/discover/components/DiscoverMain.vue'

const routes: RouteRecordRaw[] = [
	{
		name: 'discover',
		path: '/',
		components: {
			// 'navigation-drawer': DiscoverNavigationDrawerVue,
			// 'navigation-bar': DiscoverNavigationBarVue,
			main: DiscoverMainVue,
		},
	}
]

export default routes
