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

import {
	useForm,
} from 'vee-validate'

import {
	logger,
} from '@cosmicmind/foundation'

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
        Typography
      </m-display>
      <m-body :size="MTypographySize.large">
        See the <a
          href="https://m3.material.io/styles/typography/overview"
          target="_blank"
        >Design Guidelines</a>
      </m-body>
    </m-section>
    <m-section>
      <m-display :size="MTypographySize.large">
        Display
      </m-display>
      <m-display :size="MTypographySize.large">
        Display Large - Roboto 57/64 . 0
      </m-display>
      <m-display :size="MTypographySize.medium">
        Display Medium - Roboto 45/52 .  0
      </m-display>
      <m-display :size="MTypographySize.small">
        Display Small - Roboto 36/44 . 0
      </m-display>
    </m-section>
    <m-section>
      <m-display :size="MTypographySize.large">
        Headline
      </m-display>
      <m-headline :size="MTypographySize.large">
        Headline Large - Roboto 32/40 . 0
      </m-headline>
      <m-headline :size="MTypographySize.medium">
        Headline Medium - Roboto 28/36 . 0
      </m-headline>
      <m-headline :size="MTypographySize.small">
        Headline Small - Roboto 24/32 . 0
      </m-headline>
    </m-section>
    <m-section>
      <m-display :size="MTypographySize.large">
        Title
      </m-display>
      <m-title :size="MTypographySize.large">
        Title Large - Roboto Medium 22/28 . 0
      </m-title>
      <m-title :size="MTypographySize.medium">
        Title Medium - Roboto Medium 16/24 . +0.15
      </m-title>
      <m-title :size="MTypographySize.small">
        Title Small - Roboto Medium 14/20 . +0.1
      </m-title>
    </m-section>
    <m-section>
      <m-display :size="MTypographySize.large">
        Label
      </m-display>
      <m-label :size="MTypographySize.large">
        Label Large - Roboto Medium 14/20 . +0.1
      </m-label>
      <m-label :size="MTypographySize.medium">
        Label Medium - Roboto Medium 12/16 . +0.5
      </m-label>
      <m-label :size="MTypographySize.small">
        Label Small - Roboto Medium 11/16 . +0.5
      </m-label>
    </m-section>
    <m-section>
      <m-display :size="MTypographySize.large">
        Body
      </m-display>
      <m-body :size="MTypographySize.large">
        Body Large - Roboto 16/24 . +0.15
      </m-body>
      <m-body :size="MTypographySize.medium">
        Body Medium - Roboto 14/20 . +0.25
      </m-body>
      <m-body :size="MTypographySize.small">
        Body Small - Roboto 12/16 . +0.4
      </m-body>
    </m-section>

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

    <m-section class="banner">
      <m-display :size="MTypographySize.large">
        Text fields
      </m-display>
      <m-body :size="MTypographySize.large">
        See the <a
          href="https://m3.material.io/text-fields/overview"
          target="_blank"
        >Design Guidelines</a>
      </m-body>
    </m-section>
    <m-section>
      <m-display :size="MTypographySize.small">
        Filled text field states
      </m-display>
      <m-row>
        <m-column>
          <m-form @submit="onSubmit">
            <m-fieldset>
              <m-filled-text-field
                ref="emailRef"
                :has-error="'undefined' !== typeof errors.email"
              >
                <m-field-control>
                  <m-field-leading>
                    <m-rounded-icon>
                      mail
                    </m-rounded-icon>
                  </m-field-leading>
                  <m-field-body>
                    <m-label>
                      Email
                    </m-label>
                    <m-field-input :name="'email'" />
                  </m-field-body>
                  <m-field-trailing v-if="errors.email">
                    <m-rounded-icon>
                      error
                    </m-rounded-icon>
                  </m-field-trailing>
                </m-field-control>
                <m-field-support v-if="errors.email">
                  <m-body>
                    {{ errors.email }}
                  </m-body>
                </m-field-support>
              </m-filled-text-field>
            </m-fieldset>
          </m-form>
        </m-column>
        <m-column>
          <m-form @submit="onSubmit">
            <m-fieldset>
              <m-filled-text-field>
                <m-field-control>
                  <m-field-leading>
                    <m-rounded-icon>
                      mail
                    </m-rounded-icon>
                  </m-field-leading>
                  <m-field-body>
                    <m-label>
                      Label
                    </m-label>
                    <m-field-input :name="'name'" />
                  </m-field-body>
                </m-field-control>
                <m-field-support>
                  <m-body>
                    Support text.
                  </m-body>
                  <m-label>
                    5/20
                  </m-label>
                </m-field-support>
              </m-filled-text-field>
            </m-fieldset>
          </m-form>
        </m-column>
        <m-column>
          <m-form @submit="onSubmit">
            <m-fieldset>
              <m-filled-text-field :without-label-text="true">
                <m-field-control>
                  <m-field-body>
                    <m-label>
                      Label
                    </m-label>
                    <m-field-prefix>
                      <m-label>
                        $
                      </m-label>
                    </m-field-prefix>
                    <m-field-input :name="'name'" />
                  </m-field-body>
                  <m-field-trailing>
                    <m-rounded-icon>
                      clear
                    </m-rounded-icon>
                  </m-field-trailing>
                </m-field-control>
                <m-field-support>
                  <m-label>
                    5/20
                  </m-label>
                </m-field-support>
              </m-filled-text-field>
            </m-fieldset>
          </m-form>
        </m-column>
        <m-column>
          <m-form @submit="onSubmit">
            <m-fieldset>
              <m-filled-text-field>
                <m-field-control>
                  <m-field-body>
                    <m-label>
                      Label
                    </m-label>
                    <m-field-input :name="'name'" />
                    <m-field-suffix>
                      <m-label>
                        lbs
                      </m-label>
                    </m-field-suffix>
                  </m-field-body>
                </m-field-control>
                <m-field-support>
                  <m-label>
                    5/20
                  </m-label>
                </m-field-support>
              </m-filled-text-field>
            </m-fieldset>
          </m-form>
        </m-column>
        <m-column>
          <m-form @submit="onSubmit">
            <m-fieldset>
              <m-filled-text-field>
                <m-field-control>
                  <m-field-body>
                    <m-label>
                      Label
                    </m-label>
                    <m-field-input :name="'name'" />
                  </m-field-body>
                </m-field-control>
                <m-field-support>
                  <m-body>
                    Support text that is much longer than you think.
                    Support text that is much longer than you think.
                    Support text that is much longer than you think.
                    Support text that is much longer than you think.
                  </m-body>
                  <m-label>
                    5/20
                  </m-label>
                </m-field-support>
              </m-filled-text-field>
            </m-fieldset>
          </m-form>
        </m-column>
        <m-column>
          <m-form @submit="onSubmit">
            <m-fieldset>
              <m-filled-text-field :state="MTextFieldState.disabled">
                <m-field-control>
                  <m-field-leading>
                    <m-rounded-icon>
                      mail
                    </m-rounded-icon>
                  </m-field-leading>
                  <m-field-body>
                    <m-label>
                      Label
                    </m-label>
                    <m-field-input
                      :name="'name'"
                      :disabled="true"
                    />
                  </m-field-body>
                  <m-field-trailing>
                    <m-rounded-icon>
                      error
                    </m-rounded-icon>
                  </m-field-trailing>
                </m-field-control>
                <m-field-support>
                  <m-body>
                    Support text.
                  </m-body>
                </m-field-support>
              </m-filled-text-field>
            </m-fieldset>
          </m-form>
        </m-column>
      </m-row>
      <m-display :size="MTypographySize.small">
        Filled text field error states
      </m-display>
      <m-row>
        <m-column>
          <m-form @submit="onSubmit">
            <m-fieldset>
              <m-filled-text-field :has-error="true">
                <m-field-control>
                  <m-field-leading>
                    <m-rounded-icon>
                      mail
                    </m-rounded-icon>
                  </m-field-leading>
                  <m-field-body>
                    <m-label>
                      Email
                    </m-label>
                    <m-field-input :name="'name'" />
                  </m-field-body>
                  <m-field-trailing>
                    <m-rounded-icon>
                      error
                    </m-rounded-icon>
                  </m-field-trailing>
                </m-field-control>
                <m-field-support>
                  <m-body>
                    {{ errors.email }}
                  </m-body>
                </m-field-support>
              </m-filled-text-field>
            </m-fieldset>
          </m-form>
        </m-column>
        <m-column>
          <m-form @submit="onSubmit">
            <m-fieldset>
              <m-filled-text-field
                :state="MTextFieldState.hovered"
                :has-error="true"
              >
                <m-field-control>
                  <m-field-leading>
                    <m-rounded-icon>
                      mail
                    </m-rounded-icon>
                  </m-field-leading>
                  <m-field-body>
                    <m-label>
                      Email
                    </m-label>
                    <m-field-input :name="'name'" />
                  </m-field-body>
                  <m-field-trailing>
                    <m-rounded-icon>
                      error
                    </m-rounded-icon>
                  </m-field-trailing>
                </m-field-control>
                <m-field-support>
                  <m-body>
                    {{ errors.email }}
                  </m-body>
                </m-field-support>
              </m-filled-text-field>
            </m-fieldset>
          </m-form>
        </m-column>
        <m-column>
          <m-form @submit="onSubmit">
            <m-fieldset>
              <m-filled-text-field
                :state="MTextFieldState.focused"
                :has-error="true"
              >
                <m-field-control>
                  <m-field-leading>
                    <m-rounded-icon>
                      mail
                    </m-rounded-icon>
                  </m-field-leading>
                  <m-field-body>
                    <m-label>
                      Email
                    </m-label>
                    <m-field-input :name="'name'" />
                  </m-field-body>
                  <m-field-trailing>
                    <m-rounded-icon>
                      error
                    </m-rounded-icon>
                  </m-field-trailing>
                </m-field-control>
                <m-field-support>
                  <m-body>
                    {{ errors.email }}
                  </m-body>
                </m-field-support>
              </m-filled-text-field>
            </m-fieldset>
          </m-form>
        </m-column>
        <m-column>
          <m-form @submit="onSubmit">
            <m-fieldset>
              <m-filled-text-field :state="MTextFieldState.disabled">
                <m-field-control>
                  <m-field-leading>
                    <m-rounded-icon>
                      mail
                    </m-rounded-icon>
                  </m-field-leading>
                  <m-field-body>
                    <m-label>
                      Email
                    </m-label>
                    <m-field-input
                      :name="'name'"
                      :disabled="true"
                    />
                  </m-field-body>
                  <m-field-trailing>
                    <m-rounded-icon>
                      error
                    </m-rounded-icon>
                  </m-field-trailing>
                </m-field-control>
                <m-field-support>
                  <m-body>
                    {{ errors.email }}
                  </m-body>
                </m-field-support>
              </m-filled-text-field>
            </m-fieldset>
          </m-form>
        </m-column>
      </m-row>
    </m-section>
    <m-section>
      <m-display :size="MTypographySize.small">
        Outlined text field states
      </m-display>
      <m-row>
        <m-column>
          <m-form @submit="onSubmit">
            <m-fieldset>
              <m-outlined-text-field
                ref="emailRef"
                :has-error="'undefined' !== typeof errors.email"
              >
                <m-field-control>
                  <m-field-leading>
                    <m-rounded-icon>
                      mail
                    </m-rounded-icon>
                  </m-field-leading>
                  <m-field-body>
                    <m-label>
                      Email
                    </m-label>
                    <m-field-input :name="'email'" />
                  </m-field-body>
                  <m-field-trailing v-if="errors.email">
                    <m-rounded-icon>
                      error
                    </m-rounded-icon>
                  </m-field-trailing>
                </m-field-control>
                <m-field-support v-if="errors.email">
                  <m-body>
                    {{ errors.email }}
                  </m-body>
                </m-field-support>
              </m-outlined-text-field>
            </m-fieldset>
          </m-form>
        </m-column>
        <m-column>
          <m-form @submit="onSubmit">
            <m-fieldset>
              <m-outlined-text-field>
                <m-field-control>
                  <m-field-leading>
                    <m-rounded-icon>
                      mail
                    </m-rounded-icon>
                  </m-field-leading>
                  <m-field-body>
                    <m-label>
                      Label
                    </m-label>
                    <m-field-input :name="'name'" />
                  </m-field-body>
                </m-field-control>
                <m-field-support>
                  <m-body>
                    Support text.
                  </m-body>
                  <m-label>
                    5/20
                  </m-label>
                </m-field-support>
              </m-outlined-text-field>
            </m-fieldset>
          </m-form>
        </m-column>
        <m-column>
          <m-form @submit="onSubmit">
            <m-fieldset>
              <m-outlined-text-field :without-label-text="true">
                <m-field-control>
                  <m-field-body>
                    <m-label>
                      Label
                    </m-label>
                    <m-field-prefix>
                      <m-label>
                        $
                      </m-label>
                    </m-field-prefix>
                    <m-field-input :name="'name'" />
                  </m-field-body>
                  <m-field-trailing>
                    <m-rounded-icon>
                      clear
                    </m-rounded-icon>
                  </m-field-trailing>
                </m-field-control>
                <m-field-support>
                  <m-label>
                    5/20
                  </m-label>
                </m-field-support>
              </m-outlined-text-field>
            </m-fieldset>
          </m-form>
        </m-column>
        <m-column>
          <m-form @submit="onSubmit">
            <m-fieldset>
              <m-outlined-text-field>
                <m-field-control>
                  <m-field-body>
                    <m-label>
                      Label
                    </m-label>
                    <m-field-input :name="'name'" />
                    <m-field-suffix>
                      <m-label>
                        lbs
                      </m-label>
                    </m-field-suffix>
                  </m-field-body>
                </m-field-control>
                <m-field-support>
                  <m-label>
                    5/20
                  </m-label>
                </m-field-support>
              </m-outlined-text-field>
            </m-fieldset>
          </m-form>
        </m-column>
        <m-column>
          <m-form @submit="onSubmit">
            <m-fieldset>
              <m-outlined-text-field>
                <m-field-control>
                  <m-field-body>
                    <m-label>
                      Label
                    </m-label>
                    <m-field-input :name="'name'" />
                  </m-field-body>
                </m-field-control>
                <m-field-support>
                  <m-body>
                    Support text that is much longer than you think.
                    Support text that is much longer than you think.
                    Support text that is much longer than you think.
                    Support text that is much longer than you think.
                  </m-body>
                  <m-label>
                    5/20
                  </m-label>
                </m-field-support>
              </m-outlined-text-field>
            </m-fieldset>
          </m-form>
        </m-column>
        <m-column>
          <m-form @submit="onSubmit">
            <m-fieldset>
              <m-outlined-text-field :state="MTextFieldState.disabled">
                <m-field-control>
                  <m-field-leading>
                    <m-rounded-icon>
                      mail
                    </m-rounded-icon>
                  </m-field-leading>
                  <m-field-body>
                    <m-label>
                      Label
                    </m-label>
                    <m-field-input
                      :name="'name'"
                      :disabled="true"
                    />
                  </m-field-body>
                  <m-field-trailing>
                    <m-rounded-icon>
                      error
                    </m-rounded-icon>
                  </m-field-trailing>
                </m-field-control>
                <m-field-support>
                  <m-body>
                    Support text.
                  </m-body>
                </m-field-support>
              </m-outlined-text-field>
            </m-fieldset>
          </m-form>
        </m-column>
      </m-row>
      <m-display :size="MTypographySize.small">
        Outlined text field error states
      </m-display>
      <m-row>
        <m-column>
          <m-form @submit="onSubmit">
            <m-fieldset>
              <m-outlined-text-field :has-error="true">
                <m-field-control>
                  <m-field-leading>
                    <m-rounded-icon>
                      mail
                    </m-rounded-icon>
                  </m-field-leading>
                  <m-field-body>
                    <m-label>
                      Email
                    </m-label>
                    <m-field-input :name="'name'" />
                  </m-field-body>
                  <m-field-trailing>
                    <m-rounded-icon>
                      error
                    </m-rounded-icon>
                  </m-field-trailing>
                </m-field-control>
                <m-field-support>
                  <m-body>
                    {{ errors.email }}
                  </m-body>
                </m-field-support>
              </m-outlined-text-field>
            </m-fieldset>
          </m-form>
        </m-column>
        <m-column>
          <m-form @submit="onSubmit">
            <m-fieldset>
              <m-outlined-text-field
                :state="MTextFieldState.hovered"
                :has-error="true"
              >
                <m-field-control>
                  <m-field-leading>
                    <m-rounded-icon>
                      mail
                    </m-rounded-icon>
                  </m-field-leading>
                  <m-field-body>
                    <m-label>
                      Email
                    </m-label>
                    <m-field-input :name="'name'" />
                  </m-field-body>
                  <m-field-trailing>
                    <m-rounded-icon>
                      error
                    </m-rounded-icon>
                  </m-field-trailing>
                </m-field-control>
                <m-field-support>
                  <m-body>
                    {{ errors.email }}
                  </m-body>
                </m-field-support>
              </m-outlined-text-field>
            </m-fieldset>
          </m-form>
        </m-column>
        <m-column>
          <m-form @submit="onSubmit">
            <m-fieldset>
              <m-outlined-text-field
                :state="MTextFieldState.focused"
                :has-error="true"
              >
                <m-field-control>
                  <m-field-leading>
                    <m-rounded-icon>
                      mail
                    </m-rounded-icon>
                  </m-field-leading>
                  <m-field-body>
                    <m-label>
                      Email
                    </m-label>
                    <m-field-input :name="'name'" />
                  </m-field-body>
                  <m-field-trailing>
                    <m-rounded-icon>
                      error
                    </m-rounded-icon>
                  </m-field-trailing>
                </m-field-control>
                <m-field-support>
                  <m-body>
                    {{ errors.email }}
                  </m-body>
                </m-field-support>
              </m-outlined-text-field>
            </m-fieldset>
          </m-form>
        </m-column>
        <m-column>
          <m-form @submit="onSubmit">
            <m-fieldset>
              <m-outlined-text-field :state="MTextFieldState.disabled">
                <m-field-control>
                  <m-field-leading>
                    <m-rounded-icon>
                      mail
                    </m-rounded-icon>
                  </m-field-leading>
                  <m-field-body>
                    <m-label>
                      Email
                    </m-label>
                    <m-field-input
                      :name="'name'"
                      :disabled="true"
                    />
                  </m-field-body>
                  <m-field-trailing>
                    <m-rounded-icon>
                      error
                    </m-rounded-icon>
                  </m-field-trailing>
                </m-field-control>
                <m-field-support>
                  <m-body>
                    {{ errors.email }}
                  </m-body>
                </m-field-support>
              </m-outlined-text-field>
            </m-fieldset>
          </m-form>
        </m-column>
      </m-row>
    </m-section>

    <m-section class="banner">
      <m-display :size="MTypographySize.large">
        Cards
      </m-display>
      <m-body :size="MTypographySize.large">
        See the <a
          href="https://m3.material.io/components/cards/overview"
          target="_blank"
        >Design Guidelines</a>
      </m-body>
    </m-section>
    <m-section>
      <m-display :size="MTypographySize.small">
        Elevated card states
      </m-display>
      <m-row>
        <m-column>
          <m-elevated-card>
            <m-label>
              Enabled
            </m-label>
            <m-title :size="MTypographySize.large">
              Title
            </m-title>
            <m-title :size="MTypographySize.small">
              Subhead
            </m-title>
            <m-body>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
            </m-body>
            <m-bar>
              <m-bar-trailing>
                <m-filled-button>
                  <m-label>
                    Get Started
                  </m-label>
                </m-filled-button>
              </m-bar-trailing>
            </m-bar>
          </m-elevated-card>
        </m-column>
        <m-column>
          <m-elevated-card :state="MCardState.hovered">
            <m-label>
              Hovered
            </m-label>
            <m-title :size="MTypographySize.large">
              Title
            </m-title>
            <m-title :size="MTypographySize.small">
              Subhead
            </m-title>
            <m-body>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
            </m-body>
            <m-bar>
              <m-bar-trailing>
                <m-filled-button>
                  <m-label>
                    Get Started
                  </m-label>
                </m-filled-button>
              </m-bar-trailing>
            </m-bar>
          </m-elevated-card>
        </m-column>
        <m-column>
          <m-elevated-card :state="MCardState.focused">
            <m-label>
              Focused
            </m-label>
            <m-title :size="MTypographySize.large">
              Title
            </m-title>
            <m-title :size="MTypographySize.small">
              Subhead
            </m-title>
            <m-body>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
            </m-body>
            <m-bar>
              <m-bar-trailing>
                <m-filled-button>
                  <m-label>
                    Get Started
                  </m-label>
                </m-filled-button>
              </m-bar-trailing>
            </m-bar>
          </m-elevated-card>
        </m-column>
        <m-column>
          <m-elevated-card :state="MCardState.pressed">
            <m-label>
              Pressed
            </m-label>
            <m-title :size="MTypographySize.large">
              Title
            </m-title>
            <m-title :size="MTypographySize.small">
              Subhead
            </m-title>
            <m-body>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
            </m-body>
            <m-bar>
              <m-bar-trailing>
                <m-filled-button>
                  <m-label>
                    Get Started
                  </m-label>
                </m-filled-button>
              </m-bar-trailing>
            </m-bar>
          </m-elevated-card>
        </m-column>
        <m-column>
          <m-elevated-card :state="MCardState.dragged">
            <m-label>
              Dragged
            </m-label>
            <m-title :size="MTypographySize.large">
              Title
            </m-title>
            <m-title :size="MTypographySize.small">
              Subhead
            </m-title>
            <m-body>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
            </m-body>
            <m-bar>
              <m-bar-trailing>
                <m-filled-button>
                  <m-label>
                    Get Started
                  </m-label>
                </m-filled-button>
              </m-bar-trailing>
            </m-bar>
          </m-elevated-card>
        </m-column>
        <m-column>
          <m-elevated-card :state="MCardState.disabled">
            <m-label>
              Disabled
            </m-label>
            <m-title :size="MTypographySize.large">
              Title
            </m-title>
            <m-title :size="MTypographySize.small">
              Subhead
            </m-title>
            <m-body>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
            </m-body>
            <m-bar>
              <m-bar-trailing>
                <m-tonal-button :state="MCardState.disabled">
                  <m-label>
                    Get Started
                  </m-label>
                </m-tonal-button>
              </m-bar-trailing>
            </m-bar>
          </m-elevated-card>
        </m-column>
      </m-row>
    </m-section>
    <m-section>
      <m-display :size="MTypographySize.small">
        Filled card states
      </m-display>
      <m-row>
        <m-column>
          <m-filled-card>
            <m-label>
              Enabled
            </m-label>
            <m-title :size="MTypographySize.large">
              Title
            </m-title>
            <m-title :size="MTypographySize.small">
              Subhead
            </m-title>
            <m-body>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
            </m-body>
            <m-bar>
              <m-bar-trailing>
                <m-filled-button>
                  <m-label>
                    Get Started
                  </m-label>
                </m-filled-button>
              </m-bar-trailing>
            </m-bar>
          </m-filled-card>
        </m-column>
        <m-column>
          <m-filled-card :state="MCardState.hovered">
            <m-label>
              Hovered
            </m-label>
            <m-title :size="MTypographySize.large">
              Title
            </m-title>
            <m-title :size="MTypographySize.small">
              Subhead
            </m-title>
            <m-body>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
            </m-body>
            <m-bar>
              <m-bar-trailing>
                <m-filled-button>
                  <m-label>
                    Get Started
                  </m-label>
                </m-filled-button>
              </m-bar-trailing>
            </m-bar>
          </m-filled-card>
        </m-column>
        <m-column>
          <m-filled-card :state="MCardState.focused">
            <m-label>
              Focused
            </m-label>
            <m-title :size="MTypographySize.large">
              Title
            </m-title>
            <m-title :size="MTypographySize.small">
              Subhead
            </m-title>
            <m-body>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
            </m-body>
            <m-bar>
              <m-bar-trailing>
                <m-filled-button>
                  <m-label>
                    Get Started
                  </m-label>
                </m-filled-button>
              </m-bar-trailing>
            </m-bar>
          </m-filled-card>
        </m-column>
        <m-column>
          <m-filled-card :state="MCardState.pressed">
            <m-label>
              Pressed
            </m-label>
            <m-title :size="MTypographySize.large">
              Title
            </m-title>
            <m-title :size="MTypographySize.small">
              Subhead
            </m-title>
            <m-body>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
            </m-body>
            <m-bar>
              <m-bar-trailing>
                <m-filled-button>
                  <m-label>
                    Get Started
                  </m-label>
                </m-filled-button>
              </m-bar-trailing>
            </m-bar>
          </m-filled-card>
        </m-column>
        <m-column>
          <m-filled-card :state="MCardState.dragged">
            <m-label>
              Dragged
            </m-label>
            <m-title :size="MTypographySize.large">
              Title
            </m-title>
            <m-title :size="MTypographySize.small">
              Subhead
            </m-title>
            <m-body>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
            </m-body>
            <m-bar>
              <m-bar-trailing>
                <m-filled-button>
                  <m-label>
                    Get Started
                  </m-label>
                </m-filled-button>
              </m-bar-trailing>
            </m-bar>
          </m-filled-card>
        </m-column>
        <m-column>
          <m-filled-card :state="MCardState.disabled">
            <m-label>
              Disabled
            </m-label>
            <m-title :size="MTypographySize.large">
              Title
            </m-title>
            <m-title :size="MTypographySize.small">
              Subhead
            </m-title>
            <m-body>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
            </m-body>
            <m-bar>
              <m-bar-trailing>
                <m-tonal-button :state="MCardState.disabled">
                  <m-label>
                    Get Started
                  </m-label>
                </m-tonal-button>
              </m-bar-trailing>
            </m-bar>
          </m-filled-card>
        </m-column>
      </m-row>
    </m-section>
    <m-section>
      <m-display :size="MTypographySize.small">
        Outlined card states
      </m-display>
      <m-row>
        <m-column>
          <m-outlined-card>
            <m-label>
              Enabled
            </m-label>
            <m-title :size="MTypographySize.large">
              Title
            </m-title>
            <m-title :size="MTypographySize.small">
              Subhead
            </m-title>
            <m-body>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
            </m-body>
            <m-bar>
              <m-bar-trailing>
                <m-filled-button>
                  <m-label>
                    Get Started
                  </m-label>
                </m-filled-button>
              </m-bar-trailing>
            </m-bar>
          </m-outlined-card>
        </m-column>
        <m-column>
          <m-outlined-card :state="MCardState.hovered">
            <m-label>
              Hovered
            </m-label>
            <m-title :size="MTypographySize.large">
              Title
            </m-title>
            <m-title :size="MTypographySize.small">
              Subhead
            </m-title>
            <m-body>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
            </m-body>
            <m-bar>
              <m-bar-trailing>
                <m-filled-button>
                  <m-label>
                    Get Started
                  </m-label>
                </m-filled-button>
              </m-bar-trailing>
            </m-bar>
          </m-outlined-card>
        </m-column>
        <m-column>
          <m-outlined-card :state="MCardState.focused">
            <m-label>
              Focused
            </m-label>
            <m-title :size="MTypographySize.large">
              Title
            </m-title>
            <m-title :size="MTypographySize.small">
              Subhead
            </m-title>
            <m-body>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
            </m-body>
            <m-bar>
              <m-bar-trailing>
                <m-filled-button>
                  <m-label>
                    Get Started
                  </m-label>
                </m-filled-button>
              </m-bar-trailing>
            </m-bar>
          </m-outlined-card>
        </m-column>
        <m-column>
          <m-outlined-card :state="MCardState.pressed">
            <m-label>
              Pressed
            </m-label>
            <m-title :size="MTypographySize.large">
              Title
            </m-title>
            <m-title :size="MTypographySize.small">
              Subhead
            </m-title>
            <m-body>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
            </m-body>
            <m-bar>
              <m-bar-trailing>
                <m-filled-button>
                  <m-label>
                    Get Started
                  </m-label>
                </m-filled-button>
              </m-bar-trailing>
            </m-bar>
          </m-outlined-card>
        </m-column>
        <m-column>
          <m-outlined-card :state="MCardState.dragged">
            <m-label>
              Dragged
            </m-label>
            <m-title :size="MTypographySize.large">
              Title
            </m-title>
            <m-title :size="MTypographySize.small">
              Subhead
            </m-title>
            <m-body>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
            </m-body>
            <m-bar>
              <m-bar-trailing>
                <m-filled-button>
                  <m-label>
                    Get Started
                  </m-label>
                </m-filled-button>
              </m-bar-trailing>
            </m-bar>
          </m-outlined-card>
        </m-column>
        <m-column>
          <m-outlined-card :state="MCardState.disabled">
            <m-label>
              Disabled
            </m-label>
            <m-title :size="MTypographySize.large">
              Title
            </m-title>
            <m-title :size="MTypographySize.small">
              Subhead
            </m-title>
            <m-body>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
            </m-body>
            <m-bar>
              <m-bar-trailing>
                <m-tonal-button :state="MCardState.disabled">
                  <m-label>
                    Get Started
                  </m-label>
                </m-tonal-button>
              </m-bar-trailing>
            </m-bar>
          </m-outlined-card>
        </m-column>
      </m-row>
    </m-section>

    <m-section class="banner">
      <m-display :size="MTypographySize.large">
        Lists
      </m-display>
      <m-body :size="MTypographySize.large">
        See the <a
          href="https://m3.material.io/components/lists/overview"
          target="_blank"
        >Design Guidelines</a>
      </m-body>
    </m-section>
    <m-section>
      <m-row>
        <m-column>
          <m-list>
            <m-list-item>
              <m-list-item-body>
                <m-headline>
                  Headline
                </m-headline>
              </m-list-item-body>
            </m-list-item>
            <m-list-item>
              <m-list-item-body>
                <m-headline>
                  Headline
                </m-headline>
              </m-list-item-body>
            </m-list-item>
            <m-list-item>
              <m-list-item-body>
                <m-headline>
                  Headline
                </m-headline>
              </m-list-item-body>
              <m-divider />
            </m-list-item>
          </m-list>
          <m-list>
            <m-list-item>
              <m-list-item-body>
                <m-headline>
                  Headline
                </m-headline>
              </m-list-item-body>
              <m-list-item-trailing>
                <m-label>
                  100+
                </m-label>
              </m-list-item-trailing>
            </m-list-item>
            <m-list-item>
              <m-list-item-body>
                <m-headline>
                  Hovered
                </m-headline>
              </m-list-item-body>
              <m-list-item-trailing>
                <m-label>
                  100+
                </m-label>
              </m-list-item-trailing>
            </m-list-item>
            <m-list-item>
              <m-list-item-body>
                <m-headline>
                  Headline
                </m-headline>
              </m-list-item-body>
              <m-list-item-trailing>
                <m-label>
                  100+
                </m-label>
              </m-list-item-trailing>
              <m-divider />
            </m-list-item>
          </m-list>
          <m-list :lines="MListLines.two">
            <m-list-item>
              <m-list-item-body>
                <m-headline>
                  Headline
                </m-headline>
                <m-body>
                  Supporting text.
                </m-body>
              </m-list-item-body>
            </m-list-item>
            <m-list-item>
              <m-list-item-body>
                <m-headline>
                  Focused
                </m-headline>
                <m-body>
                  Supporting text.
                </m-body>
              </m-list-item-body>
            </m-list-item>
            <m-list-item>
              <m-list-item-body>
                <m-headline>
                  Headline
                </m-headline>
                <m-body>
                  Supporting text.
                </m-body>
              </m-list-item-body>
              <m-divider />
            </m-list-item>
          </m-list>
          <m-list :lines="MListLines.two">
            <m-list-item>
              <m-list-item-body>
                <m-headline>
                  Headline
                </m-headline>
                <m-body>
                  Supporting text.
                </m-body>
              </m-list-item-body>
              <m-list-item-trailing>
                <m-label>
                  100+
                </m-label>
              </m-list-item-trailing>
            </m-list-item>
            <m-list-item>
              <m-list-item-body>
                <m-headline>
                  Pressed
                </m-headline>
                <m-body>
                  Supporting text.
                </m-body>
              </m-list-item-body>
              <m-list-item-trailing>
                <m-label>
                  100+
                </m-label>
              </m-list-item-trailing>
            </m-list-item>
            <m-list-item>
              <m-list-item-body>
                <m-headline>
                  Headline
                </m-headline>
                <m-body>
                  Supporting text.
                </m-body>
              </m-list-item-body>
              <m-list-item-trailing>
                <m-label>
                  100+
                </m-label>
              </m-list-item-trailing>
              <m-divider />
            </m-list-item>
          </m-list>
          <m-list :lines="MListLines.three">
            <m-list-item>
              <m-list-item-body>
                <m-headline>
                  Headline
                </m-headline>
                <m-body>
                  Supporting text that is long enough to fill multiple lines.
                </m-body>
              </m-list-item-body>
            </m-list-item>
            <!-- <m-list-item :state="MListItemState.dragged"> -->
            <m-list-item>
              <m-list-item-body>
                <m-headline>
                  Dragged
                </m-headline>
                <m-body>
                  Supporting text that is long enough to fill multiple lines.
                </m-body>
              </m-list-item-body>
            </m-list-item>
            <m-list-item>
              <m-list-item-body>
                <m-headline>
                  Headline
                </m-headline>
                <m-body>
                  Supporting text that is long enough to fill multiple lines.
                </m-body>
              </m-list-item-body>
              <m-divider />
            </m-list-item>
          </m-list>
          <m-list :lines="MListLines.three">
            <m-list-item>
              <m-list-item-body>
                <m-headline>
                  Headline
                </m-headline>
                <m-body>
                  Supporting text that is long enough to fill multiple lines.
                </m-body>
              </m-list-item-body>
              <m-list-item-trailing>
                <m-label>
                  100+
                </m-label>
              </m-list-item-trailing>
            </m-list-item>
            <m-list-item :state="MListItemState.disabled">
              <m-list-item-body>
                <m-headline>
                  Disabled
                </m-headline>
                <m-body>
                  Supporting text that is long enough to fill multiple lines.
                </m-body>
              </m-list-item-body>
              <m-list-item-trailing>
                <m-label>
                  100+
                </m-label>
              </m-list-item-trailing>
            </m-list-item>
            <m-list-item>
              <m-list-item-body>
                <m-headline>
                  Headline
                </m-headline>
                <m-body>
                  Supporting text that is long enough to fill multiple lines.
                </m-body>
              </m-list-item-body>
              <m-list-item-trailing>
                <m-label>
                  100+
                </m-label>
              </m-list-item-trailing>
              <m-divider />
            </m-list-item>
          </m-list>
        </m-column>
        <m-column>
          <m-list>
            <m-list-item>
              <m-list-item-leading>
                <m-rounded-icon>
                  mail
                </m-rounded-icon>
              </m-list-item-leading>
              <m-list-item-body>
                <m-headline>
                  Headline
                </m-headline>
              </m-list-item-body>
            </m-list-item>
            <m-list-item>
              <m-list-item-leading>
                <m-rounded-icon>
                  mail
                </m-rounded-icon>
              </m-list-item-leading>
              <m-list-item-body>
                <m-headline>
                  Headline
                </m-headline>
              </m-list-item-body>
            </m-list-item>
            <m-list-item>
              <m-list-item-leading>
                <m-rounded-icon>
                  mail
                </m-rounded-icon>
              </m-list-item-leading>
              <m-list-item-body>
                <m-headline>
                  Headline
                </m-headline>
              </m-list-item-body>
              <m-divider />
            </m-list-item>
          </m-list>
          <m-list>
            <m-list-item>
              <m-list-item-leading>
                <m-rounded-icon>
                  mail
                </m-rounded-icon>
              </m-list-item-leading>
              <m-list-item-body>
                <m-headline>
                  Headline
                </m-headline>
              </m-list-item-body>
              <m-list-item-trailing>
                <m-rounded-icon>
                  arrow_drop_down
                </m-rounded-icon>
              </m-list-item-trailing>
            </m-list-item>
            <m-list-item>
              <m-list-item-leading>
                <m-rounded-icon>
                  mail
                </m-rounded-icon>
              </m-list-item-leading>
              <m-list-item-body>
                <m-headline>
                  Hovered
                </m-headline>
              </m-list-item-body>
              <m-list-item-trailing>
                <m-rounded-icon>
                  arrow_drop_down
                </m-rounded-icon>
              </m-list-item-trailing>
            </m-list-item>
            <m-list-item>
              <m-list-item-leading>
                <m-rounded-icon>
                  mail
                </m-rounded-icon>
              </m-list-item-leading>
              <m-list-item-body>
                <m-headline>
                  Headline
                </m-headline>
              </m-list-item-body>
              <m-list-item-trailing>
                <m-rounded-icon>
                  arrow_drop_down
                </m-rounded-icon>
              </m-list-item-trailing>
              <m-divider />
            </m-list-item>
          </m-list>
          <m-list
            :lines="MListLines.two"
          >
            <m-list-item>
              <m-list-item-leading>
                <m-rounded-icon>
                  mail
                </m-rounded-icon>
              </m-list-item-leading>
              <m-list-item-body>
                <m-headline>
                  Headline
                </m-headline>
                <m-body>
                  Supporting text.
                </m-body>
              </m-list-item-body>
            </m-list-item>
            <m-list-item>
              <m-list-item-leading>
                <m-rounded-icon>
                  mail
                </m-rounded-icon>
              </m-list-item-leading>
              <m-list-item-body>
                <m-headline>
                  Focused
                </m-headline>
                <m-body>
                  Supporting text.
                </m-body>
              </m-list-item-body>
            </m-list-item>
            <m-list-item>
              <m-list-item-leading>
                <m-rounded-icon>
                  mail
                </m-rounded-icon>
              </m-list-item-leading>
              <m-list-item-body>
                <m-headline>
                  Headline
                </m-headline>
                <m-body>
                  Supporting text.
                </m-body>
              </m-list-item-body>
              <m-divider />
            </m-list-item>
          </m-list>
          <m-list :lines="MListLines.two">
            <m-list-item>
              <m-list-item-leading>
                <m-rounded-icon>
                  mail
                </m-rounded-icon>
              </m-list-item-leading>
              <m-list-item-body>
                <m-headline>
                  Headline
                </m-headline>
                <m-body>
                  Supporting text.
                </m-body>
              </m-list-item-body>
              <m-list-item-trailing>
                <m-rounded-icon>
                  arrow_drop_down
                </m-rounded-icon>
              </m-list-item-trailing>
            </m-list-item>
            <m-list-item>
              <m-list-item-leading>
                <m-rounded-icon>
                  mail
                </m-rounded-icon>
              </m-list-item-leading>
              <m-list-item-body>
                <m-headline>
                  Pressed
                </m-headline>
                <m-body>
                  Supporting text.
                </m-body>
              </m-list-item-body>
              <m-list-item-trailing>
                <m-rounded-icon>
                  arrow_drop_down
                </m-rounded-icon>
              </m-list-item-trailing>
            </m-list-item>
            <m-list-item>
              <m-list-item-leading>
                <m-rounded-icon>
                  mail
                </m-rounded-icon>
              </m-list-item-leading>
              <m-list-item-body>
                <m-headline>
                  Headline
                </m-headline>
                <m-body>
                  Supporting text.
                </m-body>
              </m-list-item-body>
              <m-list-item-trailing>
                <m-rounded-icon>
                  arrow_drop_down
                </m-rounded-icon>
              </m-list-item-trailing>
              <m-divider />
            </m-list-item>
          </m-list>
          <m-list
            :lines="MListLines.three"
          >
            <m-list-item>
              <m-list-item-leading>
                <m-rounded-icon>
                  mail
                </m-rounded-icon>
              </m-list-item-leading>
              <m-list-item-body>
                <m-headline>
                  Headline
                </m-headline>
                <m-body>
                  Supporting text that is long enough to fill multiple lines.
                </m-body>
              </m-list-item-body>
            </m-list-item>
            <!-- <m-list-item :state="MListItemState.dragged"> -->
            <m-list-item>
              <m-list-item-leading>
                <m-rounded-icon>
                  mail
                </m-rounded-icon>
              </m-list-item-leading>
              <m-list-item-body>
                <m-headline>
                  Dragged
                </m-headline>
                <m-body>
                  Supporting text that is long enough to fill multiple lines.
                </m-body>
              </m-list-item-body>
            </m-list-item>
            <m-list-item>
              <m-list-item-leading>
                <m-rounded-icon>
                  mail
                </m-rounded-icon>
              </m-list-item-leading>
              <m-list-item-body>
                <m-headline>
                  Headline
                </m-headline>
                <m-body>
                  Supporting text that is long enough to fill multiple lines.
                </m-body>
              </m-list-item-body>
              <m-divider />
            </m-list-item>
          </m-list>
          <m-list :lines="MListLines.three">
            <m-list-item>
              <m-list-item-leading>
                <m-rounded-icon>
                  mail
                </m-rounded-icon>
              </m-list-item-leading>
              <m-list-item-body>
                <m-headline>
                  Headline
                </m-headline>
                <m-body>
                  Supporting text that is long enough to fill multiple lines.
                </m-body>
              </m-list-item-body>
              <m-list-item-trailing>
                <m-rounded-icon>
                  arrow_drop_down
                </m-rounded-icon>
              </m-list-item-trailing>
            </m-list-item>
            <m-list-item :state="MListItemState.disabled">
              <m-list-item-leading>
                <m-rounded-icon>
                  mail
                </m-rounded-icon>
              </m-list-item-leading>
              <m-list-item-body>
                <m-headline>
                  Disabled
                </m-headline>
                <m-body>
                  Supporting text that is long enough to fill multiple lines.
                </m-body>
              </m-list-item-body>
              <m-list-item-trailing>
                <m-rounded-icon>
                  arrow_drop_down
                </m-rounded-icon>
              </m-list-item-trailing>
            </m-list-item>
            <m-list-item>
              <m-list-item-leading>
                <m-rounded-icon>
                  mail
                </m-rounded-icon>
              </m-list-item-leading>
              <m-list-item-body>
                <m-headline>
                  Headline
                </m-headline>
                <m-body>
                  Supporting text that is long enough to fill multiple lines.
                </m-body>
              </m-list-item-body>
              <m-list-item-trailing>
                <m-rounded-icon>
                  arrow_drop_down
                </m-rounded-icon>
              </m-list-item-trailing>
              <m-divider />
            </m-list-item>
          </m-list>
        </m-column>
        <m-column>
          <m-list>
            <m-list-item>
              <m-list-item-leading>
                <m-avatar>
                  <m-label>
                    A
                  </m-label>
                </m-avatar>
              </m-list-item-leading>
              <m-list-item-body>
                <m-headline>
                  Headline
                </m-headline>
              </m-list-item-body>
            </m-list-item>
            <m-list-item>
              <m-list-item-leading>
                <m-avatar>
                  <m-label>
                    A
                  </m-label>
                </m-avatar>
              </m-list-item-leading>
              <m-list-item-body>
                <m-headline>
                  Headline
                </m-headline>
              </m-list-item-body>
            </m-list-item>
            <m-list-item>
              <m-list-item-leading>
                <m-avatar>
                  <m-label>
                    A
                  </m-label>
                </m-avatar>
              </m-list-item-leading>
              <m-list-item-body>
                <m-headline>
                  Headline
                </m-headline>
              </m-list-item-body>
              <m-divider />
            </m-list-item>
          </m-list>
          <m-list>
            <m-list-item>
              <m-list-item-leading>
                <m-avatar>
                  <m-label>
                    A
                  </m-label>
                </m-avatar>
              </m-list-item-leading>
              <m-list-item-body>
                <m-headline>
                  Headline
                </m-headline>
              </m-list-item-body>
              <m-list-item-trailing>
                <m-rounded-icon>
                  arrow_drop_down
                </m-rounded-icon>
              </m-list-item-trailing>
            </m-list-item>
            <m-list-item>
              <m-list-item-leading>
                <m-avatar>
                  <m-label>
                    A
                  </m-label>
                </m-avatar>
              </m-list-item-leading>
              <m-list-item-body>
                <m-headline>
                  Hovered
                </m-headline>
              </m-list-item-body>
              <m-list-item-trailing>
                <m-rounded-icon>
                  arrow_drop_down
                </m-rounded-icon>
              </m-list-item-trailing>
            </m-list-item>
            <m-list-item>
              <m-list-item-leading>
                <m-avatar>
                  <m-label>
                    A
                  </m-label>
                </m-avatar>
              </m-list-item-leading>
              <m-list-item-body>
                <m-headline>
                  Headline
                </m-headline>
              </m-list-item-body>
              <m-list-item-trailing>
                <m-rounded-icon>
                  arrow_drop_down
                </m-rounded-icon>
              </m-list-item-trailing>
              <m-divider />
            </m-list-item>
          </m-list>
          <m-list :lines="MListLines.two">
            <m-list-item>
              <m-list-item-leading>
                <m-avatar>
                  <m-label>
                    A
                  </m-label>
                </m-avatar>
              </m-list-item-leading>
              <m-list-item-body>
                <m-headline>
                  Headline
                </m-headline>
                <m-body>
                  Supporting text.
                </m-body>
              </m-list-item-body>
            </m-list-item>
            <m-list-item>
              <m-list-item-leading>
                <m-avatar>
                  <m-label>
                    A
                  </m-label>
                </m-avatar>
              </m-list-item-leading>
              <m-list-item-body>
                <m-headline>
                  Focused
                </m-headline>
                <m-body>
                  Supporting text.
                </m-body>
              </m-list-item-body>
            </m-list-item>
            <m-list-item>
              <m-list-item-leading>
                <m-avatar>
                  <m-label>
                    A
                  </m-label>
                </m-avatar>
              </m-list-item-leading>
              <m-list-item-body>
                <m-headline>
                  Headline
                </m-headline>
                <m-body>
                  Supporting text.
                </m-body>
              </m-list-item-body>
              <m-divider />
            </m-list-item>
          </m-list>
          <m-list :lines="MListLines.two">
            <m-list-item>
              <m-list-item-leading>
                <m-avatar>
                  <m-label>
                    A
                  </m-label>
                </m-avatar>
              </m-list-item-leading>
              <m-list-item-body>
                <m-headline>
                  Headline
                </m-headline>
                <m-body>
                  Supporting text.
                </m-body>
              </m-list-item-body>
              <m-list-item-trailing>
                <m-rounded-icon>
                  arrow_drop_down
                </m-rounded-icon>
              </m-list-item-trailing>
            </m-list-item>
            <m-list-item>
              <m-list-item-leading>
                <m-avatar>
                  <m-label>
                    A
                  </m-label>
                </m-avatar>
              </m-list-item-leading>
              <m-list-item-body>
                <m-headline>
                  Pressed
                </m-headline>
                <m-body>
                  Supporting text.
                </m-body>
              </m-list-item-body>
              <m-list-item-trailing>
                <m-rounded-icon>
                  arrow_drop_down
                </m-rounded-icon>
              </m-list-item-trailing>
            </m-list-item>
            <m-list-item>
              <m-list-item-leading>
                <m-avatar>
                  <m-label>
                    A
                  </m-label>
                </m-avatar>
              </m-list-item-leading>
              <m-list-item-body>
                <m-headline>
                  Headline
                </m-headline>
                <m-body>
                  Supporting text.
                </m-body>
              </m-list-item-body>
              <m-list-item-trailing>
                <m-rounded-icon>
                  arrow_drop_down
                </m-rounded-icon>
              </m-list-item-trailing>
              <m-divider />
            </m-list-item>
          </m-list>
          <m-list :lines="MListLines.three">
            <m-list-item>
              <m-list-item-leading>
                <m-avatar>
                  <m-label>
                    A
                  </m-label>
                </m-avatar>
              </m-list-item-leading>
              <m-list-item-body>
                <m-headline>
                  Headline
                </m-headline>
                <m-body>
                  Supporting text that is long enough to fill multiple lines.
                </m-body>
              </m-list-item-body>
            </m-list-item>
            <!-- <m-list-item :state="MListItemState.dragged"> -->
            <m-list-item>
              <m-list-item-leading>
                <m-avatar>
                  <m-label>
                    A
                  </m-label>
                </m-avatar>
              </m-list-item-leading>
              <m-list-item-body>
                <m-headline>
                  Dragged
                </m-headline>
                <m-body>
                  Supporting text that is long enough to fill multiple lines.
                </m-body>
              </m-list-item-body>
            </m-list-item>
            <m-list-item>
              <m-list-item-leading>
                <m-avatar>
                  <m-label>
                    A
                  </m-label>
                </m-avatar>
              </m-list-item-leading>
              <m-list-item-body>
                <m-headline>
                  Headline
                </m-headline>
                <m-body>
                  Supporting text that is long enough to fill multiple lines.
                </m-body>
              </m-list-item-body>
              <m-divider />
            </m-list-item>
          </m-list>
          <m-list :lines="MListLines.three">
            <m-list-item>
              <m-list-item-leading>
                <m-avatar>
                  <m-label>
                    A
                  </m-label>
                </m-avatar>
              </m-list-item-leading>
              <m-list-item-body>
                <m-headline>
                  Headline
                </m-headline>
                <m-body>
                  Supporting text that is long enough to fill multiple lines.
                </m-body>
              </m-list-item-body>
              <m-list-item-trailing>
                <m-rounded-icon>
                  arrow_drop_down
                </m-rounded-icon>
              </m-list-item-trailing>
            </m-list-item>
            <m-list-item :state="MListItemState.disabled">
              <m-list-item-leading>
                <m-avatar>
                  <m-label>
                    A
                  </m-label>
                </m-avatar>
              </m-list-item-leading>
              <m-list-item-body>
                <m-headline>
                  Disabled
                </m-headline>
                <m-body>
                  Supporting text that is long enough to fill multiple lines.
                </m-body>
              </m-list-item-body>
              <m-list-item-trailing>
                <m-rounded-icon>
                  arrow_drop_down
                </m-rounded-icon>
              </m-list-item-trailing>
            </m-list-item>
            <m-list-item>
              <m-list-item-leading>
                <m-avatar>
                  <m-label>
                    A
                  </m-label>
                </m-avatar>
              </m-list-item-leading>
              <m-list-item-body>
                <m-headline>
                  Headline
                </m-headline>
                <m-body>
                  Supporting text that is long enough to fill multiple lines.
                </m-body>
              </m-list-item-body>
              <m-list-item-trailing>
                <m-rounded-icon>
                  arrow_drop_down
                </m-rounded-icon>
              </m-list-item-trailing>
              <m-divider />
            </m-list-item>
          </m-list>
        </m-column>
        <m-column>
          <m-list>
            <m-list-item>
              <m-list-item-leading>
                <img
                  class="is-theme-dark"
                  src="/assets/cosmicmind-16x9-placeholder-dark.svg"
                  alt="CosmicMind 16x9 Placeholder"
                >
                <img
                  class="is-theme-light"
                  src="/assets/cosmicmind-16x9-placeholder-light.svg"
                  alt="CosmicMind 16x9 Placeholder"
                >
              </m-list-item-leading>
              <m-list-item-body>
                <m-headline>
                  Headline
                </m-headline>
              </m-list-item-body>
            </m-list-item>
            <m-list-item>
              <m-list-item-leading>
                <img
                  class="is-theme-dark"
                  src="/assets/cosmicmind-16x9-placeholder-dark.svg"
                  alt="CosmicMind 16x9 Placeholder"
                >
                <img
                  class="is-theme-light"
                  src="/assets/cosmicmind-16x9-placeholder-light.svg"
                  alt="CosmicMind 16x9 Placeholder"
                >
              </m-list-item-leading>
              <m-list-item-body>
                <m-headline>
                  Headline
                </m-headline>
              </m-list-item-body>
            </m-list-item>
            <m-list-item>
              <m-list-item-leading>
                <img
                  class="is-theme-dark"
                  src="/assets/cosmicmind-16x9-placeholder-dark.svg"
                  alt="CosmicMind 16x9 Placeholder"
                >
                <img
                  class="is-theme-light"
                  src="/assets/cosmicmind-16x9-placeholder-light.svg"
                  alt="CosmicMind 16x9 Placeholder"
                >
              </m-list-item-leading>
              <m-list-item-body>
                <m-headline>
                  Headline
                </m-headline>
              </m-list-item-body>
              <m-divider />
            </m-list-item>
          </m-list>
          <m-list>
            <m-list-item>
              <m-list-item-leading>
                <img
                  class="is-theme-dark"
                  src="/assets/cosmicmind-16x9-placeholder-dark.svg"
                  alt="CosmicMind 16x9 Placeholder"
                >
                <img
                  class="is-theme-light"
                  src="/assets/cosmicmind-16x9-placeholder-light.svg"
                  alt="CosmicMind 16x9 Placeholder"
                >
              </m-list-item-leading>
              <m-list-item-body>
                <m-headline>
                  Headline
                </m-headline>
              </m-list-item-body>
              <m-list-item-trailing>
                <m-rounded-icon>
                  arrow_drop_down
                </m-rounded-icon>
              </m-list-item-trailing>
            </m-list-item>
            <m-list-item>
              <m-list-item-leading>
                <img
                  class="is-theme-dark"
                  src="/assets/cosmicmind-16x9-placeholder-dark.svg"
                  alt="CosmicMind 16x9 Placeholder"
                >
                <img
                  class="is-theme-light"
                  src="/assets/cosmicmind-16x9-placeholder-light.svg"
                  alt="CosmicMind 16x9 Placeholder"
                >
              </m-list-item-leading>
              <m-list-item-body>
                <m-headline>
                  Hovered
                </m-headline>
              </m-list-item-body>
              <m-list-item-trailing>
                <m-rounded-icon>
                  arrow_drop_down
                </m-rounded-icon>
              </m-list-item-trailing>
            </m-list-item>
            <m-list-item>
              <m-list-item-leading>
                <img
                  class="is-theme-dark"
                  src="/assets/cosmicmind-16x9-placeholder-dark.svg"
                  alt="CosmicMind 16x9 Placeholder"
                >
                <img
                  class="is-theme-light"
                  src="/assets/cosmicmind-16x9-placeholder-light.svg"
                  alt="CosmicMind 16x9 Placeholder"
                >
              </m-list-item-leading>
              <m-list-item-body>
                <m-headline>
                  Headline
                </m-headline>
              </m-list-item-body>
              <m-list-item-trailing>
                <m-rounded-icon>
                  arrow_drop_down
                </m-rounded-icon>
              </m-list-item-trailing>
              <m-divider />
            </m-list-item>
          </m-list>
          <m-list :lines="MListLines.two">
            <m-list-item>
              <m-list-item-leading>
                <img
                  class="is-theme-dark"
                  src="/assets/cosmicmind-16x9-placeholder-dark.svg"
                  alt="CosmicMind 16x9 Placeholder"
                >
                <img
                  class="is-theme-light"
                  src="/assets/cosmicmind-16x9-placeholder-light.svg"
                  alt="CosmicMind 16x9 Placeholder"
                >
              </m-list-item-leading>
              <m-list-item-body>
                <m-headline>
                  Headline
                </m-headline>
                <m-body>
                  Supporting text.
                </m-body>
              </m-list-item-body>
            </m-list-item>
            <m-list-item>
              <m-list-item-leading>
                <img
                  class="is-theme-dark"
                  src="/assets/cosmicmind-16x9-placeholder-dark.svg"
                  alt="CosmicMind 16x9 Placeholder"
                >
                <img
                  class="is-theme-light"
                  src="/assets/cosmicmind-16x9-placeholder-light.svg"
                  alt="CosmicMind 16x9 Placeholder"
                >
              </m-list-item-leading>
              <m-list-item-body>
                <m-headline>
                  Focused
                </m-headline>
                <m-body>
                  Supporting text.
                </m-body>
              </m-list-item-body>
            </m-list-item>
            <m-list-item>
              <m-list-item-leading>
                <img
                  class="is-theme-dark"
                  src="/assets/cosmicmind-16x9-placeholder-dark.svg"
                  alt="CosmicMind 16x9 Placeholder"
                >
                <img
                  class="is-theme-light"
                  src="/assets/cosmicmind-16x9-placeholder-light.svg"
                  alt="CosmicMind 16x9 Placeholder"
                >
              </m-list-item-leading>
              <m-list-item-body>
                <m-headline>
                  Headline
                </m-headline>
                <m-body>
                  Supporting text.
                </m-body>
              </m-list-item-body>
              <m-divider />
            </m-list-item>
          </m-list>
          <m-list :lines="MListLines.two">
            <m-list-item>
              <m-list-item-leading>
                <img
                  class="is-theme-dark"
                  src="/assets/cosmicmind-16x9-placeholder-dark.svg"
                  alt="CosmicMind 16x9 Placeholder"
                >
                <img
                  class="is-theme-light"
                  src="/assets/cosmicmind-16x9-placeholder-light.svg"
                  alt="CosmicMind 16x9 Placeholder"
                >
              </m-list-item-leading>
              <m-list-item-body>
                <m-headline>
                  Headline
                </m-headline>
                <m-body>
                  Supporting text.
                </m-body>
              </m-list-item-body>
              <m-list-item-trailing>
                <m-rounded-icon>
                  arrow_drop_down
                </m-rounded-icon>
              </m-list-item-trailing>
            </m-list-item>
            <m-list-item>
              <m-list-item-leading>
                <img
                  class="is-theme-dark"
                  src="/assets/cosmicmind-16x9-placeholder-dark.svg"
                  alt="CosmicMind 16x9 Placeholder"
                >
                <img
                  class="is-theme-light"
                  src="/assets/cosmicmind-16x9-placeholder-light.svg"
                  alt="CosmicMind 16x9 Placeholder"
                >
              </m-list-item-leading>
              <m-list-item-body>
                <m-headline>
                  Pressed
                </m-headline>
                <m-body>
                  Supporting text.
                </m-body>
              </m-list-item-body>
              <m-list-item-trailing>
                <m-rounded-icon>
                  arrow_drop_down
                </m-rounded-icon>
              </m-list-item-trailing>
            </m-list-item>
            <m-list-item>
              <m-list-item-leading>
                <img
                  class="is-theme-dark"
                  src="/assets/cosmicmind-16x9-placeholder-dark.svg"
                  alt="CosmicMind 16x9 Placeholder"
                >
                <img
                  class="is-theme-light"
                  src="/assets/cosmicmind-16x9-placeholder-light.svg"
                  alt="CosmicMind 16x9 Placeholder"
                >
              </m-list-item-leading>
              <m-list-item-body>
                <m-headline>
                  Headline
                </m-headline>
                <m-body>
                  Supporting text.
                </m-body>
              </m-list-item-body>
              <m-list-item-trailing>
                <m-rounded-icon>
                  arrow_drop_down
                </m-rounded-icon>
              </m-list-item-trailing>
              <m-divider />
            </m-list-item>
          </m-list>
          <m-list :lines="MListLines.three">
            <m-list-item>
              <m-list-item-leading>
                <img
                  class="is-theme-dark"
                  src="/assets/cosmicmind-16x9-placeholder-dark.svg"
                  alt="CosmicMind 16x9 Placeholder"
                >
                <img
                  class="is-theme-light"
                  src="/assets/cosmicmind-16x9-placeholder-light.svg"
                  alt="CosmicMind 16x9 Placeholder"
                >
              </m-list-item-leading>
              <m-list-item-body>
                <m-headline>
                  Headline
                </m-headline>
                <m-body>
                  Supporting text that is long enough to fill multiple lines.
                </m-body>
              </m-list-item-body>
            </m-list-item>
            <!-- <m-list-item :state="MListItemState.dragged"> -->
            <m-list-item>
              <m-list-item-leading>
                <img
                  class="is-theme-dark"
                  src="/assets/cosmicmind-16x9-placeholder-dark.svg"
                  alt="CosmicMind 16x9 Placeholder"
                >
                <img
                  class="is-theme-light"
                  src="/assets/cosmicmind-16x9-placeholder-light.svg"
                  alt="CosmicMind 16x9 Placeholder"
                >
              </m-list-item-leading>
              <m-list-item-body>
                <m-headline>
                  Dragged
                </m-headline>
                <m-body>
                  Supporting text that is long enough to fill multiple lines.
                </m-body>
              </m-list-item-body>
            </m-list-item>
            <m-list-item>
              <m-list-item-leading>
                <img
                  class="is-theme-dark"
                  src="/assets/cosmicmind-16x9-placeholder-dark.svg"
                  alt="CosmicMind 16x9 Placeholder"
                >
                <img
                  class="is-theme-light"
                  src="/assets/cosmicmind-16x9-placeholder-light.svg"
                  alt="CosmicMind 16x9 Placeholder"
                >
              </m-list-item-leading>
              <m-list-item-body>
                <m-headline>
                  Headline
                </m-headline>
                <m-body>
                  Supporting text that is long enough to fill multiple lines.
                </m-body>
              </m-list-item-body>
              <m-divider />
            </m-list-item>
          </m-list>
          <m-list :lines="MListLines.three">
            <m-list-item>
              <m-list-item-leading>
                <img
                  class="is-theme-dark"
                  src="/assets/cosmicmind-16x9-placeholder-dark.svg"
                  alt="CosmicMind 16x9 Placeholder"
                >
                <img
                  class="is-theme-light"
                  src="/assets/cosmicmind-16x9-placeholder-light.svg"
                  alt="CosmicMind 16x9 Placeholder"
                >
              </m-list-item-leading>
              <m-list-item-body>
                <m-headline>
                  Headline
                </m-headline>
                <m-body>
                  Supporting text that is long enough to fill multiple lines.
                </m-body>
              </m-list-item-body>
              <m-list-item-trailing>
                <m-rounded-icon>
                  arrow_drop_down
                </m-rounded-icon>
              </m-list-item-trailing>
            </m-list-item>
            <m-list-item :state="MListItemState.disabled">
              <m-list-item-leading>
                <img
                  class="is-theme-dark"
                  src="/assets/cosmicmind-16x9-placeholder-dark.svg"
                  alt="CosmicMind 16x9 Placeholder"
                >
                <img
                  class="is-theme-light"
                  src="/assets/cosmicmind-16x9-placeholder-light.svg"
                  alt="CosmicMind 16x9 Placeholder"
                >
              </m-list-item-leading>
              <m-list-item-body>
                <m-headline>
                  Disabled
                </m-headline>
                <m-body>
                  Supporting text that is long enough to fill multiple lines.
                </m-body>
              </m-list-item-body>
              <m-list-item-trailing>
                <m-rounded-icon>
                  arrow_drop_down
                </m-rounded-icon>
              </m-list-item-trailing>
            </m-list-item>
            <m-list-item>
              <m-list-item-leading>
                <img
                  class="is-theme-dark"
                  src="/assets/cosmicmind-16x9-placeholder-dark.svg"
                  alt="CosmicMind 16x9 Placeholder"
                >
                <img
                  class="is-theme-light"
                  src="/assets/cosmicmind-16x9-placeholder-light.svg"
                  alt="CosmicMind 16x9 Placeholder"
                >
              </m-list-item-leading>
              <m-list-item-body>
                <m-headline>
                  Headline
                </m-headline>
                <m-body>
                  Supporting text that is long enough to fill multiple lines.
                </m-body>
              </m-list-item-body>
              <m-list-item-trailing>
                <m-rounded-icon>
                  arrow_drop_down
                </m-rounded-icon>
              </m-list-item-trailing>
              <m-divider />
            </m-list-item>
          </m-list>
        </m-column>
        <m-column>
          <m-list>
            <m-list-item :has-leading-video="true">
              <m-list-item-leading>
                <m-video>
                  <img
                    class="is-theme-dark"
                    src="/assets/cosmicmind-16x9-placeholder-dark.svg"
                    alt="CosmicMind 16x9 Placeholder"
                  >
                  <img
                    class="is-theme-light"
                    src="/assets/cosmicmind-16x9-placeholder-light.svg"
                    alt="CosmicMind 16x9 Placeholder"
                  >
                </m-video>
              </m-list-item-leading>
              <m-list-item-body>
                <m-headline>
                  Headline
                </m-headline>
              </m-list-item-body>
            </m-list-item>
            <m-list-item :has-leading-video="true">
              <m-list-item-leading>
                <m-video>
                  <img
                    class="is-theme-dark"
                    src="/assets/cosmicmind-16x9-placeholder-dark.svg"
                    alt="CosmicMind 16x9 Placeholder"
                  >
                  <img
                    class="is-theme-light"
                    src="/assets/cosmicmind-16x9-placeholder-light.svg"
                    alt="CosmicMind 16x9 Placeholder"
                  >
                </m-video>
              </m-list-item-leading>
              <m-list-item-body>
                <m-headline>
                  Headline
                </m-headline>
              </m-list-item-body>
            </m-list-item>
            <m-list-item :has-leading-video="true">
              <m-list-item-leading>
                <m-video>
                  <img
                    class="is-theme-dark"
                    src="/assets/cosmicmind-16x9-placeholder-dark.svg"
                    alt="CosmicMind 16x9 Placeholder"
                  >
                  <img
                    class="is-theme-light"
                    src="/assets/cosmicmind-16x9-placeholder-light.svg"
                    alt="CosmicMind 16x9 Placeholder"
                  >
                </m-video>
              </m-list-item-leading>
              <m-list-item-body>
                <m-headline>
                  Headline
                </m-headline>
              </m-list-item-body>
              <m-divider />
            </m-list-item>
          </m-list>
          <m-list>
            <m-list-item :has-leading-video="true">
              <m-list-item-leading>
                <m-video>
                  <img
                    class="is-theme-dark"
                    src="/assets/cosmicmind-16x9-placeholder-dark.svg"
                    alt="CosmicMind 16x9 Placeholder"
                  >
                  <img
                    class="is-theme-light"
                    src="/assets/cosmicmind-16x9-placeholder-light.svg"
                    alt="CosmicMind 16x9 Placeholder"
                  >
                </m-video>
              </m-list-item-leading>
              <m-list-item-body>
                <m-headline>
                  Headline
                </m-headline>
              </m-list-item-body>
              <m-list-item-trailing>
                <m-rounded-icon>
                  arrow_drop_down
                </m-rounded-icon>
              </m-list-item-trailing>
            </m-list-item>
            <m-list-item :has-leading-video="true">
              <m-list-item-leading>
                <m-video>
                  <img
                    class="is-theme-dark"
                    src="/assets/cosmicmind-16x9-placeholder-dark.svg"
                    alt="CosmicMind 16x9 Placeholder"
                  >
                  <img
                    class="is-theme-light"
                    src="/assets/cosmicmind-16x9-placeholder-light.svg"
                    alt="CosmicMind 16x9 Placeholder"
                  >
                </m-video>
              </m-list-item-leading>
              <m-list-item-body>
                <m-headline>
                  Hovered
                </m-headline>
              </m-list-item-body>
              <m-list-item-trailing>
                <m-rounded-icon>
                  arrow_drop_down
                </m-rounded-icon>
              </m-list-item-trailing>
            </m-list-item>
            <m-list-item :has-leading-video="true">
              <m-list-item-leading>
                <m-video>
                  <img
                    class="is-theme-dark"
                    src="/assets/cosmicmind-16x9-placeholder-dark.svg"
                    alt="CosmicMind 16x9 Placeholder"
                  >
                  <img
                    class="is-theme-light"
                    src="/assets/cosmicmind-16x9-placeholder-light.svg"
                    alt="CosmicMind 16x9 Placeholder"
                  >
                </m-video>
              </m-list-item-leading>
              <m-list-item-body>
                <m-headline>
                  Headline
                </m-headline>
              </m-list-item-body>
              <m-list-item-trailing>
                <m-rounded-icon>
                  arrow_drop_down
                </m-rounded-icon>
              </m-list-item-trailing>
              <m-divider />
            </m-list-item>
          </m-list>
          <m-list>
            <m-list-item :has-leading-video="true">
              <m-list-item-leading>
                <m-video>
                  <img
                    class="is-theme-dark"
                    src="/assets/cosmicmind-16x9-placeholder-dark.svg"
                    alt="CosmicMind 16x9 Placeholder"
                  >
                  <img
                    class="is-theme-light"
                    src="/assets/cosmicmind-16x9-placeholder-light.svg"
                    alt="CosmicMind 16x9 Placeholder"
                  >
                </m-video>
              </m-list-item-leading>
              <m-list-item-body>
                <m-headline>
                  Headline
                </m-headline>
                <m-body>
                  Supporting text.
                </m-body>
              </m-list-item-body>
            </m-list-item>
            <m-list-item :has-leading-video="true">
              <m-list-item-leading>
                <m-video>
                  <img
                    class="is-theme-dark"
                    src="/assets/cosmicmind-16x9-placeholder-dark.svg"
                    alt="CosmicMind 16x9 Placeholder"
                  >
                  <img
                    class="is-theme-light"
                    src="/assets/cosmicmind-16x9-placeholder-light.svg"
                    alt="CosmicMind 16x9 Placeholder"
                  >
                </m-video>
              </m-list-item-leading>
              <m-list-item-body>
                <m-headline>
                  Focused
                </m-headline>
                <m-body>
                  Supporting text.
                </m-body>
              </m-list-item-body>
            </m-list-item>
            <m-list-item :has-leading-video="true">
              <m-list-item-leading>
                <m-video>
                  <img
                    class="is-theme-dark"
                    src="/assets/cosmicmind-16x9-placeholder-dark.svg"
                    alt="CosmicMind 16x9 Placeholder"
                  >
                  <img
                    class="is-theme-light"
                    src="/assets/cosmicmind-16x9-placeholder-light.svg"
                    alt="CosmicMind 16x9 Placeholder"
                  >
                </m-video>
              </m-list-item-leading>
              <m-list-item-body>
                <m-headline>
                  Headline
                </m-headline>
                <m-body>
                  Supporting text.
                </m-body>
              </m-list-item-body>
              <m-divider />
            </m-list-item>
          </m-list>
          <m-list>
            <m-list-item :has-leading-video="true">
              <m-list-item-leading>
                <m-video>
                  <img
                    class="is-theme-dark"
                    src="/assets/cosmicmind-16x9-placeholder-dark.svg"
                    alt="CosmicMind 16x9 Placeholder"
                  >
                  <img
                    class="is-theme-light"
                    src="/assets/cosmicmind-16x9-placeholder-light.svg"
                    alt="CosmicMind 16x9 Placeholder"
                  >
                </m-video>
              </m-list-item-leading>
              <m-list-item-body>
                <m-headline>
                  Headline
                </m-headline>
                <m-body>
                  Supporting text.
                </m-body>
              </m-list-item-body>
              <m-list-item-trailing>
                <m-rounded-icon>
                  arrow_drop_down
                </m-rounded-icon>
              </m-list-item-trailing>
            </m-list-item>
            <m-list-item :has-leading-video="true">
              <m-list-item-leading>
                <m-video>
                  <img
                    class="is-theme-dark"
                    src="/assets/cosmicmind-16x9-placeholder-dark.svg"
                    alt="CosmicMind 16x9 Placeholder"
                  >
                  <img
                    class="is-theme-light"
                    src="/assets/cosmicmind-16x9-placeholder-light.svg"
                    alt="CosmicMind 16x9 Placeholder"
                  >
                </m-video>
              </m-list-item-leading>
              <m-list-item-body>
                <m-headline>
                  Pressed
                </m-headline>
                <m-body>
                  Supporting text.
                </m-body>
              </m-list-item-body>
              <m-list-item-trailing>
                <m-rounded-icon>
                  arrow_drop_down
                </m-rounded-icon>
              </m-list-item-trailing>
            </m-list-item>
            <m-list-item :has-leading-video="true">
              <m-list-item-leading>
                <m-video>
                  <img
                    class="is-theme-dark"
                    src="/assets/cosmicmind-16x9-placeholder-dark.svg"
                    alt="CosmicMind 16x9 Placeholder"
                  >
                  <img
                    class="is-theme-light"
                    src="/assets/cosmicmind-16x9-placeholder-light.svg"
                    alt="CosmicMind 16x9 Placeholder"
                  >
                </m-video>
              </m-list-item-leading>
              <m-list-item-body>
                <m-headline>
                  Headline
                </m-headline>
                <m-body>
                  Supporting text.
                </m-body>
              </m-list-item-body>
              <m-list-item-trailing>
                <m-rounded-icon>
                  arrow_drop_down
                </m-rounded-icon>
              </m-list-item-trailing>
              <m-divider />
            </m-list-item>
          </m-list>
          <m-list :lines="MListLines.three">
            <m-list-item :has-leading-video="true">
              <m-list-item-leading>
                <m-video>
                  <img
                    class="is-theme-dark"
                    src="/assets/cosmicmind-16x9-placeholder-dark.svg"
                    alt="CosmicMind 16x9 Placeholder"
                  >
                  <img
                    class="is-theme-light"
                    src="/assets/cosmicmind-16x9-placeholder-light.svg"
                    alt="CosmicMind 16x9 Placeholder"
                  >
                </m-video>
              </m-list-item-leading>
              <m-list-item-body>
                <m-headline>
                  Headline
                </m-headline>
                <m-body>
                  Supporting text that is long enough to fill multiple lines.
                </m-body>
              </m-list-item-body>
            </m-list-item>
            <!-- <m-list-item :state="MListItemState.dragged"> -->
            <m-list-item :has-leading-video="true">
              <m-list-item-leading>
                <m-video>
                  <img
                    class="is-theme-dark"
                    src="/assets/cosmicmind-16x9-placeholder-dark.svg"
                    alt="CosmicMind 16x9 Placeholder"
                  >
                  <img
                    class="is-theme-light"
                    src="/assets/cosmicmind-16x9-placeholder-light.svg"
                    alt="CosmicMind 16x9 Placeholder"
                  >
                </m-video>
              </m-list-item-leading>
              <m-list-item-body>
                <m-headline>
                  Dragged
                </m-headline>
                <m-body>
                  Supporting text that is long enough to fill multiple lines.
                </m-body>
              </m-list-item-body>
            </m-list-item>
            <m-list-item :has-leading-video="true">
              <m-list-item-leading>
                <m-video>
                  <img
                    class="is-theme-dark"
                    src="/assets/cosmicmind-16x9-placeholder-dark.svg"
                    alt="CosmicMind 16x9 Placeholder"
                  >
                  <img
                    class="is-theme-light"
                    src="/assets/cosmicmind-16x9-placeholder-light.svg"
                    alt="CosmicMind 16x9 Placeholder"
                  >
                </m-video>
              </m-list-item-leading>
              <m-list-item-body>
                <m-headline>
                  Headline
                </m-headline>
                <m-body>
                  Supporting text that is long enough to fill multiple lines.
                </m-body>
              </m-list-item-body>
              <m-divider />
            </m-list-item>
          </m-list>
          <m-list :lines="MListLines.three">
            <m-list-item :has-leading-video="true">
              <m-list-item-leading>
                <m-video>
                  <img
                    class="is-theme-dark"
                    src="/assets/cosmicmind-16x9-placeholder-dark.svg"
                    alt="CosmicMind 16x9 Placeholder"
                  >
                  <img
                    class="is-theme-light"
                    src="/assets/cosmicmind-16x9-placeholder-light.svg"
                    alt="CosmicMind 16x9 Placeholder"
                  >
                </m-video>
              </m-list-item-leading>
              <m-list-item-body>
                <m-headline>
                  Headline
                </m-headline>
                <m-body>
                  Supporting text that is long enough to fill multiple lines.
                </m-body>
              </m-list-item-body>
              <m-list-item-trailing>
                <m-rounded-icon>
                  arrow_drop_down
                </m-rounded-icon>
              </m-list-item-trailing>
            </m-list-item>
            <m-list-item
              :state="MListItemState.disabled"
              :has-leading-video="true"
            >
              <m-list-item-leading>
                <m-video>
                  <img
                    class="is-theme-dark"
                    src="/assets/cosmicmind-16x9-placeholder-dark.svg"
                    alt="CosmicMind 16x9 Placeholder"
                  >
                  <img
                    class="is-theme-light"
                    src="/assets/cosmicmind-16x9-placeholder-light.svg"
                    alt="CosmicMind 16x9 Placeholder"
                  >
                </m-video>
              </m-list-item-leading>
              <m-list-item-body>
                <m-headline>
                  Disabled
                </m-headline>
                <m-body>
                  Supporting text that is long enough to fill multiple lines.
                </m-body>
              </m-list-item-body>
              <m-list-item-trailing>
                <m-rounded-icon>
                  arrow_drop_down
                </m-rounded-icon>
              </m-list-item-trailing>
            </m-list-item>
            <m-list-item :has-leading-video="true">
              <m-list-item-leading>
                <m-video>
                  <img
                    class="is-theme-dark"
                    src="/assets/cosmicmind-16x9-placeholder-dark.svg"
                    alt="CosmicMind 16x9 Placeholder"
                  >
                  <img
                    class="is-theme-light"
                    src="/assets/cosmicmind-16x9-placeholder-light.svg"
                    alt="CosmicMind 16x9 Placeholder"
                  >
                </m-video>
              </m-list-item-leading>
              <m-list-item-body>
                <m-headline>
                  Headline
                </m-headline>
                <m-body>
                  Supporting text that is long enough to fill multiple lines.
                </m-body>
              </m-list-item-body>
              <m-list-item-trailing>
                <m-rounded-icon>
                  arrow_drop_down
                </m-rounded-icon>
              </m-list-item-trailing>
              <m-divider />
            </m-list-item>
          </m-list>
        </m-column>
      </m-row>
    </m-section>
  </m-main>
</template>

<style lang="sass" scoped>
  @use '@/lib/sass/theme'

  .m-section
    padding: 48px

    &.banner
      > span
        padding: 12px

    a
      @include theme.preferred
        color: theme.style(primary)

    > .m-display
      padding: 24px 0

</style>