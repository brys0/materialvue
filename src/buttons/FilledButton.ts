/* Copyright (C) 2022, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. */

import {
	PropType,
	defineComponent,
} from 'vue'

import {
	Button,
	ButtonStyle,
} from '@/buttons/Button'

export const FilledButton = defineComponent({
	extends: Button,
	props: {
		style: {
			type: String as PropType<ButtonStyle.filled>,
			default: ButtonStyle.filled,
		},
	},
})

export default FilledButton