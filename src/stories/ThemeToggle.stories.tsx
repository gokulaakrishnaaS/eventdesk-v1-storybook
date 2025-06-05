import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import ThemeToggle from "../components/ThemeToggle";

// Story metadata
const meta: Meta<typeof ThemeToggle> = {
  title: "Components/ThemeToggle",
  component: ThemeToggle,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof ThemeToggle>;

// Default story
export const Default: Story = {
  render: () => (
    <div className="p-8">
      <p className="mb-4 text-lg font-semibold">Toggle Theme</p>
      <ThemeToggle />
    </div>
  ),
};
