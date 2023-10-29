import React from 'react';
import { Typography } from '@mui/material';
import Carrusel from './Carrusel';
import {
	LISTA_EQUIPO_DIRECTIVO,
	LISTA_DEPARTAMENTOS,
} from '../../constants/home/equipos';

import styles from './styles.module.css';

const Equipo = ({ hashId }) => {
	return (
		<div id={hashId} className={styles.wrapper}>
			<div className={styles.team_container}>
				<Typography variant="h4" component="h2">
					Equipo directivo
				</Typography>

				<Carrusel list={LISTA_EQUIPO_DIRECTIVO} />
			</div>

			<div className={styles.team_container}>
				<Typography variant="h4" component="h2">
					Departamentos
				</Typography>

				<Carrusel list={LISTA_DEPARTAMENTOS} />
			</div>
		</div>
	);
};

export default Equipo;
