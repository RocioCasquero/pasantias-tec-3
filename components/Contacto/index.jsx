import React from 'react';
import mapaColegio from '../../assets/img/mapa-colegio.jpeg';
import Image from 'next/image';

const Contacto = ({ hashId }) => {
	return (
		<div id={hashId}>
			<Image
				src={mapaColegio}
				width={480}
				height={480}
				alt="mapa-colegio"
				style={{
					objectFit: 'cover',
					border: '1px solid lightgrey',
					borderRadius: 8,
				}}
			/>
		</div>
	);
};

export default Contacto;
