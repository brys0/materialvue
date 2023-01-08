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
	h,
	ref,
	VNode,
	PropType,
	defineComponent,
} from 'vue'

import {
	FormField,
} from '@/lib/forms'

export enum TextFieldState {
  enabled = 'enabled',
  hovered = 'hovered',
  focused = 'focused',
	disabled = 'disabled',
}

export const TextField = defineComponent({
	name: 'TextField',
	props: {
		state: {
			type: String as PropType<TextFieldState>,
			default: TextFieldState.enabled,
		},
		hasError: {
			type: Boolean,
			default: false,
		},
	},
	emits: [
		'updateState',
		'click'
	],
	render(): VNode {
		const inputRef = ref<null | VNode>(null)

		const {
			state,
			hasError,
		} = this.$props

		const field = h(FormField, {
			class: {
				'text-field': true,
				enabled: TextFieldState.enabled === state,
				hovered: TextFieldState.hovered === state,
				focused: TextFieldState.focused === state,
				disabled: TextFieldState.disabled === state,
				error: true === hasError,
			},
			onClick: (event: PointerEvent) => {
				if (TextFieldState.enabled === this.$props.state) {
					const {
						$el,
					} = this

					$el.classList.add('focused')

					const el = inputRef.value?.el
					if (el instanceof HTMLInputElement) {
						el.focus()
						el.onblur = (): void => {
							$el.classList.remove('focused')
						}
					}

					this.$emit('updateState', TextFieldState.focused)
					this.$emit('click', event)
				}
			},
		}, {
			default: () => this.$slots.default?.(),
		})

		return field
	},
})

export default TextField
