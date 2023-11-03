import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { SnackbarProvider } from 'notistack';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import DefaultLayout from '../layouts/DefaultLayout';
import theme from '../constants/styles/theme';
import { CUSTOM_ROUTES } from '../constants/routes/routes';
import { LAYOUT_TYPES } from '../constants/layouts';
import createEmotionCache from '../utils/createEmotionCache';
import { AuthContextProvider } from '../context/authContext';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const MyApp = ({
	Component,
	emotionCache = clientSideEmotionCache,
	pageProps,
	router,
}) => {
	const { pathname } = router;

	const CustomLayout = () => {
		const customRoute = CUSTOM_ROUTES.find(route => route?.path === pathname);

		switch (customRoute?.layout) {
			case LAYOUT_TYPES.EMPTY:
				return <Component {...pageProps} />;

			default:
				return (
					<DefaultLayout>
						<Component {...pageProps} />
					</DefaultLayout>
				);
		}
	};

	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
				<title>Técnica 3 - MDP</title>
			</Head>

			<AuthContextProvider>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<SnackbarProvider
						maxSnack={3}
						autoHideDuration={3000}
						anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
					>
						<CustomLayout />
					</SnackbarProvider>
				</ThemeProvider>
			</AuthContextProvider>
		</CacheProvider>
	);
};

MyApp.propTypes = {
	Component: PropTypes.elementType.isRequired,
	emotionCache: PropTypes.object,
	pageProps: PropTypes.object.isRequired,
};

export default MyApp;
