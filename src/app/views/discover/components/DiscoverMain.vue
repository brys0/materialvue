<!-- Copyright (C) 2022, CosmicMind, Inc. <http://cosmicmind.com>. All rights reserved. -->

<script lang="ts" setup>
import {
	AppMain,
} from '@/app/contexts/app/components/AppMain'

import {
	TypographySize,
	Display,
	Headline,
	Title,
	Label,
	Body,
} from '@/index'

</script>

<template>
  <AppMain>
    <div>
      <section class="banner">
        <Display :size="TypographySize.large">
          Typography
        </Display>
        <Body :size="TypographySize.large">
          See the <a
            href="https://m3.material.io/styles/typography/overview"
            target="_blank"
          >Design Guidelines</a>
        </Body>
      </section>
      <section>
        <Display :size="TypographySize.small">
          Display
        </Display>
        <div>
          <Display :size="TypographySize.large">
            Display Large - Roboto 57/64 . 0
          </Display>
          <Display :size="TypographySize.medium">
            Display Medium - Roboto 45/52 .  0
          </Display>
          <Display :size="TypographySize.small">
            Display Small - Roboto 36/44 . 0
          </Display>
        </div>
      </section>
      <section>
        <Display :size="TypographySize.small">
          Headline
        </Display>
        <div>
          <Headline :size="TypographySize.large">
            Headline Large - Roboto 32/40 . 0
          </Headline>
          <Headline :size="TypographySize.medium">
            Headline Medium - Roboto 28/36 . 0
          </Headline>
          <Headline :size="TypographySize.small">
            Headline Small - Roboto 24/32 . 0
          </Headline>
        </div>
      </section>
      <section>
        <Display :size="TypographySize.small">
          Title
        </Display>
        <div>
          <Title :size="TypographySize.large">
            Title Large - Roboto Medium 22/28 . 0
          </Title>
          <Title :size="TypographySize.medium">
            Title Medium - Roboto Medium 16/24 . +0.15
          </Title>
          <Title :size="TypographySize.small">
            Title Small - Roboto Medium 14/20 . +0.1
          </Title>
        </div>
      </section>
      <section>
        <Display :size="TypographySize.small">
          Label
        </Display>
        <div>
          <Label :size="TypographySize.large">
            Label Large - Roboto Medium 14/20 . +0.1
          </Label>
          <Label :size="TypographySize.medium">
            Label Medium - Roboto Medium 12/16 . +0.5
          </Label>
          <Label :size="TypographySize.small">
            Label Small - Roboto Medium 11/16 . +0.5
          </Label>
        </div>
      </section>
      <section>
        <Display :size="TypographySize.small">
          Body
        </Display>
        <div>
          <Body :size="TypographySize.large">
            Body Large - Roboto 16/24 . +0.15
          </Body>
          <Body :size="TypographySize.medium">
            Body Medium - Roboto 14/20 . +0.25
          </Body>
          <Body :size="TypographySize.small">
            Body Small - Roboto 12/16 . +0.4
          </Body>
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

    > .display:first-child
      padding: 24px 0

    > div
      > span
        padding: 12px

</style>