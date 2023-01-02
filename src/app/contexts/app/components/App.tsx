/* Copyright (C) 2022, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. */

import {
	VNode,
	Suspense,
	FunctionalComponent,
} from 'vue'

import AppContent from '@/app/contexts/app/components/AppContent'

export type AppProps = {}

export const App: FunctionalComponent<AppProps> = (): VNode =>
	<div class="app">
		<div class="frame">
			<Suspense
				v-slots={{
					default: () =>
						<>
							<router-view name="sidebar" />
							<router-view name="navigation-drawer" />
							<AppContent>
								<router-view name="navigation-bar" />
								<router-view name="toolbar" />
								<router-view name="main" />
							</AppContent>
							<router-view name="finder" />
							<router-view name="modal" />
						</>
					,
					fallback: () => <p>Loading...</p>,
				}}
			/>
		</div>
	</div>

App.displayName = 'App'

App.props = []

export default App