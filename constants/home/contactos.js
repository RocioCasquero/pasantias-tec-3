import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export const DIRECCION =
	'14 de Julio 2550, Mar del Plata, Buenos Aires, Argentina';
export const EMAIL_COLEGIO = 'consultastec3mdq@gmail.com';
export const TELEFONO_COLEGIO = '(0223) 495 0285';
export const HORARIO_COOPERADORA = '8:00hs a 12:00hs / 13:00hs a 17:00hs';
export const TWITTER_COLEGIO = {
	user: '@EEST3DFSGP',
	link: 'https://twitter.com/eest3dfsgp?lang=es',
};

export const LISTA_CONTACTOS = [
	{
		label: DIRECCION,
		icon: LocationOnIcon,
		link: null,
	},
	{
		label: EMAIL_COLEGIO,
		icon: EmailIcon,
		link: null,
	},
	{
		label: TELEFONO_COLEGIO,
		icon: PhoneInTalkIcon,
		link: null,
	},
	{
		label: HORARIO_COOPERADORA,
		icon: AccessTimeIcon,
		link: null,
	},
	{
		label: TWITTER_COLEGIO.user,
		icon: TwitterIcon,
		link: TWITTER_COLEGIO.link,
	},
];
