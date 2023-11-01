import { SPECIALTY_CARD_LIST } from '../home/specialtySection';
import { HASH_ROUTES, PATH_ROUTES } from '../routes/routes';

const specialtyChoices = SPECIALTY_CARD_LIST.map(({ title, link }) => {
	return { name: title, link };
});

export const MENU_CHOICES = [
	{
		name: 'Inicio',
		link: PATH_ROUTES.HOME,
		subItems: null,
	},
	{
		name: 'Especialidades',
		link: HASH_ROUTES.ESPECIALIDADES,
		subItems: null,
	},
	{
		name: 'Contacto',
		link: HASH_ROUTES.CONTACTO,
		subItems: null,
	},
	{
		name: 'Equipo',
		link: HASH_ROUTES.EQUIPO,
		subItems: null,
	},
];
