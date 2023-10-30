import React from 'react';
import {
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Typography,
} from '@mui/material';
import { FAQ_LIST } from '../../constants/home/faqs';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import styles from './styles.module.css';

const FAQs = () => {
	return (
		<div className={styles.wrapper}>
			<Typography variant="h4" component="h2">
				Preguntas frecuentes
			</Typography>

			<div className={styles.faq_container}>
				{FAQ_LIST.map(({ pregunta, respuesta }, index) => {
					return (
						<div>
							<Accordion className={styles.faq_accordion}>
								<AccordionSummary
									className={styles.faq_header}
									expandIcon={<ExpandMoreIcon />}
									aria-controls={`faq-${index}`}
									id={`faq-${index}-header`}
								>
									<Typography variant="h6" component="p">
										{pregunta}
									</Typography>
								</AccordionSummary>

								<AccordionDetails className={styles.faq_content}>
									<Typography variant="body1" component="p">
										{respuesta}
									</Typography>
								</AccordionDetails>
							</Accordion>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default FAQs;
