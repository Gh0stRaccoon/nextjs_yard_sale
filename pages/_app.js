import '../styles/global.css';
import { AppProvider } from '@context/AppContext';
import { useInitialState } from '@hooks/useInitialState';
import { Header } from '@components/Header';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
	const initialState = useInitialState();

	return (
		<AppProvider>
			<Script
				async
				src="https://www.googletagmanager.com/gtag/js?id=G-6Y9M6VTNCD"
			></Script>
			<Script id="google-analitycs" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-6Y9M6VTNCD');`}</Script>
			<Header />
			<Component {...pageProps} />
		</AppProvider>
	);
}

export default MyApp;
