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
	Main,
	TypographySize,
	TypographyDisplay,
	TypographyHeadline,
	TypographyTitle,
	TypographyLabel,
	TypographyBody,
	ButtonState,
	FilledButton,
	OutlinedButton,
	TextButton,
	ElevatedButton,
	TonalButton,
	IconButton,
	Row,
	Column,
	FormFieldset,
	FieldBody,
	FieldControl,
	FieldLeading,
	FieldTrailing,
	FieldInput,
	FieldSupport,
	FieldDetails,
	TextFieldState,
	FilledTextField,
	RoundedIcon,
	CardState,
	ElevatedCard,
	Bar,
	BarEnd,
	FABButton,
	FABButtonVariant,
	Divider,
	List,
	ListLines,
	ListItem,
	ListItemState,
	ListItemLeading,
	ListItemBody,
	ListItemTrailing,
	VideoThumbnail,
	AvatarThumbnail,
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

const updateState = (newState: TextFieldState, oldState: TextFieldState): void => {
	logger.log('newState', newState, 'oldState', oldState)
}

</script>

<template>
  <Main>
    <section class="banner">
      <TypographyDisplay :size="TypographySize.large">
        Typography
      </TypographyDisplay>
      <TypographyBody :size="TypographySize.large">
        See the <a
          href="https://m3.material.io/styles/typography/overview"
          target="_blank"
        >Design Guidelines</a>
      </TypographyBody>
    </section>
    <section>
      <TypographyDisplay :size="TypographySize.large">
        Display
      </TypographyDisplay>
      <TypographyDisplay :size="TypographySize.large">
        Display Large - Roboto 57/64 . 0
      </TypographyDisplay>
      <TypographyDisplay :size="TypographySize.medium">
        Display Medium - Roboto 45/52 .  0
      </TypographyDisplay>
      <TypographyDisplay :size="TypographySize.small">
        Display Small - Roboto 36/44 . 0
      </TypographyDisplay>
    </section>
    <section>
      <TypographyDisplay :size="TypographySize.large">
        Headline
      </TypographyDisplay>
      <TypographyHeadline :size="TypographySize.large">
        Headline Large - Roboto 32/40 . 0
      </TypographyHeadline>
      <TypographyHeadline :size="TypographySize.medium">
        Headline Medium - Roboto 28/36 . 0
      </TypographyHeadline>
      <TypographyHeadline :size="TypographySize.small">
        Headline Small - Roboto 24/32 . 0
      </TypographyHeadline>
    </section>
    <section>
      <TypographyDisplay :size="TypographySize.large">
        Title
      </TypographyDisplay>
      <TypographyTitle :size="TypographySize.large">
        Title Large - Roboto Medium 22/28 . 0
      </TypographyTitle>
      <TypographyTitle :size="TypographySize.medium">
        Title Medium - Roboto Medium 16/24 . +0.15
      </TypographyTitle>
      <TypographyTitle :size="TypographySize.small">
        Title Small - Roboto Medium 14/20 . +0.1
      </TypographyTitle>
    </section>
    <section>
      <TypographyDisplay :size="TypographySize.large">
        Label
      </TypographyDisplay>
      <TypographyLabel :size="TypographySize.large">
        Label Large - Roboto Medium 14/20 . +0.1
      </TypographyLabel>
      <TypographyLabel :size="TypographySize.medium">
        Label Medium - Roboto Medium 12/16 . +0.5
      </TypographyLabel>
      <TypographyLabel :size="TypographySize.small">
        Label Small - Roboto Medium 11/16 . +0.5
      </TypographyLabel>
    </section>
    <section>
      <TypographyDisplay :size="TypographySize.large">
        Body
      </TypographyDisplay>
      <TypographyBody :size="TypographySize.large">
        Body Large - Roboto 16/24 . +0.15
      </TypographyBody>
      <TypographyBody :size="TypographySize.medium">
        Body Medium - Roboto 14/20 . +0.25
      </TypographyBody>
      <TypographyBody :size="TypographySize.small">
        Body Small - Roboto 12/16 . +0.4
      </TypographyBody>
    </section>

    <section class="banner">
      <TypographyDisplay :size="TypographySize.large">
        Buttons
      </TypographyDisplay>
      <TypographyBody :size="TypographySize.large">
        See the <a
          href="https://m3.material.io/components/buttons/overview"
          target="_blank"
        >Design Guidelines</a>
      </TypographyBody>
    </section>
    <section>
      <TypographyDisplay :size="TypographySize.small">
        Filled button states
      </TypographyDisplay>
      <Row>
        <Column>
          <FilledButton>
            Enabled
          </FilledButton>
        </Column>
        <Column>
          <FilledButton :state="ButtonState.hovered">
            Hovered
          </FilledButton>
        </Column>
        <Column>
          <FilledButton :state="ButtonState.focused">
            Focused
          </FilledButton>
        </Column>
        <Column>
          <FilledButton :state="ButtonState.pressed">
            Pressed
          </FilledButton>
        </Column>
        <Column>
          <FilledButton
            :state="ButtonState.disabled"
            disabled
          >
            Disabled
          </FilledButton>
        </Column>
      </Row>
    </section>
    <section>
      <TypographyDisplay :size="TypographySize.small">
        Outlined button states
      </TypographyDisplay>
      <Row>
        <Column>
          <OutlinedButton>
            Enabled
          </OutlinedButton>
        </Column>
        <Column>
          <OutlinedButton :state="ButtonState.hovered">
            Hovered
          </OutlinedButton>
        </Column>
        <Column>
          <OutlinedButton :state="ButtonState.focused">
            Focused
          </OutlinedButton>
        </Column>
        <Column>
          <OutlinedButton :state="ButtonState.pressed">
            Pressed
          </OutlinedButton>
        </Column>
        <Column>
          <OutlinedButton
            :state="ButtonState.disabled"
            disabled
          >
            Disabled
          </OutlinedButton>
        </Column>
      </Row>
    </section>
    <section>
      <TypographyDisplay :size="TypographySize.small">
        Text button states
      </TypographyDisplay>
      <Row>
        <Column>
          <TextButton>
            Enabled
          </TextButton>
        </Column>
        <Column>
          <TextButton :state="ButtonState.hovered">
            Hovered
          </TextButton>
        </Column>
        <Column>
          <TextButton :state="ButtonState.focused">
            Focused
          </TextButton>
        </Column>
        <Column>
          <TextButton :state="ButtonState.pressed">
            Pressed
          </TextButton>
        </Column>
        <Column>
          <TextButton
            :state="ButtonState.disabled"
            disabled
          >
            Disabled
          </TextButton>
        </Column>
      </Row>
    </section>
    <section>
      <TypographyDisplay :size="TypographySize.small">
        Elevated button states
      </TypographyDisplay>
      <Row>
        <Column>
          <ElevatedButton>
            Enabled
          </ElevatedButton>
        </Column>
        <Column>
          <ElevatedButton :state="ButtonState.hovered">
            Hovered
          </ElevatedButton>
        </Column>
        <Column>
          <ElevatedButton :state="ButtonState.focused">
            Focused
          </ElevatedButton>
        </Column>
        <Column>
          <ElevatedButton :state="ButtonState.pressed">
            Pressed
          </ElevatedButton>
        </Column>
        <Column>
          <ElevatedButton
            :state="ButtonState.disabled"
            disabled
          >
            Disabled
          </ElevatedButton>
        </Column>
      </Row>
    </section>
    <section>
      <TypographyDisplay :size="TypographySize.small">
        Tonal button states
      </TypographyDisplay>
      <Row>
        <Column>
          <TonalButton>
            Enabled
          </TonalButton>
        </Column>
        <Column>
          <TonalButton :state="ButtonState.hovered">
            Hovered
          </TonalButton>
        </Column>
        <Column>
          <TonalButton :state="ButtonState.focused">
            Focused
          </TonalButton>
        </Column>
        <Column>
          <TonalButton :state="ButtonState.pressed">
            Pressed
          </TonalButton>
        </Column>
        <Column>
          <TonalButton
            :state="ButtonState.disabled"
            disabled
          >
            Disabled
          </TonalButton>
        </Column>
      </Row>
    </section>
    <section>
      <TypographyDisplay :size="TypographySize.small">
        Icon button states
      </TypographyDisplay>
      <Row>
        <Column>
          <IconButton>
            <RoundedIcon>
              settings
            </RoundedIcon>
          </IconButton>
        </Column>
        <Column>
          <IconButton :state="ButtonState.hovered">
            <RoundedIcon>
              settings
            </RoundedIcon>
          </IconButton>
        </Column>
        <Column>
          <IconButton :state="ButtonState.focused">
            <RoundedIcon>
              settings
            </RoundedIcon>
          </IconButton>
        </Column>
        <Column>
          <IconButton :state="ButtonState.pressed">
            <RoundedIcon>
              settings
            </RoundedIcon>
          </IconButton>
        </Column>
        <Column>
          <IconButton
            :state="ButtonState.disabled"
            disabled
          >
            <RoundedIcon>
              settings
            </RoundedIcon>
          </IconButton>
        </Column>
      </Row>
    </section>
    <section>
      <TypographyDisplay :size="TypographySize.small">
        Icon button selected states
      </TypographyDisplay>
      <Row>
        <Column>
          <IconButton :selected="true">
            <RoundedIcon>
              settings
            </RoundedIcon>
          </IconButton>
        </Column>
        <Column>
          <IconButton
            :state="ButtonState.hovered"
            :selected="true"
          >
            <RoundedIcon>
              settings
            </RoundedIcon>
          </IconButton>
        </Column>
        <Column>
          <IconButton
            :state="ButtonState.focused"
            :selected="true"
          >
            <RoundedIcon>
              settings
            </RoundedIcon>
          </IconButton>
        </Column>
        <Column>
          <IconButton
            :state="ButtonState.pressed"
            :selected="true"
          >
            <RoundedIcon>
              settings
            </RoundedIcon>
          </IconButton>
        </Column>
        <Column>
          <IconButton
            :state="ButtonState.disabled"
            disabled
          >
            <RoundedIcon>
              settings
            </RoundedIcon>
          </IconButton>
        </Column>
      </Row>
    </section>
    <section>
      <TypographyDisplay :size="TypographySize.small">
        FAB button states
      </TypographyDisplay>
      <Row>
        <Column>
          <FABButton>
            <RoundedIcon>
              edit
            </RoundedIcon>
          </FABButton>
        </Column>
        <Column>
          <FABButton :state="ButtonState.hovered">
            <RoundedIcon>
              edit
            </RoundedIcon>
          </FABButton>
        </Column>
        <Column>
          <FABButton :state="ButtonState.focused">
            <RoundedIcon>
              edit
            </RoundedIcon>
          </FABButton>
        </Column>
        <Column>
          <FABButton :state="ButtonState.pressed">
            <RoundedIcon>
              edit
            </RoundedIcon>
          </FABButton>
        </Column>
        <Column>
          <FABButton
            :state="ButtonState.disabled"
            disabled
          >
            <RoundedIcon>
              edit
            </RoundedIcon>
          </FABButton>
        </Column>
      </Row>
    </section>
    <section>
      <TypographyDisplay :size="TypographySize.small">
        FAB button lowered states
      </TypographyDisplay>
      <Row>
        <Column>
          <FABButton :lowered="true">
            <RoundedIcon>
              edit
            </RoundedIcon>
          </FABButton>
        </Column>
        <Column>
          <FABButton
            :lowered="true"
            :state="ButtonState.hovered"
          >
            <RoundedIcon>
              edit
            </RoundedIcon>
          </FABButton>
        </Column>
        <Column>
          <FABButton
            :lowered="true"
            :state="ButtonState.focused"
          >
            <RoundedIcon>
              edit
            </RoundedIcon>
          </FABButton>
        </Column>
        <Column>
          <FABButton
            :lowered="true"
            :state="ButtonState.pressed"
          >
            <RoundedIcon>
              edit
            </RoundedIcon>
          </FABButton>
        </Column>
        <Column>
          <FABButton
            :lowered="true"
            :state="ButtonState.disabled"
            disabled
          >
            <RoundedIcon>
              edit
            </RoundedIcon>
          </FABButton>
        </Column>
      </Row>
    </section>
    <section>
      <TypographyDisplay :size="TypographySize.small">
        FAB button surface variant
      </TypographyDisplay>
      <Row>
        <Column>
          <FABButton :variant="FABButtonVariant.surface">
            <RoundedIcon>
              edit
            </RoundedIcon>
          </FABButton>
        </Column>
        <Column>
          <FABButton
            :variant="FABButtonVariant.surface"
            :state="ButtonState.hovered"
          >
            <RoundedIcon>
              edit
            </RoundedIcon>
          </FABButton>
        </Column>
        <Column>
          <FABButton
            :variant="FABButtonVariant.surface"
            :state="ButtonState.focused"
          >
            <RoundedIcon>
              edit
            </RoundedIcon>
          </FABButton>
        </Column>
        <Column>
          <FABButton
            :variant="FABButtonVariant.surface"
            :state="ButtonState.pressed"
          >
            <RoundedIcon>
              edit
            </RoundedIcon>
          </FABButton>
        </Column>
        <Column>
          <FABButton
            :variant="FABButtonVariant.surface"
            :state="ButtonState.disabled"
            disabled
          >
            <RoundedIcon>
              edit
            </RoundedIcon>
          </FABButton>
        </Column>
      </Row>
    </section>
    <section>
      <TypographyDisplay :size="TypographySize.small">
        FAB button secondary variant
      </TypographyDisplay>
      <Row>
        <Column>
          <FABButton :variant="FABButtonVariant.secondary">
            <RoundedIcon>
              edit
            </RoundedIcon>
          </FABButton>
        </Column>
        <Column>
          <FABButton
            :variant="FABButtonVariant.secondary"
            :state="ButtonState.hovered"
          >
            <RoundedIcon>
              edit
            </RoundedIcon>
          </FABButton>
        </Column>
        <Column>
          <FABButton
            :variant="FABButtonVariant.secondary"
            :state="ButtonState.focused"
          >
            <RoundedIcon>
              edit
            </RoundedIcon>
          </FABButton>
        </Column>
        <Column>
          <FABButton
            :variant="FABButtonVariant.secondary"
            :state="ButtonState.pressed"
          >
            <RoundedIcon>
              edit
            </RoundedIcon>
          </FABButton>
        </Column>
        <Column>
          <FABButton
            :variant="FABButtonVariant.secondary"
            :state="ButtonState.disabled"
            disabled
          >
            <RoundedIcon>
              edit
            </RoundedIcon>
          </FABButton>
        </Column>
      </Row>
    </section>
    <section>
      <TypographyDisplay :size="TypographySize.small">
        FAB button tertiary variant
      </TypographyDisplay>
      <Row>
        <Column>
          <FABButton :variant="FABButtonVariant.tertiary">
            <RoundedIcon>
              edit
            </RoundedIcon>
          </FABButton>
        </Column>
        <Column>
          <FABButton
            :variant="FABButtonVariant.tertiary"
            :state="ButtonState.hovered"
          >
            <RoundedIcon>
              edit
            </RoundedIcon>
          </FABButton>
        </Column>
        <Column>
          <FABButton
            :variant="FABButtonVariant.tertiary"
            :state="ButtonState.focused"
          >
            <RoundedIcon>
              edit
            </RoundedIcon>
          </FABButton>
        </Column>
        <Column>
          <FABButton
            :variant="FABButtonVariant.tertiary"
            :state="ButtonState.pressed"
          >
            <RoundedIcon>
              edit
            </RoundedIcon>
          </FABButton>
        </Column>
        <Column>
          <FABButton
            :variant="FABButtonVariant.tertiary"
            :state="ButtonState.disabled"
            disabled
          >
            <RoundedIcon>
              edit
            </RoundedIcon>
          </FABButton>
        </Column>
      </Row>
    </section>

    <section class="banner">
      <TypographyDisplay :size="TypographySize.large">
        Text fields
      </TypographyDisplay>
      <TypographyBody :size="TypographySize.large">
        See the <a
          href="https://m3.material.io/text-fields/overview"
          target="_blank"
        >Design Guidelines</a>
      </TypographyBody>
    </section>
    <section>
      <TypographyDisplay :size="TypographySize.small">
        Filled text field states
      </TypographyDisplay>
      <Row>
        <Column>
          <form @submit="onSubmit">
            <FormFieldset>
              <FilledTextField
                ref="emailRef"
                :has-error="'undefined' !== typeof errors.email"
                @update:state="updateState"
              >
                <FieldBody>
                  <FieldLeading>
                    <RoundedIcon>
                      mail
                    </RoundedIcon>
                  </FieldLeading>
                  <FieldControl>
                    <TypographyLabel>
                      Email
                    </TypographyLabel>
                    <FieldInput :name="'email'" />
                  </FieldControl>
                  <FieldTrailing v-if="errors.email">
                    <RoundedIcon>
                      error
                    </RoundedIcon>
                  </FieldTrailing>
                </FieldBody>
                <FieldSupport v-if="errors.email">
                  <FieldDetails>
                    {{ errors.email }}
                  </FieldDetails>
                </FieldSupport>
              </FilledTextField>
            </FormFieldset>
          </form>
        </Column>
        <Column>
          <form @submit="onSubmit">
            <FormFieldset>
              <FilledTextField :state="TextFieldState.hovered">
                <FieldBody>
                  <FieldLeading>
                    <RoundedIcon>
                      mail
                    </RoundedIcon>
                  </FieldLeading>
                  <FieldControl>
                    <TypographyLabel>
                      Email
                    </TypographyLabel>
                    <FieldInput :name="'name'" />
                  </FieldControl>
                  <FieldTrailing v-if="errors.email">
                    <RoundedIcon>
                      error
                    </RoundedIcon>
                  </FieldTrailing>
                </FieldBody>
                <FieldSupport v-if="errors.email">
                  <FieldDetails>
                    {{ errors.email }}
                  </FieldDetails>
                </FieldSupport>
              </FilledTextField>
            </FormFieldset>
          </form>
        </Column>
        <Column>
          <form @submit="onSubmit">
            <FormFieldset>
              <FilledTextField :state="TextFieldState.focused">
                <FieldBody>
                  <FieldLeading>
                    <RoundedIcon>
                      mail
                    </RoundedIcon>
                  </FieldLeading>
                  <FieldControl>
                    <TypographyLabel>
                      Email
                    </TypographyLabel>
                    <FieldInput
                      name="readonly"
                      value="Readonly"
                      :readonly="true"
                    />
                  </FieldControl>
                  <FieldTrailing v-if="errors.email">
                    <RoundedIcon>
                      error
                    </RoundedIcon>
                  </FieldTrailing>
                </FieldBody>
                <FieldSupport v-if="errors.email">
                  <FieldDetails>
                    {{ errors.email }}
                  </FieldDetails>
                </FieldSupport>
              </FilledTextField>
            </FormFieldset>
          </form>
        </Column>
        <Column>
          <form @submit="onSubmit">
            <FormFieldset>
              <FilledTextField :state="TextFieldState.disabled">
                <FieldBody>
                  <FieldLeading>
                    <RoundedIcon>
                      mail
                    </RoundedIcon>
                  </FieldLeading>
                  <FieldControl>
                    <TypographyLabel>
                      Email
                    </TypographyLabel>
                    <FieldInput
                      name="name"
                      :disabled="true"
                    />
                  </FieldControl>
                  <FieldTrailing v-if="errors.email">
                    <RoundedIcon>
                      error
                    </RoundedIcon>
                  </FieldTrailing>
                </FieldBody>
                <FieldSupport v-if="errors.email">
                  <FieldDetails>
                    {{ errors.email }}
                  </FieldDetails>
                </FieldSupport>
              </FilledTextField>
            </FormFieldset>
          </form>
        </Column>
      </Row>
      <TypographyDisplay :size="TypographySize.small">
        Filled text field error states
      </TypographyDisplay>
      <Row>
        <Column>
          <form @submit="onSubmit">
            <FormFieldset>
              <FilledTextField :has-error="true">
                <FieldBody>
                  <FieldLeading>
                    <RoundedIcon>
                      mail
                    </RoundedIcon>
                  </FieldLeading>
                  <FieldControl>
                    <TypographyLabel>
                      Email
                    </TypographyLabel>
                    <FieldInput :name="'name'" />
                  </FieldControl>
                  <FieldTrailing v-if="errors.email">
                    <RoundedIcon>
                      error
                    </RoundedIcon>
                  </FieldTrailing>
                </FieldBody>
                <FieldSupport v-if="errors.email">
                  <FieldDetails>
                    {{ errors.email }}
                  </FieldDetails>
                </FieldSupport>
              </FilledTextField>
            </FormFieldset>
          </form>
        </Column>
        <Column>
          <form @submit="onSubmit">
            <FormFieldset>
              <FilledTextField
                :state="TextFieldState.hovered"
                :has-error="true"
              >
                <FieldBody>
                  <FieldLeading>
                    <RoundedIcon>
                      mail
                    </RoundedIcon>
                  </FieldLeading>
                  <FieldControl>
                    <TypographyLabel>
                      Email
                    </TypographyLabel>
                    <FieldInput :name="'name'" />
                  </FieldControl>
                  <FieldTrailing v-if="errors.email">
                    <RoundedIcon>
                      error
                    </RoundedIcon>
                  </FieldTrailing>
                </FieldBody>
                <FieldSupport v-if="errors.email">
                  <FieldDetails>
                    {{ errors.email }}
                  </FieldDetails>
                </FieldSupport>
              </FilledTextField>
            </FormFieldset>
          </form>
        </Column>
        <Column>
          <form @submit="onSubmit">
            <FormFieldset>
              <FilledTextField
                :state="TextFieldState.focused"
                :has-error="true"
              >
                <FieldBody>
                  <FieldLeading>
                    <RoundedIcon>
                      mail
                    </RoundedIcon>
                  </FieldLeading>
                  <FieldControl>
                    <TypographyLabel>
                      Email
                    </TypographyLabel>
                    <FieldInput :name="'name'" />
                  </FieldControl>
                  <FieldTrailing v-if="errors.email">
                    <RoundedIcon>
                      error
                    </RoundedIcon>
                  </FieldTrailing>
                </FieldBody>
                <FieldSupport v-if="errors.email">
                  <FieldDetails>
                    {{ errors.email }}
                  </FieldDetails>
                </FieldSupport>
              </FilledTextField>
            </FormFieldset>
          </form>
        </Column>
        <Column>
          <form @submit="onSubmit">
            <FormFieldset>
              <FilledTextField :state="TextFieldState.disabled">
                <FieldBody>
                  <FieldLeading>
                    <RoundedIcon>
                      mail
                    </RoundedIcon>
                  </FieldLeading>
                  <FieldControl>
                    <TypographyLabel>
                      Email
                    </TypographyLabel>
                    <FieldInput
                      name="name"
                      :disabled="true"
                    />
                  </FieldControl>
                  <FieldTrailing v-if="errors.email">
                    <RoundedIcon>
                      error
                    </RoundedIcon>
                  </FieldTrailing>
                </FieldBody>
                <FieldSupport v-if="errors.email">
                  <FieldDetails>
                    {{ errors.email }}
                  </FieldDetails>
                </FieldSupport>
              </FilledTextField>
            </FormFieldset>
          </form>
        </Column>
      </Row>
    </section>

    <section class="banner">
      <TypographyDisplay :size="TypographySize.large">
        Cards
      </TypographyDisplay>
      <TypographyBody :size="TypographySize.large">
        See the <a
          href="https://m3.material.io/components/cards/overview"
          target="_blank"
        >Design Guidelines</a>
      </TypographyBody>
    </section>
    <section>
      <TypographyDisplay :size="TypographySize.small">
        Elevated card states
      </TypographyDisplay>
      <Row>
        <Column>
          <ElevatedCard>
            <TypographyLabel>
              Enabled
            </TypographyLabel>
            <TypographyTitle :size="TypographySize.large">
              Title
            </TypographyTitle>
            <TypographyTitle :size="TypographySize.small">
              Subhead
            </TypographyTitle>
            <TypographyBody>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
            </TypographyBody>
            <Bar>
              <BarEnd>
                <TonalButton>
                  Get Started
                </TonalButton>
              </BarEnd>
            </Bar>
          </ElevatedCard>
        </Column>
        <Column>
          <ElevatedCard :state="CardState.hovered">
            <TypographyLabel>
              Hovered
            </TypographyLabel>
            <TypographyTitle :size="TypographySize.large">
              Title
            </TypographyTitle>
            <TypographyTitle :size="TypographySize.small">
              Subhead
            </TypographyTitle>
            <TypographyBody>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
            </TypographyBody>
            <Bar>
              <BarEnd>
                <TonalButton>
                  Get Started
                </TonalButton>
              </BarEnd>
            </Bar>
          </ElevatedCard>
        </Column>
        <Column>
          <ElevatedCard :state="CardState.focused">
            <TypographyLabel>
              Focused
            </TypographyLabel>
            <TypographyTitle :size="TypographySize.large">
              Title
            </TypographyTitle>
            <TypographyTitle :size="TypographySize.small">
              Subhead
            </TypographyTitle>
            <TypographyBody>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
            </TypographyBody>
            <Bar>
              <BarEnd>
                <TonalButton>
                  Get Started
                </TonalButton>
              </BarEnd>
            </Bar>
          </ElevatedCard>
        </Column>
        <Column>
          <ElevatedCard :state="CardState.pressed">
            <TypographyLabel>
              Pressed
            </TypographyLabel>
            <TypographyTitle :size="TypographySize.large">
              Title
            </TypographyTitle>
            <TypographyTitle :size="TypographySize.small">
              Subhead
            </TypographyTitle>
            <TypographyBody>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
            </TypographyBody>
            <Bar>
              <BarEnd>
                <TonalButton>
                  Get Started
                </TonalButton>
              </BarEnd>
            </Bar>
          </ElevatedCard>
        </Column>
        <Column>
          <ElevatedCard :state="CardState.dragged">
            <TypographyLabel>
              Dragged
            </TypographyLabel>
            <TypographyTitle :size="TypographySize.large">
              Title
            </TypographyTitle>
            <TypographyTitle :size="TypographySize.small">
              Subhead
            </TypographyTitle>
            <TypographyBody>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
            </TypographyBody>
            <Bar>
              <BarEnd>
                <TonalButton>
                  Get Started
                </TonalButton>
              </BarEnd>
            </Bar>
          </ElevatedCard>
        </Column>
        <Column>
          <ElevatedCard :state="CardState.disabled">
            <TypographyLabel>
              Disabled
            </TypographyLabel>
            <TypographyTitle :size="TypographySize.large">
              Title
            </TypographyTitle>
            <TypographyTitle :size="TypographySize.small">
              Subhead
            </TypographyTitle>
            <TypographyBody>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
            </TypographyBody>
            <Bar>
              <BarEnd>
                <TonalButton :state="CardState.disabled">
                  Get Started
                </TonalButton>
              </BarEnd>
            </Bar>
          </ElevatedCard>
        </Column>
      </Row>
    </section>

    <section class="banner">
      <TypographyDisplay :size="TypographySize.large">
        Lists
      </TypographyDisplay>
      <TypographyBody :size="TypographySize.large">
        See the <a
          href="https://m3.material.io/components/lists/overview"
          target="_blank"
        >Design Guidelines</a>
      </TypographyBody>
    </section>
    <section>
      <Row>
        <Column>
          <List>
            <ListItem>
              <ListItemBody>
                <TypographyHeadline>
                  Headline
                </TypographyHeadline>
              </ListItemBody>
            </ListItem>
            <ListItem>
              <ListItemBody>
                <TypographyHeadline>
                  Headline
                </TypographyHeadline>
              </ListItemBody>
            </ListItem>
            <ListItem>
              <ListItemBody>
                <TypographyHeadline>
                  Headline
                </TypographyHeadline>
              </ListItemBody>
              <Divider />
            </ListItem>
          </List>
          <List>
            <ListItem>
              <ListItemBody>
                <TypographyHeadline>
                  Headline
                </TypographyHeadline>
              </ListItemBody>
              <ListItemTrailing>
                <TypographyLabel>
                  100+
                </TypographyLabel>
              </ListItemTrailing>
            </ListItem>
            <ListItem>
              <ListItemBody>
                <TypographyHeadline>
                  Hovered
                </TypographyHeadline>
              </ListItemBody>
              <ListItemTrailing>
                <TypographyLabel>
                  100+
                </TypographyLabel>
              </ListItemTrailing>
            </ListItem>
            <ListItem>
              <ListItemBody>
                <TypographyHeadline>
                  Headline
                </TypographyHeadline>
              </ListItemBody>
              <ListItemTrailing>
                <TypographyLabel>
                  100+
                </TypographyLabel>
              </ListItemTrailing>
              <Divider />
            </ListItem>
          </List>
          <List :lines="ListLines.two">
            <ListItem>
              <ListItemBody>
                <TypographyHeadline>
                  Headline
                </TypographyHeadline>
                <TypographyBody>
                  Supporting text.
                </TypographyBody>
              </ListItemBody>
            </ListItem>
            <ListItem>
              <ListItemBody>
                <TypographyHeadline>
                  Focused
                </TypographyHeadline>
                <TypographyBody>
                  Supporting text.
                </TypographyBody>
              </ListItemBody>
            </ListItem>
            <ListItem>
              <ListItemBody>
                <TypographyHeadline>
                  Headline
                </TypographyHeadline>
                <TypographyBody>
                  Supporting text.
                </TypographyBody>
              </ListItemBody>
              <Divider />
            </ListItem>
          </List>
          <List :lines="ListLines.two">
            <ListItem>
              <ListItemBody>
                <TypographyHeadline>
                  Headline
                </TypographyHeadline>
                <TypographyBody>
                  Supporting text.
                </TypographyBody>
              </ListItemBody>
              <ListItemTrailing>
                <TypographyLabel>
                  100+
                </TypographyLabel>
              </ListItemTrailing>
            </ListItem>
            <ListItem>
              <ListItemBody>
                <TypographyHeadline>
                  Pressed
                </TypographyHeadline>
                <TypographyBody>
                  Supporting text.
                </TypographyBody>
              </ListItemBody>
              <ListItemTrailing>
                <TypographyLabel>
                  100+
                </TypographyLabel>
              </ListItemTrailing>
            </ListItem>
            <ListItem>
              <ListItemBody>
                <TypographyHeadline>
                  Headline
                </TypographyHeadline>
                <TypographyBody>
                  Supporting text.
                </TypographyBody>
              </ListItemBody>
              <ListItemTrailing>
                <TypographyLabel>
                  100+
                </TypographyLabel>
              </ListItemTrailing>
              <Divider />
            </ListItem>
          </List>
          <List :lines="ListLines.three">
            <ListItem>
              <ListItemBody>
                <TypographyHeadline>
                  Headline
                </TypographyHeadline>
                <TypographyBody>
                  Supporting text that is long enough to fill multiple lines.
                </TypographyBody>
              </ListItemBody>
            </ListItem>
            <!-- <ListItem :state="ListItemState.dragged"> -->
            <ListItem>
              <ListItemBody>
                <TypographyHeadline>
                  Dragged
                </TypographyHeadline>
                <TypographyBody>
                  Supporting text that is long enough to fill multiple lines.
                </TypographyBody>
              </ListItemBody>
            </ListItem>
            <ListItem>
              <ListItemBody>
                <TypographyHeadline>
                  Headline
                </TypographyHeadline>
                <TypographyBody>
                  Supporting text that is long enough to fill multiple lines.
                </TypographyBody>
              </ListItemBody>
              <Divider />
            </ListItem>
          </List>
          <List :lines="ListLines.three">
            <ListItem>
              <ListItemBody>
                <TypographyHeadline>
                  Headline
                </TypographyHeadline>
                <TypographyBody>
                  Supporting text that is long enough to fill multiple lines.
                </TypographyBody>
              </ListItemBody>
              <ListItemTrailing>
                <TypographyLabel>
                  100+
                </TypographyLabel>
              </ListItemTrailing>
            </ListItem>
            <ListItem :state="ListItemState.disabled">
              <ListItemBody>
                <TypographyHeadline>
                  Disabled
                </TypographyHeadline>
                <TypographyBody>
                  Supporting text that is long enough to fill multiple lines.
                </TypographyBody>
              </ListItemBody>
              <ListItemTrailing>
                <TypographyLabel>
                  100+
                </TypographyLabel>
              </ListItemTrailing>
            </ListItem>
            <ListItem>
              <ListItemBody>
                <TypographyHeadline>
                  Headline
                </TypographyHeadline>
                <TypographyBody>
                  Supporting text that is long enough to fill multiple lines.
                </TypographyBody>
              </ListItemBody>
              <ListItemTrailing>
                <TypographyLabel>
                  100+
                </TypographyLabel>
              </ListItemTrailing>
              <Divider />
            </ListItem>
          </List>
        </Column>
        <Column>
          <List>
            <ListItem>
              <ListItemLeading>
                <RoundedIcon>
                  mail
                </RoundedIcon>
              </ListItemLeading>
              <ListItemBody>
                <TypographyHeadline>
                  Headline
                </TypographyHeadline>
              </ListItemBody>
            </ListItem>
            <ListItem>
              <ListItemLeading>
                <RoundedIcon>
                  mail
                </RoundedIcon>
              </ListItemLeading>
              <ListItemBody>
                <TypographyHeadline>
                  Headline
                </TypographyHeadline>
              </ListItemBody>
            </ListItem>
            <ListItem>
              <ListItemLeading>
                <RoundedIcon>
                  mail
                </RoundedIcon>
              </ListItemLeading>
              <ListItemBody>
                <TypographyHeadline>
                  Headline
                </TypographyHeadline>
              </ListItemBody>
              <Divider />
            </ListItem>
          </List>
          <List>
            <ListItem>
              <ListItemLeading>
                <RoundedIcon>
                  mail
                </RoundedIcon>
              </ListItemLeading>
              <ListItemBody>
                <TypographyHeadline>
                  Headline
                </TypographyHeadline>
              </ListItemBody>
              <ListItemTrailing>
                <RoundedIcon>
                  arrow_drop_down
                </RoundedIcon>
              </ListItemTrailing>
            </ListItem>
            <ListItem>
              <ListItemLeading>
                <RoundedIcon>
                  mail
                </RoundedIcon>
              </ListItemLeading>
              <ListItemBody>
                <TypographyHeadline>
                  Hovered
                </TypographyHeadline>
              </ListItemBody>
              <ListItemTrailing>
                <RoundedIcon>
                  arrow_drop_down
                </RoundedIcon>
              </ListItemTrailing>
            </ListItem>
            <ListItem>
              <ListItemLeading>
                <RoundedIcon>
                  mail
                </RoundedIcon>
              </ListItemLeading>
              <ListItemBody>
                <TypographyHeadline>
                  Headline
                </TypographyHeadline>
              </ListItemBody>
              <ListItemTrailing>
                <RoundedIcon>
                  arrow_drop_down
                </RoundedIcon>
              </ListItemTrailing>
              <Divider />
            </ListItem>
          </List>
          <List
            :lines="ListLines.two"
          >
            <ListItem>
              <ListItemLeading>
                <RoundedIcon>
                  mail
                </RoundedIcon>
              </ListItemLeading>
              <ListItemBody>
                <TypographyHeadline>
                  Headline
                </TypographyHeadline>
                <TypographyBody>
                  Supporting text.
                </TypographyBody>
              </ListItemBody>
            </ListItem>
            <ListItem>
              <ListItemLeading>
                <RoundedIcon>
                  mail
                </RoundedIcon>
              </ListItemLeading>
              <ListItemBody>
                <TypographyHeadline>
                  Focused
                </TypographyHeadline>
                <TypographyBody>
                  Supporting text.
                </TypographyBody>
              </ListItemBody>
            </ListItem>
            <ListItem>
              <ListItemLeading>
                <RoundedIcon>
                  mail
                </RoundedIcon>
              </ListItemLeading>
              <ListItemBody>
                <TypographyHeadline>
                  Headline
                </TypographyHeadline>
                <TypographyBody>
                  Supporting text.
                </TypographyBody>
              </ListItemBody>
              <Divider />
            </ListItem>
          </List>
          <List :lines="ListLines.two">
            <ListItem>
              <ListItemLeading>
                <RoundedIcon>
                  mail
                </RoundedIcon>
              </ListItemLeading>
              <ListItemBody>
                <TypographyHeadline>
                  Headline
                </TypographyHeadline>
                <TypographyBody>
                  Supporting text.
                </TypographyBody>
              </ListItemBody>
              <ListItemTrailing>
                <RoundedIcon>
                  arrow_drop_down
                </RoundedIcon>
              </ListItemTrailing>
            </ListItem>
            <ListItem>
              <ListItemLeading>
                <RoundedIcon>
                  mail
                </RoundedIcon>
              </ListItemLeading>
              <ListItemBody>
                <TypographyHeadline>
                  Pressed
                </TypographyHeadline>
                <TypographyBody>
                  Supporting text.
                </TypographyBody>
              </ListItemBody>
              <ListItemTrailing>
                <RoundedIcon>
                  arrow_drop_down
                </RoundedIcon>
              </ListItemTrailing>
            </ListItem>
            <ListItem>
              <ListItemLeading>
                <RoundedIcon>
                  mail
                </RoundedIcon>
              </ListItemLeading>
              <ListItemBody>
                <TypographyHeadline>
                  Headline
                </TypographyHeadline>
                <TypographyBody>
                  Supporting text.
                </TypographyBody>
              </ListItemBody>
              <ListItemTrailing>
                <RoundedIcon>
                  arrow_drop_down
                </RoundedIcon>
              </ListItemTrailing>
              <Divider />
            </ListItem>
          </List>
          <List
            :lines="ListLines.three"
          >
            <ListItem>
              <ListItemLeading>
                <RoundedIcon>
                  mail
                </RoundedIcon>
              </ListItemLeading>
              <ListItemBody>
                <TypographyHeadline>
                  Headline
                </TypographyHeadline>
                <TypographyBody>
                  Supporting text that is long enough to fill multiple lines.
                </TypographyBody>
              </ListItemBody>
            </ListItem>
            <!-- <ListItem :state="ListItemState.dragged"> -->
            <ListItem>
              <ListItemLeading>
                <RoundedIcon>
                  mail
                </RoundedIcon>
              </ListItemLeading>
              <ListItemBody>
                <TypographyHeadline>
                  Dragged
                </TypographyHeadline>
                <TypographyBody>
                  Supporting text that is long enough to fill multiple lines.
                </TypographyBody>
              </ListItemBody>
            </ListItem>
            <ListItem>
              <ListItemLeading>
                <RoundedIcon>
                  mail
                </RoundedIcon>
              </ListItemLeading>
              <ListItemBody>
                <TypographyHeadline>
                  Headline
                </TypographyHeadline>
                <TypographyBody>
                  Supporting text that is long enough to fill multiple lines.
                </TypographyBody>
              </ListItemBody>
              <Divider />
            </ListItem>
          </List>
          <List :lines="ListLines.three">
            <ListItem>
              <ListItemLeading>
                <RoundedIcon>
                  mail
                </RoundedIcon>
              </ListItemLeading>
              <ListItemBody>
                <TypographyHeadline>
                  Headline
                </TypographyHeadline>
                <TypographyBody>
                  Supporting text that is long enough to fill multiple lines.
                </TypographyBody>
              </ListItemBody>
              <ListItemTrailing>
                <RoundedIcon>
                  arrow_drop_down
                </RoundedIcon>
              </ListItemTrailing>
            </ListItem>
            <ListItem :state="ListItemState.disabled">
              <ListItemLeading>
                <RoundedIcon>
                  mail
                </RoundedIcon>
              </ListItemLeading>
              <ListItemBody>
                <TypographyHeadline>
                  Disabled
                </TypographyHeadline>
                <TypographyBody>
                  Supporting text that is long enough to fill multiple lines.
                </TypographyBody>
              </ListItemBody>
              <ListItemTrailing>
                <RoundedIcon>
                  arrow_drop_down
                </RoundedIcon>
              </ListItemTrailing>
            </ListItem>
            <ListItem>
              <ListItemLeading>
                <RoundedIcon>
                  mail
                </RoundedIcon>
              </ListItemLeading>
              <ListItemBody>
                <TypographyHeadline>
                  Headline
                </TypographyHeadline>
                <TypographyBody>
                  Supporting text that is long enough to fill multiple lines.
                </TypographyBody>
              </ListItemBody>
              <ListItemTrailing>
                <RoundedIcon>
                  arrow_drop_down
                </RoundedIcon>
              </ListItemTrailing>
              <Divider />
            </ListItem>
          </List>
        </Column>
        <Column>
          <List>
            <ListItem>
              <ListItemLeading>
                <AvatarThumbnail>
                  <TypographyLabel>
                    A
                  </TypographyLabel>
                </AvatarThumbnail>
              </ListItemLeading>
              <ListItemBody>
                <TypographyHeadline>
                  Headline
                </TypographyHeadline>
              </ListItemBody>
            </ListItem>
            <ListItem>
              <ListItemLeading>
                <AvatarThumbnail>
                  <TypographyLabel>
                    A
                  </TypographyLabel>
                </AvatarThumbnail>
              </ListItemLeading>
              <ListItemBody>
                <TypographyHeadline>
                  Headline
                </TypographyHeadline>
              </ListItemBody>
            </ListItem>
            <ListItem>
              <ListItemLeading>
                <AvatarThumbnail>
                  <TypographyLabel>
                    A
                  </TypographyLabel>
                </AvatarThumbnail>
              </ListItemLeading>
              <ListItemBody>
                <TypographyHeadline>
                  Headline
                </TypographyHeadline>
              </ListItemBody>
              <Divider />
            </ListItem>
          </List>
          <List>
            <ListItem>
              <ListItemLeading>
                <AvatarThumbnail>
                  <TypographyLabel>
                    A
                  </TypographyLabel>
                </AvatarThumbnail>
              </ListItemLeading>
              <ListItemBody>
                <TypographyHeadline>
                  Headline
                </TypographyHeadline>
              </ListItemBody>
              <ListItemTrailing>
                <RoundedIcon>
                  arrow_drop_down
                </RoundedIcon>
              </ListItemTrailing>
            </ListItem>
            <ListItem>
              <ListItemLeading>
                <AvatarThumbnail>
                  <TypographyLabel>
                    A
                  </TypographyLabel>
                </AvatarThumbnail>
              </ListItemLeading>
              <ListItemBody>
                <TypographyHeadline>
                  Hovered
                </TypographyHeadline>
              </ListItemBody>
              <ListItemTrailing>
                <RoundedIcon>
                  arrow_drop_down
                </RoundedIcon>
              </ListItemTrailing>
            </ListItem>
            <ListItem>
              <ListItemLeading>
                <AvatarThumbnail>
                  <TypographyLabel>
                    A
                  </TypographyLabel>
                </AvatarThumbnail>
              </ListItemLeading>
              <ListItemBody>
                <TypographyHeadline>
                  Headline
                </TypographyHeadline>
              </ListItemBody>
              <ListItemTrailing>
                <RoundedIcon>
                  arrow_drop_down
                </RoundedIcon>
              </ListItemTrailing>
              <Divider />
            </ListItem>
          </List>
          <List :lines="ListLines.two">
            <ListItem>
              <ListItemLeading>
                <AvatarThumbnail>
                  <TypographyLabel>
                    A
                  </TypographyLabel>
                </AvatarThumbnail>
              </ListItemLeading>
              <ListItemBody>
                <TypographyHeadline>
                  Headline
                </TypographyHeadline>
                <TypographyBody>
                  Supporting text.
                </TypographyBody>
              </ListItemBody>
            </ListItem>
            <ListItem>
              <ListItemLeading>
                <AvatarThumbnail>
                  <TypographyLabel>
                    A
                  </TypographyLabel>
                </AvatarThumbnail>
              </ListItemLeading>
              <ListItemBody>
                <TypographyHeadline>
                  Focused
                </TypographyHeadline>
                <TypographyBody>
                  Supporting text.
                </TypographyBody>
              </ListItemBody>
            </ListItem>
            <ListItem>
              <ListItemLeading>
                <AvatarThumbnail>
                  <TypographyLabel>
                    A
                  </TypographyLabel>
                </AvatarThumbnail>
              </ListItemLeading>
              <ListItemBody>
                <TypographyHeadline>
                  Headline
                </TypographyHeadline>
                <TypographyBody>
                  Supporting text.
                </TypographyBody>
              </ListItemBody>
              <Divider />
            </ListItem>
          </List>
          <List :lines="ListLines.two">
            <ListItem>
              <ListItemLeading>
                <AvatarThumbnail>
                  <TypographyLabel>
                    A
                  </TypographyLabel>
                </AvatarThumbnail>
              </ListItemLeading>
              <ListItemBody>
                <TypographyHeadline>
                  Headline
                </TypographyHeadline>
                <TypographyBody>
                  Supporting text.
                </TypographyBody>
              </ListItemBody>
              <ListItemTrailing>
                <RoundedIcon>
                  arrow_drop_down
                </RoundedIcon>
              </ListItemTrailing>
            </ListItem>
            <ListItem>
              <ListItemLeading>
                <AvatarThumbnail>
                  <TypographyLabel>
                    A
                  </TypographyLabel>
                </AvatarThumbnail>
              </ListItemLeading>
              <ListItemBody>
                <TypographyHeadline>
                  Pressed
                </TypographyHeadline>
                <TypographyBody>
                  Supporting text.
                </TypographyBody>
              </ListItemBody>
              <ListItemTrailing>
                <RoundedIcon>
                  arrow_drop_down
                </RoundedIcon>
              </ListItemTrailing>
            </ListItem>
            <ListItem>
              <ListItemLeading>
                <AvatarThumbnail>
                  <TypographyLabel>
                    A
                  </TypographyLabel>
                </AvatarThumbnail>
              </ListItemLeading>
              <ListItemBody>
                <TypographyHeadline>
                  Headline
                </TypographyHeadline>
                <TypographyBody>
                  Supporting text.
                </TypographyBody>
              </ListItemBody>
              <ListItemTrailing>
                <RoundedIcon>
                  arrow_drop_down
                </RoundedIcon>
              </ListItemTrailing>
              <Divider />
            </ListItem>
          </List>
          <List :lines="ListLines.three">
            <ListItem>
              <ListItemLeading>
                <AvatarThumbnail>
                  <TypographyLabel>
                    A
                  </TypographyLabel>
                </AvatarThumbnail>
              </ListItemLeading>
              <ListItemBody>
                <TypographyHeadline>
                  Headline
                </TypographyHeadline>
                <TypographyBody>
                  Supporting text that is long enough to fill multiple lines.
                </TypographyBody>
              </ListItemBody>
            </ListItem>
            <!-- <ListItem :state="ListItemState.dragged"> -->
            <ListItem>
              <ListItemLeading>
                <AvatarThumbnail>
                  <TypographyLabel>
                    A
                  </TypographyLabel>
                </AvatarThumbnail>
              </ListItemLeading>
              <ListItemBody>
                <TypographyHeadline>
                  Dragged
                </TypographyHeadline>
                <TypographyBody>
                  Supporting text that is long enough to fill multiple lines.
                </TypographyBody>
              </ListItemBody>
            </ListItem>
            <ListItem>
              <ListItemLeading>
                <AvatarThumbnail>
                  <TypographyLabel>
                    A
                  </TypographyLabel>
                </AvatarThumbnail>
              </ListItemLeading>
              <ListItemBody>
                <TypographyHeadline>
                  Headline
                </TypographyHeadline>
                <TypographyBody>
                  Supporting text that is long enough to fill multiple lines.
                </TypographyBody>
              </ListItemBody>
              <Divider />
            </ListItem>
          </List>
          <List :lines="ListLines.three">
            <ListItem>
              <ListItemLeading>
                <AvatarThumbnail>
                  <TypographyLabel>
                    A
                  </TypographyLabel>
                </AvatarThumbnail>
              </ListItemLeading>
              <ListItemBody>
                <TypographyHeadline>
                  Headline
                </TypographyHeadline>
                <TypographyBody>
                  Supporting text that is long enough to fill multiple lines.
                </TypographyBody>
              </ListItemBody>
              <ListItemTrailing>
                <RoundedIcon>
                  arrow_drop_down
                </RoundedIcon>
              </ListItemTrailing>
            </ListItem>
            <ListItem :state="ListItemState.disabled">
              <ListItemLeading>
                <AvatarThumbnail>
                  <TypographyLabel>
                    A
                  </TypographyLabel>
                </AvatarThumbnail>
              </ListItemLeading>
              <ListItemBody>
                <TypographyHeadline>
                  Disabled
                </TypographyHeadline>
                <TypographyBody>
                  Supporting text that is long enough to fill multiple lines.
                </TypographyBody>
              </ListItemBody>
              <ListItemTrailing>
                <RoundedIcon>
                  arrow_drop_down
                </RoundedIcon>
              </ListItemTrailing>
            </ListItem>
            <ListItem>
              <ListItemLeading>
                <AvatarThumbnail>
                  <TypographyLabel>
                    A
                  </TypographyLabel>
                </AvatarThumbnail>
              </ListItemLeading>
              <ListItemBody>
                <TypographyHeadline>
                  Headline
                </TypographyHeadline>
                <TypographyBody>
                  Supporting text that is long enough to fill multiple lines.
                </TypographyBody>
              </ListItemBody>
              <ListItemTrailing>
                <RoundedIcon>
                  arrow_drop_down
                </RoundedIcon>
              </ListItemTrailing>
              <Divider />
            </ListItem>
          </List>
        </Column>
        <Column>
          <List>
            <ListItem>
              <ListItemLeading>
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
              </ListItemLeading>
              <ListItemBody>
                <TypographyHeadline>
                  Headline
                </TypographyHeadline>
              </ListItemBody>
            </ListItem>
            <ListItem>
              <ListItemLeading>
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
              </ListItemLeading>
              <ListItemBody>
                <TypographyHeadline>
                  Headline
                </TypographyHeadline>
              </ListItemBody>
            </ListItem>
            <ListItem>
              <ListItemLeading>
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
              </ListItemLeading>
              <ListItemBody>
                <TypographyHeadline>
                  Headline
                </TypographyHeadline>
              </ListItemBody>
              <Divider />
            </ListItem>
          </List>
          <List>
            <ListItem>
              <ListItemLeading>
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
              </ListItemLeading>
              <ListItemBody>
                <TypographyHeadline>
                  Headline
                </TypographyHeadline>
              </ListItemBody>
              <ListItemTrailing>
                <RoundedIcon>
                  arrow_drop_down
                </RoundedIcon>
              </ListItemTrailing>
            </ListItem>
            <ListItem>
              <ListItemLeading>
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
              </ListItemLeading>
              <ListItemBody>
                <TypographyHeadline>
                  Hovered
                </TypographyHeadline>
              </ListItemBody>
              <ListItemTrailing>
                <RoundedIcon>
                  arrow_drop_down
                </RoundedIcon>
              </ListItemTrailing>
            </ListItem>
            <ListItem>
              <ListItemLeading>
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
              </ListItemLeading>
              <ListItemBody>
                <TypographyHeadline>
                  Headline
                </TypographyHeadline>
              </ListItemBody>
              <ListItemTrailing>
                <RoundedIcon>
                  arrow_drop_down
                </RoundedIcon>
              </ListItemTrailing>
              <Divider />
            </ListItem>
          </List>
          <List :lines="ListLines.two">
            <ListItem>
              <ListItemLeading>
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
              </ListItemLeading>
              <ListItemBody>
                <TypographyHeadline>
                  Headline
                </TypographyHeadline>
                <TypographyBody>
                  Supporting text.
                </TypographyBody>
              </ListItemBody>
            </ListItem>
            <ListItem>
              <ListItemLeading>
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
              </ListItemLeading>
              <ListItemBody>
                <TypographyHeadline>
                  Focused
                </TypographyHeadline>
                <TypographyBody>
                  Supporting text.
                </TypographyBody>
              </ListItemBody>
            </ListItem>
            <ListItem>
              <ListItemLeading>
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
              </ListItemLeading>
              <ListItemBody>
                <TypographyHeadline>
                  Headline
                </TypographyHeadline>
                <TypographyBody>
                  Supporting text.
                </TypographyBody>
              </ListItemBody>
              <Divider />
            </ListItem>
          </List>
          <List :lines="ListLines.two">
            <ListItem>
              <ListItemLeading>
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
              </ListItemLeading>
              <ListItemBody>
                <TypographyHeadline>
                  Headline
                </TypographyHeadline>
                <TypographyBody>
                  Supporting text.
                </TypographyBody>
              </ListItemBody>
              <ListItemTrailing>
                <RoundedIcon>
                  arrow_drop_down
                </RoundedIcon>
              </ListItemTrailing>
            </ListItem>
            <ListItem>
              <ListItemLeading>
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
              </ListItemLeading>
              <ListItemBody>
                <TypographyHeadline>
                  Pressed
                </TypographyHeadline>
                <TypographyBody>
                  Supporting text.
                </TypographyBody>
              </ListItemBody>
              <ListItemTrailing>
                <RoundedIcon>
                  arrow_drop_down
                </RoundedIcon>
              </ListItemTrailing>
            </ListItem>
            <ListItem>
              <ListItemLeading>
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
              </ListItemLeading>
              <ListItemBody>
                <TypographyHeadline>
                  Headline
                </TypographyHeadline>
                <TypographyBody>
                  Supporting text.
                </TypographyBody>
              </ListItemBody>
              <ListItemTrailing>
                <RoundedIcon>
                  arrow_drop_down
                </RoundedIcon>
              </ListItemTrailing>
              <Divider />
            </ListItem>
          </List>
          <List :lines="ListLines.three">
            <ListItem>
              <ListItemLeading>
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
              </ListItemLeading>
              <ListItemBody>
                <TypographyHeadline>
                  Headline
                </TypographyHeadline>
                <TypographyBody>
                  Supporting text that is long enough to fill multiple lines.
                </TypographyBody>
              </ListItemBody>
            </ListItem>
            <!-- <ListItem :state="ListItemState.dragged"> -->
            <ListItem>
              <ListItemLeading>
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
              </ListItemLeading>
              <ListItemBody>
                <TypographyHeadline>
                  Dragged
                </TypographyHeadline>
                <TypographyBody>
                  Supporting text that is long enough to fill multiple lines.
                </TypographyBody>
              </ListItemBody>
            </ListItem>
            <ListItem>
              <ListItemLeading>
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
              </ListItemLeading>
              <ListItemBody>
                <TypographyHeadline>
                  Headline
                </TypographyHeadline>
                <TypographyBody>
                  Supporting text that is long enough to fill multiple lines.
                </TypographyBody>
              </ListItemBody>
              <Divider />
            </ListItem>
          </List>
          <List :lines="ListLines.three">
            <ListItem>
              <ListItemLeading>
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
              </ListItemLeading>
              <ListItemBody>
                <TypographyHeadline>
                  Headline
                </TypographyHeadline>
                <TypographyBody>
                  Supporting text that is long enough to fill multiple lines.
                </TypographyBody>
              </ListItemBody>
              <ListItemTrailing>
                <RoundedIcon>
                  arrow_drop_down
                </RoundedIcon>
              </ListItemTrailing>
            </ListItem>
            <ListItem :state="ListItemState.disabled">
              <ListItemLeading>
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
              </ListItemLeading>
              <ListItemBody>
                <TypographyHeadline>
                  Disabled
                </TypographyHeadline>
                <TypographyBody>
                  Supporting text that is long enough to fill multiple lines.
                </TypographyBody>
              </ListItemBody>
              <ListItemTrailing>
                <RoundedIcon>
                  arrow_drop_down
                </RoundedIcon>
              </ListItemTrailing>
            </ListItem>
            <ListItem>
              <ListItemLeading>
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
              </ListItemLeading>
              <ListItemBody>
                <TypographyHeadline>
                  Headline
                </TypographyHeadline>
                <TypographyBody>
                  Supporting text that is long enough to fill multiple lines.
                </TypographyBody>
              </ListItemBody>
              <ListItemTrailing>
                <RoundedIcon>
                  arrow_drop_down
                </RoundedIcon>
              </ListItemTrailing>
              <Divider />
            </ListItem>
          </List>
        </Column>
        <Column>
          <List>
            <ListItem :has-leading-video="true">
              <ListItemLeading>
                <VideoThumbnail>
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
                </VideoThumbnail>
              </ListItemLeading>
              <ListItemBody>
                <TypographyHeadline>
                  Headline
                </TypographyHeadline>
              </ListItemBody>
            </ListItem>
            <ListItem :has-leading-video="true">
              <ListItemLeading>
                <VideoThumbnail>
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
                </VideoThumbnail>
              </ListItemLeading>
              <ListItemBody>
                <TypographyHeadline>
                  Headline
                </TypographyHeadline>
              </ListItemBody>
            </ListItem>
            <ListItem :has-leading-video="true">
              <ListItemLeading>
                <VideoThumbnail>
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
                </VideoThumbnail>
              </ListItemLeading>
              <ListItemBody>
                <TypographyHeadline>
                  Headline
                </TypographyHeadline>
              </ListItemBody>
              <Divider />
            </ListItem>
          </List>
          <List>
            <ListItem :has-leading-video="true">
              <ListItemLeading>
                <VideoThumbnail>
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
                </VideoThumbnail>
              </ListItemLeading>
              <ListItemBody>
                <TypographyHeadline>
                  Headline
                </TypographyHeadline>
              </ListItemBody>
              <ListItemTrailing>
                <RoundedIcon>
                  arrow_drop_down
                </RoundedIcon>
              </ListItemTrailing>
            </ListItem>
            <ListItem :has-leading-video="true">
              <ListItemLeading>
                <VideoThumbnail>
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
                </VideoThumbnail>
              </ListItemLeading>
              <ListItemBody>
                <TypographyHeadline>
                  Hovered
                </TypographyHeadline>
              </ListItemBody>
              <ListItemTrailing>
                <RoundedIcon>
                  arrow_drop_down
                </RoundedIcon>
              </ListItemTrailing>
            </ListItem>
            <ListItem :has-leading-video="true">
              <ListItemLeading>
                <VideoThumbnail>
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
                </VideoThumbnail>
              </ListItemLeading>
              <ListItemBody>
                <TypographyHeadline>
                  Headline
                </TypographyHeadline>
              </ListItemBody>
              <ListItemTrailing>
                <RoundedIcon>
                  arrow_drop_down
                </RoundedIcon>
              </ListItemTrailing>
              <Divider />
            </ListItem>
          </List>
          <List>
            <ListItem :has-leading-video="true">
              <ListItemLeading>
                <VideoThumbnail>
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
                </VideoThumbnail>
              </ListItemLeading>
              <ListItemBody>
                <TypographyHeadline>
                  Headline
                </TypographyHeadline>
                <TypographyBody>
                  Supporting text.
                </TypographyBody>
              </ListItemBody>
            </ListItem>
            <ListItem :has-leading-video="true">
              <ListItemLeading>
                <VideoThumbnail>
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
                </VideoThumbnail>
              </ListItemLeading>
              <ListItemBody>
                <TypographyHeadline>
                  Focused
                </TypographyHeadline>
                <TypographyBody>
                  Supporting text.
                </TypographyBody>
              </ListItemBody>
            </ListItem>
            <ListItem :has-leading-video="true">
              <ListItemLeading>
                <VideoThumbnail>
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
                </VideoThumbnail>
              </ListItemLeading>
              <ListItemBody>
                <TypographyHeadline>
                  Headline
                </TypographyHeadline>
                <TypographyBody>
                  Supporting text.
                </TypographyBody>
              </ListItemBody>
              <Divider />
            </ListItem>
          </List>
          <List>
            <ListItem :has-leading-video="true">
              <ListItemLeading>
                <VideoThumbnail>
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
                </VideoThumbnail>
              </ListItemLeading>
              <ListItemBody>
                <TypographyHeadline>
                  Headline
                </TypographyHeadline>
                <TypographyBody>
                  Supporting text.
                </TypographyBody>
              </ListItemBody>
              <ListItemTrailing>
                <RoundedIcon>
                  arrow_drop_down
                </RoundedIcon>
              </ListItemTrailing>
            </ListItem>
            <ListItem :has-leading-video="true">
              <ListItemLeading>
                <VideoThumbnail>
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
                </VideoThumbnail>
              </ListItemLeading>
              <ListItemBody>
                <TypographyHeadline>
                  Pressed
                </TypographyHeadline>
                <TypographyBody>
                  Supporting text.
                </TypographyBody>
              </ListItemBody>
              <ListItemTrailing>
                <RoundedIcon>
                  arrow_drop_down
                </RoundedIcon>
              </ListItemTrailing>
            </ListItem>
            <ListItem :has-leading-video="true">
              <ListItemLeading>
                <VideoThumbnail>
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
                </VideoThumbnail>
              </ListItemLeading>
              <ListItemBody>
                <TypographyHeadline>
                  Headline
                </TypographyHeadline>
                <TypographyBody>
                  Supporting text.
                </TypographyBody>
              </ListItemBody>
              <ListItemTrailing>
                <RoundedIcon>
                  arrow_drop_down
                </RoundedIcon>
              </ListItemTrailing>
              <Divider />
            </ListItem>
          </List>
          <List :lines="ListLines.three">
            <ListItem :has-leading-video="true">
              <ListItemLeading>
                <VideoThumbnail>
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
                </VideoThumbnail>
              </ListItemLeading>
              <ListItemBody>
                <TypographyHeadline>
                  Headline
                </TypographyHeadline>
                <TypographyBody>
                  Supporting text that is long enough to fill multiple lines.
                </TypographyBody>
              </ListItemBody>
            </ListItem>
            <!-- <ListItem :state="ListItemState.dragged"> -->
            <ListItem :has-leading-video="true">
              <ListItemLeading>
                <VideoThumbnail>
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
                </VideoThumbnail>
              </ListItemLeading>
              <ListItemBody>
                <TypographyHeadline>
                  Dragged
                </TypographyHeadline>
                <TypographyBody>
                  Supporting text that is long enough to fill multiple lines.
                </TypographyBody>
              </ListItemBody>
            </ListItem>
            <ListItem :has-leading-video="true">
              <ListItemLeading>
                <VideoThumbnail>
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
                </VideoThumbnail>
              </ListItemLeading>
              <ListItemBody>
                <TypographyHeadline>
                  Headline
                </TypographyHeadline>
                <TypographyBody>
                  Supporting text that is long enough to fill multiple lines.
                </TypographyBody>
              </ListItemBody>
              <Divider />
            </ListItem>
          </List>
          <List :lines="ListLines.three">
            <ListItem :has-leading-video="true">
              <ListItemLeading>
                <VideoThumbnail>
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
                </VideoThumbnail>
              </ListItemLeading>
              <ListItemBody>
                <TypographyHeadline>
                  Headline
                </TypographyHeadline>
                <TypographyBody>
                  Supporting text that is long enough to fill multiple lines.
                </TypographyBody>
              </ListItemBody>
              <ListItemTrailing>
                <RoundedIcon>
                  arrow_drop_down
                </RoundedIcon>
              </ListItemTrailing>
            </ListItem>
            <ListItem
              :state="ListItemState.disabled"
              :has-leading-video="true"
            >
              <ListItemLeading>
                <VideoThumbnail>
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
                </VideoThumbnail>
              </ListItemLeading>
              <ListItemBody>
                <TypographyHeadline>
                  Disabled
                </TypographyHeadline>
                <TypographyBody>
                  Supporting text that is long enough to fill multiple lines.
                </TypographyBody>
              </ListItemBody>
              <ListItemTrailing>
                <RoundedIcon>
                  arrow_drop_down
                </RoundedIcon>
              </ListItemTrailing>
            </ListItem>
            <ListItem :has-leading-video="true">
              <ListItemLeading>
                <VideoThumbnail>
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
                </VideoThumbnail>
              </ListItemLeading>
              <ListItemBody>
                <TypographyHeadline>
                  Headline
                </TypographyHeadline>
                <TypographyBody>
                  Supporting text that is long enough to fill multiple lines.
                </TypographyBody>
              </ListItemBody>
              <ListItemTrailing>
                <RoundedIcon>
                  arrow_drop_down
                </RoundedIcon>
              </ListItemTrailing>
              <Divider />
            </ListItem>
          </List>
        </Column>
      </Row>
    </section>
  </Main>
</template>

<style lang="sass" scoped>
  @use '@/lib/sass/theme'

  section
    padding: 48px

    &.banner
      > span
        padding: 12px

    a
      @include theme.preferred
        color: theme.style(primary)

    > .display
      padding: 24px 0

</style>