/* Copyright (C) 2022, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. */

import {
	RouteRecordRaw,
} from 'vue-router'

import DiscoverNavigationRail from '@/app/views/discover/components/DiscoverNavigationRail.vue'
import DiscoverNavigationDrawer from '@/app/views/discover/components/DiscoverNavigationDrawer.vue'
import DiscoverTopAppBar from '@/app/views/discover/components/DiscoverTopAppBar.vue'
import DiscoverToolbar from '@/app/views/discover/components/DiscoverToolbar.vue'
import DiscoverMain from '@/app/views/discover/components/DiscoverMain.vue'
import DiscoverFinder from '@/app/views/discover/components/DiscoverFinder.vue'
import DiscoverModal from '@/app/views/discover/components/DiscoverModal.vue'

const routes: RouteRecordRaw[] = [
	{
		name: 'discover',
		path: '/',
		components: {
			'navigation-rail': DiscoverNavigationRail,
			'navigation-drawer': DiscoverNavigationDrawer,
			'top-app-bar': DiscoverTopAppBar,
			toolbar: DiscoverToolbar,
			main: DiscoverMain,
			finder: DiscoverFinder,
			modal: DiscoverModal,
		},
	}
]

export default routes
