import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import classNames from 'classnames';
import globalStyles from '../../styles/global.module.css';
import styles from './styles.module.css';

const DefaultLayout = ({ children }) => {
	return (
		<div
			className={classNames(
				styles.layout_container,
				globalStyles.document_margin
			)}
		>
			<Header />

			{children}

			<Footer />
		</div>
	);
};

export default DefaultLayout;
