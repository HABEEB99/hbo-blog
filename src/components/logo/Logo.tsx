import Link from 'next/link';
import React from 'react';

import { FaBloggerB } from 'react-icons/fa';

type LogoProps = {};

const Logo: React.FC<LogoProps> = () => {
	return (
		<Link href="/" passHref>
			<div className="flex items-center justify-center gap-1 cursor-pointer">
				<FaBloggerB className="text-xl text-yellow-400 animate-bounce" />
				<h1 className="font-bold">HBO-BLOG</h1>
			</div>
		</Link>
	);
};
export default Logo;
