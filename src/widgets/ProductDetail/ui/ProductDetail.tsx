import styles from './ProductDetail.module.css';
import { Button, Input, SectionLayout } from 'shared/ui';
import { useGetProductQuery, useUpdateProductMutation } from 'shared/model/api';
import { Rating } from 'react-simple-star-rating';
import ImageGallery from 'react-image-gallery';
import './image-gallery.scss';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useState, MouseEvent, ChangeEvent } from 'react';
import { IProduct } from 'shared/model/interface';

type Props = {
    id: string;
};

export const ProductDetail = (props: Props) => {
    const [isEditing, setIsEditing] = useState(false);
    const { data, error, isLoading, isFetching } = useGetProductQuery({
        id: props.id,
    });
    const [formData, setFormData] = useState<Partial<IProduct>>({});
    const handleChangeFormData = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

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
    const [
        updateProduct,
        { isLoading: isUpdating, isError: isUpdateError, isSuccess: isUpdateSuccess },
    ] = useUpdateProductMutation();
    const handleSaveProduct = (e: MouseEvent<HTMLButtonElement>) => {
        updateProduct({ id: props.id, ...formData });
        setIsEditing(false);
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
                                <li
                                    className={`${styles.techs_item} ${
                                        isEditing && styles.techs_item_editing
                                    }`}
                                >
                                    <span className={styles.techs_item_title}>Base price</span>
                                    {isEditing ? (
                                        <Input
                                            name='price'
                                            type='number'
                                            placeholder='Base price'
                                            value={
                                                formData.price !== undefined
                                                    ? formData.price
                                                    : data.price
                                            }
                                            onChange={handleChangeFormData}
                                            addStyle={{ width: '384px' }}
                                        />
                                    ) : (
                                        <span className={styles.techs_item_text}>
                                            {data.price}
                                            &#36;
                                        </span>
                                    )}
                                </li>
                                <li
                                    className={`${styles.techs_item} ${
                                        isEditing && styles.techs_item_editing
                                    }`}
                                >
                                    <span className={styles.techs_item_title}>
                                        Discount percentage
                                    </span>
                                    {isEditing ? (
                                        <Input
                                            name='discountPercentage'
                                            type='number'
                                            placeholder='Discount percentage'
                                            value={
                                                formData.discountPercentage !== undefined
                                                    ? formData.discountPercentage
                                                    : data.discountPercentage
                                            }
                                            onChange={handleChangeFormData}
                                            addStyle={{ width: '384px' }}
                                        />
                                    ) : (
                                        <span className={styles.techs_item_text}>
                                            {Math.trunc(data.discountPercentage)}&#37;
                                        </span>
                                    )}
                                </li>
                                <li
                                    className={`${styles.techs_item} ${
                                        isEditing && styles.techs_item_editing
                                    }`}
                                >
                                    <span className={styles.techs_item_title}>Discount price</span>
                                    <span
                                        className={`${styles.techs_item_text} ${styles.techs_item_text_type_percentage}`}
                                    >
                                        {isEditing
                                            ? Math.trunc(
                                                  (formData.price !== undefined
                                                      ? formData.price
                                                      : data.price) *
                                                      (1 -
                                                          (formData.discountPercentage !== undefined
                                                              ? formData.discountPercentage
                                                              : data.discountPercentage) /
                                                              100),
                                              )
                                            : Math.trunc(
                                                  data.price * (1 - data.discountPercentage / 100),
                                              )}
                                        &#36;
                                    </span>
                                </li>
                                <li
                                    className={`${styles.techs_item} ${
                                        isEditing && styles.techs_item_editing
                                    }`}
                                >
                                    <span className={styles.techs_item_title}>Stock</span>
                                    {isEditing ? (
                                        <Input
                                            name='stock'
                                            type='number'
                                            placeholder='Stock'
                                            value={
                                                formData.stock !== undefined
                                                    ? formData.stock
                                                    : data.stock
                                            }
                                            onChange={handleChangeFormData}
                                            addStyle={{ width: '384px' }}
                                        />
                                    ) : (
                                        <span className={styles.techs_item_text}>{data.stock}</span>
                                    )}
                                </li>
                                <li
                                    className={`${styles.techs_item} ${
                                        isEditing && styles.techs_item_editing
                                    }`}
                                >
                                    <span className={styles.techs_item_title}>Brand</span>
                                    {isEditing ? (
                                        <Input
                                            name='brand'
                                            type='text'
                                            placeholder='Brand'
                                            value={
                                                formData.brand !== undefined
                                                    ? formData.brand
                                                    : data.brand
                                            }
                                            onChange={handleChangeFormData}
                                            addStyle={{ width: '384px' }}
                                        />
                                    ) : (
                                        <span className={styles.techs_item_text}>{data.brand}</span>
                                    )}
                                </li>
                                <li
                                    className={`${styles.techs_item} ${
                                        isEditing && styles.techs_item_editing
                                    }`}
                                >
                                    <span className={styles.techs_item_title}>Category</span>
                                    {isEditing ? (
                                        <Input
                                            name='category'
                                            type='text'
                                            placeholder='Category'
                                            value={
                                                formData.category !== undefined
                                                    ? formData.category
                                                    : data.category
                                            }
                                            onChange={handleChangeFormData}
                                            addStyle={{ width: '384px' }}
                                        />
                                    ) : (
                                        <span className={styles.techs_item_text}>
                                            {data.category}
                                        </span>
                                    )}
                                </li>
                                <li
                                    className={`${styles.techs_item} ${
                                        isEditing && styles.techs_item_editing
                                    }`}
                                >
                                    <span className={styles.techs_item_title}>Description</span>
                                    {isEditing ? (
                                        <Input
                                            name='description'
                                            type='text'
                                            placeholder='Description'
                                            value={
                                                formData.description !== undefined
                                                    ? formData.description
                                                    : data.description
                                            }
                                            onChange={handleChangeFormData}
                                            addStyle={{ width: '384px' }}
                                        />
                                    ) : (
                                        <span className={styles.techs_item_text}>
                                            {data.description}
                                        </span>
                                    )}
                                </li>
                            </ul>

                            {isEditing ? (
                                <Button
                                    type='accent'
                                    title='Save'
                                    addStyle={{ width: '300px', marginTop: '67px' }}
                                    // disabled={isUpdating}
                                    onClick={handleSaveProduct}
                                />
                            ) : (
                                <Button
                                    type='accent'
                                    title='Edit'
                                    addStyle={{ width: '300px', marginTop: '67px' }}
                                    disabled={isUpdating}
                                    onClick={() => setIsEditing(true)}
                                />
                            )}
                            {isUpdating && <p className={styles.status_caption}>Обновление...</p>}
                            {isUpdateError && !isEditing && (
                                <p
                                    className={`${styles.status_caption} ${styles.status_caption_type_error}`}
                                >
                                    Ошибка!
                                </p>
                            )}
                            {isUpdateSuccess && !isEditing && (
                                <p
                                    className={`${styles.status_caption} ${styles.status_caption_type_success}`}
                                >
                                    Данные успешно сохранены
                                </p>
                            )}
                        </div>
                    </div>
                )}
            </SectionLayout>
        </section>
    );
};
