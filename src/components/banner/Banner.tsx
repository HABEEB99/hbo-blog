import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import Button from '../button/Button';

type BannerProps = {};

const Banner: React.FC<BannerProps> = () => {
	return (
		<section className="w-full h-[50vh] bg-gray-300 dark:bg-gray-400 flex flex-col-reverse md:flex-row items-center md:justify-between justify-center rounded-md px-4 lg:px-28">
			<div className="flex flex-col w-full md:w-[60%] items-center  md:items-start space-y-4">
				<h1 className="text-xl md:text-3xl lg:text-5xl text-gray-700 font-bold">
					WELCOME TO HBO BLOG
				</h1>
				<p className=" md:w-[30rem] text-base md:text-xl text-gray-600">
					A place where you can read and share your thoughts on Web and Mobile
					development
				</p>
				<Link href="/posts" passHref>
					<div className="w-full">
						<Button className="w-full md:w-96 h-12 flex items-center justify-center gap-2 text-2xl font-bold">
							View Posts
							<FaLongArrowAltRight className="mt-2" />
						</Button>
					</div>
				</Link>
			</div>

			<div className="relative w-32 h-32 md:w-60 md:h-60  lg:w-80 lg:h-80 mb-6 md:mb-0">
				<Image
					src="/bootstrap.png"
					alt="Banner Pic"
					layout="fill"
					objectFit="cover"
				/>
			</div>
		</section>
	);
};
export default Banner;
