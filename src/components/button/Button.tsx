import Link from 'next/link';
import React from 'react';

type ButtonProps = {
	className?: string;
	children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ className, children }) => {
	return (
		<button
			className={`bg-btn hover:bg-btnHover font-bold text-white rounded-md ${className}`}
		>
			{children}
		</button>
	);
};
export default Button;
