import React from 'react'
import Image from 'next/image'
import Stars from '@/components/stars/stars'
import CountButtons from '@/components/countButtons/countButtons'
import { BookInCart, CartItemProps } from '@/interfaces/interfase'
import { addOneItem, removeOneItem } from '@/redux/booksSlice'
import { useAppDispatch, useAppSelector } from '@/utils/hooks'

import styles from './cartItem.module.css'

export default function CartItem({ book }: CartItemProps) {
    const { name, authors, rating, reviews, price, currency, quantity, deliveryStatus, image, id } = book;
    const dispatch = useAppDispatch();
    const isLogged = useAppSelector((state) => state.auth.loggedIn);

    const handleAdd = (): void => {
        if (!isLogged) {
            alert("Please log in to add items to cart");
            return;
        }
        dispatch(addOneItem(id));
    }

    const handleRemove = (): void => {
        if (!isLogged) {
            alert("Please log in to remove items from cart");
            return;
        }
        dispatch(removeOneItem(id));
    }
    
    return (
        <>
            <div className={styles.card}>
                <Image className={styles.image} src={image ? image : "/book_default.png"} alt="book" width={102} height={145} />
                <div className={styles.infoContainer}>
                    <h2 className={styles.bookName}>{name}</h2>
                    <p className={styles.author}>{authors.join(", ")}</p>
                    {rating || reviews && 
                    <div className={styles.reviewContainer}>
                        <Stars rating={rating} id={id} />
                        <p className={styles.reviewCount}>{reviews} review(s)</p>
                    </div>}
                </div>
            </div>
            <CountButtons quantity={quantity} add={handleAdd} remove={handleRemove} />
            <p className={styles.priceInfo}>{price ? `${currency} ${price}`: "no price"}</p>
            <p className={styles.deliveryinfo}>{deliveryStatus}</p>
        </>
    )
}
