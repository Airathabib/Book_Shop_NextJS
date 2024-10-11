import { PropsWithChildren } from 'react'

import styles from './displayContainer.module.css'

export default function DisplayContainer({children}: PropsWithChildren) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}
