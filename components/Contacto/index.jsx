import React, { useState } from 'react';
import Image from 'next/image';
import { Button, TextField, Typography } from '@mui/material';
import { EMAIL_COLEGIO } from '../../constants/home/contactos';
import { capitalizarTexto } from '../../utils/text';
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
			<Typography variant="h4" component="h2" gutterBottom>
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
					<Button variant="contained" color="primary" onClick={handleSendEmail}>
						Enviar Correo
					</Button>
				</div>

				<Image
					src={mapaColegio}
					width={520}
					height={360}
					alt="mapa-colegio"
					style={{
						objectFit: 'cover',
						border: '1px solid lightgrey',
						borderRadius: 8,
					}}
				/>
			</div>
		</div>
	);
};

export default Contacto;
