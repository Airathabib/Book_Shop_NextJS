import { PropsWithChildren } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import LoginForm from '@/loginForm/loginForm'
import { useState } from 'react'
import { useAppSelector } from '@/utils/hooks'
import { Montserrat } from 'next/font/google';

import styles from './global.module.css'

const font = Montserrat({
	weight: ["400"],
	subsets: ["latin", "cyrillic"],
})


export default function Layout({ children }: PropsWithChildren) {
	const { pathname } = useRouter();
	const [isOpened, setIsOpened] = useState<boolean>(false);
	const toggleMenu = () => {
		setIsOpened(!isOpened);
	}
	const isLogged = useAppSelector((state) => state.auth.loggedIn);
	const itemsCount = useAppSelector((state) => state.books.booksInCart.length);

	return (
		<>
			<Head>
				<title>Bookshop - Buy Books Online | Audiobooks, Stationery & Gifts</title>
				<meta name="description" content="Discover a wide range of books, audiobooks, and stationery at Bookshop. Shop online for your favorite titles and enjoy fast delivery. Perfect for book lovers and gift seekers." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="keywords" content="books, buy books online, audiobooks, stationery, gifts, bookshop, bestsellers, new releases" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className={`${styles.page} ${font.className}`}>
				<header className={styles.header}>
					<div className={styles.headerContainer}>
						<h1 className={styles.headerLogo}>Bookshop</h1>
						<nav>
							<ul className={styles.headerNavigation}>
								<li><Link className={clsx(
									styles.headerLink,
									{ [styles.linkSelected]: pathname === "/" },
								)} href="./">Books</Link></li>
								<li><Link className={clsx(
									styles.headerLink,
									{ [styles.linkSelected]: pathname === "/audiobooks" },
								)} href="./audiobooks">Audiobooks</Link></li>
								<li><Link className={clsx(
									styles.headerLink,
									{ [styles.linkSelected]: pathname === "/gifts" },
								)} href="./gifts">Stationery & gifts</Link></li>
								<li><Link className={clsx(
									styles.headerLink,
									{ [styles.linkSelected]: pathname === "/blog" },
								)} href="./blog">blog</Link></li>
							</ul>
						</nav>
						<div className={styles.userPanel}>
							{isLogged ?
								<Link href={"./profile"} className={`${styles.headerButton} ${styles.userProfile}`}></Link> :
								<button className={`${styles.headerButton} ${styles.userProfile}`} onClick={toggleMenu}></button>
							}

							<Link href={" "} className={`${styles.headerButton} ${styles.search}`}></Link>

							{isOpened && <LoginForm setIsOpened={setIsOpened} />}
							{isLogged ?
								<>
									<Link href={"./cart"} className={`${styles.headerButton} ${styles.cart}`}></Link>
									{itemsCount > 0 ? (<p className={styles.headerItemsCount}>{itemsCount}</p>) : null}
								</> :
								<div className={`${styles.headerButton} ${styles.cart}`}></div>
							}
						</div>
					</div>
				</header>
				<main className={styles.main}>
					{children}
				</main>

			</div>
		</>
	)
}
