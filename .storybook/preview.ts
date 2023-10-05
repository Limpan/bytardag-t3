import { withThemeByClassName } from '@storybook/addon-themes';
import { initialize, mswDecorator } from 'msw-storybook-addon'; 

// Tailwind CSS
import "../src/styles/globals.css";
import { SetupDecorator } from './decorators';

// Initialize MSW
initialize({
  onUnhandledRequest: 'bypass',
})

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  mswDecorator,
  withThemeByClassName({
    themes: { light: "", dark: "dark" },
    defaultTheme: "light"
  }),
  SetupDecorator
]
