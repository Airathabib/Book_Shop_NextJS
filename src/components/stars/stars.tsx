import { StarsProps } from '@/interfaces/interfase';

import styles from './stars.module.css';


export default function Stars({ rating, id }: StarsProps) {

    const renderStars = () => {
        let stars = [];
        for (let i = 0; i < 5; i++) {
            const fillPercentage = (rating > i) ? (rating > i + 1 ? "100%" : `${(rating - i) * 100}%`) : "0%";
            const gradientId = `${id}${i}`;
            const colorpathId = `${id}${i}`;

            stars.push(
                <svg key={i} xmlns="http://www.w3.org/2000/svg" width="12" height="11"
                    viewBox="0 0 12 11" fill="none">
                    <defs>
                        <linearGradient id={gradientId}>
                            <stop offset="0%" stopColor="#F2C94C" />
                            <stop offset={fillPercentage} stopColor="#F2C94C" />
                            <stop offset={fillPercentage} stopColor="#EEEDF5" />
                        </linearGradient>
                    </defs>
                    <path d="M6 0L7.80568 3.5147L11.7063 4.1459L8.92165 6.9493L9.52671 10.8541L6 9.072L2.47329 10.8541L3.07835 6.9493L0.293661 4.1459L4.19432 3.5147L6 0Z"
                        fill={`url(#${colorpathId})`} />
                </svg>
            );
        }
        return stars;
    };

    return (
        <div className={styles.starsContainer}>
            {renderStars()}
        </div>
    );
}
