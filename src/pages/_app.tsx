import '../styles/globals.css';
import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import { ThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';

function MyApp({ Component, pageProps }: AppProps) {
	const [isSSR, setIsSSR] = useState(true);

	useEffect(() => {
		setIsSSR(false);
	}, []);

	if (isSSR) return null;

	return (
		<GoogleOAuthProvider
			clientId={`${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}`}
		>
			<ThemeProvider attribute="class">
				<NextNProgress />
				<Component {...pageProps} />
			</ThemeProvider>
		</GoogleOAuthProvider>
	);
}

export default MyApp;
