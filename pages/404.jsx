import Link from 'next/link';
import { Box, Button, Typography } from '@mui/material';
import styles from '../styles/404.module.css';

const NotFound = () => {
	return (
		<Box className={styles.error_wrapper}>
			<Box className={styles.error_container}>
				<Typography variant="h6" component="h6">
					Oops! Página no encontrada
				</Typography>

				<Typography variant="h1" component="h1" className={styles.error_code}>
					<span>4</span>
					<span>0</span>
					<span>4</span>
				</Typography>

				<Typography
					variant="h5"
					component="h5"
					className={styles.error_description}
				>
					Lo siento, la página que estás buscando no se encuentra disponible en
					este momento. Por favor, verifica la URL e intenta nuevamente. 🚧
				</Typography>

				<Link href="/">
					<Button
						variant="contained"
						size="large"
						className={styles.error_button}
					>
						Volver al inicio
					</Button>
				</Link>
			</Box>
		</Box>
	);
};

export default NotFound;
