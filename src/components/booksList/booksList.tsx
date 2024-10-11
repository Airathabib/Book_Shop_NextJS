import Item from '@/components/item/item'
import { BooksListProps } from '@/interfaces/interfase'

import styles from './booksList.module.css'


export default function BooksList({ books }: BooksListProps) {
    return (
        <section className={styles.container}>
            {books.map((book, index) => (
                <Item key={index} book={book} />
            ))}
        </section>
    )
}
