<!--
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
-->

<script lang="ts" setup>
import {
	ref,
	toRef,
	computed,
	PropType,
	onMounted,
	onBeforeUnmount,
	nextTick,
} from 'vue'

import {
	logger,
} from '@cosmicmind/foundation'

import {
	FormField,
} from '@/lib/forms'

import {
	TextFieldState,
} from '@/lib/text-field/TextFieldState'

const props = defineProps({
	state: {
		type: String as PropType<TextFieldState>,
		default: TextFieldState.enabled,
	},
	hasError: {
		type: Boolean,
		default: false,
	},
})

const emit = defineEmits<
{(e: 'click', event: MouseEvent): void
 (e: 'blur', event: Event): void
 (e: 'focus', event: Event): void
 (e: 'update:state', newState: TextFieldState, oldState: TextFieldState): void
}>()

const fieldRef = ref<HTMLElement | null>(null)
const inputRef = ref<HTMLInputElement | null>(null)
const isEmptyRef = computed(() => inputRef.value instanceof HTMLInputElement && 0 === inputRef.value.value.length)
const stateRef = ref(props.state)
const enabledRef = ref(TextFieldState.enabled === props.state)
const hoveredRef = ref(TextFieldState.hovered === props.state)
const focusedRef = ref(TextFieldState.focused === props.state)
const disabledRef = ref(TextFieldState.disabled === props.state)
const hasErrorRef = toRef(props, 'hasError')

const classRef = computed(() => ({
	'text-field': true,
	'has-error': hasErrorRef.value,
	'is-empty': isEmptyRef.value,
	enabled: enabledRef.value,
	hovered: hoveredRef.value,
	focused: focusedRef.value,
	disabled: disabledRef.value,
}))

const updateState = (newState: TextFieldState): void => {
	logger.trace('updateState')

	const oldState = stateRef.value
	if (newState !== oldState) {
		stateRef.value = newState

		const el = fieldRef.value

		if (el instanceof HTMLElement) {
			switch (newState) {
			case TextFieldState.disabled:
				enabledRef.value = false
				hoveredRef.value = false
				focusedRef.value = false
				disabledRef.value = true
				break
			case TextFieldState.enabled:
				enabledRef.value = true
				hoveredRef.value = false
				focusedRef.value = false
				disabledRef.value = false
				break
			case TextFieldState.focused:
				enabledRef.value = true
				hoveredRef.value = false
				focusedRef.value = true
				disabledRef.value = false
				break
			case TextFieldState.hovered:
				enabledRef.value = true
				hoveredRef.value = true
				focusedRef.value = false
				disabledRef.value = false
				break
			}
		}

		emit('update:state', newState, oldState)
	}
}

const handleClick = (event: MouseEvent): void => {
	event.preventDefault()
	event.stopPropagation()

	logger.trace('handleClick')
	const el = fieldRef.value

	if (el instanceof HTMLElement &&
		event.target instanceof HTMLElement &&
		el.contains(event.target)) {

		const target = inputRef.value
		if (target instanceof HTMLInputElement) {
			nextTick(() => {
				logger.trace('nextTick', target)
				target.focus()
			})
		}

		updateState(TextFieldState.focused)
	}
	else {
		updateState(TextFieldState.enabled)
	}

	emit('click', event)
}

const handleBlur = (event: Event): void => {
	logger.trace('handleBlur')
	updateState(TextFieldState.enabled)
	emit('blur', event)
}

const handleFocus = (event: Event): void => {
	logger.trace('handleFocus')
	updateState(TextFieldState.focused)
	emit('focus', event)
}

onMounted(() => {
	const el = fieldRef.value
	if (el instanceof HTMLElement) {
		const target = el.querySelector('.field-input') as HTMLInputElement
		if (target instanceof HTMLInputElement) {
			inputRef.value = target
			target.addEventListener('blur', handleBlur)
			target.addEventListener('focus', handleFocus)
		}
	}
})

onBeforeUnmount(() => {
	const el = fieldRef.value
	if (el instanceof HTMLElement) {
		const target = inputRef.value
		if (target instanceof HTMLInputElement) {
			target.removeEventListener('blur', handleBlur)
			target.removeEventListener('focus', handleFocus)
		}
	}
})

const listeners = computed(() => ({
	click: handleClick,
}))

</script>

<template>
  <FormField
    ref="fieldRef"
    :class="classRef"
    v-on="listeners"
  >
    <slot />
  </FormField>
</template>