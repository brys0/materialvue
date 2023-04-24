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
 * 2. Redistributions in binary m-form must reproduce the above copyright notice,
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
	watch,
	onBeforeUnmount,
} from 'vue'

import {
	object,
	string,
} from 'yup'

import { useForm } from 'vee-validate'

import { logger } from '@cosmicmind/foundationjs'

import {
	MMain,
	MTypographySize,
	MDisplay,
	MHeadline,
	MTitle,
	MLabel,
	MBody,
	MButtonState,
	MFilledButton,
	MOutlinedButton,
	MTextButton,
	MElevatedButton,
	MTonalButton,
	MFilledIconButton,
	MTonalIconButton,
	MOutlinedIconButton,
	MIconButton,
	MFabButton,
	MFabButtonSize,
	MFabButtonVariant,
	MExtendedFabButton,
	MExtendedFabButtonVariant,
	MRow,
	MColumn,
	MSection,
	MForm,
	MFieldset,
	MFieldControl,
	MFieldBody,
	MFieldLeading,
	MFieldTrailing,
	MFieldInput,
	MFieldPrefix,
	MFieldSuffix,
	MFieldSupport,
	MTextFieldState,
	MFilledTextField,
	MOutlinedTextField,
	MRoundedIcon,
	MCardState,
	MElevatedCard,
	MFilledCard,
	MOutlinedCard,
	MBar,
	MBarDirection,
	MBarLeading,
	MBarBody,
	MBarTrailing,
	MDivider,
	MList,
	MListLines,
	MListItem,
	MListItemState,
	MListItemLeading,
	MListItemBody,
	MListItemTrailing,
	MVideo,
	MAvatar,
} from '@/lib/vue'

const validationSchema = object({
	email: string().required().email().label('Email Address'),
})

// create a form context with the validation schema
const {
	// meta,
	errors,
	handleSubmit,
} = useForm({
	validationSchema,
	initialValues: {
		email: '',
	},
})

const emailRef = ref<HTMLElement>()

const unwatchErrors = watch(errors, errors => {
	if (errors.email) {
		emailRef.value?.classList.add('error')
	}
	else {
		emailRef.value?.classList.remove('error')
	}

	logger.log('errors', errors)
})

const onSubmit = handleSubmit((data): void => {
	logger.log(data)
})

onBeforeUnmount(() => {
	unwatchErrors()
})

</script>

