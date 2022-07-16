import '../styles/globals.css';
import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import { ThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
	const [isSSR, setIsSSR] = useState(true);

	useEffect(() => {
		setIsSSR(false);
	}, []);

	if (isSSR) return null;

	return (
		<ThemeProvider attribute="class">
			<NextNProgress />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;
