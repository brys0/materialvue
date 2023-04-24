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