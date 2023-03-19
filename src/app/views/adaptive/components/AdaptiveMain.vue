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
	MDisplay,
	MLayout,
	MSection,
	MRow,
	MColumn,
	MTile,
} from '@/lib/vue'

</script>

<template>
  <m-main>
    <m-layout>
      <m-section class="full">
        <m-row>
          <m-column class="is-mobile-8 is-foldable-6 is-tablet-6 is-gt-tablet-4">
            <m-tile>
              <m-display>Content</m-display>
            </m-tile>
            <m-tile>
              <m-display>Content</m-display>
            </m-tile>
            <m-tile>
              <m-display>Content</m-display>
            </m-tile>
          </m-column>
          <m-column class="is-mobile-8 is-foldable-6 is-tablet-6 is-gt-tablet-4">
            <m-tile>
              <m-display>Content</m-display>
            </m-tile>
            <m-tile>
              <m-display>Content</m-display>
            </m-tile>
            <m-tile>
              <m-display>Content</m-display>
            </m-tile>
            <m-tile>
              <m-display>Content</m-display>
            </m-tile>
          </m-column>
          <m-column class="is-mobile-8 is-foldable-6 is-tablet-6 is-gt-tablet-4">
            <m-tile>
              <m-display>Content</m-display>
            </m-tile>
          </m-column>
          <m-column class="is-mobile-8 is-foldable-6 is-tablet-6 is-gt-tablet-12">
            <m-tile>
              <m-display>Content</m-display>
            </m-tile>
            <m-tile>
              <m-display>Content</m-display>
            </m-tile>
          </m-column>
        </m-row>
      </m-section>
      <m-section class="comfortable">
        <m-row>
          <m-column class="is-mobile-8 is-foldable-6 is-tablet-6 is-gt-tablet-4">
            <m-tile>
              <m-display>Content</m-display>
            </m-tile>
            <m-tile>
              <m-display>Content</m-display>
            </m-tile>
            <m-tile>
              <m-display>Content</m-display>
            </m-tile>
          </m-column>
          <m-column class="is-mobile-8 is-foldable-6 is-tablet-6 is-gt-tablet-4">
            <m-tile>
              <m-display>Content</m-display>
            </m-tile>
            <m-tile>
              <m-display>Content</m-display>
            </m-tile>
            <m-tile>
              <m-display>Content</m-display>
            </m-tile>
            <m-tile>
              <m-display>Content</m-display>
            </m-tile>
          </m-column>
          <m-column class="is-mobile-8 is-foldable-6 is-tablet-6 is-gt-tablet-4">
            <m-tile>
              <m-display>Content</m-display>
            </m-tile>
          </m-column>
          <m-column class="is-mobile-8 is-foldable-6 is-tablet-6 is-gt-tablet-12">
            <m-tile>
              <m-display>Content</m-display>
            </m-tile>
            <m-tile>
              <m-display>Content</m-display>
            </m-tile>
          </m-column>
        </m-row>
      </m-section>
      <m-section class="narrow">
        <m-row>
          <m-column class="is-mobile-8 is-foldable-6 is-tablet-6 is-gt-tablet-4">
            <m-tile>
              <m-display>Content</m-display>
            </m-tile>
            <m-tile>
              <m-display>Content</m-display>
            </m-tile>
            <m-tile>
              <m-display>Content</m-display>
            </m-tile>
          </m-column>
          <m-column class="is-mobile-8 is-foldable-6 is-tablet-6 is-gt-tablet-4">
            <m-tile>
              <m-display>Content</m-display>
            </m-tile>
            <m-tile>
              <m-display>Content</m-display>
            </m-tile>
            <m-tile>
              <m-display>Content</m-display>
            </m-tile>
            <m-tile>
              <m-display>Content</m-display>
            </m-tile>
          </m-column>
          <m-column class="is-mobile-8 is-foldable-6 is-tablet-6 is-gt-tablet-4">
            <m-tile>
              <m-display>Content</m-display>
            </m-tile>
          </m-column>
          <m-column class="is-mobile-8 is-foldable-6 is-tablet-6 is-gt-tablet-12">
            <m-tile>
              <m-display>Content</m-display>
            </m-tile>
            <m-tile>
              <m-display>Content</m-display>
            </m-tile>
          </m-column>
        </m-row>
      </m-section>
    </m-layout>
  </m-main>
</template>

<style lang="sass" scoped>
  @use '@/lib/sass/theme'

  .m-main
    // background: green

    .m-layout
      // background: blue

      .m-section
        // background: orange

        .m-row
          border-radius: 12px

          @include theme.preferred
              background: theme.style(elevation-1), theme.style(surface)

          .m-column
            border-radius: 12px
            background: orange

            // @include theme.preferred
            //   background: theme.style(elevation-2), theme.style(surface)

            .m-tile
              border-radius: 12px

              @include theme.preferred
                background: theme.style(elevation-3), theme.style(surface)

</style>