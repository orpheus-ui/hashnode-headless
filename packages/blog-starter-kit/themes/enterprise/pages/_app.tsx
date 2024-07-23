import { AnimatePresence } from 'framer-motion';
import { AppProps } from 'next/app';
import '../styles/index.css';

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<AnimatePresence mode="popLayout" initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
			<Component {...pageProps} />
		</AnimatePresence>
	);
}
