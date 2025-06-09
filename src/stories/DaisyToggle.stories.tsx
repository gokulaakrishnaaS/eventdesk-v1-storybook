import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import DaisyToggle from '../components/DaisyToggle';

const meta: Meta<typeof DaisyToggle> = {
  title: 'Daisy-Components/DaisyToggle',
  component: DaisyToggle,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DaisyToggle>;

export const Default: Story = {
  render: () => (
    <DaisyToggle onToggleClick={(checked) => console.log('Toggle state:', checked)} />
  ),
};
