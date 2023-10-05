import type { StoryObj, Meta } from "@storybook/react";

import { defaultQ } from '../../tests/msw/handlers/event';
import EventCreationForm from "./EventCreationForm";

const meta: Meta<typeof EventCreationForm> = {
  component: EventCreationForm,
  argTypes: { onSubmit: { action: 'submitted' } },
};

export default meta;
type Story = StoryObj<typeof EventCreationForm>;

export const Default: Story = {};
Default.parameters = {
  msw: {
    handlers: [defaultQ()]
  }
}