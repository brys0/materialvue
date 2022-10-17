/* Copyright (C) 2022, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. */

import {
	h,
	VNode,
	PropType,
	defineComponent,
} from 'vue'

export enum TypographyStyle {
  display = 'display',
  headline = 'headline',
  title = 'title',
	label = 'label',
	body = 'body',
}

export enum TypographySize {
  large = 'large',
  medium = 'medium',
  small = 'small',
}

export const Typography = defineComponent({
	props: {
		style: {
			type: String as PropType<TypographyStyle>,
			default: TypographyStyle.title,
		},
		size: {
			type: String as PropType<TypographySize>,
			default: TypographySize.small,
		},
	},
	render(): VNode {
		return h('span', {
			class: `typography ${this.$props.style} ${this.$props.size}`,
		}, {
			default: () => this.$slots.default?.(),
		})
	},
})

export default Typography
