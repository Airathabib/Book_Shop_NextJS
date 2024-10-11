import Stars from '../stars/stars';
import { useAppDispatch, useAppSelector } from '@/utils/hooks';
import { addToCart } from '@/redux/booksSlice';
import Image from 'next/image';
import clsx from 'clsx';
import { ItemProps } from '@/interfaces/interfase';

import styles from './item.module.css';


export default function Item({ book }: ItemProps) {
    const dispatch = useAppDispatch();
    const { id, name, authors, description, price, currency, rating, image, reviews } = book;
    const isInCart = useAppSelector((state) => state.books.booksInCart.some((book) => book.id === id));
    const isLogged = useAppSelector((state) => state.auth.loggedIn);

    const handleClick = () => {
        if (isLogged) {
            dispatch(addToCart(book));
        } else {
            alert('Please log in to add items to cart');
        }
    }

    return (
        <div className={styles.card}>
            <Image className={styles.image} src={image ? image : "/book_default.png"} alt="book" width={213} height={300} />
            <div className={styles.infoContainer}>
                <p className={styles.author}>{authors != null ? authors.join(", ") : "No authors"}</p>
                <h2 className={styles.name}>{name}</h2>
                {rating || reviews &&
                    (<div className={styles.reviewContainer}>
                        <Stars rating={rating} id={id} />
                        <p className={styles.reviewCount}>{reviews}</p>
                    </div>)}

                <p className={styles.description}>{description}</p>
                {price &&
                    (<>
                        <p className={styles.price}>{price ? `${currency} ${price}` : 'no price'}</p>
                        <button className={clsx(styles.button,
                            { [styles.buttonPressed]: isInCart }
                        )} type="button" onClick={handleClick}>buy now</button>
                    </>)}

            </div>
        </div>
    )
}
