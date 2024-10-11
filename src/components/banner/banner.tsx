import { useEffect, useState } from 'react'
import Image from 'next/image'
import { banners } from '@/utils/constants'
import clsx from 'clsx'

import styles from './banner.module.css'

export default function Banner() {
	const [currentBanner, setCurrentBanner] = useState<number>(0);
	const [bannerInterval, setBannerInterval] = useState<number | null>(null);

	const renderBanner = (index: number): void => {
		setCurrentBanner(index);
	}

	const handleBannerChange = () => {

		const newBanner = currentBanner === banners.length - 1 ? 0 : currentBanner + 1;
		renderBanner(newBanner);

	}

	const handleButtonClick = (index: number) => {
		clearInterval(bannerInterval as unknown as number);
		setCurrentBanner(index);
		const id = setInterval(handleBannerChange, 5000) as unknown as number;
		setBannerInterval(id);
	};

	useEffect(() => {

		const id = setInterval(handleBannerChange, 5000) as unknown as number;
		setBannerInterval(id);
		return () => clearInterval(id as unknown as number);
	}, [currentBanner])

	return (
		<section className={styles.banner}>
			<Image className={styles.bannerImage} src={banners[currentBanner].src} alt={banners[currentBanner].alt} width={1120} height={702} />
			<div className={styles.bannerButtonsContainer}>
				{banners.map((banner, index) => (
					<button className={clsx(styles.bannerRadioButton,
						{ [styles.buttonSelected]: index === currentBanner }
					)} key={index}
						onClick={() => handleButtonClick(index)}></button>
				))}
			</div>
			<a href="#"><Image src="/promo_01.png" alt="" className={`${styles.promoImage} ${styles.positionTop}`} width={149} height={204} /></a>
			<a href="#"><Image src="/promo_02.png" alt="" className={`${styles.promoImage} ${styles.positionLeft}`} width={158} height={273} /></a>
		</section>
	)
}
