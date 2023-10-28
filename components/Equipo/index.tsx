import React from 'react';
import { Typography } from '@mui/material';
import Carrusel from './Carrusel';
import { LISTA_DEPARTAMENTOS } from '../../constants/home/equipos';

import styles from './styles.module.css';

const Equipo = ({ hashId }) => {
	return (
		<div id={hashId} className={styles.wrapper}>
			<Typography variant="h4" component="h2">
				Equipo directivo
			</Typography>

			<Carrusel list={LISTA_DEPARTAMENTOS} />
		</div>
	);
};

export default Equipo;
