/* Copyright (C) 2022, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. */

import {
	h,
	VNode,
	FunctionalComponent,
} from 'vue'

export type AppContentProps = {}

export const AppContent: FunctionalComponent<AppContentProps> = (_, {
	slots,
}): VNode => h('div', {
	class: 'content',
}, {
	default: () => slots.default?.(),
})

AppContent.props = []

export default AppContent