/* Copyright (C) 2022, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. */

import {
	h,
	VNode,
	defineComponent,
} from 'vue'

export const RowCenter = defineComponent({
	render(): VNode {
		return h('div', {
			class: 'row-center',
		}, {
			default: () => this.$slots.default?.(),
		})
	},
})

export default RowCenter