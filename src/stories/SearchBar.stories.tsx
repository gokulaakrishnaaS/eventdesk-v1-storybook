import type { Meta, StoryObj } from "@storybook/react";

import SearchBar from "../components/Base/SearchBar";

const meta: Meta<typeof SearchBar> = {
  title: "Components/SearchBar",
  component: SearchBar,
  tags: ["autodocs"],
  args: {
    placeholder: "Search Event...",
  },
};

export default meta;

type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {};

export const SmallGray: Story = {
  args: {
    size: "small",
    color: "gray",
  },
};

export const LargeBlue: Story = {
  args: {
    size: "large",
    color: "blue",
  },
};

export const MediumIndigo: Story = {
  args: {
    size: "medium",
    color: "indigo",
  },
};
