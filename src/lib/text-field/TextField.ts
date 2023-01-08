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
	VNode,
	FunctionalComponent,
} from 'vue'

import {
	FormField,
} from '@/lib/forms'

import {
	Row,
	RowStart,
	RowCenter,
	RowEnd,
	Column,
} from '@/lib/layout'

export enum TextFieldState {
  enabled = 'enabled',
  hovered = 'hovered',
  focused = 'focused',
	disabled = 'disabled',
}

export type TextFieldProps = {
	state: TextFieldState,
	hasError?: boolean
}

export const TextField: FunctionalComponent<TextFieldProps> = ({
	state,
	hasError,
}, {
	slots,
}): VNode => {
	let def: () => VNode[] = () => []

	const leading = slots.leading
	const text = slots.text
	const input = slots.input
	const trailing = slots.trailing
	const supporting = slots.supporting

	if (leading || text || input || trailing) {
		const children: VNode[] = []

		if (leading) {
			children.push(
				h(RowStart,
					() => h(Column, () => leading()))
			)
		}

		if (text && input) {
			children.push(
				h(RowCenter,
					() => h(Column, () => [ text(), input() ]))
			)
		}

		if (trailing) {
			children.push(
				h(RowEnd,
					() => h(Column, () => trailing()))
			)
		}

		def = supporting ? (): VNode[] => [
			h(Row, () => children),
			h(Row,
				() => h(Column, () => supporting()))
		] :
			(): VNode[] => [ h(Row, () => children) ]
	}

	return h(FormField, {
		class: {
			'text-field': true,
			enabled: TextFieldState.enabled === state,
			hovered: TextFieldState.hovered === state,
			focused: TextFieldState.focused === state,
			disabled: TextFieldState.disabled === state,
			error: true === hasError,
			'has-leading': 'undefined' !== typeof leading,
			'has-text': 'undefined' !== typeof text,
			'has-input': 'undefined' !== typeof input,
			'has-trailing': 'undefined' !== typeof trailing,
			'has-supporting': 'undefined' !== typeof supporting,
		},
	}, {
		default: def,
	})
}

TextField.displayName = 'TextField'

TextField.props = [
	'state',
	'hasError'
]

export default TextField
