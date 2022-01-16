import { Header } from "./Header"

export default {
  component: Header,
  title: "Components/Header",
}

const Template = ({ children, ...args }) => (
  <Header {...args}>{children}</Header>
)

export const Default = Template.bind({})
Default.args = {
  children: "./Hackatua",
}
