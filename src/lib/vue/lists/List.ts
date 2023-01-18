/**
 * BSD 3-Clause License
 *
 * Copyright (c) 2022, Daniel Jonathan <daniel at cosmicverse dot org>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 * 3. Neither the name of the copyright holder nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES LOSS OF USE, DATA, OR PROFITS OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

import {
	h,
	VNode,
	FunctionalComponent,
} from 'vue'

export enum ListLines {
  one = 1,
	two = 2,
	three = 3,
}

export type ListProps = {
	lines?: ListLines
	hasLeadingAvatar?: boolean
	hasLeadingIcon?: boolean
	hasLeadingImage?: boolean
	hasLeadingVideo?: boolean
	hasTrailingIcon?: boolean
	hasTrailingBadge?: boolean
}

export const List: FunctionalComponent<ListProps> = ({
	lines,
	hasLeadingAvatar,
	hasLeadingIcon,
	hasLeadingImage,
	hasLeadingVideo,
	hasTrailingIcon,
	hasTrailingBadge,
}, {
	slots,
}): VNode => h('ol', {
	class: {
		list: true,
		'lines-1': ListLines.one === lines,
		'lines-2': ListLines.two === lines,
		'lines-3': ListLines.three === lines,
		'has-leading-avatar': hasLeadingAvatar,
		'has-leading-icon': hasLeadingIcon,
		'has-leading-image': hasLeadingImage,
		'has-leading-video': hasLeadingVideo,
		'has-trailing-icon': hasTrailingIcon,
		'has-trailing-badge': hasTrailingBadge,
	},
}, {
	default: () => slots.default?.(),
})

List.displayName = 'List'

List.props = [
	'lines',
	'has-leading-avatar',
	'has-leading-icon',
	'has-leading-image',
	'has-leading-video',
	'has-trailing-icon',
	'has-trailing-badge'
]

export default List
