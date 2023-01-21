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

import {
	defineStore,
} from 'pinia'

export enum AppTheme {
	light = 'light',
	dark = 'dark',
}

export enum AppDrawerState {
	opened = 'opened',
	closed = 'closed',
}

export const useAppStore = defineStore('AppStore', {
	state: () => ({
		theme:AppTheme.light,
		drawerState: AppDrawerState.closed,
	}),

	getters: {
		isThemeLight: state => AppTheme.light === state.theme,
		isThemeDark: state => AppTheme.dark === state.theme,
		isDrawerOpened: state => AppDrawerState.opened === state.drawerState,
		isDrawerClosed: state => AppDrawerState.closed === state.drawerState,
	},

	actions: {
		setTheme(theme: AppTheme): void {
			this.$patch(state => {
				state.theme = theme
			})
		},

		toggleTheme(): void {
			this.$patch(state => {
				state.theme = AppTheme.light === state.theme ? AppTheme.dark : AppTheme.light
			})
		},

		openDrawer(): void {
			this.$patch(state => {
				state.drawerState = AppDrawerState.opened
			})
		},

		closeDrawer(): void {
			this.$patch(state => {
				state.drawerState = AppDrawerState.closed
			})
		},

		toggleDrawer(): void {
			this.$patch(state => {
				state.drawerState = AppDrawerState.opened === state.drawerState ? AppDrawerState.closed : AppDrawerState.opened
			})
		},
	},
})
