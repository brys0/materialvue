/* Copyright (C) 2022, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. */

import {
	h,
	VNode,
	defineComponent,
} from 'vue'

export const Column = defineComponent({
	render(): VNode {
		return h('div', {
			class: 'column',
		}, {
			default: () => this.$slots.default?.(),
		})
	},
})

export default Column