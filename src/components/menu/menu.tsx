import { menuItems } from '@/utils/constants';
import clsx from 'clsx';
import { useAppDispatch, useAppSelector } from '@/utils/hooks';
import { setFilter } from '@/redux/booksSlice';
import { Props } from '@/interfaces/interfase';

import styles from './menu.module.css'


export default function Menu({setPage}: Props) {
    const dispatch = useAppDispatch();
    const filter = useAppSelector((state) => state.books.filter);
    const handleMenuClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const target = e.target as HTMLButtonElement;
        const type = target.dataset.type;
        setPage(1);
        dispatch(setFilter(type as string));
    }

    return (
            <ul className={styles.menu}>
                {menuItems.map((item, index) => (
                    <li key={index} className={clsx(styles.menuItem,
                        {[styles.itemSelected]: item === filter}
                    )}><button className={styles.menuButton} type="button"
                        data-type={item} onClick={handleMenuClick}>{item}</button></li>
                ))}
            </ul>
    )
}
