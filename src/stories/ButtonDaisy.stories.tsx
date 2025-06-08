// src/components/Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import Button from '../components/ButtonDaisy';

const meta: Meta<typeof Button> = {
  title: 'Daisy-Components/Button',
  component: Button,
  tags: ['autodocs'], // optional, helps Storybook autogenerate docs
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {};
