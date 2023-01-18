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
	NavigationDrawer,
	TypographyHeadline,
	TypographyLabel,
	Divider,
	List,
	ListItem,
	ListItemLeading,
	ListItemText,
	ListItemTrailing,
	RoundedIcon,
} from '@/lib/vue'

</script>

<template>
  <NavigationDrawer>
    <TypographyHeadline>
      Headline
    </TypographyHeadline>
    <List>
      <ListItem>
        <ListItemLeading>
          <RoundedIcon>
            mail
          </RoundedIcon>
        </ListItemLeading>
        <ListItemText>
          <TypographyLabel>
            Mail
          </TypographyLabel>
        </ListItemText>
        <ListItemTrailing>
          <TypographyLabel>
            100+
          </TypographyLabel>
        </ListItemTrailing>
      </ListItem>
      <ListItem>
        <ListItemLeading>
          <RoundedIcon>
            movie
          </RoundedIcon>
        </ListItemLeading>
        <ListItemText>
          <TypographyLabel>
            Videos
          </TypographyLabel>
        </ListItemText>
        <ListItemTrailing>
          <RoundedIcon>
            arrow_drop_down
          </RoundedIcon>
        </ListItemTrailing>
      </ListItem>
      <Divider />
    </List>
    <List>
      <ListItem>
        <ListItemLeading>
          <RoundedIcon>
            mail
          </RoundedIcon>
        </ListItemLeading>
        <ListItemText>
          <TypographyLabel>
            Mail
          </TypographyLabel>
        </ListItemText>
        <ListItemTrailing>
          <TypographyLabel>
            100+
          </TypographyLabel>
        </ListItemTrailing>
      </ListItem>
      <ListItem>
        <ListItemLeading>
          <RoundedIcon>
            movie
          </RoundedIcon>
        </ListItemLeading>
        <ListItemText>
          <TypographyLabel>
            Videos
          </TypographyLabel>
        </ListItemText>
        <ListItemTrailing>
          <RoundedIcon>
            arrow_drop_down
          </RoundedIcon>
        </ListItemTrailing>
      </ListItem>
    </List>
  </NavigationDrawer>
</template>