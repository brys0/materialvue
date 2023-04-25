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
	MBody,
	MLabel,
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
	MLayout,
	MSection,
	MRow,
	MColumn,
	MRoundedIcon,
	MCode,
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
                Buttons
              </m-display>
              <m-body :size="MTypographySize.large">
                <a
                  href="https://m3.material.io/components/buttons/overview"
                  target="_blank"
                >Design Guidelines</a>
              </m-body>
            </h1>
            <p>
              <m-headline>
                Buttons help users take action within your application.
              </m-headline>
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
                Elevated button
              </m-display>
            </h3>
          </m-column>
        </m-row>
        <m-row>
          <m-column>
            <m-elevated-button>
              <m-label>
                Enabled
              </m-label>
            </m-elevated-button>
          </m-column>
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
        </m-row>
        <m-row>
          <m-column class="is-6">
            <!--            <m-code-->
            <!--              language="html"-->
            <!--              code="<m-elevated-button>-->
            <!--  <m-rounded-icon>-->
            <!--    add_circle-->
            <!--  </m-rounded-icon>-->
            <!--  <m-label>-->
            <!--    Enabled-->
            <!--  </m-label>-->
            <!--</m-elevated-button>"-->
            <!--            />-->
          </m-column>
          <m-column class="is-6">
            <!--            <m-code-->
            <!--              language="html"-->
            <!--              code="<button>-->
            <!--  <span class='m-icon m-rounded'>-->
            <!--    add_circle-->
            <!--  </span>-->
            <!--  <span class='m-typography m-label'>-->
            <!--    Enabled-->
            <!--  </span>-->
            <!--</button>"-->
            <!--            />-->
          </m-column>
        </m-row>

        <m-row>
          <m-column class="is-12">
            <h3>
              <m-display :size="MTypographySize.small">
                Filled button
              </m-display>
            </h3>
          </m-column>
        </m-row>
        <m-row>
          <m-column>
            <m-filled-button>
              <m-label>
                Enabled
              </m-label>
            </m-filled-button>
          </m-column>
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
        </m-row>
        <m-row>
          <m-column class="is-6">
            <!--            <m-code-->
            <!--              language="html"-->
            <!--              code="<m-elevated-button>-->
            <!--  <m-rounded-icon>-->
            <!--    add_circle-->
            <!--  </m-rounded-icon>-->
            <!--  <m-label>-->
            <!--    Enabled-->
            <!--  </m-label>-->
            <!--</m-elevated-button>"-->
            <!--            />-->
          </m-column>
          <m-column class="is-6">
            <!--            <m-code-->
            <!--              language="html"-->
            <!--              code="<button>-->
            <!--  <span class='m-icon m-rounded'>-->
            <!--    add_circle-->
            <!--  </span>-->
            <!--  <span class='m-typography m-label'>-->
            <!--    Enabled-->
            <!--  </span>-->
            <!--</button>"-->
            <!--            />-->
          </m-column>
        </m-row>

        <m-row>
          <m-column class="is-12">
            <h3>
              <m-display :size="MTypographySize.small">
                Tonal button
              </m-display>
            </h3>
          </m-column>
        </m-row>
        <m-row>
          <m-column>
            <m-tonal-button>
              <m-label>
                Enabled
              </m-label>
            </m-tonal-button>
          </m-column>
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
        </m-row>
        <m-row>
          <m-column class="is-6">
            <m-code
              code="<m-elevated-button>
                <m-rounded-icon>
                  add_circle
                </m-rounded-icon>
                <m-label>
                  Enabled
                </m-label>
              </m-elevated-button>"
            />
          </m-column>
          <m-column class="is-6">
            <m-code>
              <m-elevated-button>
                <m-rounded-icon>
                  add_circle
                </m-rounded-icon>
                <m-label>
                  Enabled
                </m-label>
              </m-elevated-button>
            </m-code>
          </m-column>
        </m-row>

        <m-row>
          <m-column class="is-12">
            <h3>
              <m-display :size="MTypographySize.small">
                Outlined button
              </m-display>
            </h3>
          </m-column>
        </m-row>
        <m-row>
          <m-column>
            <m-outlined-button>
              <m-label>
                Enabled
              </m-label>
            </m-outlined-button>
          </m-column>
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
        </m-row>

        <m-row>
          <m-column class="is-12">
            <h3>
              <m-display :size="MTypographySize.small">
                Text button
              </m-display>
            </h3>
          </m-column>
        </m-row>
        <m-row>
          <m-column>
            <m-text-button>
              <m-label>
                Enabled
              </m-label>
            </m-text-button>
          </m-column>
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
        </m-row>

        <m-row>
          <m-column class="is-12">
            <h3>
              <m-display :size="MTypographySize.small">
                Icon button
              </m-display>
            </h3>
          </m-column>
        </m-row>
        <m-row>
          <m-column>
            <m-icon-button>
              <m-rounded-icon>
                add_circle
              </m-rounded-icon>
            </m-icon-button>
          </m-column>
          <m-column>
            <m-icon-button>
              <m-rounded-icon>
                add_circle
              </m-rounded-icon>
            </m-icon-button>
          </m-column>
        </m-row>

        <m-row>
          <m-column class="is-12">
            <h3>
              <m-display :size="MTypographySize.small">
                Filled icon button
              </m-display>
            </h3>
          </m-column>
        </m-row>
        <m-row>
          <m-column>
            <m-filled-icon-button>
              <m-rounded-icon>
                add_circle
              </m-rounded-icon>
            </m-filled-icon-button>
          </m-column>
          <m-column>
            <m-filled-icon-button>
              <m-rounded-icon>
                add_circle
              </m-rounded-icon>
            </m-filled-icon-button>
          </m-column>
        </m-row>

        <m-row>
          <m-column class="is-12">
            <h3>
              <m-display :size="MTypographySize.small">
                Tonal icon button
              </m-display>
            </h3>
          </m-column>
        </m-row>
        <m-row>
          <m-column>
            <m-tonal-icon-button>
              <m-rounded-icon>
                add_circle
              </m-rounded-icon>
            </m-tonal-icon-button>
          </m-column>
          <m-column>
            <m-tonal-icon-button>
              <m-rounded-icon>
                add_circle
              </m-rounded-icon>
            </m-tonal-icon-button>
          </m-column>
        </m-row>

        <m-row>
          <m-column class="is-12">
            <h3>
              <m-display :size="MTypographySize.small">
                Outlined icon button
              </m-display>
            </h3>
          </m-column>
        </m-row>
        <m-row>
          <m-column>
            <m-outlined-icon-button>
              <m-rounded-icon>
                add_circle
              </m-rounded-icon>
            </m-outlined-icon-button>
          </m-column>
          <m-column>
            <m-outlined-icon-button>
              <m-rounded-icon>
                add_circle
              </m-rounded-icon>
            </m-outlined-icon-button>
          </m-column>
        </m-row>

        <m-row>
          <m-column class="is-12">
            <h3>
              <m-display :size="MTypographySize.small">
                Floating action button (FAB)
              </m-display>
            </h3>
          </m-column>
        </m-row>
        <m-row>
          <m-column>
            <m-fab-button>
              <m-rounded-icon>
                edit
              </m-rounded-icon>
            </m-fab-button>
          </m-column>
          <m-column>
            <m-fab-button>
              <m-rounded-icon>
                edit
              </m-rounded-icon>
            </m-fab-button>
          </m-column>
        </m-row>

        <m-row>
          <m-column class="is-12">
            <h3>
              <m-display :size="MTypographySize.small">
                Extended floating action button (FAB)
              </m-display>
            </h3>
          </m-column>
        </m-row>
        <m-row>
          <m-column>
            <m-extended-fab-button>
              <m-label>
                Compose
              </m-label>
            </m-extended-fab-button>
          </m-column>
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
        </m-row>
      </m-section>
    </m-layout>
  </m-main>
</template>

<style lang="sass" scoped>
@use '@/lib/sass/theme'

.m-layout
  padding: 56px

  @include theme.preferred
    background: theme.style(elevation-1), theme.style(surface)

.m-section
  a
    @include theme.preferred
      color: theme.style(primary)

</style>