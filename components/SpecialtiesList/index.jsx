import React from 'react';
// import Link from 'next/link';
import { Box } from '@mui/material';
import SpecialtiesCards from './SpecialtiesCards';
import { SPECIALTY_CARD_LIST } from '../../constants/home/specialtySection';
import styles from './styles.module.css';

const SpecialtiesList = ({ hashId }) => {
	return (
		<Box id={hashId} className={styles.specialties_wrapper}>
			<Box className={styles.specialties_container}>
				{SPECIALTY_CARD_LIST?.map(
					(
						{ SpecialtyIcon, iconColor, title, description, link = '#' },
						index
					) => {
						return (
							// <Link
							// 	href={link}
							// 	className={styles.specialty_link}
							// >
							<SpecialtiesCards
								key={`specialty_card_${index}`}
								SpecialtyIcon={SpecialtyIcon}
								iconColor={iconColor}
								title={title}
								description={description}
								link={link}
							/>
							// </Link>
						);
					}
				)}
			</Box>
		</Box>
	);
};

export default SpecialtiesList;
