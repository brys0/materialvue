/* Copyright (C) 2022, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. */

import {
	PropType,
	defineComponent,
} from 'vue'

import {
	Button,
	ButtonStyle,
} from '@/buttons/Button'

export const ElevatedButton = defineComponent({
	extends: Button,
	props: {
		style: {
			type: String as PropType<ButtonStyle.elevated>,
			default: ButtonStyle.elevated,
		},
	},
})

export default ElevatedButton