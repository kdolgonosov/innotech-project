import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';
import 'app/index.css';

const meta: Meta<typeof Accordion> = {
    title: 'Accordion',
    component: Accordion,
};
export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
    args: {
        question: 'Question',
        answer: 'Extremely long answer',
    },
};
