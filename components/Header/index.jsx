import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AppBar, Box, Button, Toolbar, Tooltip } from '@mui/material';
import Sidebar from '../Drawer';
import HeaderMenuList from './HeaderMenuList';
import { DISTANCE_TO_CHANGE } from '../../constants/header/headerRules';
import { PATH_ROUTES } from '../../constants/routes/routes';
import Logo from '../../assets/img/logo.png';
import globalStyles from '../../styles/global.module.css';
import MenuIcon from '@mui/icons-material/Menu';
import classNames from 'classnames';
import styles from './styles.module.css';

const Header = () => {
	const { route } = useRouter();

	const [scrollY, setScrollY] = useState(0);
	const [hasScroll, setHasScroll] = useState(false);
	const [showDrawer, setShowDrawer] = useState(false);

	const isHomeRoute = route === PATH_ROUTES.HOME;

	useEffect(() => {
		// va actualizando "scrollY" con la ubicación del scroll
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	useEffect(() => {
		// si el scroll supera el limite activamos "hasScroll"
		if (scrollY > DISTANCE_TO_CHANGE || !isHomeRoute) {
			setHasScroll(true);
		} else {
			setHasScroll(false);
		}
	}, [scrollY, DISTANCE_TO_CHANGE, isHomeRoute]);

	return (
		<Box>
			<AppBar
				className={classNames(styles.header, {
					[styles.header_has_scroll]: hasScroll,
				})}
			>
				<Toolbar
					className={classNames(styles.toolbar, globalStyles.document_margin)}
				>
					<Link href="/">
						<Tooltip title="Inicio - Tec 3" placement="bottom-start">
							<Image src={Logo} width={48} height={48} alt="logo" />
						</Tooltip>
					</Link>

					<Box className={styles.menu_container}>
						<HeaderMenuList />

						<Link href="/login" className={styles.menu_item}>
							<Button>Login</Button>
						</Link>

						<MenuIcon
							className={styles.menu_button}
							onClick={() => setShowDrawer(true)}
						/>
					</Box>

					<Sidebar showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Header;
