import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSnackbar } from 'notistack';
import { Button, Grow, TextField, Tooltip, Typography } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { EMAIL_COLEGIO, LISTA_CONTACTOS } from '../../constants/home/contactos';
import { capitalizarTexto, copiarEnPortapapeles } from '../../utils/text';
import mapaColegio from '../../assets/img/mapa-colegio.jpeg';
import styles from './styles.module.css';

const Contacto = ({ hashId }) => {
	const { enqueueSnackbar } = useSnackbar();

	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');
	const [nombre, setNombre] = useState('');
	const [showContactAction, handleShowContactAction] = useState(-1);

	const handleSendEmail = () => {
		const body = `Hola, mi nombre es ${nombre} me comunico por el siguiente motivo: ${message}`;

		const mailtoLink = `mailto:${EMAIL_COLEGIO}?subject=${subject}&body=${body}`;
		window.location.href = mailtoLink;
	};

	const handleCopyToClipboard = async text => {
		copiarEnPortapapeles(
			text,
			() =>
				enqueueSnackbar('Texto copiado en el portapapeles', {
					variant: 'success',
				}),
			() =>
				enqueueSnackbar('Error al copiar texto en el portapapeles', {
					variant: 'error',
				})
		);
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
				{LISTA_CONTACTOS.map(({ label, icon: Icon, link }, index) => {
					return (
						<div
							className={styles.card_contacto}
							key={label}
							onMouseEnter={() => handleShowContactAction(index)}
							onMouseLeave={() => handleShowContactAction(null)}
						>
							<Icon />

							<Typography variant="body2" component="p">
								{label}
							</Typography>

							<Grow
								in={showContactAction === index}
								style={{ transformOrigin: '1 0 0' }}
								{...(showContactAction === index ? { timeout: 500 } : {})}
							>
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
												onClick={() => handleCopyToClipboard(label)}
											/>
										</Tooltip>
									)}
								</div>
							</Grow>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Contacto;
