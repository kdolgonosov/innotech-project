import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import 'app/index.css';

const meta: Meta<typeof Input> = {
    title: 'Input',
    component: Input,
};
export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
    args: {
        placeholder: 'Поле ввода',
    },
};
