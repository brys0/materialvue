/* Copyright (C) 2022, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. */

import {
	RouteRecordRaw,
} from 'vue-router'

import DiscoverNavigationRail from '@/app/views/discover/components/DiscoverNavigationRail.vue'
import DiscoverNavigationDrawer from '@/app/views/discover/components/DiscoverNavigationDrawer.vue'
import DiscoverNavigationBar from '@/app/views/discover/components/DiscoverNavigationBar.vue'
import DiscoverToolbar from '@/app/views/discover/components/DiscoverToolbar.vue'
import DiscoverMain from '@/app/views/discover/components/DiscoverMain.vue'

const routes: RouteRecordRaw[] = [
	{
		name: 'discover',
		path: '/',
		components: {
			'navigation-rail': DiscoverNavigationRail,
			'navigation-drawer': DiscoverNavigationDrawer,
			'navigation-bar': DiscoverNavigationBar,
			toolbar: DiscoverToolbar,
			main: DiscoverMain,
		},
	}
]

export default routes
