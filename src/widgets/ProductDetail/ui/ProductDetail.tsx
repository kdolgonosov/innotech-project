import styles from './ProductDetail.module.css';
import { SectionLayout } from 'shared/ui';
import { useGetProductQuery } from '../model/api';

import { Rating } from 'react-simple-star-rating';
import ImageGallery from 'react-image-gallery';
import './image-gallery.scss';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

type Props = {
    id: string;
};

export const ProductDetail = (props: Props) => {
    const { data, error, isLoading, isFetching } = useGetProductQuery({ id: props.id });

    // Паттерн: адаптер
    const transformImages = (arr: string[]) => {
        return arr.map((image: string) => {
            return {
                original: image,
                thumbnail: image,
                originalClass: styles.sliderImg,
                thumbnailClass: styles.sliderThumbnail,
            };
        });
    };
    if (error) return <p>Ошибка!</p>;
    return (
        <section className={styles.productDetail}>
            <SectionLayout>
                <h1 className={styles.title}>Product {props.id}</h1>
                {isLoading || isFetching ? (
                    <>
                        <div className={styles.wrapper}>
                            <Skeleton height={508} width={520} />
                            <div className={styles.description}>
                                <div className={styles.description_header}>
                                    <Skeleton
                                        height={34}
                                        width={100}
                                        className={styles.description_title}
                                    />
                                    <div className={styles.techs_item}>
                                        <span className={styles.techs_item_title}>SKU ID</span>

                                        <Skeleton height={20} width={40} />
                                    </div>
                                </div>
                                <ul className={styles.techs}>
                                    <li className={styles.techs_item}>
                                        <span className={styles.techs_item_title}>Rating</span>

                                        <Skeleton height={30} width={40} />
                                    </li>
                                    <li className={styles.techs_item}>
                                        <span className={styles.techs_item_title}>Base price</span>
                                        <Skeleton height={20} width={40} />
                                    </li>
                                    <li className={styles.techs_item}>
                                        <span className={styles.techs_item_title}>
                                            Discount percentage
                                        </span>
                                        <Skeleton height={20} width={40} />
                                    </li>
                                    <li className={styles.techs_item}>
                                        <span className={styles.techs_item_title}>
                                            Discount price
                                        </span>
                                        <Skeleton height={20} width={40} />
                                    </li>
                                    <li className={styles.techs_item}>
                                        <span className={styles.techs_item_title}>Stock</span>
                                        <Skeleton height={20} width={40} />
                                    </li>
                                    <li className={styles.techs_item}>
                                        <span className={styles.techs_item_title}>Brand</span>
                                        <Skeleton height={20} width={40} />
                                    </li>
                                    <li className={styles.techs_item}>
                                        <span className={styles.techs_item_title}>Category</span>
                                        <Skeleton height={20} width={40} />
                                    </li>
                                    <li className={styles.techs_item}>
                                        <span className={styles.techs_item_title}>Description</span>
                                        <Skeleton height={20} width={300} />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </>
                ) : (
                    // <p>Loading</p>
                    <div className={styles.wrapper}>
                        <ImageGallery
                            items={transformImages(data.images)}
                            showFullscreenButton={false}
                            showPlayButton={false}
                            showNav={false}
                            additionalClass={styles.slider}
                        />
                        <div className={styles.description}>
                            <div className={styles.description_header}>
                                <h2 className={styles.description_title}>{data.title}</h2>
                                <div className={styles.techs_item}>
                                    <span className={styles.techs_item_title}>SKU ID</span>
                                    <span className={styles.techs_item_text}>
                                        {props.id.padStart(4, '0')}
                                    </span>
                                </div>
                            </div>
                            <ul className={styles.techs}>
                                <li className={styles.techs_item}>
                                    <span className={styles.techs_item_title}>Rating</span>
                                    <span className={styles.techs_item_text}>
                                        <Rating
                                            initialValue={data.rating}
                                            size={22}
                                            readonly
                                            allowFraction
                                        />
                                    </span>
                                </li>
                                <li className={styles.techs_item}>
                                    <span className={styles.techs_item_title}>Base price</span>
                                    <span className={styles.techs_item_text}>
                                        {data.price}&#36;
                                    </span>
                                </li>
                                <li className={styles.techs_item}>
                                    <span className={styles.techs_item_title}>
                                        Discount percentage
                                    </span>
                                    <span className={styles.techs_item_text}>
                                        {Math.trunc(data.discountPercentage)}&#37;
                                    </span>
                                </li>
                                <li className={styles.techs_item}>
                                    <span className={styles.techs_item_title}>Discount price</span>
                                    <span className={styles.techs_item_text}>
                                        {Math.trunc(
                                            data.price * (1 - data.discountPercentage / 100),
                                        )}
                                        &#36;
                                    </span>
                                </li>
                                <li className={styles.techs_item}>
                                    <span className={styles.techs_item_title}>Stock</span>
                                    <span className={styles.techs_item_text}>{data.stock}</span>
                                </li>
                                <li className={styles.techs_item}>
                                    <span className={styles.techs_item_title}>Brand</span>
                                    <span className={styles.techs_item_text}>{data.brand}</span>
                                </li>
                                <li className={styles.techs_item}>
                                    <span className={styles.techs_item_title}>Category</span>
                                    <span className={styles.techs_item_text}>{data.category}</span>
                                </li>
                                <li className={styles.techs_item}>
                                    <span className={styles.techs_item_title}>Description</span>
                                    <span className={styles.techs_item_text}>
                                        {data.description}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                )}
            </SectionLayout>
        </section>
    );
};
