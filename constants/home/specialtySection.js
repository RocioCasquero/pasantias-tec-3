import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import ScienceIcon from '@mui/icons-material/Science';
import MemoryIcon from '@mui/icons-material/Memory';
import TerminalIcon from '@mui/icons-material/Terminal';
import HandymanIcon from '@mui/icons-material/Handyman';
import { PATH_ROUTES } from '../routes/routes';

export const SPECIALTY_CARD_LIST = [
	{
		SpecialtyIcon: TerminalIcon,
		iconColor: '#93C572',
		title: 'Informática',
		description:
			'Esta especialidad busca preparar a los estudiantes para desarrollar habilidades y conocimientos necesarios en el ámbito de la computación y la tecnología, incluyendo programación, diseño de software, administración de sistemas, redes de computadoras y seguridad informática.',
		link: PATH_ROUTES.ESPECIALIDADES.INFORMATICA,
	},
	{
		SpecialtyIcon: DirectionsCarFilledOutlinedIcon,
		iconColor: '#fd6d27',
		title: 'Automotores',
		description:
			'Esta especialidad tiene como objetivo proporcionar a los estudiantes una amplia comprensión de los sistemas de automóviles, camiones y otros vehículos, así como habilidades prácticas para el mantenimiento, reparación y diagnóstico de problemas mecánicos y eléctricos.',
		link: PATH_ROUTES.ESPECIALIDADES.AUTOMOTORES,
	},
	{
		SpecialtyIcon: FlashOnIcon,
		iconColor: '#ee0979',
		title: 'Electromecánica',
		description:
			'Esta especialidad brinda a los estudiantes sólidos conocimientos acerca de electricidad y mecánica, preparándolos para carreras en una variedad de campos, incluyendo la automatización industrial, el mantenimiento de maquinaria, la calidad de producción y la energía renovable.',
		link: PATH_ROUTES.ESPECIALIDADES.ELECTROMECANICA,
	},
	{
		SpecialtyIcon: ScienceIcon,
		iconColor: '#1ac0c6',
		title: 'Química',
		description:
			'Esta especialidad proporciona a los estudiantes una sólida base en química teórica y práctica, así como las habilidades necesarias para trabajar en la industria química, laboratorios de investigación, control de calidad y otras áreas relacionadas.',
		link: PATH_ROUTES.ESPECIALIDADES.QUIMICA,
	},
	{
		SpecialtyIcon: MemoryIcon,
		iconColor: '#c679e3',
		title: 'Electrónica',
		description:
			'Esta especialidad prepara a los estudiantes para carreras en el campo de la electrónica, brindándoles conocimientos y habilidades prácticas para trabajar en áreas como la industria, las comunicaciones, la electrónica de consumo y la automatización.',
		link: PATH_ROUTES.ESPECIALIDADES.ELECTRONICA,
	},
	{
		SpecialtyIcon: HandymanIcon,
		iconColor: '#facd60',
		title: 'Construcciones',
		description:
			'Esta especialidad prepara a los estudiantes para trabajar en la industria de la construcción y la arquitectura, proporcionando conocimientos y habilidades fundamentales en diversas áreas relacionadas.',
		link: PATH_ROUTES.ESPECIALIDADES.CONSTRUCCIONES,
	},
];
