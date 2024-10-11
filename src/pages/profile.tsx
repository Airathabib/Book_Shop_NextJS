import Image from "next/image"

import styles from "@/styles/profile.module.css"

export default function Profile() {
    return (
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <h2 className={styles.title}>Profile</h2>
                    <div className={styles.infoContainer}>
                        <Image src="/profile_img.png" alt="profile" width={235} height={235} />
                        <div className={styles.info}>
                            <div className={styles.infoItem}>
                                <h3 className={styles.heading}>Your name</h3>
                                <p className={styles.text}>John Doe</p>
                            </div>
                            <div className={styles.infoItem}>
                                <h3 className={styles.heading}>your email</h3>
                                <p className={styles.text}>test@lorem.com</p>
                            </div>

                            <button className={styles.button} type="button">edit profile</button>
                        </div>
                    </div>
                </div>
                <div className={styles.aboutMeContainer}>
                    <h3 className={styles.heading}>About me</h3>
                    <p className={styles.grayText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam maxime corporis ad unde expedita odit tempore porro recusandae similique est fugiat qui quae voluptas et eum totam, natus vero. Tempore?</p>
                </div>
            </div>
    )
}
 