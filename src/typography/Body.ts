/* Copyright (C) 2022, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. */

import {
	PropType,
	defineComponent,
} from 'vue'

import {
	Typography,
	TypographyStyle,
} from '@/typography/Typography'

export const Body = defineComponent({
	extends: Typography,
	props: {
		style: {
			type: String as PropType<TypographyStyle.body>,
			default: TypographyStyle.body,
		},
	},
})

export default Body