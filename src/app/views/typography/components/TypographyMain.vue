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
	MTypographySize,
	MDisplay,
	MHeadline,
	MTitle,
	MLabel,
	MBody,
	MSection, MLayout, MRow, MRoundedIcon, MColumn, MElevatedButton, MCode,
} from '@/lib/vue'

</script>

<template>
  <m-main>
    <m-layout>
      <m-section class="banner full">
        <m-row>
          <m-column class="is-12">
            <h1>
              <m-display :size="MTypographySize.large">
                Typography
              </m-display>
            </h1>
            <p>
              <m-body :size="MTypographySize.large">
                <a
                  href="https://m3.material.io/styles/typography/overview"
                  target="_blank"
                >Design Guidelines</a>
              </m-body>
            </p>
            <h2>
              <m-headline>
                Buttons help users take action within your application.
              </m-headline>
            </h2>
            <p>
              <m-body>
                Learn about the Material 3 button styles and maximize your application's experience.
              </m-body>
            </p>
          </m-column>
        </m-row>
      </m-section>
      <m-section class="banner comfortable">
        <m-row>
          <m-column class="is-12">
            <h3>
              <m-display :size="MTypographySize.small">
                Display
              </m-display>
            </h3>
          </m-column>
        </m-row>
        <m-row>
          <m-column class="is-12">
            <m-display :size="MTypographySize.large">
              Display Large - Roboto 57/64 . 0
            </m-display>
          </m-column>
        </m-row>
        <m-row>
          <m-column class="is-6">
            <m-code
              code="<m-display :size=&quot;MTypographySize.large&quot;>Display Large - Roboto 57/64 . 0</m-display>"
            />
          </m-column>
          <m-column class="is-6">
            <m-code
              code="<button class=&quot;m-button m-elevated&quot;>
                <span class=&quot;m-icon m-rounded&quot;>add_circle</span>
                <span class=&quot;m-label&quot;>Enabled</span>
              </button>"
            />
          </m-column>
        </m-row>
        <m-row>
          <m-column class="is-12">
            <m-display :size="MTypographySize.medium">
              Display Medium - Roboto 45/52 .  0
            </m-display>
          </m-column>
        </m-row>
        <m-row>
          <m-column class="is-6">
            <m-code
              code="<m-display :size=&quot;MTypographySize.medium&quot;>Display Medium - Roboto 45/52 .  0</m-display>"
            />
          </m-column>
          <m-column class="is-6">
            <m-code
              code="<button class=&quot;m-button m-elevated&quot;>
                <span class=&quot;m-icon m-rounded&quot;>add_circle</span>
                <span class=&quot;m-label&quot;>Enabled</span>
              </button>"
            />
          </m-column>
        </m-row>
        <m-row>
          <m-column class="is-12">
            <m-display :size="MTypographySize.small">
              Display Small - Roboto 36/44 . 0
            </m-display>
          </m-column>
        </m-row>
        <m-row>
          <m-column class="is-6">
            <m-code
              code="<m-display :size=&quot;MTypographySize.small&quot;>Display Small - Roboto 36/44 . 0</m-display>"
            />
          </m-column>
          <m-column class="is-6">
            <m-code
              code="<button class=&quot;m-button m-elevated&quot;>
                <span class=&quot;m-icon m-rounded&quot;>add_circle</span>
                <span class=&quot;m-label&quot;>Enabled</span>
              </button>"
            />
          </m-column>
        </m-row>
      </m-section>
      <!--      <m-section>-->
      <!--        <m-display :size="MTypographySize.large">-->
      <!--          Display-->
      <!--        </m-display>-->
      <!--        <m-display :size="MTypographySize.large">-->
      <!--          Display Large - Roboto 57/64 . 0-->
      <!--        </m-display>-->
      <!--        <m-display :size="MTypographySize.medium">-->
      <!--          Display Medium - Roboto 45/52 .  0-->
      <!--        </m-display>-->
      <!--        <m-display :size="MTypographySize.small">-->
      <!--          Display Small - Roboto 36/44 . 0-->
      <!--        </m-display>-->
      <!--      </m-section>-->
      <!--      <m-section>-->
      <!--        <m-display :size="MTypographySize.large">-->
      <!--          Headline-->
      <!--        </m-display>-->
      <!--        <m-headline :size="MTypographySize.large">-->
      <!--          Headline Large - Roboto 32/40 . 0-->
      <!--        </m-headline>-->
      <!--        <m-headline :size="MTypographySize.medium">-->
      <!--          Headline Medium - Roboto 28/36 . 0-->
      <!--        </m-headline>-->
      <!--        <m-headline :size="MTypographySize.small">-->
      <!--          Headline Small - Roboto 24/32 . 0-->
      <!--        </m-headline>-->
      <!--      </m-section>-->
      <!--      <m-section>-->
      <!--        <m-display :size="MTypographySize.large">-->
      <!--          Title-->
      <!--        </m-display>-->
      <!--        <m-title :size="MTypographySize.large">-->
      <!--          Title Large - Roboto Medium 22/28 . 0-->
      <!--        </m-title>-->
      <!--        <m-title :size="MTypographySize.medium">-->
      <!--          Title Medium - Roboto Medium 16/24 . +0.15-->
      <!--        </m-title>-->
      <!--        <m-title :size="MTypographySize.small">-->
      <!--          Title Small - Roboto Medium 14/20 . +0.1-->
      <!--        </m-title>-->
      <!--      </m-section>-->
      <!--      <m-section>-->
      <!--        <m-display :size="MTypographySize.large">-->
      <!--          Label-->
      <!--        </m-display>-->
      <!--        <m-label :size="MTypographySize.large">-->
      <!--          Label Large - Roboto Medium 14/20 . +0.1-->
      <!--        </m-label>-->
      <!--        <m-label :size="MTypographySize.medium">-->
      <!--          Label Medium - Roboto Medium 12/16 . +0.5-->
      <!--        </m-label>-->
      <!--        <m-label :size="MTypographySize.small">-->
      <!--          Label Small - Roboto Medium 11/16 . +0.5-->
      <!--        </m-label>-->
      <!--      </m-section>-->
      <!--      <m-section>-->
      <!--        <m-display :size="MTypographySize.large">-->
      <!--          Body-->
      <!--        </m-display>-->
      <!--        <m-body :size="MTypographySize.large">-->
      <!--          Body Large - Roboto 16/24 . +0.15-->
      <!--        </m-body>-->
      <!--        <m-body :size="MTypographySize.medium">-->
      <!--          Body Medium - Roboto 14/20 . +0.25-->
      <!--        </m-body>-->
      <!--        <m-body :size="MTypographySize.small">-->
      <!--          Body Small - Roboto 12/16 . +0.4-->
      <!--        </m-body>-->
      <!--      </m-section>-->
    </m-layout>
  </m-main>
</template>

<style lang="sass" scoped>
@use '@/lib/sass/theme'

.m-layout
  > .m-section
    *.banner
      padding: 48px

    + .m-section
      margin-top: 48px

    > .m-row
      + .m-row
        margin-top: 24px

    a
      @include theme.preferred
        color: theme.style(primary)

</style>