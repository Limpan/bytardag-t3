import type { StoryObj, Meta } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Custom text",
  },
};

export const Secondary: Story = {
  args: {
    primary: false,
    label: "Custom text",
  },
};
