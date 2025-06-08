import type { Meta, StoryObj } from '@storybook/react';
import DaisyThemeToggle from '../components/DaisyThemeToggle';

const meta: Meta<typeof DaisyThemeToggle> = {
  title: 'Daisy-components/DaisyThemeToggle',
  component: DaisyThemeToggle,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DaisyThemeToggle>;

export const Default: Story = {
  render: () => <DaisyThemeToggle />,
};
