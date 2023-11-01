// import { useState } from 'react';
import {
	Tooltip,
	// Box, Grow,
	Typography,
} from '@mui/material';

import styles from './styles.module.css';

const SpecialtiesCards = ({
	SpecialtyIcon,
	iconColor = 'black',
	title,
	description,
}) => {
	// const [shouldShowLink, setShouldShowLink] = useState(false);

	// const handleShouldShowLink = value => {
	// 	setShouldShowLink(value);
	// };

	const truncateDescription = value => {
		const threshold = 132;
		return value?.length > threshold
			? value.trim().slice(0, threshold - 3) + '...'
			: value;
	};

	return (
		<div
			className={styles.specialty_container}
			// onMouseEnter={() => handleShouldShowLink(true)}
			// onMouseLeave={() => handleShouldShowLink(false)}
		>
			<SpecialtyIcon
				className={styles.specialty_icon}
				style={{ color: iconColor }}
			/>

			<Typography
				variant="h6"
				component="h6"
				className={styles.specialty_title}
			>
				{title}
			</Typography>

			<Tooltip title={description} placement="bottom" arrow>
				<Typography
					variant="body1"
					component="p"
					className={styles.specialty_description}
				>
					{truncateDescription(description)}
				</Typography>
			</Tooltip>

			{/* {shouldShowLink && (
				<Grow
					in={shouldShowLink}
					style={{ transformOrigin: '0 1 0' }}
					{...(shouldShowLink ? { timeout: 500 } : {})}
				>
					<Box className={styles.specialty_link_container}>
						<Typography
							variant="button"
							component="p"
							className={styles.specialty_link}
						>
							Saber más
						</Typography>
					</Box>
				</Grow>
			)} */}
		</div>
	);
};

export default SpecialtiesCards;
