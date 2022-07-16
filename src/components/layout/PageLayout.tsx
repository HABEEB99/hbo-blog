import Head from 'next/head';
import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';

type PageLayoutProps = {
	title: string;
	description: string;
	children: React.ReactNode;
};

const PageLayout: React.FC<PageLayoutProps> = ({
	title,
	description,
	children,
}) => {
	return (
		<>
			<Head>
				<title className="font-bold text-btn">
					{title ? `HBO-BLOG - ${title}` : 'HBO-BLOG'}
				</title>
				<link rel="icon" href="/bootstrap.png" />
				{description && <meta name="description" content={description} />}
			</Head>
			<Header />
			<main className="mt-[12vh] px-4 md:px-12 lg:px-32 w-screen min-h-[90vh] py-4 scrollbar-hide">
				{children}
			</main>
			<Footer />
		</>
	);
};
export default PageLayout;
