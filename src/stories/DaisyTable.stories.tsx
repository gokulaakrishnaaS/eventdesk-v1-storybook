import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import DaisyTable from '../components/DasiyTable';

const meta: Meta<typeof DaisyTable> = {
  title: 'Daisy-components/DaisyTable',
  component: DaisyTable,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DaisyTable>;

export const Default: Story = {
  render: () => <DaisyTable />,
};
