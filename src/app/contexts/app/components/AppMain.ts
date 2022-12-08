/* Copyright (C) 2022, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. */

import {
	h,
	VNode,
	FunctionalComponent,
} from 'vue'

export type AppMainProps = {}

export const AppMain: FunctionalComponent<AppMainProps> = (_, {
	slots,
}): VNode => h('main', {
	class: 'main',
}, {
	default: () => slots.default?.(),
})

AppMain.props = []

export default AppMain