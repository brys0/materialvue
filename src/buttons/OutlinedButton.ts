/* Copyright (C) 2022, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. */

import {
	PropType,
	defineComponent,
} from 'vue'

import {
	Button,
	ButtonStyle,
} from '@/buttons/Button'

export const OutlinedButton = defineComponent({
	extends: Button,
	props: {
		style: {
			type: String as PropType<ButtonStyle.outlined>,
			default: ButtonStyle.outlined,
		},
	},
})

export default OutlinedButton