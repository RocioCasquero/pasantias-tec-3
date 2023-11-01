import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button, TextField, Typography } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { HASH_ROUTES, PATH_ROUTES } from '../constants/routes/routes';
import SalaProfesores from './../assets/img/sala-profesores.jpg';
import Logo from '../assets/img/logo.png';
import classNames from 'classnames';

import styles from '../styles/login.module.css';

const Login = () => {
	return (
		<div className={styles.login_wrapper}>
			<Image
				src={SalaProfesores}
				priority={true}
				alt="login-banner"
				className={styles.login_banner}
			/>

			<div className={styles.form_wrapper}>
				<Image src={Logo} width={80} height={80} alt="logo" />

				<div className={styles.login_title_container}>
					<Typography variant="h4" component="h1" align="center">
						Iniciar sesión
					</Typography>
					<Typography
						variant="body1"
						component="p"
						color="#57647c"
						align="center"
					>
						El inicio de sesión esta reservado unicamente para miembros del{' '}
						<Link
							href={PATH_ROUTES.HOME + HASH_ROUTES.EQUIPO}
							className={styles.subtitle_link}
						>
							equipo directivo
						</Link>
					</Typography>
				</div>

				<form className={styles.form_container}>
					<TextField
						id="login-email"
						type="email"
						label="Correo electrónico"
						placeholder="Ingresar correo"
						variant="outlined"
						fullWidth
						required
					/>

					<TextField
						id="login-password"
						type="password"
						label="Contraseña"
						placeholder="Ingresar contraseña"
						variant="outlined"
						fullWidth
						required
					/>

					<Button variant="contained" size="large" type="submit">
						Ingresar
					</Button>

					<Link href={PATH_ROUTES.HOME} className={styles.boton_volver}>
						<Button variant="outlined" size="large">
							Volver
						</Button>
					</Link>

					<div className={styles.form_button_container}>
						<Button
							variant="outlined"
							size="large"
							startIcon={<FacebookIcon />}
							className={classNames(
								styles.boton_red_social,
								styles.boton_facebook
							)}
						>
							Conectar con Facebook
						</Button>

						<Button
							variant="outlined"
							size="large"
							startIcon={<GoogleIcon />}
							className={classNames(
								styles.boton_red_social,
								styles.boton_google
							)}
						>
							Conectar con Google
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
