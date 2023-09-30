import { withThemeByClassName } from '@storybook/addon-themes';
import "../src/styles/globals.css";

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
  withThemeByClassName({
    themes: { light: "", dark: "dark" },
    defaultTheme: "light"
  })
]
