import type { StoryFn, Meta } from "@storybook/react";

import Event from "./Event";
import { NextIntlClientProvider } from "next-intl";

export default {
  component: Event,
  args: {
    eventStart: new Date(Date.UTC(2024, 4, 16, 7, 30)),
    eventEnd: new Date(Date.UTC(2024, 4, 16, 11, 0)),
    signupStart: new Date(Date.UTC(2024, 3, 25, 7, 0)),
    signupEnd: new Date(Date.UTC(2024, 4, 11, 0, 0)),
  },
} as Meta<typeof Event>;

const Template: StoryFn<typeof Event> = (args) => <NextIntlClientProvider locale="sv-SE"><Event {...args} /></NextIntlClientProvider>;

export const Default = Template.bind({});
Default.args = {};
