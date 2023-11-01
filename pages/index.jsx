import * as React from 'react';
import Banner from '../components/Banner';
import SpecialtiesList from '../components/SpecialtiesList';
import Contacto from '../components/Contacto';
import Equipo from '../components/Equipo';
import FAQs from '../components/FAQs';
import { CONTACTO, EQUIPO, ESPECIALIDADES } from '../constants/home/hashes';

import styles from '../styles/index.module.css';

const Home = () => {
	return (
		<div className={styles.home_container}>
			<Banner />
			<SpecialtiesList hashId={ESPECIALIDADES} />
			<Contacto hashId={CONTACTO} />
			<Equipo hashId={EQUIPO} />
			<FAQs />
		</div>
	);
};

export default Home;
