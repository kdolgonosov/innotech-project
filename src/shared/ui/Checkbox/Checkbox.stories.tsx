import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';
import 'app/index.css';

const meta: Meta<typeof Checkbox> = {
    title: 'Checkbox',
    component: Checkbox,
};
export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
    args: {
        title: 'Подпись',
    },
};
