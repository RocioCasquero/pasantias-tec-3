import { CONTACTO, EQUIPO, ESPECIALIDADES } from '../home/hashes';
import { LAYOUT_TYPES } from '../layouts';

export const PATH_ROUTES = {
	HOME: '/',
	HISTORIA: '/historia',
	ESPECIALIDADES: {
		INFORMATICA: '/especialidades/informatica',
		AUTOMOTORES: '/especialidades/automotores',
		ELECTROMECANICA: '/especialidades/electromecanica',
		QUIMICA: '/especialidades/quimica',
		ELECTRONICA: '/especialidades/electronica',
		CONSTRUCCIONES: '/especialidades/construcciones',
	},
	LOGIN: '/login',
	DASHBOARD: '/dashboard',
};

export const HASH_ROUTES = {
	CONTACTO: `/#${CONTACTO}`,
	EQUIPO: `/#${EQUIPO}`,
	ESPECIALIDADES: `/#${ESPECIALIDADES}`,
};

export const CUSTOM_ROUTES = [
	{ path: PATH_ROUTES.LOGIN, layout: LAYOUT_TYPES.EMPTY, private: false },
	{ path: PATH_ROUTES.DASHBOARD, layout: LAYOUT_TYPES.EMPTY, private: true },
];
