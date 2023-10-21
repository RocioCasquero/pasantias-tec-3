import * as React from 'react';
import Banner from '../components/Banner';
import SpecialtiesList from '../components/SpecialtiesList';
import Contacto from '../components/Contacto';
import { CONTACTO } from '../constants/home/hashes';
import styles from '../styles/index.module.css';

const Home = () => {
	return (
		<div className={styles.home_container}>
			<Banner />
			<SpecialtiesList />
			<Contacto hashId={CONTACTO} />
		</div>
	);
};

export default Home;
