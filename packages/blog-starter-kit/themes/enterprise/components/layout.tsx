import localFont from '@next/font/local';
import { motion } from 'framer-motion';
import { Analytics } from './analytics';
import { Integrations } from './integrations';
import { Meta } from './meta';
import { Scripts } from './scripts';
const yekan = localFont({
	src: [
		{
			path: '../public/assets/font/yekan_bakh_regular.ttf',
			weight: '400',
		},
		{
			path: '../public/assets/font/yekan_bakh_medium.ttf',
			weight: '500',
		},
		{
			path: '../public/assets/font/yekan_bakh_bold.ttf',
			weight: '600',
		},
	],
	variable: '--font-yekan',
});
type Props = {
	children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
	return (
		<>
			<Meta />
			<Scripts />
			<div className="min-h-screen bg-white dark:bg-neutral-950">
				<main className={`${yekan.variable} font-sans`}>
					<motion.div
						initial={{ y: -30, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: -30, opacity: 0 }}
						transition={{
							type: 'spring',
							stiffness: 360,
							damping: 40,
						}}
					>
						{children}
					</motion.div>
				</main>
			</div>
			<Analytics />
			<Integrations />
		</>
	);
};
