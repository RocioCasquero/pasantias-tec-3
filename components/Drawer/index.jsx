import { useState } from 'react';
import Link from 'next/link';
import {
	Box,
	Collapse,
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from '@mui/material';
import { MENU_CHOICES } from '../../constants/header/menuList';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import styles from './styles.module.css';

const Sidebar = ({ showDrawer, setShowDrawer }) => {
	const [openSubMenu, setOpenSubMenu] = useState(false);

	const handleOpenSubMenu = () => {
		setOpenSubMenu(prevState => !prevState);
	};

	const toggleDrawer = value => event => {
		if (
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return;
		}

		setShowDrawer(value);
	};

	return (
		<Drawer
			anchor={'right'}
			open={showDrawer}
			onClose={toggleDrawer(false)}
			className={styles.drawer}
			disableScrollLock
		>
			<Box className={styles.list_container} role="presentation">
				<List>
					{MENU_CHOICES?.map(({ name, link, subItems }) => (
						<Box
							key={`drawer_menu_list_${name}`}
							className={styles.drawer_item}
						>
							{link && !subItems ? (
								<Link
									href={link}
									onClick={toggleDrawer(false)}
									onKeyDown={toggleDrawer(false)}
								>
									<ListItem key={name} disablePadding>
										<ListItemButton>
											<ListItemText
												primary={name}
												className={styles.list_item}
											/>
										</ListItemButton>
									</ListItem>
								</Link>
							) : (
								<>
									<ListItem disablePadding onClick={handleOpenSubMenu}>
										<ListItemButton>
											<>
												<ListItemText
													primary={name}
													className={styles.list_item}
												/>

												{subItems && (
													<ListItemIcon className={styles.list_item}>
														{openSubMenu ? (
															<ExpandLessIcon />
														) : (
															<ExpandMoreIcon />
														)}
													</ListItemIcon>
												)}
											</>
										</ListItemButton>
									</ListItem>

									<Collapse in={openSubMenu} timeout="auto" unmountOnExit>
										<List component="div" disablePadding>
											{subItems?.map(({ name: subName, link: subLink }) => (
												<Link
													href={subLink}
													className={styles.sub_menu_link}
													onClick={toggleDrawer(false)}
													onKeyDown={toggleDrawer(false)}
													key={`drawer_${name}_sub_menu_${subName}`}
												>
													<ListItemButton sx={{ pl: 4 }}>
														<ListItemText primary={subName} />
													</ListItemButton>
												</Link>
											))}
										</List>
									</Collapse>
								</>
							)}
						</Box>
					))}
				</List>
			</Box>
		</Drawer>
	);
};

export default Sidebar;
