import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button, TextField, Tooltip, Typography } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { EMAIL_COLEGIO, LISTA_CONTACTOS } from '../../constants/home/contactos';
import { capitalizarTexto, copiarEnPortapapeles } from '../../utils/text';
import mapaColegio from '../../assets/img/mapa-colegio.jpeg';
import styles from './styles.module.css';

const Contacto = ({ hashId }) => {
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');
	const [nombre, setNombre] = useState('');

	const handleSendEmail = () => {
		const body = `Hola, mi nombre es ${nombre} me comunico por el siguiente motivo: ${message}`;

		const mailtoLink = `mailto:${EMAIL_COLEGIO}?subject=${subject}&body=${body}`;
		window.location.href = mailtoLink;
	};

	return (
		<div id={hashId} className={styles.wrapper}>
			<Typography variant="h4" component="h2">
				Contacto
			</Typography>

			<div className={styles.contenedor}>
				<div className={styles.formulario}>
					<TextField
						label="Nombre completo"
						variant="outlined"
						value={nombre}
						onChange={e => setNombre(capitalizarTexto(e.target.value))}
					/>
					<TextField
						label="Asunto"
						variant="outlined"
						value={subject}
						onChange={e => setSubject(e.target.value)}
					/>
					<TextField
						label="Mensaje"
						variant="outlined"
						multiline
						rows={4}
						value={message}
						onChange={e => setMessage(e.target.value)}
					/>
					<Button
						variant="contained"
						color="primary"
						className={styles.boton_enviar_email}
						onClick={handleSendEmail}
					>
						Enviar Correo
					</Button>
				</div>

				<Image
					src={mapaColegio}
					alt="mapa-colegio"
					className={styles.mapa_colegio}
				/>
			</div>

			<div className={styles.lista_contactos}>
				{LISTA_CONTACTOS.map(({ label, icon: Icon, link }) => {
					return (
						<div className={styles.card_contacto} key={label}>
							<Icon />

							<Typography variant="body2" component="p">
								{label}
							</Typography>

							<div className={styles.contacto_button}>
								{link ? (
									<Link
										href={link}
										target="_blank"
										title="abrir página en nueva pestaña"
									>
										<OpenInNewIcon />
									</Link>
								) : (
									<Tooltip
										title="Copiar en el portapapeles"
										placement="top"
										arrow
									>
										<ContentCopyIcon
											onClick={() => copiarEnPortapapeles(label)}
										/>
									</Tooltip>
								)}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Contacto;
