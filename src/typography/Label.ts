/* Copyright (C) 2022, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. */

import {
	PropType,
	defineComponent,
} from 'vue'

import {
	Typography,
	TypographyStyle,
} from '@/typography/Typography'

export const Label = defineComponent({
	extends: Typography,
	props: {
		style: {
			type: String as PropType<TypographyStyle.label>,
			default: TypographyStyle.label,
		},
	},
})

export default Label