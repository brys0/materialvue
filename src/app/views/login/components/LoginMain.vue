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
	Layout,
	Tile,
	MBody,
	MLabel,
	FilledButton,
	RoundedIcon,
	FormFieldset,
	FieldControl,
	FieldBody,
	FieldLeading,
	FieldTrailing,
	FieldInput,
	FieldSupport,
	FilledTextField,
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
	initialValues: {
		// email: 'me@domain.com',
	},
})

const unwatch = watch(errors, errors => logger.trace('errors', errors))

const onSubmit = handleSubmit((data, actions): void => {
	logger.trace(data, actions)
})

onBeforeUnmount(() => {
	unwatch()
})

</script>

<template>
  <Main>
    <Layout>
      <Tile>
        <form
          class="login"
          @submit="onSubmit"
        >
          <FormFieldset>
            <FilledTextField
              ref="emailRef"
              :has-error="'undefined' !== typeof errors.email"
            >
              <FieldControl>
                <FieldLeading>
                  <RoundedIcon>
                    mail
                  </RoundedIcon>
                </FieldLeading>
                <FieldBody>
                  <m-label
                    name="email"
                  >
                    Email
                  </m-label>
                  <FieldInput name="email" />
                </FieldBody>
                <FieldTrailing
                  v-if="errors.email"
                  class="trailing"
                >
                  <RoundedIcon>
                    error
                  </RoundedIcon>
                </FieldTrailing>
              </FieldControl>
              <FieldSupport v-if="errors.email">
                <m-body>
                  {{ errors.email }}
                </m-body>
              </FieldSupport>
            </FilledTextField>
          </FormFieldset>
          <FormFieldset>
            <FilledTextField
              ref="passwordRef"
              :has-error="'undefined' !== typeof errors.password"
            >
              <FieldControl>
                <FieldLeading>
                  <RoundedIcon>
                    lock
                  </RoundedIcon>
                </FieldLeading>
                <FieldBody>
                  <m-label
                    name="password"
                  >
                    Password
                  </m-label>
                  <FieldInput
                    type="password"
                    name="password"
                  />
                </FieldBody>
                <FieldTrailing
                  v-if="errors.password"
                  class="trailing"
                >
                  <RoundedIcon>
                    error
                  </RoundedIcon>
                </FieldTrailing>
              </FieldControl>
              <FieldSupport v-if="errors.password">
                <m-body>
                  {{ errors.password }}
                </m-body>
              </FieldSupport>
            </FilledTextField>
          </FormFieldset>
          <FilledButton>
            Submit
          </FilledButton>
        </form>
      </Tile>
    </Layout>
  </Main>
</template>

<style lang="sass" scoped>
.login
  width: 300px
  .form-fieldset
    height: 100px

</style>
