import * as React from 'react';
import Banner from '../components/Banner';
import SpecialtiesList from '../components/SpecialtiesList';
import Contacto from '../components/Contacto';
import Equipo from '../components/Equipo';
import { CONTACTO, EQUIPO } from '../constants/home/hashes';

import styles from '../styles/index.module.css';

const Home = () => {
	return (
		<div className={styles.home_container}>
			<Banner />
			<SpecialtiesList />
			<Contacto hashId={CONTACTO} />
			<Equipo hashId={EQUIPO} />
		</div>
	);
};

export default Home;
