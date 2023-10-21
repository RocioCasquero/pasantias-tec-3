import { SPECIALTY_CARD_LIST } from '../home/specialtySection';
import { HASH_ROUTES, PATH_ROUTES } from '../routes/routes';

const specialtyChoices = SPECIALTY_CARD_LIST.map(({ title, link }) => {
	return { name: title, link };
});

export const MENU_CHOICES = [
	{
		name: 'Inicio',
		link: PATH_ROUTES.HOME,
	},
	{
		name: 'Acerca del colegio',
		link: PATH_ROUTES.HISTORIA,
	},
	{
		name: 'Especialidades',
		subItems: specialtyChoices,
	},
	{
		name: 'Contacto',
		link: HASH_ROUTES.CONTACTO,
	},
];
