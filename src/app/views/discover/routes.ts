/* Copyright (C) 2022, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. */

import {
	RouteRecordRaw,
} from 'vue-router'

import DiscoverSidebarVue from '@/app/views/discover/components/DiscoverSidebar.vue'
import DiscoverNavigationDrawerVue from '@/app/views/discover/components/DiscoverNavigationDrawer.vue'
import DiscoverNavigationBarVue from '@/app/views/discover/components/DiscoverNavigationBar.vue'
import DiscoverToolbarVue from '@/app/views/discover/components/DiscoverToolbar.vue'
import DiscoverMainVue from '@/app/views/discover/components/DiscoverMain.vue'
import DiscoverFinderVue from '@/app/views/discover/components/DiscoverFinder.vue'

const routes: RouteRecordRaw[] = [
	{
		name: 'discover',
		path: '/',
		components: {
			sidebar: DiscoverSidebarVue,
			'navigation-drawer': DiscoverNavigationDrawerVue,
			'navigation-bar': DiscoverNavigationBarVue,
			toolbar: DiscoverToolbarVue,
			main: DiscoverMainVue,
			finder: DiscoverFinderVue,
		},
	}
]

export default routes
