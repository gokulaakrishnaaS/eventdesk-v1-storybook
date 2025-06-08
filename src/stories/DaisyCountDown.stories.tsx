import type { Meta, StoryObj } from '@storybook/react';
import DaisyCountDown from '../components/DaisyCountDown';

const meta: Meta<typeof DaisyCountDown> = {
  title: 'Daisy-components/DaisyCountDown',
  component: DaisyCountDown,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DaisyCountDown>;

export const Default: Story = {
  render: () => <DaisyCountDown />,
};
