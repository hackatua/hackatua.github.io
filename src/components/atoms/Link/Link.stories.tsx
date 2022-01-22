import React from 'react'
import { ComponentStory } from '@storybook/react'

import { Link } from './'

export default {
  component: Link,
  title: 'atoms/Link',
}

const Template: ComponentStory<typeof Link> = props => <Link {...props} />

export const Default = Template.bind({})
Default.args = {
  children: 'A link to a page',
  to: '/an/url',
}

export const Active = Template.bind({})
Active.args = {
  children: 'A link to a page',
  to: '/an/url',
  className: 'active',
}

export const HideUnderline = Template.bind({})
HideUnderline.args = {
  children: 'A link to a page',
  to: '/an/url',
  hideUnderline: true,
}
