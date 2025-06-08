import React, { useEffect } from "react";
import type { ReactNode } from "react";

import TestPage from "../pages/TestPage";
import type { Meta, StoryObj } from "@storybook/react";

// Utility: Set HTML root theme
const applyTheme = (theme: string) => {
  document.documentElement.setAttribute("data-theme", theme);
};

// Story metadata
const meta: Meta<typeof TestPage> = {
  title: "Pages/TestPage",
  component: TestPage,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    theme: {
      control: { type: "radio" },
      options: ["light", "synthwave"],
      description: "Switch between DaisyUI themes",
    },
  },
};

export default meta;

// Extend Story to include theme as a story arg (even if it's not a prop of TestPage)
type Story = StoryObj<{ theme: string }>;

// Wrapper component to apply theme
const ThemeWrapper: React.FC<{ theme: string; children: ReactNode }> = ({
  theme,
  children,
}) => {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return <>{children}</>;
};

// Default story
export const Default: Story = {
  args: {
    theme: "light", // default theme
  },
  render: ({ theme }) => (
    <ThemeWrapper theme={theme}>
      <TestPage />
    </ThemeWrapper>
  ),
};
