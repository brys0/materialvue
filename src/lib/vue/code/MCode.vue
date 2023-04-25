<!--
/**
 * BSD 3-Clause License
 *
 * Copyright © 2023, Daniel Jonathan <daniel at cosmicmind dot com>
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
-->

<script lang="ts" setup>

import {
	toRef,
	shallowRef,
	triggerRef,
	onMounted,
} from 'vue'

import {
	guard,
} from '@cosmicmind/foundationjs'

import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import xml from 'highlight.js/lib/languages/xml'

hljs.registerLanguage('xml', xml)
hljs.registerLanguage('javascript', javascript)

const addIndentation = (splittedHtml, options = {}) => {
	const char = options.char || ' '
	const count = options.count || 2

	let level = 0
	const opened = []

	return splittedHtml.reverse().reduce((indented, elTag) => {
		if (opened.length
      && level
      && opened[level]
      /* if current element tag is the same as previously opened one */
      && opened[level] === elTag.substring(1, opened[level].length + 1)
		) {
			opened.splice(level, 1)
			level--
		}

		const indentation = char.repeat(level ? level * count : 0)

		const newIndented = [
			`${indentation}${elTag}`,
			...indented
		]

		// if current element tag is closing tag
		// add it to opened elements
		if (elTag.substring(0, 2) === '</') {
			level++
			opened[level] = elTag.substring(2, elTag.length - 1)
		}

		return newIndented
	}, []).join('\n')
}

/**
 * @param {string} nonFormattedString Any non formatted string
 * @returns {string[]} Array of strings separated on new lines
 */
const removeEmptyLines = (nonFormattedString) =>
// Replace
// - 1 or more spaces or tabs at the start of line
// - 1 or more spaces or tabs at the end of line
// - empty lines
// with empty string
	nonFormattedString.trim().replace(/(^(\s|\t)+|(( |\t)+)$)/gm, '')


/**
 * @param {string} markup
 * @returns {string[]} Array of strings splitted on new lines without empty lines
 */
const mergeAttributesWithElements = (markup) => {
	const splittedMarkup = removeEmptyLines(markup).split('\n')

	const mergedLines = []
	let currentElement = ''
	for (let i = 0; i < splittedMarkup.length; i += 1) {
		const line = splittedMarkup[i]

		// If line is closing element/tag separate closing tag from rest of the line with space
		if (line.endsWith('/>')) {
			mergedLines.push(`${currentElement}${line.slice(0, -2)} />`)
			currentElement = ''
			// eslint-disable-next-line no-continue
			continue
		}

		if (line.endsWith('>')) {
			mergedLines.push(`${currentElement}${
				line.startsWith('>') || line.startsWith('<') ? '' : ' '
			}${line}`)
			currentElement = ''
			// eslint-disable-next-line no-continue
			continue
		}

		currentElement += currentElement.length ? ` ${line}` : line
	}

	return mergedLines
}

const prettify = (markup, options = {}) => {
	const splitted = mergeAttributesWithElements(markup)

	return addIndentation(splitted, options)
}

const elRef = shallowRef<HTMLElement | null>(null)



const props = defineProps({
	code: {
		type: String,
		default: '',
	},
})

const codeRef =toRef(props, 'code')

onMounted(() => {
	const code = codeRef.value
	const el = elRef.value

	if (guard<HTMLElement>(el)) {
		if (0 < code.length) {
			el.innerHTML = hljs.highlight(prettify(code), { language: 'xml' }).value
		}
		else {
			console.log('here', prettify(el.innerHTML))
			el.innerHTML = hljs.highlight(prettify(el.innerHTML), { language: 'xml' }).value
		}
	}

	triggerRef(elRef)
})

</script>

<template>
  <pre>
    <code ref="elRef">
      <slot />
    </code>
  </pre>
</template>