import { ComponentStory } from "@storybook/react"

import { WikiContent } from "./WikiContent"

export default {
  component: WikiContent,
  title: "Components/WikiContent",
}

const Template: ComponentStory<typeof WikiContent> = ({ ...args }) => (
  <WikiContent {...args} />
)

export const Default = Template.bind({})
Default.args = {
  content: [
    {
      path: "/wiki/nmap/",
      title: "Nmap",
      nodes: [],
    },
    {
      path: "/wiki/linux/",
      title: "Linux Fundamentals",
      nodes: [
        {
          path: "/wiki/linux/01-the-basics/",
          title: "1. The Basics",
          nodes: [],
        },
        {
          path: "/wiki/linux/02-text-manipulation/",
          title: "2. Text Manipulation",
          nodes: [],
        },
      ],
    },
  ],
}
