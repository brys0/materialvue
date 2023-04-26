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
	createApp,
} from 'vue'

import {
	createPinia,
} from 'pinia'

import {
	createRouter,
	createWebHistory,
} from 'vue-router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import '@/app/main.sass'
import { MApp } from '@/lib/vue'

import adaptiveRoutes from '@/app/views/adaptive/routes'
import buttonsRoutes from '@/app/views/buttons/routes'
import cardsRoutes from '@/app/views/cards/routes'
import iconsRoutes from '@/app/views/icons/routes'
import layoutsRoutes from '@/app/views/layouts/routes'
import listsRoutes from '@/app/views/lists/routes'
import navigationRoutes from '@/app/views/navigation/routes'
import textFieldsRoutes from '@/app/views/text-fields/routes'
import themingRoutes from '@/app/views/theming/routes'
import typographyRoutes from '@/app/views/typography/routes'
import discoverRoutes from '@/app/views/discover/routes'

const router = createRouter({
	routes: [
		...adaptiveRoutes,
		...discoverRoutes,
		...buttonsRoutes,
		...cardsRoutes,
		...iconsRoutes,
		...listsRoutes,
		...layoutsRoutes,
		...navigationRoutes,
		...textFieldsRoutes,
		...themingRoutes,
		...typographyRoutes
	],
	history: createWebHistory(),
})

/* import specific icons */
import { faGithub } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faGithub)

createApp(MApp)
	.component('font-awesome-icon', FontAwesomeIcon)
	.use(createPinia())
	.use(router)
	.mount('#mount-vue')
