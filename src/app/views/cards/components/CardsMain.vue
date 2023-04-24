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
            <m-bar :direction="MBarDirection.vertical">
              <m-bar-leading>
                <m-filled-button>
                  <m-label>
                    Vertical 1
                  </m-label>
                </m-filled-button>
                <m-filled-button>
                  <m-label>
                    Vertical 2
                  </m-label>
                </m-filled-button>
              </m-bar-leading>
              <m-bar-body>
                <m-filled-button>
                  <m-label>
                    Vertical 3
                  </m-label>
                </m-filled-button>
                <m-filled-button>
                  <m-label>
                    Vertical 4
                  </m-label>
                </m-filled-button>
              </m-bar-body>
              <m-bar-trailing>
                <m-filled-button>
                  <m-label>
                    Vertical 5
                  </m-label>
                </m-filled-button>
                <m-filled-button>
                  <m-label>
                    Vertical 6
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