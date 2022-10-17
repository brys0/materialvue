/* Copyright (C) 2022, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. */

import {
	PropType,
	defineComponent,
} from 'vue'

import {
	Button,
	ButtonStyle,
} from '@/buttons/Button'

export const TonalButton = defineComponent({
	extends: Button,
	props: {
		style: {
			type: String as PropType<ButtonStyle.tonal>,
			default: ButtonStyle.tonal,
		},
	},
})

export default TonalButton