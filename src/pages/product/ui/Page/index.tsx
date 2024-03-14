import { useParams } from 'react-router-dom';
import { ProductDetail } from 'widgets/ProductDetail';

export const ProductPage = () => {
    const { productId } = useParams();
    return <ProductDetail id={productId!} />;
};
