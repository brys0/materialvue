<!--
/**
 * BSD 3-Clause License
 *
 * Copyright © 2023, Daniel Jonathan <daniel at cosmicmind dot com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary m-forms, with or without
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
	object,
	string,
} from 'yup'

import {
	useForm,
} from 'vee-validate'

import {
	MMain,
	MLayout,
	MTile,
	MLabel,
	MBody,
	MTonalButton,
	MRoundedIcon,
	MBar,
	MBarTrailing,
	MForm,
	MFieldset,
	MFieldBody,
	MFieldLeading,
	MFieldControl,
	MFieldTrailing,
	MFieldInput,
	MFieldSupport,
	MOutlinedTextField,
} from '@/lib/vue'

const validationSchema = object({
	email: string().required().email().label('Email Address'),
	password: string().required().min(8).label('Password'),
})

// create a form context with the validation schema
const {
	// meta,
	errors,
	handleSubmit,
} = useForm({
	validationSchema,
})

const onSubmit = handleSubmit(async (data, actions): Promise<void> => {

})

</script>

<template>
  <m-main>
    <m-layout>
      <m-tile>
        <figure class="brand">
          <img
            class="is-theme-light"
            src="/assets/cosmicmind-logo-light.svg"
            alt="CosmicMind Logo"
          >
          <img
            class="is-theme-dark"
            src="/assets/cosmicmind-logo-dark.svg"
            alt="CosmicMind Logo"
          >
        </figure>
        <m-form
          class="login"
          @submit="onSubmit"
        >
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
                  <m-label
                    name="email"
                  >
                    Email
                  </m-label>
                  <m-field-input name="email" />
                </m-field-body>
                <m-field-trailing
                  v-if="errors.email"
                  class="trailing"
                >
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
          <m-fieldset>
            <m-outlined-text-field
              ref="passwordRef"
              :has-error="'undefined' !== typeof errors.password"
            >
              <m-field-control>
                <m-field-leading>
                  <m-rounded-icon>
                    lock
                  </m-rounded-icon>
                </m-field-leading>
                <m-field-body>
                  <m-label
                    name="password"
                  >
                    Password
                  </m-label>
                  <m-field-input
                    type="password"
                    name="password"
                  />
                </m-field-body>
                <m-field-trailing
                  v-if="errors.password"
                  class="trailing"
                >
                  <m-rounded-icon>
                    error
                  </m-rounded-icon>
                </m-field-trailing>
              </m-field-control>
              <m-field-support v-if="errors.password">
                <m-body>
                  {{ errors.password }}
                </m-body>
              </m-field-support>
            </m-outlined-text-field>
          </m-fieldset>
          <m-bar>
            <m-bar-trailing>
              <m-tonal-button>
                <m-label>
                  Submit
                </m-label>
              </m-tonal-button>
            </m-bar-trailing>
          </m-bar>
        </m-form>
      </m-tile>
    </m-layout>
  </m-main>
</template>

<style lang="sass" scoped>
.m-main
  display: grid
  align-content: center
  justify-content: center

.brand
  width: 300px

.login
  width: 300px

  .m-fieldset
    height: 100px

</style>
