import { Meta, StoryObj } from "@storybook/nextjs-vite";
import InputElement from "./Input";


const meta = {
  title: 'Example/Input',
  component: InputElement,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof InputElement>;

export default meta;
type Story = StoryObj<typeof meta>;

export const small = {
  args:{
    size:"small",
    placeholder :"type"
  }
}
export const medium = {
    args:{
      size:"medium",
      placeholder :"type"
    }
}
export const large = () =>{
    return <InputElement size="large" placeholder="input"/>
}


