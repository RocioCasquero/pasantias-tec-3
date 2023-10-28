import React from 'react';

import styles from './styles.module.css';

const Carrusel = ({ list }) => {
	return (
		<div className={styles.carousel_container}>
			{list?.map(({ nombre, rol }) => {
				return <div>{nombre}</div>;
			})}
		</div>
	);
};

export default Carrusel;
