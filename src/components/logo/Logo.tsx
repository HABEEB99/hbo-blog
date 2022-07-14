import React from 'react';

import { FaBloggerB } from 'react-icons/fa';

type LogoProps = {};

const Logo: React.FC<LogoProps> = () => {
	return (
		<div className="flex items-center justify-center gap-1">
			<FaBloggerB className="text-xl text-yellow-400" />
			<h1 className="font-bold">HBO-BLOG</h1>
		</div>
	);
};
export default Logo;
