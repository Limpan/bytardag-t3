import type { StoryObj, Meta } from "@storybook/react";

import TagCreationForm from "./TagCreationForm";

const meta: Meta<typeof TagCreationForm> = {
  component: TagCreationForm,
};

export default meta;
type Story = StoryObj<typeof TagCreationForm>;

export const Default: Story = {
  args: {
    sheetId: "asas",
    sellerIds: ["A-03", "A-05", "B-03", "B-07", "B-11"],
    halfPrice: false,
  },
};