<template>
  <m-main>
    <m-section class="banner">
      <m-display :size="MTypographySize.large">
        Buttons
      </m-display>
      <m-body :size="MTypographySize.large">
        See the <a
          href="https://m3.material.io/components/buttons/overview"
          target="_blank"
        >Design Guidelines</a>
      </m-body>
    </m-section>
    <m-section>
      <m-display :size="MTypographySize.small">
        Elevated button states
      </m-display>
      <m-row>
        <m-column>
          <m-elevated-button>
            <m-label>
              Enabled
            </m-label>
          </m-elevated-button>
        </m-column>
        <m-column>
          <m-elevated-button :state="MButtonState.hovered">
            <m-label>
              Hovered
            </m-label>
          </m-elevated-button>
        </m-column>
        <m-column>
          <m-elevated-button :state="MButtonState.focused">
            <m-label>
              Focused
            </m-label>
          </m-elevated-button>
        </m-column>
        <m-column>
          <m-elevated-button :state="MButtonState.pressed">
            <m-label>
              Pressed
            </m-label>
          </m-elevated-button>
        </m-column>
        <m-column>
          <m-elevated-button :state="MButtonState.disabled">
            <m-label>
              Disabled
            </m-label>
          </m-elevated-button>
        </m-column>
      </m-row>
    </m-section>
    <m-section>
      <m-display :size="MTypographySize.small">
        Elevated button with icon states
      </m-display>
      <m-row>
        <m-column>
          <m-elevated-button>
            <m-rounded-icon>
              add_circle
            </m-rounded-icon>
            <m-label>
              Enabled
            </m-label>
          </m-elevated-button>
        </m-column>
        <m-column>
          <m-elevated-button :state="MButtonState.hovered">
            <m-rounded-icon>
              add_circle
            </m-rounded-icon>
            <m-label>
              Hovered
            </m-label>
          </m-elevated-button>
        </m-column>
        <m-column>
          <m-elevated-button :state="MButtonState.focused">
            <m-rounded-icon>
              add_circle
            </m-rounded-icon>
            <m-label>
              Focused
            </m-label>
          </m-elevated-button>
        </m-column>
        <m-column>
          <m-elevated-button :state="MButtonState.pressed">
            <m-rounded-icon>
              add_circle
            </m-rounded-icon>
            <m-label>
              Pressed
            </m-label>
          </m-elevated-button>
        </m-column>
        <m-column>
          <m-elevated-button :state="MButtonState.disabled">
            <m-rounded-icon>
              add_circle
            </m-rounded-icon>
            <m-label>
              Disabled
            </m-label>
          </m-elevated-button>
        </m-column>
      </m-row>
    </m-section>
    <m-section>
      <m-display :size="MTypographySize.small">
        Filled button states
      </m-display>
      <m-row>
        <m-column>
          <m-filled-button>
            <m-label>
              Enabled
            </m-label>
          </m-filled-button>
        </m-column>
        <m-column>
          <m-filled-button :state="MButtonState.hovered">
            <m-label>
              Hovered
            </m-label>
          </m-filled-button>
        </m-column>
        <m-column>
          <m-filled-button :state="MButtonState.focused">
            <m-label>
              Focused
            </m-label>
          </m-filled-button>
        </m-column>
        <m-column>
          <m-filled-button :state="MButtonState.pressed">
            <m-label>
              Pressed
            </m-label>
          </m-filled-button>
        </m-column>
        <m-column>
          <m-filled-button :state="MButtonState.disabled">
            <m-label>
              Disabled
            </m-label>
          </m-filled-button>
        </m-column>
      </m-row>
    </m-section>
    <m-section>
      <m-display :size="MTypographySize.small">
        Filled button with icon states
      </m-display>
      <m-row>
        <m-column>
          <m-filled-button>
            <m-rounded-icon>
              add_circle
            </m-rounded-icon>
            <m-label>
              Enabled
            </m-label>
          </m-filled-button>
        </m-column>
        <m-column>
          <m-filled-button :state="MButtonState.hovered">
            <m-rounded-icon>
              add_circle
            </m-rounded-icon>
            <m-label>
              Hovered
            </m-label>
          </m-filled-button>
        </m-column>
        <m-column>
          <m-filled-button :state="MButtonState.focused">
            <m-rounded-icon>
              add_circle
            </m-rounded-icon>
            <m-label>
              Focused
            </m-label>
          </m-filled-button>
        </m-column>
        <m-column>
          <m-filled-button :state="MButtonState.pressed">
            <m-rounded-icon>
              add_circle
            </m-rounded-icon>
            <m-label>
              Pressed
            </m-label>
          </m-filled-button>
        </m-column>
        <m-column>
          <m-filled-button :state="MButtonState.disabled">
            <m-rounded-icon>
              add_circle
            </m-rounded-icon>
            <m-label>
              Disabled
            </m-label>
          </m-filled-button>
        </m-column>
      </m-row>
    </m-section>
    <m-section>
      <m-display :size="MTypographySize.small">
        Tonal button states
      </m-display>
      <m-row>
        <m-column>
          <m-tonal-button>
            <m-label>
              Enabled
            </m-label>
          </m-tonal-button>
        </m-column>
        <m-column>
          <m-tonal-button :state="MButtonState.hovered">
            <m-label>
              Hovered
            </m-label>
          </m-tonal-button>
        </m-column>
        <m-column>
          <m-tonal-button :state="MButtonState.focused">
            <m-label>
              Focused
            </m-label>
          </m-tonal-button>
        </m-column>
        <m-column>
          <m-tonal-button :state="MButtonState.pressed">
            <m-label>
              Pressed
            </m-label>
          </m-tonal-button>
        </m-column>
        <m-column>
          <m-tonal-button :state="MButtonState.disabled">
            <m-label>
              Disabled
            </m-label>
          </m-tonal-button>
        </m-column>
      </m-row>
    </m-section>
    <m-section>
      <m-display :size="MTypographySize.small">
        Tonal button with icon states
      </m-display>
      <m-row>
        <m-column>
          <m-tonal-button>
            <m-rounded-icon>
              add_circle
            </m-rounded-icon>
            <m-label>
              Enabled
            </m-label>
          </m-tonal-button>
        </m-column>
        <m-column>
          <m-tonal-button :state="MButtonState.hovered">
            <m-rounded-icon>
              add_circle
            </m-rounded-icon>
            <m-label>
              Hovered
            </m-label>
          </m-tonal-button>
        </m-column>
        <m-column>
          <m-tonal-button :state="MButtonState.focused">
            <m-rounded-icon>
              add_circle
            </m-rounded-icon>
            <m-label>
              Focused
            </m-label>
          </m-tonal-button>
        </m-column>
        <m-column>
          <m-tonal-button :state="MButtonState.pressed">
            <m-rounded-icon>
              add_circle
            </m-rounded-icon>
            <m-label>
              Pressed
            </m-label>
          </m-tonal-button>
        </m-column>
        <m-column>
          <m-tonal-button :state="MButtonState.disabled">
            <m-rounded-icon>
              add_circle
            </m-rounded-icon>
            <m-label>
              Disabled
            </m-label>
          </m-tonal-button>
        </m-column>
      </m-row>
    </m-section>
    <m-section>
      <m-display :size="MTypographySize.small">
        Outlined button states
      </m-display>
      <m-row>
        <m-column>
          <m-outlined-button>
            <m-label>
              Enabled
            </m-label>
          </m-outlined-button>
        </m-column>
        <m-column>
          <m-outlined-button :state="MButtonState.hovered">
            <m-label>
              Hovered
            </m-label>
          </m-outlined-button>
        </m-column>
        <m-column>
          <m-outlined-button :state="MButtonState.focused">
            <m-label>
              Focused
            </m-label>
          </m-outlined-button>
        </m-column>
        <m-column>
          <m-outlined-button :state="MButtonState.pressed">
            <m-label>
              Pressed
            </m-label>
          </m-outlined-button>
        </m-column>
        <m-column>
          <m-outlined-button :state="MButtonState.disabled">
            <m-label>
              Disabled
            </m-label>
          </m-outlined-button>
        </m-column>
      </m-row>
    </m-section>
    <m-section>
      <m-display :size="MTypographySize.small">
        Outlined button with icon states
      </m-display>
      <m-row>
        <m-column>
          <m-outlined-button>
            <m-rounded-icon>
              add_circle
            </m-rounded-icon>
            <m-label>
              Enabled
            </m-label>
          </m-outlined-button>
        </m-column>
        <m-column>
          <m-outlined-button :state="MButtonState.hovered">
            <m-rounded-icon>
              add_circle
            </m-rounded-icon>
            <m-label>
              Hovered
            </m-label>
          </m-outlined-button>
        </m-column>
        <m-column>
          <m-outlined-button :state="MButtonState.focused">
            <m-rounded-icon>
              add_circle
            </m-rounded-icon>
            <m-label>
              Focused
            </m-label>
          </m-outlined-button>
        </m-column>
        <m-column>
          <m-outlined-button :state="MButtonState.pressed">
            <m-rounded-icon>
              add_circle
            </m-rounded-icon>
            <m-label>
              Pressed
            </m-label>
          </m-outlined-button>
        </m-column>
        <m-column>
          <m-outlined-button :state="MButtonState.disabled">
            <m-rounded-icon>
              add_circle
            </m-rounded-icon>
            <m-label>
              Disabled
            </m-label>
          </m-outlined-button>
        </m-column>
      </m-row>
    </m-section>
    <m-section>
      <m-display :size="MTypographySize.small">
        Text button states
      </m-display>
      <m-row>
        <m-column>
          <m-text-button>
            <m-label>
              Enabled
            </m-label>
          </m-text-button>
        </m-column>
        <m-column>
          <m-text-button :state="MButtonState.hovered">
            <m-label>
              Hovered
            </m-label>
          </m-text-button>
        </m-column>
        <m-column>
          <m-text-button :state="MButtonState.focused">
            <m-label>
              Focused
            </m-label>
          </m-text-button>
        </m-column>
        <m-column>
          <m-text-button :state="MButtonState.pressed">
            <m-label>
              Pressed
            </m-label>
          </m-text-button>
        </m-column>
        <m-column>
          <m-text-button :state="MButtonState.disabled">
            <m-label>
              Disabled
            </m-label>
          </m-text-button>
        </m-column>
      </m-row>
    </m-section>
    <m-section>
      <m-display :size="MTypographySize.small">
        Text button with icon states
      </m-display>
      <m-row>
        <m-column>
          <m-text-button>
            <m-rounded-icon>
              add_circle
            </m-rounded-icon>
            <m-label>
              Enabled
            </m-label>
          </m-text-button>
        </m-column>
        <m-column>
          <m-text-button :state="MButtonState.hovered">
            <m-rounded-icon>
              add_circle
            </m-rounded-icon>
            <m-label>
              Hovered
            </m-label>
          </m-text-button>
        </m-column>
        <m-column>
          <m-text-button :state="MButtonState.focused">
            <m-rounded-icon>
              add_circle
            </m-rounded-icon>
            <m-label>
              Focused
            </m-label>
          </m-text-button>
        </m-column>
        <m-column>
          <m-text-button :state="MButtonState.pressed">
            <m-rounded-icon>
              add_circle
            </m-rounded-icon>
            <m-label>
              Pressed
            </m-label>
          </m-text-button>
        </m-column>
        <m-column>
          <m-text-button :state="MButtonState.disabled">
            <m-rounded-icon>
              add_circle
            </m-rounded-icon>
            <m-label>
              Disabled
            </m-label>
          </m-text-button>
        </m-column>
      </m-row>
    </m-section>
    <m-section>
      <m-display :size="MTypographySize.small">
        Filled icon button no toggle states
      </m-display>
      <m-row>
        <m-column>
          <m-filled-icon-button>
            <m-rounded-icon>
              settings
            </m-rounded-icon>
          </m-filled-icon-button>
        </m-column>
        <m-column>
          <m-filled-icon-button :state="MButtonState.hovered">
            <m-rounded-icon>
              settings
            </m-rounded-icon>
          </m-filled-icon-button>
        </m-column>
        <m-column>
          <m-filled-icon-button :state="MButtonState.focused">
            <m-rounded-icon>
              settings
            </m-rounded-icon>
          </m-filled-icon-button>
        </m-column>
        <m-column>
          <m-filled-icon-button :state="MButtonState.pressed">
            <m-rounded-icon>
              settings
            </m-rounded-icon>
          </m-filled-icon-button>
        </m-column>
        <m-column>
          <m-filled-icon-button :state="MButtonState.disabled">
            <m-rounded-icon>
              settings
            </m-rounded-icon>
          </m-filled-icon-button>
        </m-column>
      </m-row>
    </m-section>
    <m-section>
      <m-display :size="MTypographySize.small">
        Filled icon button toggle-unselected states
      </m-display>
      <m-row>
        <m-column>
          <m-filled-icon-button :toggle="true">
            <m-rounded-icon>
              settings
            </m-rounded-icon>
          </m-filled-icon-button>
        </m-column>
        <m-column>
          <m-filled-icon-button
            :toggle="true"
            :state="MButtonState.hovered"
          >
            <m-rounded-icon>
              settings
            </m-rounded-icon>
          </m-filled-icon-button>
        </m-column>
        <m-column>
          <m-filled-icon-button
            :toggle="true"
            :state="MButtonState.focused"
          >
            <m-rounded-icon>
              settings
            </m-rounded-icon>
          </m-filled-icon-button>
        </m-column>
        <m-column>
          <m-filled-icon-button
            :toggle="true"
            :state="MButtonState.pressed"
          >
            <m-rounded-icon>
              settings
            </m-rounded-icon>
          </m-filled-icon-button>
        </m-column>
        <m-column>
          <m-filled-icon-button
            :toggle="true"
            :state="MButtonState.disabled"
          >
            <m-rounded-icon>
              settings
            </m-rounded-icon>
          </m-filled-icon-button>
        </m-column>
      </m-row>
    </m-section>
    <m-section>
      <m-display :size="MTypographySize.small">
        Filled icon button toggle-selected states
      </m-display>
      <m-row>
        <m-column>
          <m-filled-icon-button
            :toggle="true"
            :selected="true"
          >
            <m-rounded-icon>
              settings
            </m-rounded-icon>
          </m-filled-icon-button>
        </m-column>
        <m-column>
          <m-filled-icon-button
            :toggle="true"
            :selected="true"
            :state="MButtonState.hovered"
          >
            <m-rounded-icon>
              settings
            </m-rounded-icon>
          </m-filled-icon-button>
        </m-column>
        <m-column>
          <m-filled-icon-button
            :toggle="true"
            :selected="true"
            :state="MButtonState.focused"
          >
            <m-rounded-icon>
              settings
            </m-rounded-icon>
          </m-filled-icon-button>
        </m-column>
        <m-column>
          <m-filled-icon-button
            :toggle="true"
            :selected="true"
            :state="MButtonState.pressed"
          >
            <m-rounded-icon>
              settings
            </m-rounded-icon>
          </m-filled-icon-button>
        </m-column>
        <m-column>
          <m-filled-icon-button
            :toggle="true"
            :state="MButtonState.disabled"
          >
            <m-rounded-icon>
              settings
            </m-rounded-icon>
          </m-filled-icon-button>
        </m-column>
      </m-row>
    </m-section>
    <m-section>
      <m-display :size="MTypographySize.small">
        Tonal icon button no toggle states
      </m-display>
      <m-row>
        <m-column>
          <m-tonal-icon-button>
            <m-rounded-icon>
              settings
            </m-rounded-icon>
          </m-tonal-icon-button>
        </m-column>
        <m-column>
          <m-tonal-icon-button :state="MButtonState.hovered">
            <m-rounded-icon>
              settings
            </m-rounded-icon>
          </m-tonal-icon-button>
        </m-column>
        <m-column>
          <m-tonal-icon-button :state="MButtonState.focused">
            <m-rounded-icon>
              settings
            </m-rounded-icon>
          </m-tonal-icon-button>
        </m-column>
        <m-column>
          <m-tonal-icon-button :state="MButtonState.pressed">
            <m-rounded-icon>
              settings
            </m-rounded-icon>
          </m-tonal-icon-button>
        </m-column>
        <m-column>
          <m-tonal-icon-button :state="MButtonState.disabled">
            <m-rounded-icon>
              settings
            </m-rounded-icon>
          </m-tonal-icon-button>
        </m-column>
      </m-row>
    </m-section>
    <m-section>
      <m-display :size="MTypographySize.small">
        Tonal icon button toggle-unselected states
      </m-display>
      <m-row>
        <m-column>
          <m-tonal-icon-button :toggle="true">
            <m-rounded-icon>
              settings
            </m-rounded-icon>
          </m-tonal-icon-button>
        </m-column>
        <m-column>
          <m-tonal-icon-button
            :toggle="true"
            :state="MButtonState.hovered"
          >
            <m-rounded-icon>
              settings
            </m-rounded-icon>
          </m-tonal-icon-button>
        </m-column>
        <m-column>
          <m-tonal-icon-button
            :toggle="true"
            :state="MButtonState.focused"
          >
            <m-rounded-icon>
              settings
            </m-rounded-icon>
          </m-tonal-icon-button>
        </m-column>
        <m-column>
          <m-tonal-icon-button
            :toggle="true"
            :state="MButtonState.pressed"
          >
            <m-rounded-icon>
              settings
            </m-rounded-icon>
          </m-tonal-icon-button>
        </m-column>
        <m-column>
          <m-tonal-icon-button
            :toggle="true"
            :state="MButtonState.disabled"
          >
            <m-rounded-icon>
              settings
            </m-rounded-icon>
          </m-tonal-icon-button>
        </m-column>
      </m-row>
    </m-section>
    <m-section>
      <m-display :size="MTypographySize.small">
        Tonal icon button toggle-selected states
      </m-display>
      <m-row>
        <m-column>
          <m-tonal-icon-button
            :toggle="true"
            :selected="true"
          >
            <m-rounded-icon>
              settings
            </m-rounded-icon>
          </m-tonal-icon-button>
        </m-column>
        <m-column>
          <m-tonal-icon-button
            :toggle="true"
            :selected="true"
            :state="MButtonState.hovered"
          >
            <m-rounded-icon>
              settings
            </m-rounded-icon>
          </m-tonal-icon-button>
        </m-column>
        <m-column>
          <m-tonal-icon-button
            :toggle="true"
            :selected="true"
            :state="MButtonState.focused"
          >
            <m-rounded-icon>
              settings
            </m-rounded-icon>
          </m-tonal-icon-button>
        </m-column>
        <m-column>
          <m-tonal-icon-button
            :toggle="true"
            :selected="true"
            :state="MButtonState.pressed"
          >
            <m-rounded-icon>
              settings
            </m-rounded-icon>
          </m-tonal-icon-button>
        </m-column>
        <m-column>
          <m-tonal-icon-button
            :toggle="true"
            :state="MButtonState.disabled"
          >
            <m-rounded-icon>
              settings
            </m-rounded-icon>
          </m-tonal-icon-button>
        </m-column>
      </m-row>
    </m-section>
    <m-section>
      <m-display :size="MTypographySize.small">
        Outlined icon button toggle-unselected states
      </m-display>
      <m-row>
        <m-column>
          <m-outlined-icon-button :toggle="true">
            <m-rounded-icon>
              settings
            </m-rounded-icon>
          </m-outlined-icon-button>
        </m-column>
        <m-column>
          <m-outlined-icon-button
            :toggle="true"
            :state="MButtonState.hovered"
          >
            <m-rounded-icon>
              settings
            </m-rounded-icon>
          </m-outlined-icon-button>
        </m-column>
        <m-column>
          <m-outlined-icon-button
            :toggle="true"
            :state="MButtonState.focused"
          >
            <m-rounded-icon>
              settings
            </m-rounded-icon>
          </m-outlined-icon-button>
        </m-column>
        <m-column>
          <m-outlined-icon-button
            :toggle="true"
            :state="MButtonState.pressed"
          >
            <m-rounded-icon>
              settings
            </m-rounded-icon>
          </m-outlined-icon-button>
        </m-column>
        <m-column>
          <m-outlined-icon-button
            :toggle="true"
            :state="MButtonState.disabled"
          >
            <m-rounded-icon>
              settings
            </m-rounded-icon>
          </m-outlined-icon-button>
        </m-column>
      </m-row>
    </m-section>
    <m-section>
      <m-display :size="MTypographySize.small">
        Outlined icon button toggle-selected states
      </m-display>
      <m-row>
        <m-column>
          <m-outlined-icon-button
            :toggle="true"
            :selected="true"
          >
            <m-rounded-icon>
              settings
            </m-rounded-icon>
          </m-outlined-icon-button>
        </m-column>
        <m-column>
          <m-outlined-icon-button
            :toggle="true"
            :selected="true"
            :state="MButtonState.hovered"
          >
            <m-rounded-icon>
              settings
            </m-rounded-icon>
          </m-outlined-icon-button>
        </m-column>
        <m-column>
          <m-outlined-icon-button
            :toggle="true"
            :selected="true"
            :state="MButtonState.focused"
          >
            <m-rounded-icon>
              settings
            </m-rounded-icon>
          </m-outlined-icon-button>
        </m-column>
        <m-column>
          <m-outlined-icon-button
            :toggle="true"
            :selected="true"
            :state="MButtonState.pressed"
          >
            <m-rounded-icon>
              settings
            </m-rounded-icon>
          </m-outlined-icon-button>
        </m-column>
        <m-column>
          <m-outlined-icon-button
            :toggle="true"
            :state="MButtonState.disabled"
          >
            <m-rounded-icon>
              settings
            </m-rounded-icon>
          </m-outlined-icon-button>
        </m-column>
      </m-row>
    </m-section>
    <m-section>
      <m-display :size="MTypographySize.small">
        Standard icon button toggle-unselected states
      </m-display>
      <m-row>
        <m-column>
          <m-icon-button :toggle="true">
            <m-rounded-icon>
              settings
            </m-rounded-icon>
          </m-icon-button>
        </m-column>
        <m-column>
          <m-icon-button
            :toggle="true"
            :state="MButtonState.hovered"
          >
            <m-rounded-icon>
              settings
            </m-rounded-icon>
          </m-icon-button>
        </m-column>
        <m-column>
          <m-icon-button
            :toggle="true"
            :state="MButtonState.focused"
          >
            <m-rounded-icon>
              settings
            </m-rounded-icon>
          </m-icon-button>
        </m-column>
        <m-column>
          <m-icon-button
            :toggle="true"
            :state="MButtonState.pressed"
          >
            <m-rounded-icon>
              settings
            </m-rounded-icon>
          </m-icon-button>
        </m-column>
        <m-column>
          <m-icon-button
            :toggle="true"
            :state="MButtonState.disabled"
          >
            <m-rounded-icon>
              settings
            </m-rounded-icon>
          </m-icon-button>
        </m-column>
      </m-row>
    </m-section>
    <m-section>
      <m-display :size="MTypographySize.small">
        Standard icon button toggle-selected states
      </m-display>
      <m-row>
        <m-column>
          <m-icon-button
            :toggle="true"
            :selected="true"
          >
            <m-rounded-icon>
              settings
            </m-rounded-icon>
          </m-icon-button>
        </m-column>
        <m-column>
          <m-icon-button
            :toggle="true"
            :selected="true"
            :state="MButtonState.hovered"
          >
            <m-rounded-icon>
              settings
            </m-rounded-icon>
          </m-icon-button>
        </m-column>
        <m-column>
          <m-icon-button
            :toggle="true"
            :selected="true"
            :state="MButtonState.focused"
          >
            <m-rounded-icon>
              settings
            </m-rounded-icon>
          </m-icon-button>
        </m-column>
        <m-column>
          <m-icon-button
            :toggle="true"
            :selected="true"
            :state="MButtonState.pressed"
          >
            <m-rounded-icon>
              settings
            </m-rounded-icon>
          </m-icon-button>
        </m-column>
        <m-column>
          <m-icon-button
            :toggle="true"
            :state="MButtonState.disabled"
          >
            <m-rounded-icon>
              settings
            </m-rounded-icon>
          </m-icon-button>
        </m-column>
      </m-row>
    </m-section>
    <m-section>
      <m-display :size="MTypographySize.small">
        FAB button states
      </m-display>
      <m-row>
        <m-column>
          <m-fab-button>
            <m-rounded-icon>
              edit
            </m-rounded-icon>
          </m-fab-button>
        </m-column>
        <m-column>
          <m-fab-button :state="MButtonState.hovered">
            <m-rounded-icon>
              edit
            </m-rounded-icon>
          </m-fab-button>
        </m-column>
        <m-column>
          <m-fab-button :state="MButtonState.focused">
            <m-rounded-icon>
              edit
            </m-rounded-icon>
          </m-fab-button>
        </m-column>
        <m-column>
          <m-fab-button :state="MButtonState.pressed">
            <m-rounded-icon>
              edit
            </m-rounded-icon>
          </m-fab-button>
        </m-column>
        <m-column>
          <m-fab-button :state="MButtonState.disabled">
            <m-rounded-icon>
              edit
            </m-rounded-icon>
          </m-fab-button>
        </m-column>
      </m-row>
    </m-section>
    <m-section>
      <m-display :size="MTypographySize.small">
        FAB button lowered states
      </m-display>
      <m-row>
        <m-column>
          <m-fab-button :lowered="true">
            <m-rounded-icon>
              edit
            </m-rounded-icon>
          </m-fab-button>
        </m-column>
        <m-column>
          <m-fab-button
            :lowered="true"
            :state="MButtonState.hovered"
          >
            <m-rounded-icon>
              edit
            </m-rounded-icon>
          </m-fab-button>
        </m-column>
        <m-column>
          <m-fab-button
            :lowered="true"
            :state="MButtonState.focused"
          >
            <m-rounded-icon>
              edit
            </m-rounded-icon>
          </m-fab-button>
        </m-column>
        <m-column>
          <m-fab-button
            :lowered="true"
            :state="MButtonState.pressed"
          >
            <m-rounded-icon>
              edit
            </m-rounded-icon>
          </m-fab-button>
        </m-column>
        <m-column>
          <m-fab-button
            :lowered="true"
            :state="MButtonState.disabled"
          >
            <m-rounded-icon>
              edit
            </m-rounded-icon>
          </m-fab-button>
        </m-column>
      </m-row>
    </m-section>
    <m-section>
      <m-display :size="MTypographySize.small">
        FAB button surface variant
      </m-display>
      <m-row>
        <m-column>
          <m-fab-button :variant="MFabButtonVariant.surface">
            <m-rounded-icon>
              edit
            </m-rounded-icon>
          </m-fab-button>
        </m-column>
        <m-column>
          <m-fab-button
            :variant="MFabButtonVariant.surface"
            :state="MButtonState.hovered"
          >
            <m-rounded-icon>
              edit
            </m-rounded-icon>
          </m-fab-button>
        </m-column>
        <m-column>
          <m-fab-button
            :variant="MFabButtonVariant.surface"
            :state="MButtonState.focused"
          >
            <m-rounded-icon>
              edit
            </m-rounded-icon>
          </m-fab-button>
        </m-column>
        <m-column>
          <m-fab-button
            :variant="MFabButtonVariant.surface"
            :state="MButtonState.pressed"
          >
            <m-rounded-icon>
              edit
            </m-rounded-icon>
          </m-fab-button>
        </m-column>
        <m-column>
          <m-fab-button
            :variant="MFabButtonVariant.surface"
            :state="MButtonState.disabled"
          >
            <m-rounded-icon>
              edit
            </m-rounded-icon>
          </m-fab-button>
        </m-column>
      </m-row>
    </m-section>
    <m-section>
      <m-display :size="MTypographySize.small">
        FAB button surface variant lowered states
      </m-display>
      <m-row>
        <m-column>
          <m-fab-button
            :lowered="true"
            :variant="MFabButtonVariant.surface"
          >
            <m-rounded-icon>
              edit
            </m-rounded-icon>
          </m-fab-button>
        </m-column>
        <m-column>
          <m-fab-button
            :lowered="true"
            :variant="MFabButtonVariant.surface"
            :state="MButtonState.hovered"
          >
            <m-rounded-icon>
              edit
            </m-rounded-icon>
          </m-fab-button>
        </m-column>
        <m-column>
          <m-fab-button
            :lowered="true"
            :variant="MFabButtonVariant.surface"
            :state="MButtonState.focused"
          >
            <m-rounded-icon>
              edit
            </m-rounded-icon>
          </m-fab-button>
        </m-column>
        <m-column>
          <m-fab-button
            :lowered="true"
            :variant="MFabButtonVariant.surface"
            :state="MButtonState.pressed"
          >
            <m-rounded-icon>
              edit
            </m-rounded-icon>
          </m-fab-button>
        </m-column>
        <m-column>
          <m-fab-button
            :lowered="true"
            :variant="MFabButtonVariant.surface"
            :state="MButtonState.disabled"
          >
            <m-rounded-icon>
              edit
            </m-rounded-icon>
          </m-fab-button>
        </m-column>
      </m-row>
    </m-section>
    <m-section>
      <m-display :size="MTypographySize.small">
        FAB button secondary variant
      </m-display>
      <m-row>
        <m-column>
          <m-fab-button :variant="MFabButtonVariant.secondary">
            <m-rounded-icon>
              edit
            </m-rounded-icon>
          </m-fab-button>
        </m-column>
        <m-column>
          <m-fab-button
            :variant="MFabButtonVariant.secondary"
            :state="MButtonState.hovered"
          >
            <m-rounded-icon>
              edit
            </m-rounded-icon>
          </m-fab-button>
        </m-column>
        <m-column>
          <m-fab-button
            :variant="MFabButtonVariant.secondary"
            :state="MButtonState.focused"
          >
            <m-rounded-icon>
              edit
            </m-rounded-icon>
          </m-fab-button>
        </m-column>
        <m-column>
          <m-fab-button
            :variant="MFabButtonVariant.secondary"
            :state="MButtonState.pressed"
          >
            <m-rounded-icon>
              edit
            </m-rounded-icon>
          </m-fab-button>
        </m-column>
        <m-column>
          <m-fab-button
            :variant="MFabButtonVariant.secondary"
            :state="MButtonState.disabled"
          >
            <m-rounded-icon>
              edit
            </m-rounded-icon>
          </m-fab-button>
        </m-column>
      </m-row>
    </m-section>
    <m-section>
      <m-display :size="MTypographySize.small">
        FAB button secondary variant lowered states
      </m-display>
      <m-row>
        <m-column>
          <m-fab-button
            :lowered="true"
            :variant="MFabButtonVariant.secondary"
          >
            <m-rounded-icon>
              edit
            </m-rounded-icon>
          </m-fab-button>
        </m-column>
        <m-column>
          <m-fab-button
            :lowered="true"
            :variant="MFabButtonVariant.secondary"
            :state="MButtonState.hovered"
          >
            <m-rounded-icon>
              edit
            </m-rounded-icon>
          </m-fab-button>
        </m-column>
        <m-column>
          <m-fab-button
            :lowered="true"
            :variant="MFabButtonVariant.secondary"
            :state="MButtonState.focused"
          >
            <m-rounded-icon>
              edit
            </m-rounded-icon>
          </m-fab-button>
        </m-column>
        <m-column>
          <m-fab-button
            :lowered="true"
            :variant="MFabButtonVariant.secondary"
            :state="MButtonState.pressed"
          >
            <m-rounded-icon>
              edit
            </m-rounded-icon>
          </m-fab-button>
        </m-column>
        <m-column>
          <m-fab-button
            :lowered="true"
            :variant="MFabButtonVariant.secondary"
            :state="MButtonState.disabled"
          >
            <m-rounded-icon>
              edit
            </m-rounded-icon>
          </m-fab-button>
        </m-column>
      </m-row>
    </m-section>
    <m-section>
      <m-display :size="MTypographySize.small">
        FAB button tertiary variant
      </m-display>
      <m-row>
        <m-column>
          <m-fab-button :variant="MFabButtonVariant.tertiary">
            <m-rounded-icon>
              edit
            </m-rounded-icon>
          </m-fab-button>
        </m-column>
        <m-column>
          <m-fab-button
            :variant="MFabButtonVariant.tertiary"
            :state="MButtonState.hovered"
          >
            <m-rounded-icon>
              edit
            </m-rounded-icon>
          </m-fab-button>
        </m-column>
        <m-column>
          <m-fab-button
            :variant="MFabButtonVariant.tertiary"
            :state="MButtonState.focused"
          >
            <m-rounded-icon>
              edit
            </m-rounded-icon>
          </m-fab-button>
        </m-column>
        <m-column>
          <m-fab-button
            :variant="MFabButtonVariant.tertiary"
            :state="MButtonState.pressed"
          >
            <m-rounded-icon>
              edit
            </m-rounded-icon>
          </m-fab-button>
        </m-column>
        <m-column>
          <m-fab-button
            :variant="MFabButtonVariant.tertiary"
            :state="MButtonState.disabled"
          >
            <m-rounded-icon>
              edit
            </m-rounded-icon>
          </m-fab-button>
        </m-column>
      </m-row>
    </m-section>
    <m-section>
      <m-display :size="MTypographySize.small">
        FAB button tertiary variant lowered states
      </m-display>
      <m-row>
        <m-column>
          <m-fab-button
            :lowered="true"
            :variant="MFabButtonVariant.tertiary"
          >
            <m-rounded-icon>
              edit
            </m-rounded-icon>
          </m-fab-button>
        </m-column>
        <m-column>
          <m-fab-button
            :lowered="true"
            :variant="MFabButtonVariant.tertiary"
            :state="MButtonState.hovered"
          >
            <m-rounded-icon>
              edit
            </m-rounded-icon>
          </m-fab-button>
        </m-column>
        <m-column>
          <m-fab-button
            :lowered="true"
            :variant="MFabButtonVariant.tertiary"
            :state="MButtonState.focused"
          >
            <m-rounded-icon>
              edit
            </m-rounded-icon>
          </m-fab-button>
        </m-column>
        <m-column>
          <m-fab-button
            :lowered="true"
            :variant="MFabButtonVariant.tertiary"
            :state="MButtonState.pressed"
          >
            <m-rounded-icon>
              edit
            </m-rounded-icon>
          </m-fab-button>
        </m-column>
        <m-column>
          <m-fab-button
            :lowered="true"
            :variant="MFabButtonVariant.tertiary"
            :state="MButtonState.disabled"
          >
            <m-rounded-icon>
              edit
            </m-rounded-icon>
          </m-fab-button>
        </m-column>
      </m-row>
    </m-section>
    <m-section>
      <m-display :size="MTypographySize.small">
        FAB button small size
      </m-display>
      <m-row>
        <m-column>
          <m-fab-button :size="MFabButtonSize.small">
            <m-rounded-icon>
              edit
            </m-rounded-icon>
          </m-fab-button>
        </m-column>
        <m-column>
          <m-fab-button
            :size="MFabButtonSize.small"
            :state="MButtonState.hovered"
          >
            <m-rounded-icon>
              edit
            </m-rounded-icon>
          </m-fab-button>
        </m-column>
        <m-column>
          <m-fab-button
            :size="MFabButtonSize.small"
            :state="MButtonState.focused"
          >
            <m-rounded-icon>
              edit
            </m-rounded-icon>
          </m-fab-button>
        </m-column>
        <m-column>
          <m-fab-button
            :size="MFabButtonSize.small"
            :state="MButtonState.pressed"
          >
            <m-rounded-icon>
              edit
            </m-rounded-icon>
          </m-fab-button>
        </m-column>
        <m-column>
          <m-fab-button
            :size="MFabButtonSize.small"
            :state="MButtonState.disabled"
          >
            <m-rounded-icon>
              edit
            </m-rounded-icon>
          </m-fab-button>
        </m-column>
      </m-row>
    </m-section>
    <m-section>
      <m-display :size="MTypographySize.small">
        FAB button large size
      </m-display>
      <m-row>
        <m-column>
          <m-fab-button :size="MFabButtonSize.large">
            <m-rounded-icon>
              edit
            </m-rounded-icon>
          </m-fab-button>
        </m-column>
        <m-column>
          <m-fab-button
            :size="MFabButtonSize.large"
            :state="MButtonState.hovered"
          >
            <m-rounded-icon>
              edit
            </m-rounded-icon>
          </m-fab-button>
        </m-column>
        <m-column>
          <m-fab-button
            :size="MFabButtonSize.large"
            :state="MButtonState.focused"
          >
            <m-rounded-icon>
              edit
            </m-rounded-icon>
          </m-fab-button>
        </m-column>
        <m-column>
          <m-fab-button
            :size="MFabButtonSize.large"
            :state="MButtonState.pressed"
          >
            <m-rounded-icon>
              edit
            </m-rounded-icon>
          </m-fab-button>
        </m-column>
        <m-column>
          <m-fab-button
            :size="MFabButtonSize.large"
            :state="MButtonState.disabled"
          >
            <m-rounded-icon>
              edit
            </m-rounded-icon>
          </m-fab-button>
        </m-column>
      </m-row>
    </m-section>
    <m-section>
      <m-display :size="MTypographySize.small">
        Extended FAB button states without icon
      </m-display>
      <m-row>
        <m-column>
          <m-extended-fab-button>
            <m-label>
              Compose
            </m-label>
          </m-extended-fab-button>
        </m-column>
        <m-column>
          <m-extended-fab-button :state="MButtonState.hovered">
            <m-label>
              Compose
            </m-label>
          </m-extended-fab-button>
        </m-column>
        <m-column>
          <m-extended-fab-button :state="MButtonState.focused">
            <m-label>
              Compose
            </m-label>
          </m-extended-fab-button>
        </m-column>
        <m-column>
          <m-extended-fab-button :state="MButtonState.pressed">
            <m-label>
              Compose
            </m-label>
          </m-extended-fab-button>
        </m-column>
        <m-column>
          <m-extended-fab-button :state="MButtonState.disabled">
            <m-label>
              Compose
            </m-label>
          </m-extended-fab-button>
        </m-column>
      </m-row>
    </m-section>
    <m-section>
      <m-display :size="MTypographySize.small">
        Extended FAB button states with icon
      </m-display>
      <m-row>
        <m-column>
          <m-extended-fab-button>
            <m-rounded-icon>
              edit
            </m-rounded-icon>
            <m-label>
              Compose
            </m-label>
          </m-extended-fab-button>
        </m-column>
        <m-column>
          <m-extended-fab-button :state="MButtonState.hovered">
            <m-rounded-icon>
              edit
            </m-rounded-icon>
            <m-label>
              Compose
            </m-label>
          </m-extended-fab-button>
        </m-column>
        <m-column>
          <m-extended-fab-button :state="MButtonState.focused">
            <m-rounded-icon>
              edit
            </m-rounded-icon>
            <m-label>
              Compose
            </m-label>
          </m-extended-fab-button>
        </m-column>
        <m-column>
          <m-extended-fab-button :state="MButtonState.pressed">
            <m-rounded-icon>
              edit
            </m-rounded-icon>
            <m-label>
              Compose
            </m-label>
          </m-extended-fab-button>
        </m-column>
        <m-column>
          <m-extended-fab-button :state="MButtonState.disabled">
            <m-rounded-icon>
              edit
            </m-rounded-icon>
            <m-label>
              Compose
            </m-label>
          </m-extended-fab-button>
        </m-column>
      </m-row>
    </m-section>
    <m-section>
      <m-display :size="MTypographySize.small">
        Extended FAB button lowered states without icon
      </m-display>
      <m-row>
        <m-column>
          <m-extended-fab-button :lowered="true">
            <m-label>
              Compose
            </m-label>
          </m-extended-fab-button>
        </m-column>
        <m-column>
          <m-extended-fab-button
            :lowered="true"
            :state="MButtonState.hovered"
          >
            <m-label>
              Compose
            </m-label>
          </m-extended-fab-button>
        </m-column>
        <m-column>
          <m-extended-fab-button
            :lowered="true"
            :state="MButtonState.focused"
          >
            <m-label>
              Compose
            </m-label>
          </m-extended-fab-button>
        </m-column>
        <m-column>
          <m-extended-fab-button
            :lowered="true"
            :state="MButtonState.pressed"
          >
            <m-label>
              Compose
            </m-label>
          </m-extended-fab-button>
        </m-column>
        <m-column>
          <m-extended-fab-button
            :lowered="true"
            :state="MButtonState.disabled"
          >
            <m-label>
              Compose
            </m-label>
          </m-extended-fab-button>
        </m-column>
      </m-row>
    </m-section>
    <m-section>
      <m-display :size="MTypographySize.small">
        Extended FAB button lowered states with icon
      </m-display>
      <m-row>
        <m-column>
          <m-extended-fab-button :lowered="true">
            <m-rounded-icon>
              edit
            </m-rounded-icon>
            <m-label>
              Compose
            </m-label>
          </m-extended-fab-button>
        </m-column>
        <m-column>
          <m-extended-fab-button
            :lowered="true"
            :state="MButtonState.hovered"
          >
            <m-rounded-icon>
              edit
            </m-rounded-icon>
            <m-label>
              Compose
            </m-label>
          </m-extended-fab-button>
        </m-column>
        <m-column>
          <m-extended-fab-button
            :lowered="true"
            :state="MButtonState.focused"
          >
            <m-rounded-icon>
              edit
            </m-rounded-icon>
            <m-label>
              Compose
            </m-label>
          </m-extended-fab-button>
        </m-column>
        <m-column>
          <m-extended-fab-button
            :lowered="true"
            :state="MButtonState.pressed"
          >
            <m-rounded-icon>
              edit
            </m-rounded-icon>
            <m-label>
              Compose
            </m-label>
          </m-extended-fab-button>
        </m-column>
        <m-column>
          <m-extended-fab-button
            :lowered="true"
            :state="MButtonState.disabled"
          >
            <m-rounded-icon>
              edit
            </m-rounded-icon>
            <m-label>
              Compose
            </m-label>
          </m-extended-fab-button>
        </m-column>
      </m-row>
    </m-section>
    <m-section>
      <m-display :size="MTypographySize.small">
        Extended FAB button surface variant without icon
      </m-display>
      <m-row>
        <m-column>
          <m-extended-fab-button :variant="MExtendedFabButtonVariant.surface">
            <m-label>
              Compose
            </m-label>
          </m-extended-fab-button>
        </m-column>
        <m-column>
          <m-extended-fab-button
            :variant="MExtendedFabButtonVariant.surface"
            :state="MButtonState.hovered"
          >
            <m-label>
              Compose
            </m-label>
          </m-extended-fab-button>
        </m-column>
        <m-column>
          <m-extended-fab-button
            :variant="MExtendedFabButtonVariant.surface"
            :state="MButtonState.focused"
          >
            <m-label>
              Compose
            </m-label>
          </m-extended-fab-button>
        </m-column>
        <m-column>
          <m-extended-fab-button
            :variant="MExtendedFabButtonVariant.surface"
            :state="MButtonState.pressed"
          >
            <m-label>
              Compose
            </m-label>
          </m-extended-fab-button>
        </m-column>
        <m-column>
          <m-extended-fab-button
            :variant="MExtendedFabButtonVariant.surface"
            :state="MButtonState.disabled"
          >
            <m-label>
              Compose
            </m-label>
          </m-extended-fab-button>
        </m-column>
      </m-row>
    </m-section>
    <m-section>
      <m-display :size="MTypographySize.small">
        Extended FAB button surface variant with icon
      </m-display>
      <m-row>
        <m-column>
          <m-extended-fab-button :variant="MExtendedFabButtonVariant.surface">
            <m-rounded-icon>
              edit
            </m-rounded-icon>
            <m-label>
              Compose
            </m-label>
          </m-extended-fab-button>
        </m-column>
        <m-column>
          <m-extended-fab-button
            :variant="MExtendedFabButtonVariant.surface"
            :state="MButtonState.hovered"
          >
            <m-rounded-icon>
              edit
            </m-rounded-icon>
            <m-label>
              Compose
            </m-label>
          </m-extended-fab-button>
        </m-column>
        <m-column>
          <m-extended-fab-button
            :variant="MExtendedFabButtonVariant.surface"
            :state="MButtonState.focused"
          >
            <m-rounded-icon>
              edit
            </m-rounded-icon>
            <m-label>
              Compose
            </m-label>
          </m-extended-fab-button>
        </m-column>
        <m-column>
          <m-extended-fab-button
            :variant="MExtendedFabButtonVariant.surface"
            :state="MButtonState.pressed"
          >
            <m-rounded-icon>
              edit
            </m-rounded-icon>
            <m-label>
              Compose
            </m-label>
          </m-extended-fab-button>
        </m-column>
        <m-column>
          <m-extended-fab-button
            :variant="MExtendedFabButtonVariant.surface"
            :state="MButtonState.disabled"
          >
            <m-rounded-icon>
              edit
            </m-rounded-icon>
            <m-label>
              Compose
            </m-label>
          </m-extended-fab-button>
        </m-column>
      </m-row>
    </m-section>
    <m-section>
      <m-display :size="MTypographySize.small">
        Extended FAB button secondary variant without icon
      </m-display>
      <m-row>
        <m-column>
          <m-extended-fab-button :variant="MExtendedFabButtonVariant.secondary">
            <m-label>
              Compose
            </m-label>
          </m-extended-fab-button>
        </m-column>
        <m-column>
          <m-extended-fab-button
            :variant="MExtendedFabButtonVariant.secondary"
            :state="MButtonState.hovered"
          >
            <m-label>
              Compose
            </m-label>
          </m-extended-fab-button>
        </m-column>
        <m-column>
          <m-extended-fab-button
            :variant="MExtendedFabButtonVariant.secondary"
            :state="MButtonState.focused"
          >
            <m-label>
              Compose
            </m-label>
          </m-extended-fab-button>
        </m-column>
        <m-column>
          <m-extended-fab-button
            :variant="MExtendedFabButtonVariant.secondary"
            :state="MButtonState.pressed"
          >
            <m-label>
              Compose
            </m-label>
          </m-extended-fab-button>
        </m-column>
        <m-column>
          <m-extended-fab-button
            :variant="MExtendedFabButtonVariant.secondary"
            :state="MButtonState.disabled"
          >
            <m-label>
              Compose
            </m-label>
          </m-extended-fab-button>
        </m-column>
      </m-row>
    </m-section>
    <m-section>
      <m-display :size="MTypographySize.small">
        Extended FAB button secondary variant with icon
      </m-display>
      <m-row>
        <m-column>
          <m-extended-fab-button :variant="MExtendedFabButtonVariant.secondary">
            <m-rounded-icon>
              edit
            </m-rounded-icon>
            <m-label>
              Compose
            </m-label>
          </m-extended-fab-button>
        </m-column>
        <m-column>
          <m-extended-fab-button
            :variant="MExtendedFabButtonVariant.secondary"
            :state="MButtonState.hovered"
          >
            <m-rounded-icon>
              edit
            </m-rounded-icon>
            <m-label>
              Compose
            </m-label>
          </m-extended-fab-button>
        </m-column>
        <m-column>
          <m-extended-fab-button
            :variant="MExtendedFabButtonVariant.secondary"
            :state="MButtonState.focused"
          >
            <m-rounded-icon>
              edit
            </m-rounded-icon>
            <m-label>
              Compose
            </m-label>
          </m-extended-fab-button>
        </m-column>
        <m-column>
          <m-extended-fab-button
            :variant="MExtendedFabButtonVariant.secondary"
            :state="MButtonState.pressed"
          >
            <m-rounded-icon>
              edit
            </m-rounded-icon>
            <m-label>
              Compose
            </m-label>
          </m-extended-fab-button>
        </m-column>
        <m-column>
          <m-extended-fab-button
            :variant="MExtendedFabButtonVariant.secondary"
            :state="MButtonState.disabled"
          >
            <m-rounded-icon>
              edit
            </m-rounded-icon>
            <m-label>
              Compose
            </m-label>
          </m-extended-fab-button>
        </m-column>
      </m-row>
    </m-section>
    <m-section>
      <m-display :size="MTypographySize.small">
        Extended FAB button tertiary variant without icon
      </m-display>
      <m-row>
        <m-column>
          <m-extended-fab-button :variant="MExtendedFabButtonVariant.tertiary">
            <m-label>
              Compose
            </m-label>
          </m-extended-fab-button>
        </m-column>
        <m-column>
          <m-extended-fab-button
            :variant="MExtendedFabButtonVariant.tertiary"
            :state="MButtonState.hovered"
          >
            <m-label>
              Compose
            </m-label>
          </m-extended-fab-button>
        </m-column>
        <m-column>
          <m-extended-fab-button
            :variant="MExtendedFabButtonVariant.tertiary"
            :state="MButtonState.focused"
          >
            <m-label>
              Compose
            </m-label>
          </m-extended-fab-button>
        </m-column>
        <m-column>
          <m-extended-fab-button
            :variant="MExtendedFabButtonVariant.tertiary"
            :state="MButtonState.pressed"
          >
            <m-label>
              Compose
            </m-label>
          </m-extended-fab-button>
        </m-column>
        <m-column>
          <m-extended-fab-button
            :variant="MExtendedFabButtonVariant.tertiary"
            :state="MButtonState.disabled"
          >
            <m-label>
              Compose
            </m-label>
          </m-extended-fab-button>
        </m-column>
      </m-row>
    </m-section>
    <m-section>
      <m-display :size="MTypographySize.small">
        Extended FAB button tertiary variant with icon
      </m-display>
      <m-row>
        <m-column>
          <m-extended-fab-button :variant="MExtendedFabButtonVariant.tertiary">
            <m-rounded-icon>
              edit
            </m-rounded-icon>
            <m-label>
              Compose
            </m-label>
          </m-extended-fab-button>
        </m-column>
        <m-column>
          <m-extended-fab-button
            :variant="MExtendedFabButtonVariant.tertiary"
            :state="MButtonState.hovered"
          >
            <m-rounded-icon>
              edit
            </m-rounded-icon>
            <m-label>
              Compose
            </m-label>
          </m-extended-fab-button>
        </m-column>
        <m-column>
          <m-extended-fab-button
            :variant="MExtendedFabButtonVariant.tertiary"
            :state="MButtonState.focused"
          >
            <m-rounded-icon>
              edit
            </m-rounded-icon>
            <m-label>
              Compose
            </m-label>
          </m-extended-fab-button>
        </m-column>
        <m-column>
          <m-extended-fab-button
            :variant="MExtendedFabButtonVariant.tertiary"
            :state="MButtonState.pressed"
          >
            <m-rounded-icon>
              edit
            </m-rounded-icon>
            <m-label>
              Compose
            </m-label>
          </m-extended-fab-button>
        </m-column>
        <m-column>
          <m-extended-fab-button
            :variant="MExtendedFabButtonVariant.tertiary"
            :state="MButtonState.disabled"
          >
            <m-rounded-icon>
              edit
            </m-rounded-icon>
            <m-label>
              Compose
            </m-label>
          </m-extended-fab-button>
        </m-column>
      </m-row>
    </m-section>
  </m-main>
</template>

<style lang="sass" scoped>
@use '@/lib/sass/theme'

.m-section
  &.banner
    > span
      padding: 12px

  a
    @include theme.preferred
      color: theme.style(primary)

  > .m-display
    padding: 24px 0

</style>