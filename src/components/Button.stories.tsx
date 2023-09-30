import type { StoryObj, Meta } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio'},
    },
    onClick: {
      action: 'clicked'
    }
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {  
  args: {
    variant: 'primary',
    label: "Primary"
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: "Secondary",
  },
};
