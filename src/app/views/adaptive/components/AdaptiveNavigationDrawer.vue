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
	MNavigationDrawer,
	MDrawerLeading,
	MDrawerBody,
	MDrawerTrailing,
	MDrawerList,
	MDrawerListItem,
	MDrawerListItemLeading,
	MDrawerListItemBody,
	MDrawerListItemTrailing,
	MHeadline,
	MLabel,
	MIconButton,
	MRoundedIcon,
	MDivider,
	MBar,
	MBarLeading,
} from '@/lib/vue'

import {
	useAppStore,
} from '@/app/contexts/app/stores/AppStore'

const appStore = useAppStore()

const toggleNavigationDrawer = (): void => appStore.toggleNavigationDrawer()
const isNavigationDrawerOpened = computed(() => appStore.isNavigationDrawerOpened)

</script>

<template>
  <m-navigation-drawer :is-opened="isNavigationDrawerOpened">
    <m-drawer-leading>
      <m-headline class="is-gt-tablet">
        Headline
      </m-headline>
      <m-bar class="is-lt-desktop">
        <m-bar-leading>
          <m-icon-button
            :toggle="true"
            :selected="isNavigationDrawerOpened"
            @click="toggleNavigationDrawer"
          >
            <m-rounded-icon>
              arrow_back_ios
            </m-rounded-icon>
          </m-icon-button>
          <m-headline>
            Material
          </m-headline>
        </m-bar-leading>
      </m-bar>
    </m-drawer-leading>
    <m-drawer-body>
      <m-drawer-list>
        <m-drawer-list-item>
          <m-drawer-list-item-leading>
            <m-rounded-icon>
              mail
            </m-rounded-icon>
          </m-drawer-list-item-leading>
          <m-drawer-list-item-body>
            <m-label>
              Mail
            </m-label>
          </m-drawer-list-item-body>
          <m-drawer-list-item-trailing>
            <m-label>
              100+
            </m-label>
          </m-drawer-list-item-trailing>
        </m-drawer-list-item>
        <m-drawer-list-item :selected="true">
          <m-drawer-list-item-leading>
            <m-rounded-icon>
              movie
            </m-rounded-icon>
          </m-drawer-list-item-leading>
          <m-drawer-list-item-body>
            <m-label>
              Videos
            </m-label>
          </m-drawer-list-item-body>
          <m-drawer-list-item-trailing>
            <m-label>
              100+
            </m-label>
          </m-drawer-list-item-trailing>
          <m-divider />
        </m-drawer-list-item>
        <m-drawer-list-item>
          <m-drawer-list-item-leading>
            <m-rounded-icon>
              mail
            </m-rounded-icon>
          </m-drawer-list-item-leading>
          <m-drawer-list-item-body>
            <m-label>
              Mail
            </m-label>
          </m-drawer-list-item-body>
          <m-drawer-list-item-trailing>
            <m-label>
              100+
            </m-label>
          </m-drawer-list-item-trailing>
        </m-drawer-list-item>
        <m-drawer-list-item>
          <m-drawer-list-item-leading>
            <m-rounded-icon>
              movie
            </m-rounded-icon>
          </m-drawer-list-item-leading>
          <m-drawer-list-item-body>
            <m-label>
              Videos
            </m-label>
          </m-drawer-list-item-body>
          <m-drawer-list-item-trailing>
            <m-label>
              100+
            </m-label>
          </m-drawer-list-item-trailing>
          <m-divider />
        </m-drawer-list-item>
        <m-drawer-list-item>
          <m-drawer-list-item-leading>
            <m-rounded-icon>
              movie
            </m-rounded-icon>
          </m-drawer-list-item-leading>
          <m-drawer-list-item-body>
            <m-label>
              Videos
            </m-label>
          </m-drawer-list-item-body>
          <m-drawer-list-item-trailing>
            <m-label>
              100+
            </m-label>
          </m-drawer-list-item-trailing>
        </m-drawer-list-item>
        <m-drawer-list-item>
          <m-drawer-list-item-leading>
            <m-rounded-icon>
              mail
            </m-rounded-icon>
          </m-drawer-list-item-leading>
          <m-drawer-list-item-body>
            <m-label>
              Mail
            </m-label>
          </m-drawer-list-item-body>
          <m-drawer-list-item-trailing>
            <m-label>
              100+
            </m-label>
          </m-drawer-list-item-trailing>
        </m-drawer-list-item>
        <m-drawer-list-item>
          <m-drawer-list-item-leading>
            <m-rounded-icon>
              movie
            </m-rounded-icon>
          </m-drawer-list-item-leading>
          <m-drawer-list-item-body>
            <m-label>
              Videos
            </m-label>
          </m-drawer-list-item-body>
          <m-drawer-list-item-trailing>
            <m-label>
              100+
            </m-label>
          </m-drawer-list-item-trailing>
        </m-drawer-list-item>
      </m-drawer-list>
    </m-drawer-body>
    <m-drawer-trailing>
      <m-headline>
        Bottom
      </m-headline>
    </m-drawer-trailing>
  </m-navigation-drawer>
</template>