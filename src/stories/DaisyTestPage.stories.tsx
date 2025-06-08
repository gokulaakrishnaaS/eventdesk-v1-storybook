import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import DaisyTestPage from '../pages/DaisyTestPages';

const meta: Meta<typeof DaisyTestPage> = {
  title: 'Pages/DaisyTestPage',
  component: DaisyTestPage,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DaisyTestPage>;

export const Default: Story = {
  render: () => <DaisyTestPage />,
};
