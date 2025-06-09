import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import DaisySteps from '../components/DaisySteps';

const meta: Meta<typeof DaisySteps> = {
  title: 'Daisy-components/DaisySteps',
  component: DaisySteps,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DaisySteps>;

export const Default: Story = {
  render: () => <DaisySteps />,
};
