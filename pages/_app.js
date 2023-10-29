import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { SnackbarProvider } from 'notistack';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import DefaultLayout from '../layouts/DefaultLayout';
import theme from '../constants/styles/theme';
import createEmotionCache from '../utils/createEmotionCache';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const MyApp = ({
	Component,
	emotionCache = clientSideEmotionCache,
	pageProps,
}) => {
	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
				<title>Técnica 3 - MDP</title>
			</Head>
			<ThemeProvider theme={theme}>
				{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
				<CssBaseline />
				<DefaultLayout>
					<SnackbarProvider
						maxSnack={3}
						autoHideDuration={3000}
						anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
					>
						{/* Esto serian nuestras paginas envueltas por la plantilla */}
						<Component {...pageProps} />
					</SnackbarProvider>
				</DefaultLayout>
			</ThemeProvider>
		</CacheProvider>
	);
};

MyApp.propTypes = {
	Component: PropTypes.elementType.isRequired,
	emotionCache: PropTypes.object,
	pageProps: PropTypes.object.isRequired,
};

export default MyApp;
