import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSnackbar } from 'notistack';
import { Button, TextField, Typography } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { HASH_ROUTES, PATH_ROUTES } from '../constants/routes/routes';
import { EMAIL_COLEGIO } from '../constants/home/contactos';
import { UserAuth } from '../context/authContext';
import SalaProfesores from './../assets/img/sala-profesores.jpg';
import Logo from '../assets/img/logo.png';
import classNames from 'classnames';

import styles from '../styles/login.module.css';

const Login = () => {
	const { user, authLoading, googleSignIn } = UserAuth();
	const { enqueueSnackbar } = useSnackbar();

	console.log({ authLoading, user });

	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const handleGoogleSignIn = async () => {
		await googleSignIn()
			.then(() => {
				enqueueSnackbar('¡Sesión iniciada! Bienvenido', {
					variant: 'success',
				});
			})
			.catch(() =>
				enqueueSnackbar('Hubo un error al iniciar sesión, vuelva a intentar', {
					variant: 'error',
				})
			);
	};

	const handleForgotPassword = () => {
		const subject =
			'Solicitud de restablecimiento de contraseña (Tec 3 - Sitio Web Oficial)';
		const body = `Hola, he olvidado mi contraseña, necesito restablecerla, la cuenta utiliza el email: ${formData.email}`;

		const mailtoLink = `mailto:${EMAIL_COLEGIO}?subject=${subject}&body=${body}`;
		window.location.href = mailtoLink;
	};

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
						<Link href={HASH_ROUTES.EQUIPO} className={styles.subtitle_link}>
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
						value={formData.email}
						onChange={e =>
							setFormData(prevState => ({
								...prevState,
								email: e.target.value,
							}))
						}
					/>

					<TextField
						id="login-password"
						type="password"
						label="Contraseña"
						placeholder="Ingresar contraseña"
						variant="outlined"
						fullWidth
						required
						value={formData.password}
						onChange={e =>
							setFormData(prevState => ({
								...prevState,
								password: e.target.value,
							}))
						}
						helperText={
							<span
								className={styles.forgot_password_text}
								onClick={handleForgotPassword}
							>
								Olvidaste tu contraseña?
							</span>
						}
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
							startIcon={<GoogleIcon />}
							className={classNames(
								styles.boton_red_social,
								styles.boton_google
							)}
							onClick={handleGoogleSignIn}
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
