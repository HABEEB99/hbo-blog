import Link from 'next/link';
import React from 'react';
import Button from '../button/Button';
import Logo from '../logo/Logo';

import { FcGoogle } from 'react-icons/fc';
import { useTheme } from 'next-themes';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
	const { theme, setTheme, systemTheme } = useTheme();

	const toggleTheme = () => {
		const currentTheme = theme === 'system' ? systemTheme : theme;
		if (currentTheme === 'dark') {
			return (
				<div onClick={() => setTheme('light')} className="">
					<Button className="h-10 w-10 flex items-center justify-center">
						<BsFillSunFill />
					</Button>
				</div>
			);
		} else {
			return (
				<div onClick={() => setTheme('dark')} className="">
					<Button className="h-10 w-10 flex items-center justify-center">
						<BsFillMoonFill />
					</Button>
				</div>
			);
		}
	};

	return (
		<header className="px-4 md:px-12 lg:px-32 bg-bgLight dark:bg-bgDark flex items-center justify-between h-[10vh] shadow-2xl fixed top-0 z-10 w-full">
			<Logo />

			<div className="flex items-center space-x-2">
				<div>{toggleTheme()}</div>

				<Link href="/login" passHref>
					<div>
						<Button className="w-32 h-10 gap-2 rounded-lg flex items-center justify-center">
							<FcGoogle className="animate-bounce" />
							Login
						</Button>
					</div>
				</Link>
			</div>
		</header>
	);
};
export default Header;
