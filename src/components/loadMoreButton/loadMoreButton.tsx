import { LoadMoreButtonProps } from '@/interfaces/interfase';

import styles from './loadMoreButton.module.css'


export default function LoadMoreButton({ setPage }: LoadMoreButtonProps) {

    const handleClick = () => {
        setPage((prev) => prev + 1);
    }

    return (
        <button className={styles.button} type="button" onClick={handleClick}>
            load more
        </button>
    )
}
