import Link from 'next/link';
import React, { useState } from 'react';
import Button from '../button/Button';
import Logo from '../logo/Logo';
import { createOrGetAuthor } from '../../lib/utils';

import { BiLogOutCircle } from 'react-icons/bi';
import { useTheme } from 'next-themes';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import useAuthStore from '../../store/authStore';
import { urlFor } from '../../lib/client';
import Image from 'next/image';

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
	const { theme, setTheme, systemTheme } = useTheme();
	const { authorProfile, addAuthor, removeAuthor } = useAuthStore();
	const [openLogoutBtn, setOpenLogoutBtn] = useState(false);

	const handleLogout = () => {
		googleLogout();
		removeAuthor();
		setOpenLogoutBtn(false);
	};

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

			<div className="flex items-center space-x-1">
				<div>{toggleTheme()}</div>

				{authorProfile ? (
					<div
						onClick={() => setOpenLogoutBtn(!openLogoutBtn)}
						className="flex items-center space-x-2 bg-gray-400 py-1 px-2 rounded-md shadow-xl cursor-pointer"
					>
						<div className="relative w-8 h-8 rounded-full">
							<Image
								src={authorProfile.picture}
								alt="Author picture"
								layout="fill"
								objectFit="cover"
								className="rounded-full"
							/>
						</div>
						<h1 className="text-base font-bold text-gray-200">
							{authorProfile.givenName}
						</h1>
					</div>
				) : (
					<div>
						<GoogleLogin
							onSuccess={(response) => {
								createOrGetAuthor(response, addAuthor);
							}}
							onError={() => console.log('login error')}
							text="signin"
							width="60"
						/>
					</div>
				)}
			</div>

			{openLogoutBtn && (
				<div
					className="absolute top-[11vh] right-4 md:right-12 lg:right-32 transition-transform duration-200 ease-out"
					onClick={handleLogout}
				>
					<Button className="w-32 h-10 gap-2 rounded-lg flex items-center justify-center z-10 text-xl font-bold">
						<BiLogOutCircle className="" />
						Logout
					</Button>
				</div>
			)}
		</header>
	);
};
export default Header;
