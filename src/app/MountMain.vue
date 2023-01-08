<!-- Copyright (C) 2022, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. -->

<script lang="ts" setup>
import {
	watch,
	onBeforeUnmount,
} from 'vue'

import {
	storeToRefs,
} from 'pinia'

import {
	logger,
} from '@cosmicmind/foundation'

import {
	App,
} from '@/app/contexts/app/components/App'

import {
	useAppStore,
} from '@/app/contexts/app/stores/AppStore'

const appStore = useAppStore()

const {
	theme,
} = storeToRefs(appStore)

appStore.$subscribe((): void => {
	logger.log('appStore subscribe')
})

appStore.$onAction((): void => {
	logger.log('appStore actions')
})

const syncTheme = (theme: string): void => {
	const {
		body,
	} = document

	if ('light' === theme) {
		body.classList.add('theme-light')
		body.classList.remove('theme-dark')
	}
	else {
		body.classList.add('theme-dark')
		body.classList.remove('theme-light')
	}
}

const unwatchTheme = watch(theme, syncTheme)

// Check to see if Media-Queries are supported
if (window.matchMedia) {
	logger.trace('matchMedia', window.matchMedia('(prefers-color-scheme: dark)').matches)

	if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
		theme.value = 'dark'
		syncTheme('dark')

		logger.trace('detected dark theme')
	}
	else {
		theme.value = 'light'
		syncTheme('light')

		logger.trace('detected light theme')
	}

	window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
		theme.value = event.matches ? 'dark' : 'light'
	})
}
else {
	theme.value = 'light'
	syncTheme('light')

	logger.trace('detected light theme')
}

onBeforeUnmount((): void => {
	unwatchTheme()
})

</script>

<template>
  <App />
</template>
