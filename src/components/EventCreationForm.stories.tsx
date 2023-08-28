import type { StoryObj, Meta } from "@storybook/react";

import EventCreationForm from "./EventCreationForm";

const meta: Meta<typeof EventCreationForm> = {
  component: EventCreationForm,
  argTypes: { onSubmit: { action: "clicked" } },
};

export default meta;
type Story = StoryObj<typeof EventCreationForm>;

export const Default: Story = {};
