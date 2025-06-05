import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import CalendarRangePicker from '../components/CalendarRangePicker';

const meta: Meta<typeof CalendarRangePicker> = {
  title: 'Components/CalendarRangePicker',
  component: CalendarRangePicker,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CalendarRangePicker>;

export const Default: Story = {
  render: () => <CalendarRangePicker />,
};
