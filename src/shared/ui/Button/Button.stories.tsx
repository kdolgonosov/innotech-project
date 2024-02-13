import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import 'app/index.css';

const meta: Meta<typeof Button> = {
    title: 'Button',
    component: Button,
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Accent: Story = {
    args: {
        type: 'accent',
        title: 'Кнопка',
    },
};
export const Gray: Story = {
    args: {
        type: 'gray',
        title: 'Кнопка',
    },
};
export const Ghost: Story = {
    args: {
        type: 'ghost',
        title: 'Кнопка',
    },
};
export const Clear: Story = {
    args: {
        type: 'clear',
        title: 'Кнопка',
    },
};
