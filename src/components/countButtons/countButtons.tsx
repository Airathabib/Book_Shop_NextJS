import { CountButtonsProps } from '@/interfaces/interfase';
import Image from 'next/image';

import styles from './countButtons.module.css';


export default function CountButtons({quantity, add, remove}: CountButtonsProps) {
    return (
        <div className={styles.countContainer}>
            <button className={styles.countButton} onClick={remove}>
                <Image className={styles.image} src="/remove_button.png" alt="remove"  width={14} height={17}/>
            </button>
            <span className={styles.countText}>{quantity}</span>
            <button className={styles.countButton} onClick={add}>
                <Image className={styles.image} src="/add_button.png" alt="add"  width={14} height={17} />
            </button>
        </div>
    )
}
