/**
 * BSD 3-Clause License
 *
 * Copyright © 2023, Daniel Jonathan <daniel at cosmicmind dot com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * 3. Neither the name of the copyright holder nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES LOSS OF USE, DATA, OR PROFITS OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

import {
	RouteRecordRaw,
} from 'vue-router'

import AdaptiveNavigationDrawer from '@/app/views/adaptive/components/AdaptiveNavigationDrawer.vue'

import AppNavigationRail from '@/app/views/app/components/AppNavigationRail.vue'
import AppTopAppBar from '@/app/views/app/components/AppTopAppBar.vue'
// import AppToolbar from '@/app/views/app/components/AppToolbar.vue'
import AppFinder from '@/app/views/app/components/AppFinder.vue'
import AppModal from '@/app/views/app/components/AppModal.vue'

import DiscoverMain from '@/app/views/discover/components/DiscoverMain.vue'

const routes: RouteRecordRaw[] = [
	{
		name: 'discover',
		path: '/',
		components: {
			'navigation-rail': AppNavigationRail,
			'navigation-drawer': AdaptiveNavigationDrawer,
			'top-app-bar': AppTopAppBar,
			// toolbar: AppToolbar,
			main: DiscoverMain,
			finder: AppFinder,
			modal: AppModal,
		},
	}
]

export default routes
