<!--
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
-->

<script lang="ts" setup>
import {
	computed,
} from 'vue'

import {
	MTopAppBar,
	MBarLeading,
	MBarBody,
	MBarTrailing,
	MIconButton,
	MRoundedIcon,
	MHeadline,
} from '@/lib/vue'

import {
	useAppStore,
} from '@/app/contexts/app/stores/AppStore'

const appStore = useAppStore()

const toggleNavigationDrawer = (): void => appStore.toggleNavigationDrawer()
const isNavigationDrawerOpened = computed(() => appStore.isNavigationDrawerOpened)

const toggleTheme = (): void => appStore.toggleTheme()
const isThemeLight = computed(() => appStore.isThemeLight)

</script>

<template>
  <m-top-app-bar>
    <m-bar-leading>
      <m-icon-button
        :toggle="true"
        :selected="isNavigationDrawerOpened"
        @click="toggleNavigationDrawer"
      >
        <m-rounded-icon>
          menu
        </m-rounded-icon>
      </m-icon-button>
      <m-headline>
        Material
      </m-headline>
    </m-bar-leading>
    <m-bar-body>
      <m-headline>
        Search Bar
      </m-headline>
    </m-bar-body>
    <m-bar-trailing>
      <m-icon-button @click="toggleTheme">
        <m-rounded-icon v-if="isThemeLight">
          dark_mode
        </m-rounded-icon>
        <m-rounded-icon v-else>
          light_mode
        </m-rounded-icon>
      </m-icon-button>
      <m-icon-button>
        <m-rounded-icon>
          notifications
        </m-rounded-icon>
      </m-icon-button>
      <m-icon-button>
        <m-rounded-icon>
          account_circle
        </m-rounded-icon>
      </m-icon-button>
    </m-bar-trailing>
  </m-top-app-bar>
</template>