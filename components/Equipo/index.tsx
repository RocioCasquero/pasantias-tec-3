import React from 'react';
import { Typography } from '@mui/material';

import styles from './styles.module.css';

const Equipo = ({ hashId }) => {
	return (
		<div id={hashId} className={styles.wrapper}>
			<Typography variant="h4" component="h2">
				Contacto
			</Typography>
		</div>
	);
};

export default Equipo;
