import { ComponentStory } from "@storybook/react"

import { WikiBreadcrumb } from "./WikiBreadcrumb"

export default {
  component: WikiBreadcrumb,
  title: "Components/WikiBreadcrumb",
}

const Template: ComponentStory<typeof WikiBreadcrumb> = ({ ...args }) => (
  <WikiBreadcrumb {...args} />
)

export const Default = Template.bind({})
Default.args = {
  slug: "/wiki/linux/02-text-manipulation/",
}
