import React from 'react';
import Header from '../../components/Header';
import globalStyles from '../../styles/global.module.css';
import classNames from 'classnames';
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
		</div>
	);
};

export default DefaultLayout;
