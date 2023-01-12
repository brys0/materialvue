<!-- Copyright (C) 2022, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. -->

<script lang="ts" setup>
import {
	ref,
	watch,
	onBeforeUnmount,
} from 'vue'

import {
	logger,
} from '@cosmicmind/foundation'

import {
	AppMain,
} from '@/app/contexts/app/components/AppMain'

import {
	object,
	string,
} from 'yup'

import {
	useForm,
} from 'vee-validate'

import {
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
	Row,
	Column,
	FormFieldSet,
	FieldBody,
	FieldControl,
	FieldIcon,
	FieldInput,
	FieldLabel,
	FieldSupport,
	FieldText,
	TextFieldState,
	FilledTextField,
	RoundedIcon,
} from '@/lib/vue'

const validationSchema = object({
	email: string().required().email().label('Email Address'),
})

// Create a form context with the validation schema
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
	console.log('newState', newState, 'oldState', oldState)
}

</script>

<template>
  <AppMain>
    <div>
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
        <TypographyDisplay :size="TypographySize.small">
          Display
        </TypographyDisplay>
        <div>
          <TypographyDisplay :size="TypographySize.large">
            Display Large - Roboto 57/64 . 0
          </TypographyDisplay>
          <TypographyDisplay :size="TypographySize.medium">
            Display Medium - Roboto 45/52 .  0
          </TypographyDisplay>
          <TypographyDisplay :size="TypographySize.small">
            Display Small - Roboto 36/44 . 0
          </TypographyDisplay>
        </div>
      </section>
      <section>
        <TypographyDisplay :size="TypographySize.small">
          Headline
        </TypographyDisplay>
        <div>
          <TypographyHeadline :size="TypographySize.large">
            Headline Large - Roboto 32/40 . 0
          </TypographyHeadline>
          <TypographyHeadline :size="TypographySize.medium">
            Headline Medium - Roboto 28/36 . 0
          </TypographyHeadline>
          <TypographyHeadline :size="TypographySize.small">
            Headline Small - Roboto 24/32 . 0
          </TypographyHeadline>
        </div>
      </section>
      <section>
        <TypographyDisplay :size="TypographySize.small">
          Title
        </TypographyDisplay>
        <div>
          <TypographyTitle :size="TypographySize.large">
            Title Large - Roboto Medium 22/28 . 0
          </TypographyTitle>
          <TypographyTitle :size="TypographySize.medium">
            Title Medium - Roboto Medium 16/24 . +0.15
          </TypographyTitle>
          <TypographyTitle :size="TypographySize.small">
            Title Small - Roboto Medium 14/20 . +0.1
          </TypographyTitle>
        </div>
      </section>
      <section>
        <TypographyDisplay :size="TypographySize.small">
          Label
        </TypographyDisplay>
        <div>
          <TypographyLabel :size="TypographySize.large">
            Label Large - Roboto Medium 14/20 . +0.1
          </TypographyLabel>
          <TypographyLabel :size="TypographySize.medium">
            Label Medium - Roboto Medium 12/16 . +0.5
          </TypographyLabel>
          <TypographyLabel :size="TypographySize.small">
            Label Small - Roboto Medium 11/16 . +0.5
          </TypographyLabel>
        </div>
      </section>
      <section>
        <TypographyDisplay :size="TypographySize.small">
          Body
        </TypographyDisplay>
        <div>
          <TypographyBody :size="TypographySize.large">
            Body Large - Roboto 16/24 . +0.15
          </TypographyBody>
          <TypographyBody :size="TypographySize.medium">
            Body Medium - Roboto 14/20 . +0.25
          </TypographyBody>
          <TypographyBody :size="TypographySize.small">
            Body Small - Roboto 12/16 . +0.4
          </TypographyBody>
        </div>
      </section>
    </div>

    <div>
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
        <div>
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
        </div>
      </section>
      <section>
        <TypographyDisplay :size="TypographySize.small">
          Outlined button states
        </TypographyDisplay>
        <div>
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
        </div>
      </section>
      <section>
        <TypographyDisplay :size="TypographySize.small">
          Text button states
        </TypographyDisplay>
        <div>
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
        </div>
      </section>
      <section>
        <TypographyDisplay :size="TypographySize.small">
          Elevated button states
        </TypographyDisplay>
        <div>
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
        </div>
      </section>
      <section>
        <TypographyDisplay :size="TypographySize.small">
          Tonal button states
        </TypographyDisplay>
        <div>
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
        </div>
      </section>
    </div>

    <div>
      <section class="banner">
        <TypographyDisplay :size="TypographySize.large">
          Text fields
        </TypographyDisplay>
        <TypographyBody :size="TypographySize.large">
          See the <a
            href="https://m3.material.io/components/text-fields/overview"
            target="_blank"
          >Design Guidelines</a>
        </TypographyBody>
      </section>
      <section>
        <TypographyDisplay :size="TypographySize.small">
          Filled text field states
        </TypographyDisplay>
        <div>
          <Row>
            <Column>
              <form @submit="onSubmit">
                <FormFieldSet>
                  <FilledTextField
                    ref="emailRef"
                    :has-error="'undefined' !== typeof errors.email"
                    @update:state="updateState"
                  >
                    <FieldBody>
                      <FieldIcon class="leading">
                        <RoundedIcon>
                          mail
                        </RoundedIcon>
                      </FieldIcon>
                      <FieldControl>
                        <FieldLabel
                          name="email"
                        >
                          Email
                        </FieldLabel>
                        <FieldInput name="email" />
                      </FieldControl>
                      <FieldIcon
                        v-if="errors.email"
                        class="trailing"
                      >
                        <RoundedIcon>
                          error
                        </RoundedIcon>
                      </FieldIcon>
                    </FieldBody>
                    <FieldSupport v-if="errors.email">
                      <FieldText>
                        {{ errors.email }}
                      </FieldText>
                    </FieldSupport>
                  </FilledTextField>
                </FormFieldSet>
              </form>
            </Column>
            <Column>
              <form @submit="onSubmit">
                <FormFieldSet>
                  <FilledTextField :state="TextFieldState.hovered">
                    <FieldBody>
                      <FieldIcon class="leading">
                        <RoundedIcon>
                          mail
                        </RoundedIcon>
                      </FieldIcon>
                      <FieldControl>
                        <FieldLabel
                          name="name"
                        >
                          Email
                        </FieldLabel>
                        <FieldInput name="name" />
                      </FieldControl>
                      <FieldIcon
                        v-if="errors.email"
                        class="trailing"
                      >
                        <RoundedIcon>
                          error
                        </RoundedIcon>
                      </FieldIcon>
                    </FieldBody>
                    <FieldSupport v-if="errors.email">
                      <FieldText>
                        {{ errors.email }}
                      </FieldText>
                    </FieldSupport>
                  </FilledTextField>
                </FormFieldSet>
              </form>
            </Column>
            <Column>
              <form @submit="onSubmit">
                <FormFieldSet>
                  <FilledTextField :state="TextFieldState.focused">
                    <FieldBody>
                      <FieldIcon class="leading">
                        <RoundedIcon>
                          mail
                        </RoundedIcon>
                      </FieldIcon>
                      <FieldControl>
                        <FieldLabel
                          name="name"
                        >
                          Email
                        </FieldLabel>
                        <FieldInput name="name" />
                      </FieldControl>
                      <FieldIcon
                        v-if="errors.email"
                        class="trailing"
                      >
                        <RoundedIcon>
                          error
                        </RoundedIcon>
                      </FieldIcon>
                    </FieldBody>
                    <FieldSupport v-if="errors.email">
                      <FieldText>
                        {{ errors.email }}
                      </FieldText>
                    </FieldSupport>
                  </FilledTextField>
                </FormFieldSet>
              </form>
            </Column>
            <Column>
              <form @submit="onSubmit">
                <FormFieldSet>
                  <FilledTextField :state="TextFieldState.disabled">
                    <FieldBody>
                      <FieldIcon class="leading">
                        <RoundedIcon>
                          mail
                        </RoundedIcon>
                      </FieldIcon>
                      <FieldControl>
                        <FieldLabel
                          name="name"
                        >
                          Email
                        </FieldLabel>
                        <FieldInput name="name" />
                      </FieldControl>
                      <FieldIcon
                        v-if="errors.email"
                        class="trailing"
                      >
                        <RoundedIcon>
                          error
                        </RoundedIcon>
                      </FieldIcon>
                    </FieldBody>
                    <FieldSupport v-if="errors.email">
                      <FieldText>
                        {{ errors.email }}
                      </FieldText>
                    </FieldSupport>
                  </FilledTextField>
                </FormFieldSet>
              </form>
            </Column>
          </Row>
        </div>
        <TypographyDisplay :size="TypographySize.small">
          Filled text field error states
        </TypographyDisplay>
        <div>
          <div>
            <Row>
              <Column>
                <form @submit="onSubmit">
                  <FormFieldSet>
                    <FilledTextField :has-error="true">
                      <FieldBody>
                        <FieldIcon class="leading">
                          <RoundedIcon>
                            mail
                          </RoundedIcon>
                        </FieldIcon>
                        <FieldControl>
                          <FieldLabel
                            name="name"
                          >
                            Email
                          </FieldLabel>
                          <FieldInput name="name" />
                        </FieldControl>
                        <FieldIcon
                          v-if="errors.email"
                          class="trailing"
                        >
                          <RoundedIcon>
                            error
                          </RoundedIcon>
                        </FieldIcon>
                      </FieldBody>
                      <FieldSupport v-if="errors.email">
                        <FieldText>
                          {{ errors.email }}
                        </FieldText>
                      </FieldSupport>
                    </FilledTextField>
                  </FormFieldSet>
                </form>
              </Column>
              <Column>
                <form @submit="onSubmit">
                  <FormFieldSet>
                    <FilledTextField
                      :state="TextFieldState.hovered"
                      :has-error="true"
                    >
                      <FieldBody>
                        <FieldIcon class="leading">
                          <RoundedIcon>
                            mail
                          </RoundedIcon>
                        </FieldIcon>
                        <FieldControl>
                          <FieldLabel
                            name="name"
                          >
                            Email
                          </FieldLabel>
                          <FieldInput name="name" />
                        </FieldControl>
                        <FieldIcon
                          v-if="errors.email"
                          class="trailing"
                        >
                          <RoundedIcon>
                            error
                          </RoundedIcon>
                        </FieldIcon>
                      </FieldBody>
                      <FieldSupport v-if="errors.email">
                        <FieldText>
                          {{ errors.email }}
                        </FieldText>
                      </FieldSupport>
                    </FilledTextField>
                  </FormFieldSet>
                </form>
              </Column>
              <Column>
                <form @submit="onSubmit">
                  <FormFieldSet>
                    <FilledTextField
                      :state="TextFieldState.focused"
                      :has-error="true"
                    >
                      <FieldBody>
                        <FieldIcon class="leading">
                          <RoundedIcon>
                            mail
                          </RoundedIcon>
                        </FieldIcon>
                        <FieldControl>
                          <FieldLabel
                            name="name"
                          >
                            Email
                          </FieldLabel>
                          <FieldInput name="name" />
                        </FieldControl>
                        <FieldIcon
                          v-if="errors.email"
                          class="trailing"
                        >
                          <RoundedIcon>
                            error
                          </RoundedIcon>
                        </FieldIcon>
                      </FieldBody>
                      <FieldSupport v-if="errors.email">
                        <FieldText>
                          {{ errors.email }}
                        </FieldText>
                      </FieldSupport>
                    </FilledTextField>
                  </FormFieldSet>
                </form>
              </Column>
              <Column>
                <form @submit="onSubmit">
                  <FormFieldSet>
                    <FilledTextField :state="TextFieldState.disabled">
                      <FieldBody>
                        <FieldIcon class="leading">
                          <RoundedIcon>
                            mail
                          </RoundedIcon>
                        </FieldIcon>
                        <FieldControl>
                          <FieldLabel
                            name="name"
                          >
                            Email
                          </FieldLabel>
                          <FieldInput name="name" />
                        </FieldControl>
                        <FieldIcon
                          v-if="errors.email"
                          class="trailing"
                        >
                          <RoundedIcon>
                            error
                          </RoundedIcon>
                        </FieldIcon>
                      </FieldBody>
                      <FieldSupport v-if="errors.email">
                        <FieldText>
                          {{ errors.email }}
                        </FieldText>
                      </FieldSupport>
                    </FilledTextField>
                  </FormFieldSet>
                </form>
              </Column>
            </Row>
          </div>
        </div>
      </section>
    </div>
  </AppMain>
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

    > div
      > span
        padding: 12px

    .text-field
      width: 300px

</style>