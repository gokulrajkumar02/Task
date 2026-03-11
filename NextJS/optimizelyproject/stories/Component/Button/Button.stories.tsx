import Button from "./Button";

const meta = {
  title: 'Example/NewButton',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    backgroundColor: { control: "text" },
      size: { control: "select" },

  },
} 
export default meta;


export const Primary  = {
  args:{
    variant :"primary",
    color : "white",
    children:"Primary"
  }

    // return <Button variant="primary" color="white">Primary</Button>
}
export const Secondary  = () => {
    return <Button variant="secondary" color="blue">Secondary</Button>
}
export const Success = () => {
    return <Button variant="success" color="white">Success</Button>
}
