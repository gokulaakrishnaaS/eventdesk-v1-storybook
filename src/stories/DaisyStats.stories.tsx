import type { Meta, StoryObj } from '@storybook/react';
import DaisyStats from '../components/DaisyStats';

const meta: Meta<typeof DaisyStats> = {
  title: 'Daisy-components/DaisyStats',
  component: DaisyStats,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DaisyStats>;

export const Default: Story = {
  render: () => <DaisyStats />,
};
