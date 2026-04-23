import type { Preview } from "@storybook/react-vite";
import { withThemeByDataAttribute } from "@storybook/addon-themes";
import "@ecru/core/styles.css";

const preview: Preview = {
  parameters: {
    controls: { expanded: true },
    backgrounds: { disable: true },
    a11y: { test: "todo" }
  },
  globalTypes: {
    brand: {
      description: "Active brand",
      defaultValue: "ecru",
      toolbar: {
        title: "Brand",
        icon: "paintbrush",
        items: [{ value: "ecru", title: "Ecru" }],
        dynamicTitle: true
      }
    }
  },
  decorators: [
    withThemeByDataAttribute({
      themes: { light: "light", dark: "dark" },
      defaultTheme: "light",
      attributeName: "data-theme"
    }),
    (Story, ctx) => {
      if (typeof document !== "undefined") {
        document.documentElement.setAttribute("data-brand", ctx.globals.brand ?? "ecru");
      }
      return Story();
    }
  ]
};

export default preview;
