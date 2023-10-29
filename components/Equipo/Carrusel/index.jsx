import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Typography } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import classNames from 'classnames';

import styles from '../styles.module.css';

const Carrusel = ({ list }) => {
	const carouselRef = useRef(null);

	const [carouselWidth, setCarouselWidth] = useState(null);
	const [hasScroll, setHasScroll] = useState(true);
	const [hideArrow, setHideArrow] = useState('left');

	const DISTANCE_TO_SCROLL = carouselWidth / 2;

	const handleScroll = direction => {
		const carousel = carouselRef.current;
		const advance = direction === 'right';

		if (carousel) {
			advance
				? (carousel.scrollLeft += DISTANCE_TO_SCROLL)
				: (carousel.scrollLeft -= DISTANCE_TO_SCROLL);
		}
	};

	useEffect(() => {
		const carousel = carouselRef.current;
		const clientWidth = carousel.clientWidth;

		const handleHideArrows = () => {
			const scrollPos = carousel.scrollLeft;
			const scrollWidth = carousel.scrollWidth;
			const threshold = 1;

			if (scrollPos < threshold) {
				setHideArrow('left');
			} else if (scrollPos + clientWidth + threshold >= scrollWidth) {
				setHideArrow('right');
			} else {
				setHideArrow(null);
			}
		};

		if (carousel) {
			setCarouselWidth(clientWidth);
			carousel.addEventListener('scroll', handleHideArrows);
		}

		return () => {
			if (carousel) {
				carousel.removeEventListener('scroll', handleHideArrows);
			}
		};
	}, [carouselRef.current]);

	useEffect(() => {
		if (carouselRef.current) {
			const carousel = carouselRef.current;

			if (carousel.scrollWidth <= carousel.clientWidth) {
				setHasScroll(false);
			}
		}
	}, []);

	return (
		<div className={styles.carousel_wrapper}>
			<ArrowForwardIosIcon
				className={styles.carousel_arrow}
				style={{
					right: -48,
					display: hideArrow === 'right' || !hasScroll ? 'none' : 'flex',
				}}
				onClick={() => handleScroll('right')}
			/>
			<ArrowBackIosIcon
				className={styles.carousel_arrow}
				style={{
					left: -48,
					display: hideArrow === 'left' ? 'none' : 'flex',
				}}
				onClick={() => handleScroll('left')}
			/>

			<div
				className={classNames(styles.carousel_container, {
					[styles.empty_carousel_list]: !hasScroll,
				})}
				ref={carouselRef}
			>
				<div className={styles.carousel_list}>
					{list?.map(({ nombre, rol, foto }) => {
						return (
							<div className={styles.card_container}>
								<div className={styles.card_image_wrapper}>
									<Image
										src={foto}
										alt={nombre}
										className={styles.card_image}
									/>
								</div>

								<div className={styles.card_data}>
									<Typography
										variant="h6"
										component="p"
										className={styles.card_text}
									>
										{nombre}
									</Typography>
									<Typography
										variant="body2"
										component="p"
										color="#57647c"
										className={styles.card_text}
									>
										{rol}
									</Typography>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Carrusel;
