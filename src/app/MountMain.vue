<!--
/**
 * BSD 3-Clause License
 *
 * Copyright (c) 2022, Daniel Jonathan <daniel at cosmicverse dot org>
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
} from '@/lib/vue/apps/App'

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
