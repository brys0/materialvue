/* Copyright (C) 2022, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. */

import {
	h,
	VNode,
	PropType,
	defineComponent,
} from 'vue'

import {
	logger,
} from '@cosmicmind/foundation'

export enum ButtonStyle {
  elevated = 'elevated',
	filled = 'filled',
  tonal = 'tonal',
	outlined = 'outlined',
  text = 'text',
}

export enum ButtonState {
  enabled = 'enabled',
  hovered = 'hovered',
  focused = 'focused',
	pressed = 'pressed',
	disabled = 'disabled',
}

export const Button = defineComponent({
	props: {
		style: {
			type: String as PropType<ButtonStyle>,
			default: ButtonStyle.text,
		},
		state: {
			type: String as PropType<ButtonState>,
			default: ButtonState.enabled,
		},
	},
	emits: [ 'click' ],
	render(): VNode {
		return h('button', {
			class: `button ${this.$props.style} ${this.$props.state}`,
			onClick: (event: PointerEvent) => {
				if (ButtonState.enabled === this.$props.state) {
					this.$el.blur()
					logger.trace(this)
					this.$emit('click', event)
				}
			},
		}, {
			default: () => this.$slots.default?.(),
		})
	},
})

export default Button