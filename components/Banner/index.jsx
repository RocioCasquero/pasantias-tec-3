import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Box, Button, Fade, Typography } from '@mui/material';
import EscuelaBanner from './../../assets/img/escuela-banner.jpg';
import styles from './styles.module.css';

const Banner = () => {
	return (
		<Box className={styles.banner_wrapper}>
			<Box className={styles.banner_container}>
				<Image src={EscuelaBanner} priority={true} alt="school-banner" />

				<Fade in={true}>
					<Box className={styles.title_container}>
						<Typography
							variant="h2"
							component="h2"
							className={styles.banner_title}
						>
							E.E.S.T. N°3
						</Typography>

						<Box>
							<Typography
								variant="body1"
								component="p"
								className={styles.banner_text}
							>
								"DOMINGO FAUSTINO SARMIENTO", Distrito de Gral. Pueyrredón
							</Typography>
						</Box>

						<Link href="/inscripciones">
							<Button
								variant="contained"
								size="large"
								className={styles.banner_button}
							>
								Inscripciones
							</Button>
						</Link>
					</Box>
				</Fade>
			</Box>
		</Box>
	);
};

export default Banner;
