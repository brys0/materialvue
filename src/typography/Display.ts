/* Copyright (C) 2022, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. */

import {
	PropType,
	defineComponent,
} from 'vue'

import {
	Typography,
	TypographyStyle,
} from '@/typography/Typography'

export const Display = defineComponent({
	extends: Typography,
	props: {
		style: {
			type: String as PropType<TypographyStyle.display>,
			default: TypographyStyle.display,
		},
	},
})

export default Display