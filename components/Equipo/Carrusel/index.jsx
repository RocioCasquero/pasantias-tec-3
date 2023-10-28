import React from 'react';
import Image from 'next/image';
import { Typography } from '@mui/material';

import styles from '../styles.module.css';

const Carrusel = ({ list }) => {
	return (
		<div className={styles.carousel_container}>
			{list?.map(({ nombre, rol, foto }) => {
				return (
					<div className={styles.card_container}>
						<div className={styles.card_image_wrapper}>
							<Image src={foto} alt={nombre} className={styles.card_image} />
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
	);
};

export default Carrusel;
