import React from 'react';

import type { StoryFn, Meta } from '@storybook/react';

import Button from './Button';

export default {
  title: 'Button',
  component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Custom text'
}

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Custom text'
}