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
	MMain,
	MLayout,
	MSection,
	MRow,
	MColumn,
	MDisplay,
	MTypographySize,
} from '@/lib/vue'

</script>

<template>
  <m-main>
    <m-layout>
      <m-section>
        <m-row>
          <m-column class="is-3">
            <img
              class="is-theme-dark"
              src="/assets/material-design-logo-dark.svg"
              alt="Material Design"
            >
            <img
              class="is-theme-light"
              src="/assets/material-design-logo-light.svg"
              alt="Material Design"
            >
          </m-column>
          <m-column class="is-3">
            <m-display :size="MTypographySize.large">
              +
            </m-display>
          </m-column>
          <m-column class="is-3">
            <img
              src="/assets/vue-logo.svg"
              alt="VueJS Logo"
            >
          </m-column>
        </m-row>
        <m-row>
          <m-column class="is-12">
            <m-display>Material Design 3 and Vue 3 brought together for next level development.</m-display>
          </m-column>
        </m-row>
      </m-section>
    </m-layout>
  </m-main>
</template>

<style lang="sass" scoped>
@use '@/lib/sass/theme'


</style>