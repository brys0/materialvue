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
  &.banner
    > span
      padding: 12px

  a
    @include theme.preferred
      color: theme.style(primary)

  > .m-display
    padding: 24px 0

</style>