/* Copyright (C) 2022, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. */

import {
	PropType,
	defineComponent,
} from 'vue'

import {
	Typography,
	TypographyStyle,
} from '@/typography/Typography'

export const Title = defineComponent({
	extends: Typography,
	props: {
		style: {
			type: String as PropType<TypographyStyle.title>,
			default: TypographyStyle.title,
		},
	},
})

export default Title