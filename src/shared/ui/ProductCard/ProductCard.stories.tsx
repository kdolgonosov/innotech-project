import type { Meta, StoryObj } from '@storybook/react';
import { ProductCard } from './ProductCard';
import ProductImg from 'assets/product-sneakers-1.jpg';
import 'app/index.css';

const meta: Meta<typeof ProductCard> = {
    title: 'ProductCard',
    component: ProductCard,
};
export default meta;
type Story = StoryObj<typeof ProductCard>;

export const Default: Story = {
    args: {
        img: ProductImg,
        title: 'Кроссовки',
        price: '110',
    },
};
