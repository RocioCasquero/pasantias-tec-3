import { CONTACTO, EQUIPO, ESPECIALIDADES } from '../home/hashes';

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
};

export const HASH_ROUTES = {
	CONTACTO: `/#${CONTACTO}`,
	EQUIPO: `/#${EQUIPO}`,
	ESPECIALIDADES: `/#${ESPECIALIDADES}`,
};
