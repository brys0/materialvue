<!--
/**
 * BSD 3-Clause License
 *
 * Copyright (c) 2022, Daniel Jonathan <daniel at cosmicmind dot com>
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
-->

<script lang="ts" setup>
import {
	watch,
	onBeforeMount,
	onBeforeUnmount,
} from 'vue'

import {
	storeToRefs,
} from 'pinia'

import { logger } from '@cosmicmind/foundationjs'

import {
	useAppStore,
	Theme,
} from '@/app/contexts/app/stores/AppStore'

const appStore = useAppStore()

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

const {
	theme,
} = storeToRefs(appStore)

const unwatchTheme = watch(theme, syncTheme)

onBeforeMount(() => {
	syncTheme(appStore.theme)

	// Check to see if Media-Queries are supported
	if (window.matchMedia) {
		logger.trace('matchMedia', window.matchMedia('(prefers-color-scheme: dark)').matches)

		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			appStore.setTheme(Theme.dark)

			logger.trace('detected dark theme')
		}
		else {
			appStore.setTheme(Theme.light)

			logger.trace('detected light theme')
		}

		window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', event => {
			appStore.setTheme(event.matches ? Theme.light : Theme.dark)
		})
	}
})

onBeforeUnmount(() => {
	unwatchTheme()
})

</script>

<template>
  <div class="m-app">
    <router-view name="top-app-bar" />
    <router-view name="navigation-rail" />
    <router-view name="navigation-drawer" />
    <router-view name="toolbar" />
    <router-view name="main" />
    <router-view name="finder" />
    <router-view name="modal" />
    <div class="m-scrim" />
  </div>
</template>