import type { Meta, StoryObj } from '@storybook/react';
import { NavLink } from './NavLink';
import 'app/index.css';

const meta: Meta<typeof NavLink> = {
    title: 'NavLink',
    component: NavLink,
    parameters: {
        backgrounds: { default: 'dark' },
    },
};
export default meta;
type Story = StoryObj<typeof NavLink>;

export const Default: Story = {
    args: {
        title: 'Ссылка',
        link: '#',
    },
};
