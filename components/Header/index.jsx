'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';
import {
	AppBar,
	Avatar,
	Box,
	Button,
	Toolbar,
	Tooltip,
	CircularProgress,
	IconButton,
	Menu,
	MenuItem,
	Typography,
} from '@mui/material';
import Sidebar from '../Drawer';
import HeaderMenuList from './HeaderMenuList';
import { DISTANCE_TO_CHANGE } from '../../constants/header/headerRules';
import { PATH_ROUTES } from '../../constants/routes/routes';
import { UserAuth } from '../../context/authContext';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../assets/img/logo.png';
import classNames from 'classnames';
import globalStyles from '../../styles/global.module.css';
import styles from './styles.module.css';

const Header = () => {
	const { route } = useRouter();
	const { enqueueSnackbar } = useSnackbar();
	const { user, authLoading, logOut } = UserAuth();

	const [scrollY, setScrollY] = useState(0);
	const [hasScroll, setHasScroll] = useState(false);
	const [showDrawer, setShowDrawer] = useState(false);
	const [anchorElUser, setAnchorElUser] = useState(null);

	const isHomeRoute = route === PATH_ROUTES.HOME;

	const stringAvatar = email => {
		const [firstName] = email?.split('@') || '';
		return firstName?.[0]?.toUpperCase() || '';
	};

	const handleOpenUserMenu = event => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	const handleLogOut = () => {
		logOut()
			.then(() =>
				enqueueSnackbar('Se ha cerrado la sesión, hasta la proxima 👋', {
					variant: 'success',
				})
			)
			.catch(() => {
				enqueueSnackbar('Hubo un error al cerrar sesión, vuelva a intentar', {
					variant: 'error',
				});
			});
	};

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

						{authLoading ? (
							<CircularProgress className={styles.spinner} />
						) : user ? (
							<div>
								<Tooltip
									title="Ver opciones de usuario"
									placement="bottom"
									arrow
								>
									<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
										<Avatar
											alt={user.displayName}
											src={user.photoURL}
											className={styles.user_avatar}
										>
											{stringAvatar(user.email)}
										</Avatar>
									</IconButton>
								</Tooltip>

								<Menu
									sx={{ mt: '45px' }}
									id="menu-usuario"
									anchorEl={anchorElUser}
									anchorOrigin={{
										vertical: 'top',
										horizontal: 'center',
									}}
									keepMounted
									transformOrigin={{
										vertical: 'top',
										horizontal: 'center',
									}}
									open={Boolean(anchorElUser)}
									onClose={handleCloseUserMenu}
									onClick={handleCloseUserMenu}
								>
									<MenuItem>
										<Typography textAlign="center" onClick={handleLogOut}>
											Cerrar sesión
										</Typography>
									</MenuItem>
								</Menu>
							</div>
						) : (
							<Link href="/login" className={styles.menu_item}>
								<Button>Login</Button>
							</Link>
						)}

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
