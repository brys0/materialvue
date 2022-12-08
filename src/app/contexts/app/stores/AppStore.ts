// Copyright © 2022, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved.

import {
	defineStore,
} from 'pinia'

export const useAppStore = defineStore('AppStore', {
	state: () => ({
		theme: 'light',
	}),
})
