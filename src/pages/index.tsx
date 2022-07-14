import React from 'react';
import Banner from '../components/banner/Banner';
import PageLayout from '../components/layout/PageLayout';

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
	return (
		<PageLayout title="HOME PAGE" description="The Home Page">
			<Banner />
		</PageLayout>
	);
};

export default Home;
