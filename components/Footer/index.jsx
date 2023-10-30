import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Divider, Typography } from '@mui/material';
import { LISTA_CONTACTOS } from '../../constants/home/contactos';
import Logo from '../../assets/img/logo.png';

import styles from './styles.module.css';

const Footer = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.footer_data_wrapper}>
				<Image src={Logo} width={80} height={80} alt="logo" />

				<div className={styles.footer_data_container}>
					{LISTA_CONTACTOS.map(({ label, icon: Icon, link }) => {
						return (
							<div className={styles.footer_contactos} key={label}>
								<Icon />
								<Typography variant="body2" component="p">
									{link ? (
										<Link href={link} target="_blank">
											{label}
										</Link>
									) : (
										label
									)}
								</Typography>
							</div>
						);
					})}
				</div>
			</div>

			<Divider className={styles.divider} />

			<Typography>
				© 2023{' '}
				<Link href="https://github.com/RocioCasquero" target="_blank">
					Rocio Casquero
				</Link>{' '}
				y{' '}
				<Link href="https://github.com/sofibxez" target="_blank">
					Sofia Baez
				</Link>{' '}
				- Todos los derechos reservados
			</Typography>
		</div>
	);
};

export default Footer;
